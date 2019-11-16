import { Car } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class CarService {
    // tslint:disable-next-line: variable-name
    private products: Car[] = [];
    private productUpdated = new Subject<Car[]>();
    constructor(private http: HttpClient, private router: Router) { }

    getProduct() {
        this.http
            .get<{ message: string, products: any }>(
                'http://localhost:3000/api/products'
            )
            .pipe(map((productData) => {
                return productData.products.map(product => {
                    return {
                        title: product.title,
                        desc: product.desc,
                        price: product.price,
                        brand: product.brand,
                        year: product.year,
                        km: product.km,
                        fuel: product.fuel,
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

    addProduct(title: string, desc: string, price: number, brand: string, fuel: string, km: number, year: number, cat: string) {
        const product: Car = { id: null, title, desc, price, brand, fuel, km, year, cat: 'car' };
        this.http
            .post<{ message: string }>('http://localhost:3000/api/products', product)
            .subscribe(responseData => {
                console.log(responseData.message);
                this.products.push(product);
                this.productUpdated.next([...this.products]);
                this.router.navigateByUrl('/cars');
            });
    }
    getProductId(id: string) {
        return { ...this.products.find(p => p.id === id) };
    }
    deleteProduct(ProductId: string) {
        this.http.delete('http://localhost:3000/api/products/' + ProductId)
            .subscribe(() => {
                // console.log('Deleted');
                const updatedProducts = this.products.filter(product => product.id !== ProductId);
                this.products = updatedProducts;
                this.productUpdated.next({...this.products});
                this.router.navigateByUrl('/cars');
            });
    }
}
