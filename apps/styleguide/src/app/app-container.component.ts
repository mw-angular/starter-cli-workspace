import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-main-layout-container>
      <router-outlet></router-outlet>
    </app-main-layout-container>
  `,
})
export class AppContainerComponent {}
