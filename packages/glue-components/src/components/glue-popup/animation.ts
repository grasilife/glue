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
    easing: easing,
    translateY: '0',
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
export const topLeaveAnimation = (el, duration, easing, height, begin, complete) => {
  console.log(height);
  anime({
    targets: el,
    duration: duration,
    translateY: '-100%',
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
export const bottomEnterAnimation = (el, duration, easing, height, begin, complete) => {
  console.log(height, 'heightheight');
  anime({
    targets: el,
    duration: duration,
    easing: easing,
    translateY: 0,
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
export const bottomLeaveAnimation = (el, duration, easing, height, begin, complete) => {
  console.log(height, 'heightheightheight');
  anime({
    targets: el,
    duration: duration,
    translateY: '100%',
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
export const leftEnterAnimation = (el, duration, easing, width, begin, complete) => {
  anime({
    targets: el,
    duration: duration,
    easing: easing,
    width: width ? width : '30%',
    translateX: '0',
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
    easing: easing,
    translateX: '-100%',
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
// right
export const rightEnterAnimation = (el, duration, easing, width, begin, complete) => {
  console.log(width, 'width');
  anime({
    targets: el,
    duration: duration,
    width: width ? width : '30%',
    translateX: '0',
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
    easing: easing,
    translateX: '100%',
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
