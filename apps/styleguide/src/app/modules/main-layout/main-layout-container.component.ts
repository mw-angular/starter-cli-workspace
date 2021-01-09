import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-layout-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-main-layout>
      <ng-content></ng-content>
    </app-main-layout>
  `,
})
export class MainLayoutContainerComponent {}
