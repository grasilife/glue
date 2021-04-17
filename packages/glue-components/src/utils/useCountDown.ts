import { raf, cancelRaf, inBrowser } from './animation';

export type CurrentTime = {
  days: number;
  hours: number;
  total: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};

export type UseCountDownOptions = {
  time: number;
  millisecond?: boolean;
  onChange?: (current: CurrentTime) => void;
  onFinish?: () => void;
};

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function parseTime(time: number): CurrentTime {
  const days = Math.floor(time / DAY);
  const hours = Math.floor((time % DAY) / HOUR);
  const minutes = Math.floor((time % HOUR) / MINUTE);
  const seconds = Math.floor((time % MINUTE) / SECOND);
  const milliseconds = Math.floor(time % SECOND);

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
}

function isSameSecond(time1: number, time2: number): boolean {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}

export function useCountDown(options: UseCountDownOptions) {
  let rafId: number;
  let endTime: number;
  let counting: boolean;
  // let deactivated: boolean;

  let remain = options.time;
  //remain传入的时间
  const current = () => parseTime(remain);

  const pause = () => {
    counting = false;
    cancelRaf(rafId);
  };

  const getCurrentRemain = () => Math.max(endTime - Date.now(), 0);

  const setRemain = (value: number) => {
    remain = value;
    console.log(remain, 'remain111');
    options.onChange?.(current());

    if (value === 0) {
      pause();
      // options.onFinish?.();
    }
  };

  const microTick = () => {
    //启动毫秒级更新
    rafId = raf(() => {
      console.log(11111);
      // in case of call reset immediately after finish
      if (counting) {
        setRemain(getCurrentRemain());

        if (remain > 0) {
          microTick();
        }
      }
    });
  };

  const macroTick = () => {
    rafId = raf(() => {
      //秒级渲染
      console.log('开始渲染');
      // in case of call reset immediately after finish
      if (counting) {
        const remainRemain = getCurrentRemain();
        console.log(remainRemain, 'remainRemain');
        if (!isSameSecond(remainRemain, remain) || remainRemain === 0) {
          setRemain(remainRemain);
        }

        if (remain > 0) {
          macroTick();
        }
      }
    });
  };

  const tick = () => {
    // should not start counting in server
    // see: https://github.com/youzan/vant/issues/7807
    if (!inBrowser) {
      return;
    }

    if (options.millisecond) {
      microTick();
    } else {
      macroTick();
    }
  };

  const start = () => {
    endTime = Date.now() + remain;
    console.log(endTime, 'endTime');
    counting = true;
    tick();
  };

  const reset = (totalTime: number = options.time) => {
    pause();
    remain = totalTime;
    setRemain(remain);
    console.log(remain, 'remainremainremain');
  };

  return {
    start,
    pause,
    reset,
    current,
  };
}
