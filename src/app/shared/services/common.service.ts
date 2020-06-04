import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private userLoggedInSource = new BehaviorSubject<boolean>(false);
  isUserAuthenticated$ = this.userLoggedInSource.asObservable();

  private authModuleSource = new BehaviorSubject<boolean>(false);
  isAuthModule$ = this.authModuleSource.asObservable();

  publishUserAuthentication(isLogged: boolean) {
    this.userLoggedInSource.next(isLogged);
  }

  publishAuthModule(isLogged: boolean) {
    this.authModuleSource.next(isLogged);
  }
}
