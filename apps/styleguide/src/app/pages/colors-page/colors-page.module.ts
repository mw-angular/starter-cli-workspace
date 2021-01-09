import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ColorsPageContainerComponent } from './colors-page-container.component';
import { colorsPageRoutes } from './colors-page.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(colorsPageRoutes)],
  declarations: [ColorsPageContainerComponent],
})
export class ColorsPageModule {}
