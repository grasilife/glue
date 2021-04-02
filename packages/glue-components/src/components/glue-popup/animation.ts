import anime from 'animejs/lib/anime.es.js';
import { DURATION, EASING } from '../../global/constant/constant';
//center
export const centerEnterAnimation = (el, complete) => {
  anime({
    targets: el,
    duration: DURATION,
    opacity: [0, 1],
    easing: EASING,
    complete: anim => {
      return complete(anim);
    },
  });
};
export const centerLeaveAnimation = (el, complete) => {
  anime({
    targets: el,
    duration: DURATION,
    opacity: [1, 0],
    easing: EASING,
    complete: anim => {
      return complete(anim);
    },
  });
};
//top
export const topEnterAnimation = (el, complete) => {
  anime({
    targets: el,
    duration: DURATION,
    height: '30%',
    easing: EASING,

    complete: anim => {
      return complete(anim);
    },
  });
};
export const topLeaveAnimation = (el, complete) => {
  anime({
    targets: el,
    duration: DURATION,
    height: '0%',
    easing: EASING,
    complete: anim => {
      return complete(anim);
    },
  });
};
//bottom
export const bottomEnterAnimation = (el, complete) => {
  anime({
    targets: el,
    duration: DURATION,
    height: '30%',
    easing: EASING,

    complete: anim => {
      return complete(anim);
    },
  });
};
export const bottomLeaveAnimation = (el, complete) => {
  anime({
    targets: el,
    duration: DURATION,
    height: '0%',
    easing: EASING,
    complete: anim => {
      return complete(anim);
    },
  });
};
// left
export const leftEnterAnimation = (el, complete) => {
  anime({
    targets: el,
    duration: DURATION,
    width: '30%',
    easing: EASING,

    complete: anim => {
      return complete(anim);
    },
  });
};
export const leftLeaveAnimation = (el, complete) => {
  anime({
    targets: el,
    duration: DURATION,
    width: '0',
    easing: EASING,
    complete: anim => {
      return complete(anim);
    },
  });
};
// right
export const rightEnterAnimation = (el, complete) => {
  anime({
    targets: el,
    duration: DURATION,
    width: '30%',
    easing: EASING,

    complete: anim => {
      return complete(anim);
    },
  });
};
export const rightLeaveAnimation = (el, complete) => {
  anime({
    targets: el,
    duration: DURATION,
    width: '0%',
    easing: EASING,
    complete: anim => {
      return complete(anim);
    },
  });
};
