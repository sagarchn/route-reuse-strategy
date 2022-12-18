import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AddDetailsComponent } from "./add-details/add-details.component";
import { HomeComponent } from "./home/home.component";
import { TermsConditionsComponent } from "./terms-conditions/terms-conditions.component";

const routes: Route[] = [
    {
        path: 'add-details',
        component: AddDetailsComponent
    },
    {
        path: 'term-n-conditions',
        component: TermsConditionsComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}