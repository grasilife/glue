const MIN_DISTANCE = 10;

function getDirection(x: number, y: number) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}

export class UseTouch {
  startX = 0;
  startY = 0;
  deltaX = 0;
  deltaY = 0;
  offsetX = 0;
  offsetY = 0;
  direction = '';

  isVertical = () => this.direction === 'vertical';
  isHorizontal = () => this.direction === 'horizontal';

  reset = () => {
    this.deltaX = 0;
    this.deltaY = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    this.direction = '';
  };

  start = (event: TouchEvent) => {
    this.reset();
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
  };

  move = (event: TouchEvent) => {
    const touch = event.touches[0];
    this.deltaX = touch.clientX - this.startX;
    this.deltaY = touch.clientY - this.startY;
    this.offsetX = Math.abs(this.deltaX);
    this.offsetY = Math.abs(this.deltaY);
    if (!this.direction) {
      this.direction = getDirection(this.offsetX, this.offsetY);
    }
  };
}
