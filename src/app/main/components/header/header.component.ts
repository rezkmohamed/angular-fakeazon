import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductsService } from "../../services/products.service";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @ViewChild('formProductsByName') formProductsByName: NgForm | undefined;
    
    constructor(private router: Router){

    }

    ngOnInit() {
        
    }

    goToHomePage(){
        this.router.navigate(['/']);
    }

    getSearchProductsByName() {
        console.log("get products by name::::");
        console.log(this.formProductsByName?.value.search);
        const nameProductLike = this.formProductsByName?.value.search;
        this.router.navigate(['/products/search', nameProductLike]);
    }
}