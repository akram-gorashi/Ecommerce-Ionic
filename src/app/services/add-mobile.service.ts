import { Injectable } from '@angular/core';
import { Mobile } from './product.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class MobileService {
    // tslint:disable-next-line: variable-name
    private products: Mobile[] = [];
    private productUpdated = new Subject<Mobile[]>();
    constructor(private http: HttpClient, private router: Router) { }
    getProduct() {
        this.http
            .get<{ message: string, products: any }>(
                'http://localhost:3000/api/mobile'
            )
            .pipe(map((productData) => {
                return productData.products.map(product => {
                    return {
                        title: product.title,
                        desc: product.desc,
                        price: product.price,
                        brand: product.brand,
                        id: product._id
                    };
                });
            }))
            .subscribe((transformedProducts) => {
                this.products = transformedProducts;
                this.productUpdated.next([...this.products]);
            });
    }
    getProductUpdateListner() {
        return this.productUpdated.asObservable();
    }

}
