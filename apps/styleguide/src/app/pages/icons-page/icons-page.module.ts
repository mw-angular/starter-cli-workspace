import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IconsPageContainerComponent } from './icons-page-container.component';
import { iconsPageRoutes } from './icons-page.routes';

@NgModule({
  imports: [RouterModule.forChild(iconsPageRoutes)],
  declarations: [IconsPageContainerComponent],
})
export class IconsPageModule {}
