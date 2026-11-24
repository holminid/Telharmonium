/* Tabbed record selections and exclusive audio playback. */
(() => {
  const cards = document.querySelectorAll('.example-card--tabbed');
  cards.forEach((card) => {
    const tabs = Array.from(card.querySelectorAll('[role="tab"]'));
    const activate = (tab, focus = false) => {
      tabs.forEach((t) => {
        const selected = t === tab;
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        t.setAttribute('aria-selected', String(selected));
        t.tabIndex = selected ? 0 : -1;
        if (panel) {
          if (!selected) panel.querySelectorAll('audio').forEach((audio) => audio.pause());
          panel.hidden = !selected;
        }
      });
      if (focus) tab.focus();
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', (event) => {
        let next;
        if (event.key === 'ArrowRight') next = (i + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') next = (i + tabs.length - 1) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        activate(tabs[next], true);
      });
    });
  });
  const allAudio = Array.from(document.querySelectorAll('audio'));
  allAudio.forEach((player) => player.addEventListener('play', () => {
    allAudio.forEach((other) => { if (other !== player) other.pause(); });
  }));
})();
