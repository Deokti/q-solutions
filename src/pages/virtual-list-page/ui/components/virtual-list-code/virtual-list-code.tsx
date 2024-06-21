import Highlight from "react-highlight";

import s from "./virtual-list-code.module.scss";

export const VirtualListCode = () => {
  let elementHeight;
  let i;

  return (
    <div className={s.root}>
      <p className={s.text}>
        Исходный код:{" "}
        <a
          target={"_blank"}
          href="https://github.com/Deokti/q-solutions/blob/master/src/shared/lib/hooks/useVirtualizedList.tsx"
        >
          useVirtualizedList
        </a>
      </p>

      <div className={s.container}>
        <div className={s.list}>
          <Highlight>
            {`// Интерфейс для пропсов компонента VirtualizedList
interface VirtualizedListProps<T> {
  data: T[]; // массив данных для отображения в списке
  elementHeight: number; // высота каждого элемента списка
  containerHeight: number; // высота контейнера списка, в котором происходит прокрутка

  additionalDeps?: unknown[]; // дополнительные зависимости для эффекта useLayoutEffect
}

// Интерфейс для описания виртуализированного элемента списка
interface VirtualListItem<T> {
  element: T; // элемент данных
  style: CSSProperties; // стили, которые будут применены к элементу
}

export const useVirtualizedList = <T = unknown,>(config: VirtualizedListProps<T>) => {
  const { containerHeight, elementHeight, data, additionalDeps = [] } = config;

  // Референс для контейнера прокрутки
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  // Состояние для хранения текущей позиции прокрутки
  const [scrollTop, setScrollTop] = useState(0);

  useLayoutEffect(() => {
    const currentRef = scrollContainerRef.current;
    if (!currentRef) return;

    // Функция обработки прокрутки
    const handleScroll = () => {
      const { scrollTop } = currentRef;
      setScrollTop(scrollTop);
    };

    handleScroll(); // Устанавливаем начальное значение прокрутки при первом монтировании (если вдруг не 0)

    // Добавляем обработчик события прокрутки
    currentRef.addEventListener("scroll", handleScroll);

    // Удаляем обработчик при размонтировании компонента
    return () => currentRef.removeEventListener("scroll", handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollContainerRef, ...additionalDeps]);

  // Мемоизация списка элементов для рендеринга на основе текущей позиции прокрутки
  const virtualizedList = useMemo(() => {
    const startRender = scrollTop; // Начало области видимости
    const endRender = scrollTop + containerHeight; // Конец области видимости

    // Индексы первого и последнего элементов для рендеринга
    const FIRST_ELEMENT_RENDER = Math.floor(startRender / elementHeight);
    const END_ELEMENT_RENDER = Math.floor(endRender / elementHeight);

    const virtualListItems: VirtualListItem<T>[] = [];
    for (let i = FIRST_ELEMENT_RENDER; i <= END_ELEMENT_RENDER; i++) {
      if (!data[i]) break; // Останавливаем цикл, если данных больше нет

      // Добавляем элемент в виртуализированный список с нужными стилями
      virtualListItems.push({
        element: data[i],
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: elementHeight,
          transform: \`translateY(${i * elementHeight}px)\`,
        },
      });
    }

    // Возвращаем массив виртуализированных элементов
    return virtualListItems;
  }, [containerHeight, data, elementHeight, scrollTop]);

  // Общая высота для скроллинга
  const totalScroll = data.length * elementHeight;

  // Элемент, занимающий всю высоту для скроллинга
  const totalScrollRender = <li style={{ height: totalScroll }} />;

  return {
    // Возвращаем элемент, занимающий всю высоту для скроллинга
    totalScrollRender,

    // Возвращаем референс контейнера прокрутки
    scrollContainerRef,

    // Возвращаем массив виртуализированных элементов
    virtualizedList,
  };
};
`}
          </Highlight>
        </div>
      </div>
    </div>
  );
};
