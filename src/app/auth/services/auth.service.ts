import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { RegisterProfile } from "src/app/main/models/register-profile.model";
import { LoginProfile } from "../models/login.model";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private urlBase: string = "http://localhost:8080/";
    user = new BehaviorSubject<User>(new User("", "", ""));

    constructor(private http: HttpClient) {}

    registerProfile(profile: RegisterProfile) {
        return this.http.post(this.urlBase + "register", profile);
    }

    loginProfile(profile: LoginProfile) {
        return this.http.post<any>(this.urlBase + "login", 
            profile,
            { observe: 'response' }
        );
    }
}