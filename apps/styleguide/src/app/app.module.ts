import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DsBreakpointsModule } from 'design-system';

import { AppContainerComponent } from './app-container.component';
import { appRoutes } from './app.routes';
import { LayoutModule } from './modules/layout/layout.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(appRoutes), DsBreakpointsModule, LayoutModule],
  declarations: [AppContainerComponent],
  bootstrap: [AppContainerComponent],
})
export class AppModule {}
