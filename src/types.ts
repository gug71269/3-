export interface GuestbookEntry {
  id: string;
  name: string;
  relation: 'groom' | 'bride' | 'general';
  message: string;
  sealColor: string;
  createdAt: string;
}

export interface AccountDetail {
  bank: string;
  accountNumber: string;
  holder: string;
  relation: string;
}

export interface SideAccountInfo {
  side: 'groom' | 'bride';
  title: string;
  accounts: AccountDetail[];
}

export interface CeremonyRite {
  id: string;
  title: string;
  hanja: string;
  shortDesc: string;
  fullDesc: string;
  meaning: string;
  iconName: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  subCaption?: string;
}

export interface RsvpForm {
  name: string;
  side: 'groom' | 'bride';
  attendance: 'yes' | 'no';
  count: number;
  dining: 'yes' | 'no' | 'undecided';
  phone: string;
  message?: string;
}
