import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

type SolarType =
  | 'on-grid'
  | 'off-grid'
  | 'hybrid'
  | 'residential'
  | 'commercial';

@Component({
  selector: 'app-solar-solutions',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './solar-solutions.component.html',
  styleUrl: './solar-solutions.component.css'
})
export class SolarSolutionsComponent {

  private readonly fb = inject(FormBuilder);

  /* ============================================================
     CONTACT
  ============================================================ */

  readonly whatsappNumber = '919748090555';
  readonly phoneNumber = '918240919580';

  /* ============================================================
     UI STATE
  ============================================================ */

  activeSolution: SolarType = 'on-grid';
  quoteModalOpen = false;
  submitted = false;

  /* ============================================================
     SOLAR SOLUTIONS
  ============================================================ */

  solutions = [
    {
      id: 'on-grid' as SolarType,
      number: '01',
      icon: '☀',
      title: 'On-Grid Solar',
      subtitle: 'Smart Grid-Connected Solar',
      description:
        'Generate clean electricity from your rooftop and reduce your dependence on conventional grid power with a professionally engineered on-grid solar system.',
      features: [
        'Grid-connected solar system',
        'Net-metering assistance',
        'Reduced electricity bills',
        'Ideal for homes and businesses',
        'High-efficiency solar modules'
      ]
    },
    {
      id: 'off-grid' as SolarType,
      number: '02',
      icon: '🔋',
      title: 'Off-Grid Solar',
      subtitle: 'Reliable Power Where You Need It',
      description:
        'Power your property independently with solar generation and battery storage where reliable grid electricity is limited or unavailable.',
      features: [
        'Battery-backed solar system',
        'Independent power generation',
        'Backup during grid outages',
        'Suitable for remote locations',
        'Energy storage management'
      ]
    },
    {
      id: 'hybrid' as SolarType,
      number: '03',
      icon: '⚡',
      title: 'Hybrid Solar',
      subtitle: 'Solar + Grid + Battery',
      description:
        'Combine solar generation, battery storage and grid power into one intelligent energy solution for maximum flexibility and energy security.',
      features: [
        'Solar + battery + grid',
        'Backup power capability',
        'Smart energy management',
        'Reduced grid dependency',
        'Flexible operating modes'
      ]
    }
  ];

  /* ============================================================
     APPLICATIONS
  ============================================================ */

  applications = [
    {
      id: 'residential' as SolarType,
      icon: '⌂',
      title: 'Residential Rooftop Solar',
      label: 'For Homes',
      description:
        'Designed for homeowners looking to reduce electricity expenses and generate clean energy from available rooftop space.',
      points: [
        'Rooftop feasibility assessment',
        'System capacity planning',
        'Solar module installation',
        'Inverter installation',
        'Net-metering assistance',
        'Subsidy documentation assistance'
      ]
    },
    {
      id: 'commercial' as SolarType,
      icon: '▦',
      title: 'Commercial & Industrial Solar',
      label: 'For Businesses',
      description:
        'Engineering-focused solar EPC solutions for offices, factories, warehouses, institutions, shops and commercial facilities.',
      points: [
        'Commercial rooftop assessment',
        'Load analysis',
        'System design & engineering',
        'High-capacity solar installation',
        'Electrical integration',
        'EPC project management'
      ]
    }
  ];

  /* ============================================================
     SOLAR COMPONENTS
  ============================================================ */

  components = [
    {
      icon: '◉',
      title: 'Solar Modules',
      tag: 'HIGH EFFICIENCY',
      description:
        'Quality solar PV modules selected according to project requirements, available roof area and performance objectives.',
      specs: [
        'Mono / bifacial technology',
        'High-efficiency PV modules',
        'OEM warranty support',
        'Project-specific selection'
      ]
    },
    {
      icon: '⌁',
      title: 'Solar Inverter',
      tag: 'SMART POWER',
      description:
        'Efficient inverter solutions for converting solar DC power into usable AC electricity with intelligent system monitoring.',
      specs: [
        'On-grid / off-grid / hybrid',
        'System monitoring',
        'High conversion efficiency',
        'Protection & safety features'
      ]
    },
    {
      icon: '▰',
      title: 'Solar Structure',
      tag: 'STRONG & DURABLE',
      description:
        'Engineered mounting structures designed for rooftop conditions, module configuration and long-term installation stability.',
      specs: [
        'Rooftop mounting',
        'Corrosion-resistant options',
        'Project-specific design',
        'Strong structural support'
      ]
    }
  ];

