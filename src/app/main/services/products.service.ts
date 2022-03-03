import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private urlBase: string = "http://localhost:8080/products/";

    constructor(private http: HttpClient) {}

    fetchProducts() {
        return this.http.get<any[]>(this.urlBase);
    }

    fetchProductById(id: string) {
        return this.http.get<any>(this.urlBase + id);
    }

    fetchProductsByNameLike(nameLike: string) {
        return this.http.get<any[]>(this.urlBase + "namelike/" + nameLike);
    }

    fetchMyCart(token: string) {
        return this.http.get<any[]>(this.urlBase + "myproducts",
        {
            headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
        });
    }

    shopProducts(products: Product[], token: string){
        return this.http.post<any>(this.urlBase + "shop", 
            products,
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
            }
        );
    }
}