import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppContactEditComponent } from "./app-contact-edit/app-contact-edit.component";
import { AppContactsAddComponent } from "./app-contacts-add/app-contacts-add.component";
import { AppContactsComponent } from "./app-contacts/app-contacts.component";
import { AppMessageConversationComponent } from "./app-message-conversation/app-message-conversation.component";
import { AppMessagesComponent } from "./app-messages/app-messages.component";
import { AppPhoneCallComponent } from "./app-phone-call/app-phone-call.component";
import { AppPhoneClavierComponent } from "./app-phone-clavier/app-phone-clavier.component";
import { AppPhoneContactsComponent } from "./app-phone-contacts/app-phone-contacts.component";
import { AppPhoneFavorisComponent } from "./app-phone-favoris/app-phone-favoris.component";
import { AppPhoneRecentComponent } from "./app-phone-recent/app-phone-recent.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeScreenComponent } from "./home-screen/home-screen.component";

const routes: Routes = [
    {path: '', component: HomeScreenComponent, data: { animationState: 'home' }},
    {path: 'phone/clavier', component: AppPhoneClavierComponent, data: { animationState: 'app' }},
    {path: 'phone/contacts', component: AppPhoneContactsComponent, data: { animationState: 'app' }},
    {path: 'phone/contacts/add', component: AppContactsAddComponent, data: { animationState: 'app' }},
    {path: 'phone/contacts/edit/:number', component: AppContactEditComponent, data: { animationState: 'app' }},
    {path: 'phone/recent', component: AppPhoneRecentComponent, data: { animationState: 'app' }},
    {path: 'phone/favoris', component: AppPhoneFavorisComponent, data: { animationState: 'app' }},
    {path: 'contacts', component: AppContactsComponent, data: { animationState: 'app' }},
    {path: 'contacts/add', component: AppContactsAddComponent, data: { animationState: 'app' }},
    {path: 'contacts/edit/:number', component: AppContactEditComponent, data: { animationState: 'app' }},
    {path: 'gallery', component: GalleryComponent, data: { animationState: 'app' }},

    {path: 'phone/clavier/call', component: AppPhoneCallComponent, data: { animationState: 'app' }},
    {path: 'phone/recent/call', component: AppPhoneCallComponent, data: { animationState: 'app' }},
    {path: 'phone/favoris/call', component: AppPhoneCallComponent, data: { animationState: 'app' }},

    {path: 'messages', component: AppMessagesComponent, data: { animationState: 'app' }},
    {path: 'messages/:number', component: AppMessageConversationComponent, data: { animationState: 'app' }}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}