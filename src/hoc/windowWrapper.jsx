import useWindowStore from "#store/window";
import { useRef } from "react";
import { useGSAP } from '@gsap/react';
import { useLayoutEffect } from "react";
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import useIsMobile from '#hooks/useIsMobile';

const FALLBACK_Z = 1000;

const windowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const isMobile = useIsMobile();
    const focusWindow = useWindowStore((s) => s.focusWindow);
    const win = useWindowStore((s) => s.windows[windowKey]);
    const { isOpen, zIndex, isMaximized } = win ?? {};
    const ref = useRef(null);

    useGSAP(() => {
      if (isMobile) return;
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, { onPress: () => focusWindow(windowKey) });
      return () => instance.kill();
    }, [isMobile]);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = 'block';

      gsap.fromTo(el, {scale:0.8, opacity:0, y:40}, {scale:1, opacity:1, y:0, duration:0.4, ease:'power3.out'});

    }, [isOpen]);


    useLayoutEffect(() => {
        const el = ref.current;
        if(!el) return;
        el.style.display =isOpen ? 'block' : 'none';
    }, [isOpen]);

    const sectionClass = [
      'absolute',
      isMaximized ? 'maximized' : '',
      isMobile ? 'mobile-sheet' : '',
    ].filter(Boolean).join(' ');
    const z = typeof zIndex === 'number' ? zIndex : FALLBACK_Z;
    return (
      <section id={windowKey} ref={ref} style={{ zIndex: z }} className={sectionClass}>
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;
  
  return Wrapped;
};

export default windowWrapper;
