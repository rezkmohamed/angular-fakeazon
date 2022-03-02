import { Component, Input } from "@angular/core";
import { Product } from "../../models/product.model";

@Component({
    selector: 'gallery-component',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
    @Input('products')
    products: Product[] | undefined;
    
    constructor() {}

    ngOnInit() {
        console.log("GALLERY COMPONENT");
        console.log(this.products);
    }
}