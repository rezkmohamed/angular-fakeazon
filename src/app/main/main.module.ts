import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { GalleryItemComponent } from "./components/gallery/gallery-item/gallery-item.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { AboutComponent } from "./pages/about/about.component";
import { DetailProductPageComponent } from "./pages/detail-product-page/detail-product-page.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { SearchProductsPage } from "./pages/search-products-page/search-products-page.component";

@NgModule({
    declarations: [
        HeaderComponent,
        GalleryComponent,
        FooterComponent,
        GalleryItemComponent,
        MainComponent,
        HomepageComponent,
        DetailProductPageComponent,
        SearchProductsPage,
        AboutComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        MainRoutingModule
    ],
    exports: [
        HeaderComponent,
        GalleryComponent,
        FooterComponent,
    ]
})
export class MainModule {}