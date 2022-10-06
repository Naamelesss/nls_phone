import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppsComponent } from './apps/apps.component';
import { DebugToolsComponent } from './debug-tools/debug-tools.component';
import { DynamicIslandComponent } from './dynamic-island/dynamic-island.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AppPhoneComponent } from './app-phone/app-phone.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeBarComponent } from './home-bar/home-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppsComponent,
    DebugToolsComponent,
    DynamicIslandComponent,
    HomeScreenComponent,
    AppPhoneComponent,
    HomeBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
