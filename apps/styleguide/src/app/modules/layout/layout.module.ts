import { NgModule } from '@angular/core';

import { LayoutComponent } from './components/layout/layout.component';
import { LayoutContainerComponent } from './layout-container.component';

@NgModule({
  imports: [],
  declarations: [LayoutComponent, LayoutContainerComponent],
  exports: [LayoutContainerComponent],
})
export class LayoutModule {}
