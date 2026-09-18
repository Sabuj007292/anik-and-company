import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { AppIconComponent } from '../../core/layout/common/app-icon.component';
import { ContactService } from '../../services-api/contact.service';

interface ContactEnquiry {
  fullName: string;
  mobile: string;
  email: string;
  location: string;
  service: string;
  message: string;
}

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

  // =====================================================
  // FORM
  // =====================================================

  contactForm: FormGroup;


  // =====================================================
  // UI STATE
  // =====================================================

  submitted = false;

  isSubmitting = false;

  successMessage = '';

  errorMessage = '';


  // =====================================================
  // SERVICES
  // =====================================================

  services = [
    'Solar EPC',
    'Electrical Engineering',
    'Civil Engineering',
    'IT Services',
    'Web Application Development',
    'Project Consultancy',
    'Other'
  ];


  // =====================================================
  // CONSTRUCTOR
  // =====================================================

  constructor(
    private readonly fb: FormBuilder,
    private readonly contactService: ContactService
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
          Validators.pattern(
            /^[0-9+\-\s()]{10,16}$/
          )
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


  // =====================================================
  // FORM CONTROLS
  // =====================================================

  get f() {
    return this.contactForm.controls;
  }


  // =====================================================
  // SUBMIT CONTACT FORM
  // =====================================================

  submitForm(): void {

    this.submitted = true;

    this.successMessage = '';

    this.errorMessage = '';


    // ---------------------------------------------------
    // VALIDATION
    // ---------------------------------------------------

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;
    }


    // ---------------------------------------------------
    // LOADING
    // ---------------------------------------------------

    this.isSubmitting = true;


    // ---------------------------------------------------
    // FORM DATA
    // ---------------------------------------------------

    const payload: ContactEnquiry = {

      fullName:
        String(
          this.contactForm.get('fullName')?.value || ''
        ).trim(),

      mobile:
        String(
          this.contactForm.get('mobile')?.value || ''
        ).trim(),

      email:
        String(
          this.contactForm.get('email')?.value || ''
        ).trim(),

      location:
        String(
          this.contactForm.get('location')?.value || ''
        ).trim(),

      service:
        String(
          this.contactForm.get('service')?.value || ''
        ).trim(),

      message:
        String(
          this.contactForm.get('message')?.value || ''
        ).trim()

    };


    console.log(
      '📩 Contact Enquiry Payload:',
      payload
    );


    // ---------------------------------------------------
    // API REQUEST
    // ---------------------------------------------------

    this.contactService
      .createContact(payload)
      .subscribe({

        // ===============================================
        // SUCCESS
        // ===============================================

        next: (response: { message?: string }) => {

          console.log(
            '✅ Contact API Success:',
            response
          );

          this.isSubmitting = false;


          this.successMessage =
            response?.message ||
            'Your enquiry has been submitted successfully.';


          // Reset form
          this.contactForm.reset();


          // Reset submitted state
          this.submitted = false;


          // Optional: reset validation state
          Object.keys(
            this.contactForm.controls
          ).forEach((key) => {

            this.contactForm
              .get(key)
              ?.setErrors(null);

          });

        },


        // ===============================================
        // ERROR
        // ===============================================

        error: (error: HttpErrorResponse) => {

          console.error(
            '❌ Contact API Error:',
            error
          );


          this.isSubmitting = false;


          // Backend error message
          if (error?.error?.message) {

            this.errorMessage =
              error.error.message;

          } else if (error?.status === 0) {

            this.errorMessage =
              'Unable to connect to the server. Please check your internet connection or try again later.';

          } else if (error?.status === 400) {

            this.errorMessage =
              'Please check your contact details and try again.';

          } else if (error?.status === 500) {

            this.errorMessage =
              'Server error. Please try again later.';

          } else {

            this.errorMessage =
              'Unable to submit enquiry. Please try again.';

          }

        }

      });

  }


  // =====================================================
  // WHATSAPP
  // =====================================================

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


  // =====================================================
  // CALL COMPANY
  // =====================================================

  callCompany(): void {

    window.location.href =
      'tel:+919830316065';

  }


  // =====================================================
  // EMAIL
  // =====================================================

  sendEmail(): void {

    window.location.href =
      'mailto:info@anikandco.com';

  }


  // =====================================================
  // GOOGLE MAP
  // =====================================================

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