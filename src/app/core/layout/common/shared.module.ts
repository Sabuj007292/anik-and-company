import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  LucideAngularModule,
  PhoneCall,
  Mail,
  Clock,
  Menu,
  X,
  Facebook,
  Linkedin,
  Instagram,
  MapPin
} from 'lucide-angular';

@NgModule({
  imports: [
    CommonModule,

    LucideAngularModule.pick({
      PhoneCall,
      Mail,
      Clock,
      Menu,
      X,
      Facebook,
      Linkedin,
      Instagram,
      MapPin
    })
  ],

  exports: [
    CommonModule,
    LucideAngularModule
  ]
})
export class SharedModule {}