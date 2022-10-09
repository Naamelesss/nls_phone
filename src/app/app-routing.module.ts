import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppContactsComponent } from "./app-contacts/app-contacts.component";
import { AppPhoneClavierComponent } from "./app-phone-clavier/app-phone-clavier.component";
import { AppPhoneContactsComponent } from "./app-phone-contacts/app-phone-contacts.component";
import { HomeScreenComponent } from "./home-screen/home-screen.component";

const routes: Routes = [
    {path: '', component: HomeScreenComponent, data: { animationState: 'home' }},
    {path: 'phone/clavier', component: AppPhoneClavierComponent, data: { animationState: 'app' }},
    {path: 'phone/contacts', component: AppPhoneContactsComponent, data: { animationState: 'app' }},
    {path: 'contacts', component: AppContactsComponent, data: { animationState: 'app' }}
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