  /* ============================================================
     EPC PROCESS
  ============================================================ */

  epcSteps = [
    {
      number: '01',
      title: 'Customer Enquiry',
      text: 'Understand your electricity requirement, location and project objectives.'
    },
    {
      number: '02',
      title: 'Site Assessment',
      text: 'Evaluate rooftop condition, available area, orientation and electrical requirements.'
    },
    {
      number: '03',
      title: 'System Design',
      text: 'Prepare the appropriate solar capacity, module layout, inverter and structure plan.'
    },
    {
      number: '04',
      title: 'Quotation',
      text: 'Provide a project-specific commercial proposal based on the selected system.'
    },
    {
      number: '05',
      title: 'Installation',
      text: 'Execute module, structure, inverter and electrical installation professionally.'
    },
    {
      number: '06',
      title: 'Net Metering',
      text: 'Assist with applicable documentation and net-metering procedures.'
    },
    {
      number: '07',
      title: 'Commissioning',
      text: 'Complete testing, system commissioning and customer handover.'
    }
  ];

  /* ============================================================
     WHY A-NIK & CO.
  ============================================================ */

  reasons = [
    {
      icon: '✓',
      title: 'Complete EPC Support',
      text: 'From initial enquiry and design through installation and commissioning.'
    },
    {
      icon: '⌁',
      title: 'Engineering Approach',
      text: 'Solutions are planned around actual site and electrical requirements.'
    },
    {
      icon: '◈',
      title: 'Quality Components',
      text: 'Project-specific selection of modules, inverters and mounting systems.'
    },
    {
      icon: '₹',
      title: 'Transparent Proposal',
      text: 'Clear project scope and commercial communication.'
    },
    {
      icon: '◎',
      title: 'Net Metering Assistance',
      text: 'Support with the applicable documentation and process.'
    },
    {
      icon: '★',
      title: 'Long-Term Support',
      text: 'Installation support and assistance throughout the project lifecycle.'
    }
  ];

  /* ============================================================
     QUOTE FORM
  ============================================================ */

