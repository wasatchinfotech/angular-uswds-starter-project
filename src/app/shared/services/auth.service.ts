import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private localDbUser: User;
  constructor(private http: HttpClient) {
    this.http.get('assets/data/localUser.json').subscribe(
      (data) => {
        this.localDbUser = data['user'] as User;
      }
    );
  }

  login(username: string, password: string): Observable<boolean> {
    let isUserLoggedIn = false;
    if (this.localDbUser.username === username && this.localDbUser.password === password) {
      localStorage.setItem('currentUser', JSON.stringify(this.localDbUser));
      isUserLoggedIn = true;
    }
    return of(isUserLoggedIn);
  }

  getCurrentUserLoggedInStatus(): boolean {
    return localStorage.getItem('currentUser') != null;
  }

  logout(): Observable<boolean> {
    localStorage.removeItem('currentUser');
    return of(true);
  }
}
