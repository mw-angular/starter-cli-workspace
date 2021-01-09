import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonsPageContainerComponent } from './buttons-page-container.component';
import { buttonsPageRoutes } from './buttons-page.routes';

@NgModule({
  imports: [RouterModule.forChild(buttonsPageRoutes)],
  declarations: [ButtonsPageContainerComponent],
})
export class ButtonsPageModule {}
