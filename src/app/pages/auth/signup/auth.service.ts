import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private token: string;
    constructor(private http: HttpClient, private router: Router) { }

    createUser(email: string, password: string) {
        const authData: AuthData = { email, password };
        this.http.post('http://localhost:3000/api/user/signup', authData)
            .subscribe(response => {
                console.log(response);
            });
    }

    login(email: string, password: string) {
        const authData: AuthData = { email, password };
        this.http.post<{token: string}>('http://localhost:3000/api/user/login', authData)
            .subscribe(response => {
                const token = response.token;
                this.token = token;
                console.log(token);
                this.router.navigateByUrl('/');

            });

    }
    getToken() {
        return this.token;
    }
}

