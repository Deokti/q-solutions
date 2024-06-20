import { useState } from "react";

import IconCodeFile from "@/shared/assets/code-file.svg?react";
import { useVirtualizedList } from "@/shared/lib/hooks/useVirtualizedList.tsx";
import { SButton } from "@/shared/ui/s-button";

import { ARRAY_EXAMPLE } from "../../../model/constants.ts";
import { VirtualListExampleHighlight } from "./virtual-list-example-highlight.tsx";
import s from "./virtual-list-example.module.scss";

export const VirtualListExample = () => {
  const [visibleSouseCode, setVisibleSouseCode] = useState<boolean>(false);
  const { scrollContainerRef, virtualizedList, totalScrollRender } = useVirtualizedList({
    data: ARRAY_EXAMPLE,
    elementHeight: 44,
    containerHeight: 514,
    additionalDeps: [visibleSouseCode],
  });

  const handleChangeVisibleSouseCode = () => {
    setVisibleSouseCode(!visibleSouseCode);
  };

  return (
    <div className={s.root}>
      <h3 className={s.text}>Всего элементов: {ARRAY_EXAMPLE.length}</h3>
      <h3 className={s.text}>Отображаемых в DOM-дереве: {virtualizedList.length}</h3>

      <div className={s.container}>
        <SButton
          className={s.button}
          onClick={handleChangeVisibleSouseCode}
        >
          <IconCodeFile />
          {visibleSouseCode ? "Показать пример" : "Показать исходный код"}
        </SButton>

        {visibleSouseCode ? (
          <VirtualListExampleHighlight />
        ) : (
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
        )}
      </div>
    </div>
  );
};
