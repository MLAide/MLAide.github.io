import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactApiService } from 'src/app/services/contact-api.service';
import { SnackbarService } from 'src/app/utils/snackbar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public sentMessage = false;
  contactForm = this.fb.group({
    company: null,
    firstName: [null, { validators: [Validators.required], updateOn: "change", },],
    lastName: [null, { validators: [Validators.required], updateOn: "change", },],
    email: [null, { validators: [Validators.required, Validators.email], updateOn: "change", },],
    subject: [null, { validators: [Validators.required], updateOn: "change", },],
    message: [null, { validators: [Validators.required], updateOn: "change", },],
  });

  constructor(private fb: FormBuilder,
    private contactApiService: ContactApiService,
    private snackbarService: SnackbarService) { }

  onSubmit() {
    this.contactApiService.send(this.contactForm.value);
    this.sentMessage = true;
  }
}
