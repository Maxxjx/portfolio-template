declare module 'animejs' {
  function anime(params: {
    targets: string | Element | Element[];
    opacity?: number | number[];
    translateY?: number | number[];
    translateX?: number | number[];
    scale?: number | number[];
    scaleY?: number | number[];
    delay?: number | ((el: Element, i: number) => number);
    duration?: number;
    easing?: string;
  }): {
    finished: Promise<boolean>;
  };
  
  namespace anime {
    function stagger(value: number, options?: { start?: number }): (el: Element, i: number) => number;
  }
  
  export default anime;
}
