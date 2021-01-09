import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1>Icons</h1>`,
})
export class IconsPageContainerComponent {}
