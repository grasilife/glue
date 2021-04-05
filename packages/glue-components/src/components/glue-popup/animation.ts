import anime from 'animejs/lib/anime.es.js';

//center
export const centerEnterAnimation = (el, duration, easing, begin, complete) => {
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
export const centerLeaveAnimation = (el, duration, easing, begin, complete) => {
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
//top
export const topEnterAnimation = (el, duration, easing, begin, complete) => {
  anime({
    targets: el,
    duration: duration,
    height: '30%',
    easing: easing,
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
export const topLeaveAnimation = (el, duration, easing, begin, complete) => {
  anime({
    targets: el,
    duration: duration,
    height: '0%',
    easing: easing,
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
//bottom
export const bottomEnterAnimation = (el, duration, easing, begin, complete) => {
  anime({
    targets: el,
    duration: duration,
    height: '30%',
    easing: easing,
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
export const bottomLeaveAnimation = (el, duration, easing, begin, complete) => {
  anime({
    targets: el,
    duration: duration,
    height: '0%',
    easing: easing,
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
// left
export const leftEnterAnimation = (el, duration, easing, begin, complete) => {
  anime({
    targets: el,
    duration: duration,
    width: '30%',
    easing: easing,
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
export const leftLeaveAnimation = (el, duration, easing, begin, complete) => {
  anime({
    targets: el,
    duration: duration,
    width: '0',
    easing: easing,
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
// right
export const rightEnterAnimation = (el, duration, easing, begin, complete) => {
  anime({
    targets: el,
    duration: duration,
    width: '30%',
    easing: easing,
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
export const rightLeaveAnimation = (el, duration, easing, begin, complete) => {
  anime({
    targets: el,
    duration: duration,
    width: '0%',
    easing: easing,
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
