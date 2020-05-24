import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MESSAGES_CONFIG } from '../../../shared/config/message.config';
import { MessageType } from '../../../shared/enums/message-type.enum';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  VALIDATION_MESSAGE = MESSAGES_CONFIG.form.general.generalFormError;
  MESSAGE_TYPE: string = MessageType[MessageType.ERROR];
  isFormSubmitted = false;

  forgotPasswordForm = this.fb.group({
    username: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.publishAuthModule(true);
  }

  ngOnDestroy() {
    this.commonService.publishAuthModule(false);
  }

  isUsernameError(): boolean {
    return this.isFormSubmitted && !this.forgotPasswordForm.valid && !this.forgotPasswordForm.get('username').valid;
  }

  isFormValid() {
    return this.isFormSubmitted && !this.forgotPasswordForm.valid;
  }

  onSubmit() {
    this.isFormSubmitted = true;
  }

}
