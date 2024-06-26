import cx from "classnames";

import s from "./virtual-list-review.module.scss";

export const VirtualListReview = () => (
  <div className={cx(s.root)}>
    <p>
      Виртуализация списка - это метод рендеринга только видимых элементов большого списка данных,
      что помогает экономить память и повышать производительность. Вместо того, чтобы рендерить весь
      список сразу, отображается только небольшая часть, которая видна пользователю, и обновляется
      по мере прокрутки.
    </p>

    <h3>Как это работает?</h3>
    <ul>
      <li>
        <i>Определение видимой области:</i> Вычисляется область экрана, в которой элементы списка
        должны быть видимы.
      </li>
      <li>
        <i>Рендеринг видимых элементов:</i> Рендерятся только те элементы, которые находятся в этой
        видимой области.
      </li>
      <li>
        <i>Обновление по мере прокрутки:</i> По мере прокрутки списка видимые элементы обновляются,
        и предыдущие элементы удаляются из DOM.
      </li>
    </ul>

    <h3>Преимущества виртуализации</h3>
    <ul>
      <li>
        <i>Улучшенная производительность:</i> Уменьшается количество элементов, которые нужно
        рендерить и держать в памяти.
      </li>
      <li>
        <i>Быстрая загрузка страницы:</i> Только необходимые данные загружаются и рендерятся, что
        ускоряет время загрузки.
      </li>
      <li>
        <i>Плавная прокрутка:</i> Поскольку рендерится меньше элементов, прокрутка становится более
        плавной и отзывчивой.
      </li>
    </ul>

    <h3>Недостатки и минусы виртуализации списка</h3>
    <p>
      Хотя виртуализация списков имеет много преимуществ, она также имеет некоторые недостатки и
      ограничения. Понимание этих ограничений поможет вам определить, когда использовать
      виртуализацию, а когда нет.
    </p>

    <h4>Недостатки</h4>
    <ul>
      <li>
        <i>Сложность реализации:</i> Виртуализация требует дополнительной логики для вычисления
        видимых элементов и управления состоянием компонента, что усложняет реализацию по сравнению
        с простым рендерингом всего списка.
      </li>
      <li>
        <i>Проблемы с SEO:</i> Виртуализированные списки могут быть невидимы для поисковых роботов,
        что ухудшает поисковую оптимизацию (SEO) вашего сайта. Поисковые системы могут не
        индексировать элементы, которые не рендерятся сразу.
      </li>
      <li>
        <i>Проблемы с пользовательским взаимодействием:</i> Некоторые интерактивные функции, такие
        как поиск по странице (Ctrl+F), могут не работать корректно, так как элементы списка не все
        загружены одновременно.
      </li>
      <li>
        <i>Отладка и тестирование:</i> Виртуализированные компоненты могут быть сложнее в отладке и
        тестировании из-за асинхронной природы их работы и необходимости учитывать состояние
        прокрутки.
      </li>
      <li>
        <i>Проблемы с позиционированием и стилями:</i> Позиционирование элементов с абсолютными
        значениями высоты и ширины может привести к проблемам с адаптивным дизайном, особенно на
        устройствах с различными размерами экранов.
      </li>
    </ul>

    <h4>Когда не нужно или нельзя использовать виртуализацию:</h4>
    <ul>
      <li>
        <i>Небольшие списки:</i> Если у вас небольшой список (например, до 100 элементов),
        использование виртуализации может быть излишним и усложнит код без значительных преимуществ
        в производительности.
      </li>
      <li>
        <i>Статический контент:</i> Если список содержит статический контент, который редко
        меняется, рендеринг всех элементов сразу может быть проще и эффективнее, чем использование
        виртуализации.
      </li>
      <li>
        <i>SEO-важные страницы:</i> На страницах, где критически важна индексация контента
        поисковыми системами, лучше избегать виртуализации, чтобы весь контент был доступен для
        роботов.
      </li>
      <li>
        <i>Интерактивные списки:</i> Если пользователи часто ищут элементы внутри списка (например,
        используя поиск по странице), виртуализация может мешать этому процессу.
      </li>
      <li>
        <i>Поддержка старых браузеров (надеюсь, никогда не придётся с этим сталкиваться):</i>{" "}
        Виртуализация может не поддерживаться старыми браузерами или требовать полифиллов для
        корректной работы, что добавляет сложности.
      </li>
    </ul>

    <h3>Заключение</h3>
    <p>
      Виртуализация списков — мощный инструмент для улучшения производительности приложений с
      большими объемами данных, но она имеет свои недостатки и ограничения. Прежде чем внедрять
      виртуализацию, важно оценить необходимость и потенциальные проблемы, которые могут возникнуть.
      В некоторых случаях проще и эффективнее использовать традиционные методы рендеринга, особенно
      для небольших списков или на страницах, где важна SEO-оптимизация и интерактивные функции.
    </p>
  </div>
);
