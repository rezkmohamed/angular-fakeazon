import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { RegisterProfile } from "src/app/main/models/register-profile.model";
import { AuthService } from "../services/auth.service";

@Component({
    selector: 'register-component',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    @ViewChild('f') registerForm!: NgForm;
    emailExists: boolean = false;
    signupRequest: boolean = false;
    errorPsw: boolean = false;
    BAD_REQUEST: number = 400;

    constructor(private router: Router,
                private authService: AuthService){}

    ngOnInit(){}

    onSubmit(){
        if(this.registerForm.value.password !== this.registerForm.value.confermapassword){
            this.errorPsw = true;
            return;
        }

        const email = this.registerForm.value.email;
        const password = this.registerForm.value.password;
        const isVendor = this.registerForm.value.isvendor;
        this.authService.registerProfile(new RegisterProfile(email, password, isVendor)).subscribe({
            next: (response) => {
                console.log(response);
                this.emailExists = false;
            },
            error: (err) => {
                console.log(err);
                this.emailExists = true;
            },
            complete: () => {
                this.signupRequest = true;
            }
        })
    }

    onNavigateToLoginPage(){
        this.router.navigate(['/auth/login']);
    }
}