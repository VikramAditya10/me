import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, act, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App, { Availability } from '../App';
import { portfolio } from '../content/portfolio';

describe('Portfolio navigation and stories', () => {
  it('starts with five collapsed project stories and real contact links', () => {
    render(<App/>);
    expect(screen.getAllByRole('button', { name: /^Read .+ case study$/ })).toHaveLength(5);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(portfolio.biography.headline);
    expect(screen.getByRole('link', { name: /vikramaditya1025@gmail.com/ }).getAttribute('href')).toBe('mailto:vikramaditya1025@gmail.com');
    expect(screen.getByRole('link', { name: /Resume/ }).hasAttribute('download')).toBe(true);
    expect(screen.queryByRole('complementary', { name: 'Availability' })).toBeNull();
    expect(screen.queryByText('JetBlue')).toBeNull();
    for (const link of within(screen.getByRole('navigation')).getAllByRole('link')) {
      expect(document.querySelector(link.getAttribute('href')!)).not.toBeNull();
    }
  });

  it.each(portfolio.projects)('opens a direct link to $name', async project => {
    window.history.replaceState(null, '', `/#project-${project.id}`);
    render(<App/>);
    await waitFor(() => expect(screen.getByRole('button', { name: `Close ${project.name} case study` }).getAttribute('aria-expanded')).toBe('true'));
    expect(document.getElementById(`story-${project.id}`)?.hidden).toBe(false);
    expect(screen.getByRole('link', { name: /02Work/ }).getAttribute('aria-current')).toBe('location');
  });

  it('opens with keyboard, navigates to another story, and restores the first on browser back', async () => {
    const user = userEvent.setup();
    window.history.replaceState(null, '', '/#work');
    render(<App/>);
    screen.getByRole('button', { name: 'Read HDFC MyCards case study' }).focus();
    await user.keyboard('{Enter}');
    await waitFor(() => expect(window.location.hash).toBe('#project-mycards'));
    await waitFor(() => expect(document.getElementById('story-mycards')?.hidden).toBe(false));
    await user.click(screen.getByRole('button', { name: 'Read Apple India × TVS Credit case study' }));
    await waitFor(() => expect(document.getElementById('story-financing')?.hidden).toBe(false));
    act(() => window.history.back());
    await waitFor(() => expect(window.location.hash).toBe('#project-mycards'));
    await waitFor(() => expect(document.getElementById('story-mycards')?.hidden).toBe(false));
    expect(document.getElementById('story-financing')?.hidden).toBe(true);
    await user.click(screen.getByRole('button', { name: 'Close HDFC MyCards case study' }));
    await waitFor(() => expect(window.location.hash).toBe('#work'));
    await waitFor(() => expect(document.getElementById('story-mycards')?.hidden).toBe(true));
  });

  it('updates the active navigation item when scrolling between sections', async () => {
    render(<App/>);
    for (const [id, top] of [['about', -500], ['work', -100], ['journey', 900], ['next', 2000]] as const) {
      vi.spyOn(document.getElementById(id)!, 'getBoundingClientRect').mockReturnValue({ top } as DOMRect);
    }
    fireEvent.scroll(window);
    await waitFor(() => expect(screen.getByRole('link', { name: /02Work/ }).getAttribute('aria-current')).toBe('location'));
  });
});

describe('Conceptual interactions', () => {
  it('selects a thinking note with the keyboard', async () => {
    render(<App/>);
    const user = userEvent.setup();
    const team = screen.getByRole('button', { name: '04Team' });
    team.focus();
    await user.keyboard(' ');
    expect(team.getAttribute('aria-pressed')).toBe('true');
    expect(document.getElementById('sketch-explanation')?.textContent).toBe(portfolio.illustration[3].text);
  });

  it('changes only fictional suggestions when a sample neighbourhood is selected', async () => {
    window.history.replaceState(null, '', '/#project-smartbuy');
    render(<App/>);
    const user = userEvent.setup();
    const selector = await screen.findByRole('combobox', { name: 'Explore a fictional neighbourhood' });
    await user.selectOptions(selector, '1');
    expect(screen.getByText(/Harbour Kitchen/)).toBeTruthy();
    expect(screen.queryByText(/Cedar Café/)).toBeNull();
    expect(screen.getByText(/Fictional places and suggestions/)).toBeTruthy();
  });

  it('creates and resets a clearly labelled fictional crew conversation', async () => {
    window.history.replaceState(null, '', '/#project-crew');
    render(<App/>);
    const user = userEvent.setup();
    await user.click(await screen.findByRole('button', { name: /Create flight group/ }));
    expect(screen.getByText('Riya · Cabin crew')).toBeTruthy();
    await user.click(screen.getByRole('button', { name: /Reset illustration/ }));
    expect(screen.queryByText('Riya · Cabin crew')).toBeNull();
  });

  it('keeps timeline dates and scope visible and lets readers expand the field note', async () => {
    render(<App/>);
    const user = userEvent.setup();
    expect(screen.getByText('2019–2022')).toBeTruthy();
    const description = screen.getByText(portfolio.journey[3].summary);
    const details = description.closest('details')!;
    expect(details.open).toBe(false);
    await user.click(details.querySelector('summary')!);
    expect(details.open).toBe(true);
  });
});

it('hides empty availability fields and renders only supplied values', () => {
  const { container, rerender } = render(<Availability values={portfolio.availability}/>);
  expect(container.textContent).toBe('');
  rerender(<Availability values={{ noticePeriod: 'Owner-supplied notice period', earliestStartDate: null, relocationTiming: ' ' }}/>);
  expect(screen.getByText('Owner-supplied notice period')).toBeTruthy();
  expect(screen.queryByText('Earliest start date')).toBeNull();
  expect(screen.queryByText('Relocation timing')).toBeNull();
});
