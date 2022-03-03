import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    @ViewChild('authForm') loginForm!: NgForm;
    errorLogin: boolean = false;
    loginSubscription!: Subscription;

    ngOnInit(): void {
    }

    login() {

    }
}