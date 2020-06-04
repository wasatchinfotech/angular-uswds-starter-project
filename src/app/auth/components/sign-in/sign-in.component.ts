import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageType } from '../../../shared/enums/message-type.enum';
import { MESSAGES_CONFIG } from '../../../shared/config/message.config';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'; 
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass'],
  providers: [AuthService]
})
export class SignInComponent implements OnInit, OnDestroy {

  VALIDATION_MESSAGE = MESSAGES_CONFIG.form.general.generalFormError;
  MESSAGE_TYPE: string = MessageType[MessageType.ERROR];
  isFormSubmitted = false;
  isLoginError = false;
  VALIDATION_LOGON_FAILED_MESSAGE = MESSAGES_CONFIG.form.general.login_required;
  isLoginAttemptFailed = false;

  signinForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, [Validators.required, Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router, private route: ActivatedRoute,
    private commonService: CommonService) {

    this.route
      .queryParamMap
      .pipe(map(params => params.get('login_attempt') || 'None')).subscribe(res => {
        this.isLoginAttemptFailed = res === 'failed';
      });
  }

  ngOnInit(): void {
    this.commonService.publishAuthModule(true);
  }

  ngOnDestroy() {
    this.commonService.publishAuthModule(false);
  }

  isFormValid(): boolean {
    return this.isFormSubmitted && !this.signinForm.valid;
  }

  isPasswordError(): boolean {
    return this.isFormSubmitted && !this.signinForm.valid && !this.signinForm.get('password').valid;
  }

  isUsernameError(): boolean {
    return this.isFormSubmitted && !this.signinForm.valid && !this.signinForm.get('username').valid;
  }

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.signinForm.valid) {
      this.isLoginError = false;
      this.authService.login(this.signinForm.get('username').value, this.signinForm.get('password').value).subscribe(res => {
        if (!res) {
          this.isLoginError = true;
          this.VALIDATION_MESSAGE = 'Please enter valid username and password';
        } else {
          this.commonService.publishUserAuthentication(true);
        }
      }, err => { }, () => {
        this.router.navigate(['/dashboard']);
      });
    }
  }
}
