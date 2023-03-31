import { useRef, useEffect, useCallback } from 'react';
import style from './ShowRenderCount.module.scss';

const ShowRenderCount = () => {
 
  const refCount = useRef(1);
  const refDOM = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    refCount.current += 1;
    refDOM.current.classList.remove(style.styleAnimate);
    refDOM.current.classList.add(style.styleAnimate);
  });

  const atAnimationEnd = useCallback(() => {
    refDOM.current?.classList.remove(style.styleAnimate);
  }, []);

  return (
    <strong className={style.root} ref={refDOM} onAnimationEnd={atAnimationEnd}>
      {refCount.current}
    </strong>
  );
};
export default ShowRenderCount;
