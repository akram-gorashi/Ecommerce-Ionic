import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'explore', loadChildren: './pages/tabs/explore/explore.module#ExplorePageModule' },
  { path: 'chats', loadChildren: './pages/tabs/chats/chats.module#ChatsPageModule' },
  { path: 'sell', loadChildren: './pages/tabs/sell/sell.module#SellPageModule' },
  { path: 'myads', loadChildren: './pages/tabs/myads/myads.module#MyadsPageModule' },
  { path: 'account', loadChildren: './pages/tabs/account/account.module#AccountPageModule' },
  { path: 'cars', loadChildren: './pages/categories/cars/cars.module#CarsPageModule' },
  { path: 'mobiles', loadChildren: './pages/categories/mobiles/mobiles.module#MobilesPageModule' },
  { path: 'elec', loadChildren: './pages/categories/elec/elec.module#ElecPageModule' },
  { path: 'fashion', loadChildren: './pages/categories/fashion/fashion.module#FashionPageModule' },
  { path: 'jobs', loadChildren: './pages/categories/jobs/jobs.module#JobsPageModule' },
  { path: 'services', loadChildren: './pages/categories/services/services.module#ServicesPageModule' },
  { path: 'add-mobile', loadChildren: './pages/add-product/add-mobile/add-mobile.module#AddMobilePageModule' },
  { path: 'add-car', loadChildren: './pages/add-product/add-car/add-car.module#AddCarPageModule' },
  { path: 'add-elec', loadChildren: './pages/add-product/add-elec/add-elec.module#AddElecPageModule' },
  { path: 'add-fashion', loadChildren: './pages/add-product/add-fashion/add-fashion.module#AddFashionPageModule' },
  { path: 'add-job', loadChildren: './pages/add-product/add-job/add-job.module#AddJobPageModule' },
  { path: 'add-service', loadChildren: './pages/add-product/add-service/add-service.module#AddServicePageModule' },
  { path: 'product-details', loadChildren: './pages/product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/auth/signup/signup.module#SignupPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
