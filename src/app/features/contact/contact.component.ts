import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../services-api/contact.service';
import { LucideAngularModule, Mail, MapPin, Phone } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule, ],  // ✅ IMPORTANT
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  contactForm!: FormGroup;
  submitted = false;
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly MapPin = MapPin;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      projectType: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    this.submitted = true;

    if (this.contactForm.invalid) return;

    this.contactService.saveContact(this.contactForm.value)
      .subscribe({
        next: () => {
          alert('Inquiry submitted successfully!');
          this.contactForm.reset();
          this.submitted = false;
        },
        error: (err) => {
          console.error(err);
          alert('Something went wrong!');
        }
      });
  }
}
