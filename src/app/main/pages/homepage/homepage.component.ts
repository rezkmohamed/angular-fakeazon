import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../../models/product.model";
import { ProductsService } from "../../services/products.service";


@Component({
    selector: 'homepage-component',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
    products: Product[] = [];
    constructor(private router: Router,
                private productsService: ProductsService) {}

    ngOnInit(): void {
        this.productsService.fetchProducts().subscribe({
            next: (response) => {
                console.log("inside next");
                console.log(response);
                for(let product of response) {
                    let productToAdd: Product = new Product(product.idProduct, product.category, 
                        product.idProfile, product.img, product.name, 
                        product.price, product.quantity);
                    this.products.push(productToAdd);
                }
              },
              error: (err) => {
                console.log(err);
              },
              complete: () => {
                console.log("inside complete");
              }
        });
    }
}