import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppContainerComponent } from './app-container.component';
import { appRoutes } from './app.routes';
import { MainLayoutModule } from './modules/main-layout/main-layout.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, LayoutModule, RouterModule.forRoot(appRoutes), MainLayoutModule],
  declarations: [AppContainerComponent],
  bootstrap: [AppContainerComponent],
})
export class AppModule {}