  quoteForm = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(2)
      ]
    ],

    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]
    ],

    city: [
      '',
      Validators.required
    ],

    systemType: [
      'On-Grid Solar',
      Validators.required
    ],

    monthlyBill: [
      ''
    ],

    message: [
      ''
    ]
  });

  /* ============================================================
     GETTERS
  ============================================================ */

  get activeSolutionData() {
    return this.solutions.find(
      item => item.id === this.activeSolution
    );
  }

  /* ============================================================
     SOLUTION SELECTION
  ============================================================ */

  selectSolution(
    type: SolarType
  ): void {

    this.activeSolution = type;

    setTimeout(() => {
      this.scrollTo('solution-details');
    }, 50);
  }

  /* ============================================================
     APPLICATION SELECTION
  ============================================================ */

  selectApplication(
    type: SolarType
  ): void {

    this.activeSolution = type;

    const application =
      this.applications.find(
        item => item.id === type
      );

    if (application) {
      this.openQuote(
        type === 'residential'
          ? 'Residential Rooftop Solar'
          : 'Commercial & Industrial Solar'
      );
    }
  }

  /* ============================================================
     QUOTE MODAL
  ============================================================ */

  openQuote(
    systemType?: string
  ): void {

    if (systemType) {
      this.quoteForm.patchValue({
        systemType
      });
    }

    this.quoteModalOpen = true;

    document.body.style.overflow = 'hidden';
  }

  closeQuote(): void {

    this.quoteModalOpen = false;

    document.body.style.overflow = '';
  }

  /* ============================================================
     ESC KEY
  ============================================================ */

  @HostListener(
    'document:keydown.escape'
  )
  onEscape(): void {

    if (this.quoteModalOpen) {
      this.closeQuote();
    }
  }

  /* ============================================================
     SCROLL
  ============================================================ */

  scrollTo(
    id: string
  ): void {

    const element =
      document.getElementById(id);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  /* ============================================================
     WHATSAPP
  ============================================================ */

  submitQuote(): void {

    this.submitted = true;

    if (this.quoteForm.invalid) {

      this.quoteForm.markAllAsTouched();

      return;
    }

    const value =
      this.quoteForm.getRawValue();

    const systemType =
      value.systemType ||
      'Solar Power System';

    const titleMap: Record<string, string> = {

      'On-Grid Solar':
        '☀️ ON-GRID SOLAR INSTALLATION ENQUIRY',

      'Off-Grid Solar':
        '🔋 OFF-GRID SOLAR POWER SOLUTION ENQUIRY',

      'Hybrid Solar':
        '⚡ HYBRID SOLAR SYSTEM ENQUIRY',

      'Residential Rooftop Solar':
        '🏠 RESIDENTIAL ROOFTOP SOLAR ENQUIRY',

      'Commercial & Industrial Solar':
        '🏢 COMMERCIAL & INDUSTRIAL SOLAR EPC ENQUIRY'
    };

    const title =
      titleMap[systemType] ||
      '☀️ SOLAR PROJECT ENQUIRY';

    const message = `
${title}
A-NIK & CO.
Solar • Electrical • EPC Solutions

━━━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━━━

👤 Name:
${value.name || 'Not provided'}

📱 Mobile:
${value.phone || 'Not provided'}

📍 Location:
${value.city || 'Not provided'}

━━━━━━━━━━━━━━━━━━━━
SOLAR REQUIREMENT
━━━━━━━━━━━━━━━━━━━━

⚡ System Type:
${systemType}

💡 Approx. Monthly Electricity Bill:
${
  value.monthlyBill
    ? `₹${value.monthlyBill}`
    : 'Not provided'
}

📋 Additional Requirement:
${
  value.message ||
  'Customer would like to discuss the solar installation requirement.'
}

━━━━━━━━━━━━━━━━━━━━
REQUEST FOR CONSULTATION
━━━━━━━━━━━━━━━━━━━━

Please contact me to discuss:

• Suitable solar system capacity
• Site feasibility
• Project cost & quotation
• Solar module & inverter options
• Subsidy eligibility / assistance
• Net-metering procedure
• Installation timeline
• Complete EPC scope

I would appreciate a consultation and detailed quotation based on my requirement.

Thank you.

Regards,
${value.name || 'Customer'}
`.trim();

    const whatsappUrl =
      `https://wa.me/${this.whatsappNumber}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    );

    this.closeQuote();

    this.quoteForm.reset({
      name: '',
      phone: '',
      city: '',
      systemType: 'On-Grid Solar',
      monthlyBill: '',
      message: ''
    });

    this.submitted = false;
  }

  /* ============================================================
     DIRECT WHATSAPP
  ============================================================ */

  openWhatsApp(): void {

    const message = `
☀️ SOLAR CONSULTATION REQUEST
A-NIK & CO.

Hello A-NIK & CO. Team,

I would like to discuss a solar installation requirement.

Please contact me for:
• Solar system recommendation
• Project quotation
• Subsidy assistance
• Net-metering guidance
• Installation & EPC support

Thank you.
`.trim();

    const url =
      `https://wa.me/${this.whatsappNumber}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );
  }

  /* ============================================================
     PHONE
  ============================================================ */

  callNow(): void {

    window.location.href =
      `tel:+${this.phoneNumber}`;
  }

  /* ============================================================
     FORM HELPERS
  ============================================================ */

  isInvalid(
    controlName: string
  ): boolean {

    const control =
      this.quoteForm.get(controlName);

    return !!(
      control &&
      control.invalid &&
      (control.touched || this.submitted)
    );
  }
}