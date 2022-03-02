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
    
    constructor(private router: Router,
                private productsService: ProductsService){

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
        this.productsService.fetchProductsByNameLike(nameProductLike).subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            this.formProductsByName?.reset();
          }
        })
    }
}