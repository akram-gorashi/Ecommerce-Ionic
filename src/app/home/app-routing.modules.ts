
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
const routes: Routes = [
    {
        path: 'tabs',
        component: HomePage,
        children: [
            {
                path: 'explore', children: [
                    {
                        path: '',
                        loadChildren: '../pages/tabs/explore/explore.module#ExplorePageModule'
                    },
                    {
                        path: ':productId',
                        loadChildren:
                            '../pages/product-details/product-details.module#ProductDetailsPageModule'
                    }
                ]
            },
            {
                path: 'chat', children: [
                    {
                        path: '',
                        loadChildren: '../pages/tabs/chats/chats.module#ChatsPageModule'
                    },
                ]
            },
            {
                path: 'sell',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/tabs/sell/sell.module#SellPageModule'
                    },
                    /*{
                        path: 'new',
                        loadChildren: '../tabs/sell/new-product/new-product.module#NewProductPageModule'

                    },
                    {
                        path: 'edit/:productId',
                        loadChildren: '../tabs/sell/edit-product/edit-product.module#EditProductPageModule'
                    },*/
                    {
                        path: ':productId',
                        loadChildren:
                            '../pages/product-details/product-details.module#ProductDetailsPageModule'
                    }
                ]
            },
            {
                path: 'myads', children: [
                    {
                        path: '',
                        loadChildren: '../pages/tabs/myads/myads.module#MyadsPageModule'
                    },
                ]
            },
            {
                path: 'account', children: [
                    {
                        path: '',
                        loadChildren: '../pages/tabs/account/account.module#AccountPageModule'
                    },
                ]
            },
            {
                path: '',
                redirectTo: '/home/tabs/explore',
                pathMatch: 'full'

            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/tabs/explore',
        pathMatch: 'full'

    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
