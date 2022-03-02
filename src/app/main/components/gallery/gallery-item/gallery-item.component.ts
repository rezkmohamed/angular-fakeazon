import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/main/models/product.model";

@Component({
    selector: 'gallery-item-component',
    templateUrl: './gallery-item.component.html',
    styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent {
    @Input('product')
    product!: Product;
    constructor(private router: Router){

    }

    ngOnInit(){

    }

    openProduct(idProduct: string) {
        this.router.navigate([`/products/${idProduct}`]);
    }
}