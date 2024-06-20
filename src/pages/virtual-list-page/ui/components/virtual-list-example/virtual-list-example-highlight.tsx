import Highlight from "react-highlight";

export const VirtualListExampleHighlight = () => {
  return (
    <Highlight>
      {`import { useVirtualizedList } from "@/shared/lib/hooks/useVirtualizedList.tsx";

import { ARRAY_EXAMPLE } from "../../../model/constants.ts";
import s from "./virtual-list-example.module.scss";

export const VirtualListExample = () => {
  const { scrollContainerRef, virtualizedList, totalScrollRender } = useVirtualizedList({
    data: ARRAY_EXAMPLE,
    elementHeight: 44,
    containerHeight: 514,
  });

  return (
    <div className={s.root}>
      <h3 className={s.text}>Всего элементов: {ARRAY_EXAMPLE.length}</h3>
      <h3 className={s.text}>Отображаемых в DOM-дереве: {virtualizedList.length}</h3>

      <div className={s.container}>
       <ul
          ref={scrollContainerRef}
          className={s.list}
        >
          {totalScrollRender}

          {virtualizedList.map(({ element, style }) => {
            return (
              <li
                key={element}
                className={s.item}
                style={style}
              >
                {element}
              </li>
            );
          })}
        </ul>
    </div>
};`}
    </Highlight>
  );
};
