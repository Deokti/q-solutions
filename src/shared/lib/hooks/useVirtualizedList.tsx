import { CSSProperties, useLayoutEffect, useMemo, useRef, useState } from "react";

interface VirtualizedListProps<T> {
  data: T[];
  elementHeight: number;
  containerHeight: number;

  additionalDeps?: unknown[];
}

interface VirtualListItem<T> {
  element: T;
  style: CSSProperties;
}

export const useVirtualizedList = <T = unknown,>(config: VirtualizedListProps<T>) => {
  const { containerHeight, elementHeight, data, additionalDeps = [] } = config;

  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  useLayoutEffect(() => {
    const currentRef = scrollContainerRef.current;
    if (!currentRef) return;

    const handleScroll = () => {
      const { scrollTop } = currentRef;
      setScrollTop(scrollTop);
    };

    handleScroll();

    currentRef.addEventListener("scroll", handleScroll);

    return () => currentRef.removeEventListener("scroll", handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollContainerRef, ...additionalDeps]);

  const virtualizedList = useMemo(() => {
    const startRender = scrollTop;
    const endRender = scrollTop + containerHeight;

    const FIRST_ELEMENT_RENDER = Math.floor(startRender / elementHeight);
    const END_ELEMENT_RENDER = Math.floor(endRender / elementHeight);

    const virtualListItems: VirtualListItem<T>[] = [];
    for (let i = FIRST_ELEMENT_RENDER; i <= END_ELEMENT_RENDER; i++) {
      if (!data[i]) break;

      virtualListItems.push({
        element: data[i],
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: elementHeight,
          transform: `translateY(${i * elementHeight}px)`,
        },
      });
    }

    return virtualListItems;
  }, [containerHeight, data, elementHeight, scrollTop]);

  const totalScroll = data.length * elementHeight;
  const totalScrollRender = <li style={{ height: totalScroll }} />;

  return {
    totalScrollRender,
    scrollContainerRef,
    virtualizedList,
  };
};
