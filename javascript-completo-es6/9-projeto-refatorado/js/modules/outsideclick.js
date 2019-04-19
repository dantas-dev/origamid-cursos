export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(event) {
    callback();
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach(() => {
        html.removeEventListener('click', handleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      }, 0);
    });
    element.setAttribute(outside, '');
  }
}
