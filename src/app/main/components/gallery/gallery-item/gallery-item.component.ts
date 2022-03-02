import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'gallery-item-component',
    templateUrl: './gallery-item.component.html',
    styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent {
    constructor(private router: Router){

    }

    ngOnInit(){

    }

    openProduct(idProduct: string) {
        this.router.navigate([`/products/${idProduct}`]);
    }
}