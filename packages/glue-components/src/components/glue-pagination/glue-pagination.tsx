import {
  Component,
  Prop,
  h,
  Host,
  State,
  Event,
  EventEmitter,
} from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-pagination');
import { BORDER } from '../../global/constant/constant';
@Component({
  tag: 'glue-pagination',
  styleUrl: 'glue-pagination.less',
  shadow: false,
})
export class GluePagination {
  @Prop() prevText = '上一页';
  @Prop() pageText = '';
  @Prop() nextText = '下一页';
  @Prop() forceEllipses: boolean;
  @Prop() mode = 'multi';
  @Prop() value = 0;
  @Prop() pageCount = 0;
  @Prop() totalItems = 0;
  @Prop() itemsPerPage = 10;
  @Prop() showPageSize = 5;
  @State() text: string | number;
  @State() number: number;
  @State() active: boolean;
  @Event() glueChange: EventEmitter;
  select = (page: number, emitChange?: boolean) => {
    page = Math.min(this.count(), Math.max(1, page));
    this.value = page;
    if (this.value !== page) {
      if (emitChange) {
        this.glueChange.emit(page);
      }
    }
  };
  renderDesc = () => {
    if (this.mode !== 'multi') {
      return (
        <li class={bem('page-desc')}>{`${this.value}/${this.count()}`}</li>
      );
    }
  };
  count = () => {
    const { pageCount, totalItems, itemsPerPage } = this;
    const count = +pageCount || Math.ceil(+totalItems / +itemsPerPage);
    return Math.max(1, count);
  };
  pages = () => {
    const items = [];
    const pageCount = this.count();
    const showPageSize = +this.showPageSize;
    const { value, forceEllipses } = this;

    if (this.mode !== 'multi') {
      return items;
    }

    // Default page limits
    let startPage = 1;
    let endPage = pageCount;
    const isMaxSized = showPageSize < pageCount;

    // recompute if showPageSize
    if (isMaxSized) {
      // Current page is displayed in the middle of the visible ones
      startPage = Math.max(value - Math.floor(showPageSize / 2), 1);
      endPage = startPage + showPageSize - 1;

      // Adjust if limit is exceeded
      if (endPage > pageCount) {
        endPage = pageCount;
        startPage = endPage - showPageSize + 1;
      }
    }

    // Add page number links
    for (let number = startPage; number <= endPage; number++) {
      const page = {
        number,
        text: number,
        active: number === value,
      };
      items.push(page);
    }

    // Add links to move between page sets
    if (isMaxSized && showPageSize > 0 && forceEllipses) {
      if (startPage > 1) {
        const prevPages = {
          number: startPage - 1,
          text: '...',
        };
        items.unshift(prevPages);
      }

      if (endPage < pageCount) {
        const nextPages = {
          number: endPage + 1,
          text: '...',
        };
        items.push(nextPages);
      }
    }

    return items;
  };
  renderText = (page) => {
    //TODO:slot存在传值的问题
    if (this.pageText == '#slot') {
      return <slot name="page-text">{page.text}</slot>;
    }
    return page.text;
  };
  renderPrevText = () => {
    if (this.prevText == '#slot') {
      return <slot name="prev-text"></slot>;
    }
    return this.prevText;
  };
  renderNextText = () => {
    if (this.nextText == '#slot') {
      return <slot name="next-text"></slot>;
    }
    return this.nextText;
  };
  render() {
    const value = this.value;
    const simple = this.mode !== 'multi';

    const onSelect = (value: number) => () => {
      this.select(value, true);
    };
    return (
      <Host>
        <ul
          class={classNames('glue-pagination', {
            'glue-pagination__simple': simple,
          })}
        >
          <li
            class={classNames(
              'glue-pagination__item',
              'glue-pagination__prev',
              BORDER,
              {
                'glue-pagination__item--disabled': value === 1,
              }
            )}
            onClick={onSelect(value - 1)}
          >
            {this.renderPrevText()}
          </li>
          {this.pages().map((page) => (
            <li
              class={classNames(
                'glue-pagination__item',
                'glue-pagination__page',
                BORDER,
                {
                  'glue-pagination__item--active': page.active,
                }
              )}
              onClick={onSelect(page.number)}
            >
              {this.renderText(page)}
            </li>
          ))}
          {this.renderDesc()}
          <li
            class={classNames(
              'glue-pagination__item',
              'glue-pagination__next',
              BORDER,
              {
                'glue-pagination__item--disabled': value === this.count(),
              }
            )}
            onClick={onSelect(value + 1)}
          >
            {this.renderNextText()}
          </li>
        </ul>
      </Host>
    );
  }
}
