import { Component } from "@angular/core";
import { Route, Router } from "@angular/router";
import { Product } from "../../models/product.model";
import { ProductsService } from "../../services/products.service";

@Component({
    selector: 'detail-product-page-component',
    templateUrl: './detail-product-page.component.html',
    styleUrls: ['./detail-product-page.component.css']
})
export class DetailProductPageComponent {
    startSearch: number = 10;
    idProduct: string = this.router.url.substring(this.startSearch, this.router.url.length);
    product!: Product;
    productLoaded: boolean = false;
    constructor(private router: Router,
                private productsService: ProductsService){}

    ngOnInit(){
        console.log(this.idProduct);
        this.productsService.fetchProductById(this.idProduct).subscribe({
            next: (response) => {
                console.log(response);
                let prod: Product = new Product(response.idProduct, response.category, 
                    response.idProfile, response.img, response.name, 
                    response.price, response.quantity);
                this.product = prod;
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {
                this.productLoaded = true;
            }
        })
    }
}