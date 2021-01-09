import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DsIconModule } from 'design-system';

import { MainMenuModule } from '../main-menu/main-menu.module';

import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MainLayoutContainerComponent } from './main-layout-container.component';

@NgModule({
  imports: [CommonModule, MainMenuModule, DsIconModule],
  declarations: [MainLayoutComponent, MainLayoutContainerComponent],
  exports: [MainLayoutContainerComponent],
})
export class MainLayoutModule {}
