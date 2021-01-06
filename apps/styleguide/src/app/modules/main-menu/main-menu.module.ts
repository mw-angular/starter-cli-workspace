import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DsIconModule } from 'design-system';

import { MainMenuItemComponent } from './components/main-menu-item/main-menu-item.component';

@NgModule({
  imports: [CommonModule, RouterModule, DsIconModule],
  declarations: [MainMenuItemComponent],
  exports: [],
})
export class MainMenuModule {}
