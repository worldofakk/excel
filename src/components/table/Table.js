import { ExcelComponent } from '@core/ExcelComponent';
import { $ } from '@core/dom';
import { createTable } from './table.template';
import {} from '@/components/table/table.template';
export class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }
  toHTML() {
    return createTable(20);
  }
  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target);
      const $parent = $resizer.closest('[data-type="resizable"]');
      const coords = $parent.getCoords();

      document.onmousemove = (e) => {
        const delta = Math.floor(e.pageX - coords.right);
        const value = coords.width + delta;
        $parent.$el.style.width = value + 'px';
      };

      document.onmouseup = () => {
        document.onmousemove = false;
      };
    }
  }
}
