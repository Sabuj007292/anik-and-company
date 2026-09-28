import { Component, OnInit } from '@angular/core';

import {
  LucideAngularModule,
  Sun,
  Check,
  Zap,
  House,
  FileCheck,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  BadgeCheck,
  Wrench,
  Headset,
  Building2,
  ArrowUpRight,
  Settings,
  CheckCircle,
  CheckCircle2,
  CheckCircleIcon,
  CircleCheck
} from 'lucide-angular';

@Component({
  selector: 'app-rooftop-solar',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './rooftop-solar.component.html',
  styleUrls: ['./rooftop-solar.component.css']
})
export class RooftopSolarComponent implements OnInit {

  readonly whatsappNumber = '919748090555';

  // Icons
  readonly SunIcon = Sun;
  readonly CheckIcon = Check;
  readonly ZapIcon = Zap;
  readonly HouseIcon = House;
  readonly FileCheckIcon = FileCheck;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly ArrowRightIcon = ArrowRight;
  readonly MessageCircleIcon = MessageCircle;
  readonly BadgeCheckIcon = BadgeCheck;
  readonly WrenchIcon = Wrench;
  readonly HeadsetIcon = Headset;
  readonly BuildingIcon = Building2;
  readonly ArrowUpRightIcon = ArrowUpRight;
  readonly SettingsIcon = Settings;
  readonly CheckCircleIcon = CheckCircle;
  readonly CheckCircle2Icon = CheckCircle2;

  constructor() {}

  ngOnInit(): void {}

  calculateSystem(): void {
    const message = this.buildWhatsAppMessage(
      'Solar System Size Calculation'
    );

    this.openWhatsAppWithMessage(message);
  }

  openWhatsApp(): void {
    const message = this.buildWhatsAppMessage(
      'Rooftop Solar Consultation & Quotation Request'
    );

    this.openWhatsAppWithMessage(message);
  }

  private buildWhatsAppMessage(subject: string): string {
    return (
      `Hello A-NIK & CO.,%0A%0A` +
      `*Subject: ${subject}*%0A%0A` +
      `I am interested in installing a rooftop solar system ` +
      `and would like professional guidance from your solar team.%0A%0A` +
      `*Requirement:*%0A` +
      `• Solar system sizing / capacity assessment%0A` +
      `• Rooftop suitability guidance%0A` +
      `• Solar system quotation%0A` +
      `• Installation & EPC details%0A` +
      `• Net metering assistance%0A` +
      `• Applicable subsidy guidance%0A%0A` +
      `Please contact me and help me understand the suitable ` +
      `solar solution for my property.%0A%0A` +
      `Thank you.%0A` +
      `A-NIK & CO. Solar Team`
    );
  }

  private openWhatsAppWithMessage(message: string): void {
    const whatsappUrl =
      `https://wa.me/${this.whatsappNumber}?text=${message}`;

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    );
  }
}