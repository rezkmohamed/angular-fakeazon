import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from './main/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ecommerce';
  @ViewChild('formProductById') formProductById: NgForm | undefined;
  @ViewChild('formProductsByName') formProductsByName: NgForm | undefined;

  constructor(private productsService: ProductsService){}

  getProducts(){
    console.log("get products");
    this.productsService.fetchProducts().subscribe({
      next: (response) => {
        console.log("inside next");
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("inside complete");
      }
    });
  }

  getProductById(){
    console.log("get product by id::::");
    console.log(this.formProductById?.value.search);
    const idProduct: string = this.formProductById?.value.search;
    this.productsService.fetchProductById(idProduct).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
        console.log(err.status);
      }
    });
  }

  getSearchProductsByName(){
    console.log("get products by name::::");
    console.log(this.formProductsByName?.value.search);
    const nameProductLike = this.formProductsByName?.value.search;
    this.productsService.fetchProductsByNameLike(nameProductLike).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
