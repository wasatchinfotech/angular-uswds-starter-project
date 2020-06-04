import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { MessageType } from '../../../shared/enums/message-type.enum';
import { MESSAGES_CONFIG } from '../../../shared/config/message.config';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  VALIDATION_MESSAGE = MESSAGES_CONFIG.form.general.generalFormError;
  msgConfig = MESSAGES_CONFIG;
  MESSAGE_TYPE: string = MessageType[MessageType.ERROR];
  isFormSubmitted = false;

  resetPasswordForm = this.fb.group({
    newPassword: [null, [Validators.required, Validators.minLength(8)]],
    confirmPassword: [null, [Validators.required, Validators.minLength(8)]]
  }, { validator: this.isPasswordMatched('newPassword', 'confirmPassword') });

  isPasswordMatched(newPassword, confirmPassword) {
    return (formGroup: FormGroup): { [key: string]: any } => {
      return formGroup.get(newPassword).value === formGroup.get(confirmPassword).value ? null : { 'mismatch': true };
    };
  }

  constructor(private fb: FormBuilder, private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.publishAuthModule(true);
  }

  ngOnDestroy() {
    this.commonService.publishAuthModule(false);
  }

  isFormValid(): boolean {
    return this.isFormSubmitted && !this.resetPasswordForm.valid;
  }

  isPasswordMismatchError(): boolean {
    return this.isFormSubmitted && this.resetPasswordForm.hasError('mismatch');
  }

  passwordErrorType(errorType: string) {
    return this.resetPasswordForm.get('newPassword').hasError(errorType);
  }

  confirmPasswordErrorType(errorType: string) {
    return this.resetPasswordForm.get('confirmPassword').hasError(errorType);
  }

  onSubmit() {
    this.isFormSubmitted = true;
  }

}
