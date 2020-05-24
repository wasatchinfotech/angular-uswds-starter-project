import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../../shared/services/common.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.sass']
})
export class SignOutComponent implements OnInit, OnDestroy {

  constructor(private commonService: CommonService, private authService: AuthService) { }

  ngOnInit(): void {
    this.commonService.publishAuthModule(true);
    this.authService.logout().subscribe(() => {
      this.commonService.publishUserAuthentication(false);
    });
  }

  ngOnDestroy() {
    this.commonService.publishAuthModule(false);
  }

}
