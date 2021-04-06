import anime from 'animejs/lib/anime.es.js';
import { DURATION } from '../../global/constant/constant';
//enter
export const enterAnimation = (el, duration, easing, begin, complete) => {
  anime({
    targets: el,
    opacity: [
      {
        duration: DURATION,
        value: 1,
      },
      {
        duration: duration,
        value: 1,
      },
      {
        duration: DURATION,
        value: 0,
      },
    ],
    easing: easing,
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
