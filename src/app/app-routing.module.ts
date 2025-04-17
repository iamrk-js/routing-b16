import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { ProductFormComponent } from "./shared/components/products/product-form/product-form.component";
import { ProductComponent } from "./shared/components/products/product/product.component";
import { UserFormComponent } from "./shared/components/users/user-form/user-form.component";
import { UserComponent } from "./shared/components/users/user/user.component";


// baseUrl = http://localhost:4200 

const routes: Routes = [

    {
        path: 'home', // http://localhost:4200 + 'home'  == http://localhost:4200/home
        component: DashboardComponent
    },
    {
        path: '', // http://localhost:4200 + ''
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'users', // http://localhost:4200/users
        component: UsersComponent
    },
    {
        path: 'users/adduser', // http://localhost:4200/users/adduser
        component: UserFormComponent
    },
    {
        path: 'users/:userId', // http://localhost:4200/users/123
        component: UserComponent
    },
    {
        path: 'users/:userId/edit', // http://localhost:4200/users/123/edit
        component: UserFormComponent
    },
    {
        path: 'products', // http://localhost:4200/products
        component: ProductsComponent
    },
    {
        path: 'products/addproduct', // http://localhost:4200/products/addProduct
        component: ProductFormComponent
    },
    {
        path: 'products/:prodId', // http://localhost:4200/products/123
        component: ProductComponent
    },
    {
        path: 'products/:prodId/edit', // http://localhost:4200/products/addProduct
        component: ProductFormComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}