import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { DetailProductPageComponent } from "./pages/detail-product-page/detail-product-page.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { SearchProductsPage } from "./pages/search-products-page/search-products-page.component";

const routes: Routes = [
    { path: '', component: MainComponent, children: [
        { path: '', component: HomepageComponent},
        { path: 'products', children: [
            { path: ':id', component: DetailProductPageComponent},
            { path: 'search/:name', component: SearchProductsPage}
        ]}

    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {

}