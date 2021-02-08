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

export function useTouch() {
  let startX = 0;
  let startY = 0;
  let deltaX = 0;
  let deltaY = 0;
  let offsetX = 0;
  let offsetY = 0;
  let direction = '';

  const isVertical = () => direction === 'vertical';
  const isHorizontal = () => direction === 'horizontal';

  const reset = () => {
    deltaX = 0;
    deltaY = 0;
    offsetX = 0;
    offsetY = 0;
    direction = '';
  };

  const start = ((event: TouchEvent) => {
    reset();
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  }) as EventListener;

  const move = ((event: TouchEvent) => {
    const touch = event.touches[0];
    deltaX = touch.clientX - startX;
    deltaY = touch.clientY - startY;
    offsetX = Math.abs(deltaX);
    offsetY = Math.abs(deltaY);

    if (!direction) {
      direction = getDirection(offsetX, offsetY);
    }
  }) as EventListener;

  return {
    move,
    start,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal,
  };
}
