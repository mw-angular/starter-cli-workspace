import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DsIconCategory, DsIconName } from 'design-system';

@Component({
  selector: 'app-icons-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icons-page.component.html',
})
export class IconsPageComponent {
  @Input() items: ReadonlyMap<DsIconCategory, DsIconName[]> = new Map();

  trackByFn(_index: number, item: DsIconName): string {
    return item;
  }
}
