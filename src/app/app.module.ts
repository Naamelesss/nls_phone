import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppsComponent } from './apps/apps.component';
import { DebugToolsComponent } from './debug-tools/debug-tools.component';
import { DynamicIslandComponent } from './dynamic-island/dynamic-island.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AppPhoneComponent } from './app-phone/app-phone.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeBarComponent } from './home-bar/home-bar.component';
import { PhoneFormatPipe } from './phone-format.pipe';
import { AppPhoneClavierComponent } from './app-phone-clavier/app-phone-clavier.component';
import { AppContactsComponent } from './app-contacts/app-contacts.component';
import { PhoneContactsComponent } from './phone-contacts/phone-contacts.component';
import { AppPhoneContactsComponent } from './app-phone-contacts/app-phone-contacts.component';
import { AppContactsListComponent } from './app-contacts-list/app-contacts-list.component';
import { AppContactsAddComponent } from './app-contacts-add/app-contacts-add.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AppContactEditComponent } from './app-contact-edit/app-contact-edit.component';
import { DynamicIslandCallComponent } from './dynamic-island-call/dynamic-island-call.component';
import { AppPhoneRecentComponent } from './app-phone-recent/app-phone-recent.component';
import { AppPhoneFavorisComponent } from './app-phone-favoris/app-phone-favoris.component';
import { AppPhoneCallComponent } from './app-phone-call/app-phone-call.component';

@NgModule({
  declarations: [
    AppComponent,
    AppsComponent,
    DebugToolsComponent,
    DynamicIslandComponent,
    HomeScreenComponent,
    AppPhoneComponent,
    HomeBarComponent,
    PhoneFormatPipe,
    AppPhoneClavierComponent,
    AppContactsComponent,
    PhoneContactsComponent,
    AppPhoneContactsComponent,
    AppContactsListComponent,
    AppContactsAddComponent,
    GalleryComponent,
    AppContactEditComponent,
    DynamicIslandCallComponent,
    AppPhoneRecentComponent,
    AppPhoneFavorisComponent,
    AppPhoneCallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
