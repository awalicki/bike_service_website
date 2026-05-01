export const initCursor = () => {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (isTouchDevice) {
    return;
  }

  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  const updateCursor = () => {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    cursorX += dx * 0.2;
    cursorY += dy * 0.2;
    
    cursor.style.transform = `translate(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%))`;
    requestAnimationFrame(updateCursor);
  };

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const handleHoverStart = () => cursor.classList.add('hover');
  const handleHoverEnd = () => cursor.classList.remove('hover');

  const attachHoverEvents = () => {
    const interactables = document.querySelectorAll('a, button, input, textarea');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });
  };

  attachHoverEvents();

  const observer = new MutationObserver((mutations) => {
    let shouldReattach = false;
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        shouldReattach = true;
        break;
      }
    }
    if (shouldReattach) {
      attachHoverEvents();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  requestAnimationFrame(updateCursor);
};
