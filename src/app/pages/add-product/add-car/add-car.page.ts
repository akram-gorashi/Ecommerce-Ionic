import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from 'src/app/services/add-car.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage {
  constructor(public carService: CarService, private router: Router) { }

  onAddCar(form: NgForm) {
    if (form.invalid) {

      return;
    }
    this.carService.addProduct(form.value.title, form.value.desc,
       form.value.price, form.value.brand, form.value.fuel, form.value.km, form.value.year, form.value.cat);
    form.resetForm();
  }
}
