import { CeremonyRite, GalleryPhoto, SideAccountInfo, GuestbookEntry } from '../types';
import traditionalCoupleImg from '../assets/images/traditional_couple_1786612138535.jpg';
import galleryPhoto1Img from '../assets/images/gallery_photo_1_1786612192674.jpg';
import galleryPhoto2Img from '../assets/images/gallery_photo_2_1786612206967.jpg';
import pyebaekImg from '../assets/images/pyebaek_ceremony_1786612156641.jpg';
import hanokEavesImg from '../assets/images/hanok_eaves_sunset_1786612174395.jpg';

export const WEDDING_DATE = '2027-05-15T12:00:00';

export const COUPLE_INFO = {
  groom: {
    name: '김현우',
    englishName: 'Hyunwoo Kim',
    phone: '010-1234-5678',
    father: '김관식',
    mother: '박명희',
    fatherAlive: true,
    motherAlive: true,
    relation: '장남',
    account: {
      bank: '신한은행',
      accountNumber: '110-345-678901',
      holder: '김현우',
    },
    fatherAccount: {
      bank: '국민은행',
      accountNumber: '204-21-0987-123',
      holder: '김관식',
    },
    motherAccount: {
      bank: '우리은행',
      accountNumber: '1002-876-543210',
      holder: '박명희',
    }
  },
  bride: {
    name: '이서연',
    englishName: 'Seoyeon Lee',
    phone: '010-9876-5432',
    father: '이정호',
    mother: '최은숙',
    fatherAlive: true,
    motherAlive: true,
    relation: '차녀',
    account: {
      bank: '카카오뱅크',
      accountNumber: '3333-01-9876543',
      holder: '이서연',
    },
    fatherAccount: {
      bank: '농협은행',
      accountNumber: '302-1234-5678-91',
      holder: '이정호',
    },
    motherAccount: {
      bank: '하나은행',
      accountNumber: '584-910234-12307',
      holder: '최은숙',
    }
  },
  event: {
    dateDisplay: '2027년 5월 15일 토요일',
    timeDisplay: '오후 12시 00분',
    lunarDisplay: '음력 2027년 4월 10일',
    venueName: '운현궁 한옥마을 라온홀',
    hallName: '라온 야외마당',
    address: '서울특별시 종로구 삼일대로 464 (운현궁)',
    detailAddress: '운현궁 한옥 야외 혼례장',
    phone: '02-733-5001',
    mapUrl: 'https://map.naver.com/',
  }
};

export const CEREMONY_RITES: CeremonyRite[] = [
  {
    id: 'jeonanrye',
    title: '전안례',
    hanja: '奠雁禮',
    shortDesc: '신랑이 기러기를 드리며 백년해로의 신의를 약속하는 예',
    fullDesc: '전안례는 신랑이 신부의 집에 도착하여 백년해로를 약속하며 나무 기러기(목안)를 바치는 의식입니다. 기러기는 한 번 인연을 맺으면 평생 짝을 지키고, 질서를 지키며, 어디를 가든 흔적을 남긴다는 삼덕(三德)을 상징하여 차가운 세파에도 흔들리지 않는 부부의 두터운 신의와 지조를 다짐합니다.',
    meaning: '기러기의 삼덕(덕목, 지조, 평생의 신의)을 마음에 새기는 도엄한 신뢰의 약속',
    iconName: 'Bird',
  },
  {
    id: 'gyobaerye',
    title: '교배례',
    hanja: '交拜禮',
    shortDesc: '신랑과 신부가 몸과 마음을 정갈히 하여 서로에게 예를 올리는 의식',
    fullDesc: '교배례는 신랑과 신부가 손을 씻어 정갈히 한 뒤, 대례상(大禮床)을 사이에 두고 서로에게 절을 올려 부부로서의 소중한 첫 인사를 나누는 고귀한 의식입니다. 음양의 이치에 따라 서로를 귀히 여기고 평생 존중하며 살아갈 것을 다짐합니다.',
    meaning: '서로를 고귀하게 존중하고 맞절로 음양의 조화를 이루는 인사의 시간',
    iconName: 'Sparkles',
  },
  {
    id: 'hapgeunrye',
    title: '합근례',
    hanja: '合卺禮',
    shortDesc: '하나의 표주박을 둘로 나눠 술을 마시며 부부로서 완전한 하나 됨을 선언',
    fullDesc: '합근례는 하나의 박에서 쪼개어진 두 개의 표주박 잔(근)에 술을 따라 마시는 술잔 의식입니다. 본래 하나였던 표주박이 둘로 나뉘었다가 다시 합쳐지듯, 서로 다른 삶을 살아온 두 남녀가 하나로 어우러져 완벽한 가정을 이루는 화합과 영원한 일체감을 상징합니다.',
    meaning: '둘이 만나 다시 하나의 완전함으로 어우러지는 백년가약의 완결',
    iconName: 'Wine',
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    url: traditionalCoupleImg || '/assets/images/traditional_couple_1786612138535.jpg',
    caption: '처음 만난 날',
    subCaption: '서로의 눈빛 속에 담긴 수줍은 인연의 시작'
  },
  {
    id: 'photo-2',
    url: galleryPhoto1Img || '/assets/images/gallery_photo_1_1786612192674.jpg',
    caption: '함께 웃었던 날',
    subCaption: '햇살 고운 한옥 뜰 아래 둘만의 고요한 미소'
  },
  {
    id: 'photo-3',
    url: galleryPhoto2Img || '/assets/images/gallery_photo_2_1786612206967.jpg',
    caption: '서로의 하루가 된 날',
    subCaption: '돌담길 따라 맞잡은 손 끝에 전해지는 따스함'
  },
  {
    id: 'photo-4',
    url: pyebaekImg || '/assets/images/pyebaek_ceremony_1786612156641.jpg',
    caption: '그리고 오늘',
    subCaption: '소중한 이들의 축복 속에 올리는 약속'
  },
  {
    id: 'photo-5',
    url: hanokEavesImg || '/assets/images/hanok_eaves_sunset_1786612174395.jpg',
    caption: '앞으로의 모든 날',
    subCaption: '백 년을 함께 걸어갈 아름다운 보금자리'
  }
];

export const INITIAL_GUESTBOOK: GuestbookEntry[] = [
  {
    id: 'gb-1',
    name: '김도현 & 박지민',
    relation: 'groom',
    message: '현우야, 서연님과의 아름다운 백년가약을 진심으로 축하한다! 한옥의 묵직한 운치처럼 깊고 단단하게 행복하길 바란다.',
    sealColor: '#9D3027',
    createdAt: '2026.08.12',
  },
  {
    id: 'gb-2',
    name: '이수진',
    relation: 'bride',
    message: '서연아! 학창시절부터 참 고왔던 네가 전통 혼례로 새 출발을 한다니 너무 멋지다. 두 사람 앞날에 봄날 고운 꽃길만 가득하렴!',
    sealColor: '#234B52',
    createdAt: '2026.08.11',
  },
  {
    id: 'gb-3',
    name: '강성호 선배',
    relation: 'general',
    message: '두 분의 귀한 인연이 하나 되는 기쁜 날을 온 마음으로 축하드립니다. 부디 서로에게 따뜻한 집이 되어 오랫동안 행복하시길!',
    sealColor: '#B4975A',
    createdAt: '2026.08.10',
  }
];
