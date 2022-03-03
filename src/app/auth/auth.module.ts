import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
    declarations: [
        AuthComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: AuthComponent, children: [
                { path: 'register', component: RegisterComponent},
            ]}
        ])
    ]
})
export class AuthModule {}