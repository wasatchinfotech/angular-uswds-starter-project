import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageType } from '../../../shared/enums/message-type.enum';
import { MESSAGES_CONFIG } from '../../../shared/config/message.config';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit, OnDestroy {

  VALIDATION_MESSAGE = MESSAGES_CONFIG.form.general.generalFormError;
  MESSAGE_TYPE: string = MessageType[MessageType.ERROR];
  isFormSubmitted = false;

  registrationForm = this.fb.group({
    username: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.publishAuthModule(true);
  }

  ngOnDestroy() {
    this.commonService.publishAuthModule(false);
  }

  isFormValid() {
    return this.isFormSubmitted && !this.registrationForm.valid;
  }

  onSubmit() {
    this.isFormSubmitted = true;
  }

}
