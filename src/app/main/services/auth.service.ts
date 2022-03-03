import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegisterProfile } from "../models/register-profile.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private urlBase = "";

    constructor(private http: HttpClient) {}

    registerProfile(profile: RegisterProfile) {
        return this.http.post(this.urlBase + "register", profile);
    }
}