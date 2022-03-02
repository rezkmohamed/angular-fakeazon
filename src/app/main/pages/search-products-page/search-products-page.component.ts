import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
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
    startingNameToSearch: number = 2;
    nameToSearch: string = "";

    constructor(private productsService: ProductsService,
                private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.products = [];
                this.productsLoaded = false;
                this.nameToSearch = "";
                this.loadProducts();
            }
        )
    }

    loadProducts() {
        
    }

}