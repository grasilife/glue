import anime from 'animejs/lib/anime.es.js';
//enter
export const enterAnimation = (el, duration, easing, begin, complete) => {
  anime({
    targets: el,
    duration: duration,
    opacity: [0, 1],
    easing: easing,
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
//leave
export const leaveAnimation = (el, duration, easing, begin, complete) => {
  anime({
    targets: el,
    duration: duration,
    opacity: [1, 0],
    easing: easing,
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
