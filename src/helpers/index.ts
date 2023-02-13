const scrollDirectionHandler = (
  onUpCallback?: () => void,
  onDownCallback?: () => void
): void => {
  let scrollPos: number = 0;

  window.addEventListener('scroll', () => {
    const top: number = document?.body?.getBoundingClientRect()?.top;

    if (top === undefined) {
      return;
    }

    if (top > scrollPos) {
      onUpCallback && onUpCallback();
    } else if (scrollPos < -200) {
      onDownCallback && onDownCallback();
    }

    scrollPos = top;
  });
};

export { scrollDirectionHandler };
