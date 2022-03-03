import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { LoginProfile } from "../models/login.model";
import { AuthService } from "../services/auth.service";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    @ViewChild('authForm') loginForm!: NgForm;
    errorLogin: boolean = false;
    loginSubscription!: Subscription;

    constructor(private authService: AuthService){}

    ngOnInit(): void {
    }

    login() {
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;

        this.authService.loginProfile(new LoginProfile(email, password)).subscribe({
            next: (response) => {
                console.log("INSIDE RESPONSE:::");
                let auth = response.headers.get("Authentication");
                console.log(auth);
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {

            }
        });
    }
}