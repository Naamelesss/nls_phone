import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppPhoneComponent } from "./app-phone/app-phone.component";
import { HomeScreenComponent } from "./home-screen/home-screen.component";

const routes: Routes = [
    {path: '', component: HomeScreenComponent, data: { animationState: 'home' }},
    {path: 'phone', component: AppPhoneComponent, data: { animationState: 'app' }}
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