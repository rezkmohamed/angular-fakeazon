import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'register-component',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    @ViewChild('f') registraForm!: NgForm;
    emailExists: boolean = false;
    signupRequest: boolean = false;
    errorPsw: boolean = false;
    BAD_REQUEST: number = 400;

    constructor(private router: Router){}

    ngOnInit(){}

    onSubmit(){
        
    }

    onNavigateToLoginPage(){
        this.router.navigate(['/auth/login']);
    }
}