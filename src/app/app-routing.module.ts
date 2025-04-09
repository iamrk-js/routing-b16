import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { ProductsComponent } from "./shared/components/products/products.component";


// baseUrl = http://localhost:4200 

const routes : Routes = [
    {
        path : '', // http://localhost:4200 + ''
        component : DashboardComponent
    },
    {
        path : 'home', // http://localhost:4200 + 'home'  == http://localhost:4200/home
        component : DashboardComponent
    },
    {
        path : 'users', // http://localhost:4200/users
        component : UsersComponent
    },
    {
        path : 'products', // http://localhost:4200/products
        component : ProductsComponent
    }
]

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports : [RouterModule]
})
export class AppRoutingModule {

}