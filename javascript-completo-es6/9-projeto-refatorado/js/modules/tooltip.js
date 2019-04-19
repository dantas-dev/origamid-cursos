export default function initToolTip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  function criarToolTipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');

    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);

    return tooltipBox;
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 10}px`;
      this.tooltipBox.style.left = `${event.pageX + 10}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function onMouseOver() {
    const tooltipbox = criarToolTipBox(this);

    onMouseLeave.tooltipBox = tooltipbox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);

    onMouseMove.tooltipBox = tooltipbox;
    this.addEventListener('mousemove', onMouseMove);
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
