import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoginRequired = false;
  inAuthModule = false;
  isOpen = false;
  isFirstMenuOpen = false;
  isSecondMenuOpen = false;

  constructor(private commonService: CommonService, private authService: AuthService) {
    commonService.isUserAuthenticated$.subscribe(res => {
      if (authService.getCurrentUserLoggedInStatus()) {
        this.isLoginRequired = true;
      } else {
        this.isLoginRequired = false;
      }
    });

    commonService.isAuthModule$.subscribe(res => {
      this.inAuthModule = res;
    });
  }

  ngOnInit(): void {
  }
}
