import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CarService } from 'src/app/services/add-car.service';
import {  Car } from 'src/app/services/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product: Car;
  constructor(private navCtrl: NavController,
              private route: ActivatedRoute,
              private carService: CarService, ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productId')) {
        this.navCtrl.navigateBack('/home/tabs/explore');
        return;
      }
      this.product = this.carService.getProductId(paramMap.get('productId'));
    });

  }
  onDelete(productId: string) {
    this.carService.deleteProduct(productId);
  }
}
