import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { GlobeAnimationComponent } from './globe-animation/globe-animation.component';
import { MainPageLayoutComponent } from './main-page-layout/main-page-layout.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeHeroComponent,
    GlobeAnimationComponent,
    MainPageLayoutComponent,
    MainWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
