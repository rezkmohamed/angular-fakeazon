import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
// import { GalleryComponent } from './main/components/gallery/gallery.component';


// import { HeaderComponent } from './main/components/header/header.component';
// import { FooterComponent } from './main/components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { GalleryItemComponent } from './main/components/gallery/gallery-item/gallery-item.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // GalleryComponent,
    // FooterComponent,
    // GalleryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
