import { Component } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Product } from "../../models/product.model";
import { ProductsService } from "../../services/products.service";

@Component({
    selector: 'search-products-component',
    templateUrl: './search-products-page.component.html',
    styleUrls: ['./search-products-page.component.css']
})
export class SearchProductsPage {
    products: Product[] = [];
    productsLoaded: boolean = false;
    startingNameToSearch: number = 17;
    nameToSearch: string = "";

    constructor(private productsService: ProductsService,
                private activatedRoute: ActivatedRoute,
                private route: Router) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.products = [];
                this.productsLoaded = false;
                this.nameToSearch = "";
                this.loadProducts();
            }
        );
    }

    loadProducts() {
        this.nameToSearch = this.route.url.substring(this.startingNameToSearch, this.route.url.length);

        this.productsService.fetchProductsByNameLike(this.nameToSearch).subscribe({
            next: (response) => {
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
                this.productsLoaded = true;
            }
        });
    }
}