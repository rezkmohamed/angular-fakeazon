import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";

const routes: Routes = [
    { path: '', component: MainComponent, children: [
        { path: '', component: HomepageComponent},
        
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {

}