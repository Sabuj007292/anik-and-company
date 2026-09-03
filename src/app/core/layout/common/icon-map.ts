import {
  MapPin,
  PhoneCall,
  Mail,
  Globe,
  Clock,
  MessageCircle,
  Facebook,
  Linkedin,
  Instagram,
  ArrowRight,
  Sun,
  Zap,
  ClipboardList,
  ShieldCheck,
  Clipboard,
  User,
  Factory,
  
} from 'lucide-angular';

export const ICONS = {
  mapPin: MapPin,
  phone: PhoneCall,
  mail: Mail,
  globe: Globe,
  clock: Clock,
  whatsapp: MessageCircle,
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
  arrowRight: ArrowRight,
  sun: Sun,
  zap: Zap,
  ClipboardList: ClipboardList,
  ShieldCheck: ShieldCheck,
  clipboard: Clipboard,
  user: User,
  messageCircle: MessageCircle,
  factory: Factory,
  shieldCheck: ShieldCheck,

} as const;

export type IconName = keyof typeof ICONS;