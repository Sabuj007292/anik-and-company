import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { ContactService } from '../../services-api/contact.service';
import { SharedModule } from '../../core/layout/common/shared.module';
import { ICONS } from '../../core/layout/common/icon-map';

@Component({
  selector: 'app-contact',
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],

  templateUrl: './contact.component.html'
})
export class ContactComponent {

  contactForm!: FormGroup;

  submitted = false;
  loading = false;

  readonly icons = ICONS;


  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {

    this.createForm();

  }


  /**
   * Create enquiry form
   */
  private createForm(): void {

    this.contactForm = this.fb.group({

      // ============================================
      // CUSTOMER INFORMATION
      // ============================================

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],

      email: [
        '',
        [
          Validators.email
        ]
      ],

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[6-9]\d{9}$/)
        ]
      ],

      location: [
        '',
        [
          Validators.required
        ]
      ],


      // ============================================
      // MAIN SERVICE
      // ============================================

      serviceType: [
        '',
        [
          Validators.required
        ]
      ],


      // ============================================
      // SOLAR DETAILS
      // ============================================

      consumerId: [
        ''
      ],

      connectionType: [
        ''
      ],

      monthlyBill: [
        ''
      ],

      solarCapacity: [
        ''
      ],


      // ============================================
      // ELECTRICAL DETAILS
      // ============================================

      electricalProject: [
        ''
      ],

      electricalLoad: [
        ''
      ],


      // ============================================
      // INDUSTRIAL DETAILS
      // ============================================

      industryType: [
        ''
      ],

      industrialLoad: [
        ''
      ],


      // ============================================
      // ADDITIONAL MESSAGE
      // ============================================

      message: [
        ''
      ]

    });

  }


  /**
   * Select Solar / Electrical / Industrial
   */
  selectService(service: string): void {

    this.contactForm.patchValue({
      serviceType: service
    });

    // Reset service-specific fields
    if (service !== 'Solar') {

      this.contactForm.patchValue({
        consumerId: '',
        connectionType: '',
        monthlyBill: '',
        solarCapacity: ''
      });

    }


    if (service !== 'Electrical') {

      this.contactForm.patchValue({
        electricalProject: '',
        electricalLoad: ''
      });

    }


    if (service !== 'Industrial') {

      this.contactForm.patchValue({
        industryType: '',
        industrialLoad: ''
      });

    }

  }


  /**
   * Submit enquiry
   */
  submitForm(): void {

    this.submitted = true;


    // Stop if invalid
    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;

    }


    this.loading = true;


    const enquiryData = this.contactForm.value;


    console.log(
      'Solar / Electrical Enquiry:',
      enquiryData
    );


    this.contactService
      .saveContact(enquiryData)
      .subscribe({

        next: (response) => {

          console.log(
            'Enquiry saved successfully:',
            response
          );


          this.loading = false;


          alert(
            'Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.'
          );


          this.contactForm.reset();

          this.submitted = false;

        },


        error: (error) => {

          console.error(
            'Enquiry submission error:',
            error
          );


          this.loading = false;


          alert(
            'Unable to submit your enquiry right now. Please try again or contact us on WhatsApp.'
          );

        }

      });

  }


  /**
   * Easy access to form controls
   */
  get f() {

    return this.contactForm.controls;

  }


  /**
   * Check if a field is invalid
   */
  isInvalid(controlName: string): boolean {

    const control = this.contactForm.get(controlName);

    return !!(
      control &&
      control.invalid &&
      (control.touched || this.submitted)
    );

  }


  /**
   * Check selected service
   */
  isService(service: string): boolean {

    return this.contactForm.get('serviceType')?.value === service;

  }

}