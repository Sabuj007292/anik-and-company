import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppIconComponent } from '../../core/layout/common/app-icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppIconComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  private readonly API_URL =
    'http://localhost:5000/api/contact';

  contactForm: FormGroup;

  submitted = false;
  isSubmitting = false;

  successMessage = '';
  errorMessage = '';

  services = [
    'Solar EPC',
    'Electrical Engineering',
    'Civil Engineering',
    'IT Services',
    'Web Application Development',
    'Project Consultancy',
    'Other'
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {

    this.contactForm = this.fb.group({

      fullName: [
        '',
        Validators.required
      ],

      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9+\-\s()]{10,16}$/)
        ]
      ],

      email: [
        '',
        Validators.email
      ],

      location: [
        '',
        Validators.required
      ],

      service: [
        '',
        Validators.required
      ],

      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]

    });
  }


  get f() {
    return this.contactForm.controls;
  }


 submitForm(): void {

  this.submitted = true;

  this.successMessage = '';
  this.errorMessage = '';

  if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched();
    return;
  }

  this.isSubmitting = true;

  const payload = {
    fullName: this.contactForm.get('fullName')?.value,
    mobile: this.contactForm.get('mobile')?.value,
    email: this.contactForm.get('email')?.value,
    location: this.contactForm.get('location')?.value,
    service: this.contactForm.get('service')?.value,
    message: this.contactForm.get('message')?.value
  };

  console.log('Contact Enquiry Payload:', payload);

  this.http.post<any>(
    'http://www.anikandco.com/api/contact',
    payload
  ).subscribe({

    next: (response) => {

      console.log('API Success:', response);

      this.isSubmitting = false;

      this.successMessage =
        response?.message ||
        'Your enquiry has been submitted successfully.';

      this.contactForm.reset();

      this.submitted = false;
    },

    error: (error) => {

      console.error('API Error:', error);

      this.isSubmitting = false;

      this.errorMessage =
        error?.error?.message ||
        'Unable to submit enquiry. Please try again.';
    }

  });
}


  openWhatsApp(): void {

    const message =
      'Hello A-NIK & CO., I would like to discuss a project requirement.';

    const url =
      `https://wa.me/919830316065?text=${encodeURIComponent(message)}`;

    window.open(
      url,
      '_blank'
    );
  }


  callCompany(): void {

    window.location.href =
      'tel:+919830316065';
  }


  sendEmail(): void {

    window.location.href =
      'mailto:info@anikandco.com';
  }


  openMap(): void {

    const query =
      encodeURIComponent(
        'A-NIK & CO., Haldia, West Bengal'
      );

    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      '_blank'
    );
  }

}