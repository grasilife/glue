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
export const topEnterAnimation = (el, duration, easing, height, begin, complete) => {
  anime({
    targets: el,
    duration: duration,
    easing: easing,
    translateY: height ? height : '30%',
    begin: anim => {
      return begin(anim);
    },
    complete: anim => {
      return complete(anim);
    },
  });
};
export const topLeaveAnimation = (el, duration, easing, height, begin, complete) => {
  anime({
    targets: el,
    duration: duration,
    // height: '0%',
    translateY: 0,
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
    // height: height ? height : '30%',
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
  anime({
    targets: el,
    duration: duration,

    translateY: height ? height : '30%',
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
export const rightEnterAnimation = (el, duration, easing, width, begin, complete) => {
  console.log(width, 'width');
  anime({
    targets: el,
    duration: duration,
    width: width ? width : '30%',
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
