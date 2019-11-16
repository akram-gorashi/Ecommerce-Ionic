import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/add-car.service';
import { Car } from 'src/app/services/product.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {
  products: Car[] = [];
  productSub: Subscription;
  isLoading = false;
  constructor(private carService: CarService, private router: Router, public navCtrl: NavController) { }
  ngOnInit() {
    this.carService.getProduct();
    this.isLoading = true;
    this.productSub = this.carService.getProductUpdateListner()
      .subscribe((products: Car[]) => {
        this.products = products;
        this.isLoading = false;
      });
  }
  onShowDetail() {
    // this.router.navigateByUrl('/home/tabs/explore/p.id');
    // this.navCtrl.navigateForward(['/home/tabs/explore/p.id', {id: 'hello'}]);
  }


}
