import {
  MapPin,
  PhoneCall,
  Mail,
  Globe,
  Clock,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  ArrowDown,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Sun,
  Zap,
  ClipboardList,
  ShieldCheck,
  Clipboard,
  Building2,
  Settings,
  Users,
  Briefcase,
  FileText,
  Download,
  ExternalLink,
  Check,
  CircleCheck,
  CircleAlert,
  Search,
  Home,
  User,
  LogIn,
  LogOut,
  Send,
  Calculator,
  PanelTop,
  Wrench,
  Monitor,
  Network,
  Server,
  Camera,
  Factory
} from 'lucide-angular';


/* =========================================================
   A-NIK & CO.
   CENTRAL ICON MAP

   Lucide icons + Social brand icons
   ========================================================= */

export const ICONS = {

  /* =======================================================
     NAVIGATION
     ======================================================= */

  menu: Menu,
  close: X,

  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,


  /* =======================================================
     ARROWS
     ======================================================= */

  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  externalLink: ExternalLink,


  /* =======================================================
     CONTACT
     ======================================================= */

  mapPin: MapPin,
  phone: PhoneCall,
  mail: Mail,
  globe: Globe,
  clock: Clock,
  message: MessageCircle,
  messageCircle: MessageCircle,


  /* =======================================================
     COMMON
     ======================================================= */

  check: Check,
  checkCircle: CircleCheck,
  alert: CircleAlert,

  search: Search,
  download: Download,
  send: Send,


  /* =======================================================
     BUSINESS
     ======================================================= */

  building: Building2,
  factory: Factory,
  users: Users,
  briefcase: Briefcase,
  settings: Settings,

  fileText: FileText,
  clipboard: Clipboard,
  clipboardList: ClipboardList,

  shieldCheck: ShieldCheck,


  /* =======================================================
     ENGINEERING / SOLAR
     ======================================================= */

  sun: Sun,
  zap: Zap,
  calculator: Calculator,
  wrench: Wrench,
  panel: PanelTop,


  /* =======================================================
     IT
     ======================================================= */

  monitor: Monitor,
  network: Network,
  server: Server,
  camera: Camera,


  /* =======================================================
     USER
     ======================================================= */

  user: User,
  login: LogIn,
  logout: LogOut,


  /* =======================================================
     GENERAL
     ======================================================= */

  home: Home,


  /* =======================================================
     SOCIAL BRAND ICONS

     These are rendered as SVG inside AppIconComponent.
     They are NOT Lucide icons.
     ======================================================= */

  linkedin: 'linkedin',
  instagram: 'instagram',
  facebook: 'facebook',
  whatsapp: 'whatsapp'

} as const;


/* =========================================================
   ICON NAME TYPE
   ========================================================= */

export type IconName = keyof typeof ICONS;