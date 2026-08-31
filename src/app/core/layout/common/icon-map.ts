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
  ArrowRight
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
  arrowRight: ArrowRight
} as const;

export type IconName = keyof typeof ICONS;