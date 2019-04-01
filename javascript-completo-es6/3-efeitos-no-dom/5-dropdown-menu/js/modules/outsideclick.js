export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if(!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      html.addEventListener(userEvent, handleOutsideClick);
    });
    element.setAttribute(outside, '');
  }
  function handleOutsideClick(event) {
    callback();
    if(!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener('click', handleOutsideClick);
      });
      callback();
    }
  }
}