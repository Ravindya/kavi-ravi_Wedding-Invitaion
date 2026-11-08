/**
 * Centralized Wedding Configuration
 * Exactly matching the Golden Poruwa traditional invitation assets and details.
 */

export interface WeddingConfig {
  couple: {
    groom: {
      firstNameEn: string;
      lastNameEn: string;
      fullNameEn: string;
      fullNameSi: string;
      nameOnlySi: string;
      parentsEn: string;
      parentsSi: string;
      phone: string;
    };
    bride: {
      firstNameEn: string;
      lastNameEn: string;
      fullNameEn: string;
      fullNameSi: string;
      nameOnlySi: string;
      parentsEn: string;
      parentsSi: string;
      phone: string;
    };
  };
  event: {
    weddingDate: string; // ISO 8601
    timeZone: string;
    year: string;
    monthEn: string;
    monthSi: string;
    day: string;
    dayOfWeekEn: string;
    dayOfWeekSi: string;
    timeEn: string;
    timeSi: string;
    traditionalAuspiciousTextSi: string;
    traditionalAuspiciousTextEn: string;
    ceremony: {
      titleEn: string;
      titleSi: string;
      poruwaTimeEn: string;
      poruwaTimeSi: string;
      receptionTimeEn: string;
      receptionTimeSi: string;
      dressCodeEn: string;
      dressCodeSi: string;
    };
    venue: {
      nameEn: string;
      nameSi: string;
      hallEn: string;
      hallSi: string;
      addressEn: string;
      addressSi: string;
      googleMapsUrl: string;
      embedMapUrl: string;
      image: string;
    };
  };
  rsvp: {
    deadlineDateEn: string;
    deadlineDateSi: string;
    deadlineIso: string;
    maxGuestsPerInvite: number;
    phoneGroom: string;
    phoneBride: string;
  };
  gallery: {
    id: string;
    titleEn: string;
    titleSi: string;
    src: string;
    alt: string;
    span?: string;
  }[];
  musicUrl: string;
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      firstNameEn: "Kavindu",
      lastNameEn: "Dilanka",
      fullNameEn: "Kavindu Dilanka",
      fullNameSi: "කවිඳු දිලංක",
      nameOnlySi: "කවිඳු",
      parentsEn: "Beloved son of Mr. Anura Weerakkodi & Mrs. Weerakkodi",
      parentsSi: "අනුර වීරක්කොඩි හා එම මැතිණියගේ\nආදරණිය පුත්",
      phone: "0723389970",
    },
    bride: {
      firstNameEn: "Ravindya",
      lastNameEn: "Divanjanai",
      fullNameEn: "Ravindya Divanjani",
      fullNameSi: "රවින්ධ්‍යා දිවාංජනී",
      nameOnlySi: "රවින්ධ්‍යා",
      parentsEn: "Beloved daughter of Mr. Keerthi Jayasooriya (Late) & Mrs. Somalatha Malkanthi",
      parentsSi: "කීර්ති ජයසූරිය(නැසීගිය) හා එම මැතිණියගේ\nආදරණිය දියණිය",
      phone: "0779180162",
    },
  },
  event: {
    weddingDate: "2027-03-10T17:00:00+05:30",
    timeZone: "Asia/Colombo",
    year: "2027",
    monthEn: "March",
    monthSi: "මාර්තු",
    day: "10",
    dayOfWeekEn: "Wednesday",
    dayOfWeekSi: "බදාදා",
    timeEn: "9:00 AM",
    timeSi: "පෙ.ව. 9.00",
    traditionalAuspiciousTextSi: "දෙදහස් විසිහතක් වු මැදින් මස දහ වන බදාදා\nඋදෑසන 9.00ට යෙදෙන සුභමොහොතින්\nයක්කල අමායා ග්‍රීන් හෝටලයේ\nග්‍රෑන්ඩ් බෝල්රූම්(1 වන මහල) හීදී",
    traditionalAuspiciousTextEn: "On Saturday, the 10th of March Two Thousand Twenty Seven\nat 9:00 in the morning\nat The Grand Ballroom (1st Floor), Amaya Green Hotel Yakkala",
    ceremony: {
      titleEn: "Wedding Ceremony & Poruwa Rituals",
      titleSi: "මංගල උත්සවය සහ පෝරුවේ චාරිත්‍රය",
      poruwaTimeEn: "Poruwa Ceremony: 9:30 AM",
      poruwaTimeSi: "පෝරුවේ චාරිත්‍රය: පෙ.ව. 9.30 ට",
      receptionTimeEn: "Followed by the Wedding Banquet",
      receptionTimeSi: "ඉන් අනතුරුව මංගල භෝජන සංග්‍රහය",
      dressCodeEn: "Traditional / Formal Attire",
      dressCodeSi: "සාම්ප්‍රදායික හෝ විධිමත් මංගල ඇඳුමින්",
    },
    venue: {
      nameEn: "Amaya Green Hotel Yakkala (Grand Ballroom - 1st Floor)",
      nameSi: "යක්කල අමායා ග්‍රීන් හෝටලය (ග්‍රෑන්ඩ් බෝල්රූම් - 1 වන මහල)",
      hallEn: "Grand Ballroom",
      hallSi: "ග්‍රෑන්ඩ් බෝල්රූම්",
      addressEn: "No. 110, Weeragula Road, Yakkala, Gampaha.",
      addressSi: "අංක 110, වීරගුල පාර, යක්කල, ගම්පහ.",
      googleMapsUrl: "https://maps.app.goo.gl/MkekYNh6HzVrmdru9",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2450064349355!2d80.04753809678957!3d7.097575900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fc4b40fc54c9%3A0x858977000067add1!2sAmaya%20Green%20Banquet%20Hall!5e0!3m2!1sen!2slk!4v1794120064720!5m2!1sen!2slk",
      image: "/golden-poruwa-demo/Hotel1.webp",
    },
  },
  rsvp: {
    deadlineDateEn: "February 20, 2027",
    deadlineDateSi: "2027 පෙබරවාරි 20",
    deadlineIso: "2027-02-20",
    maxGuestsPerInvite: 6,
    phoneGroom: "0723389970",
    phoneBride: "0779180162",
  },
  gallery: [
    {
      id: "preshoot-1",
      titleEn: "Moments of Love",
      titleSi: "ආදරණීය මතක",
      src: "/golden-poruwa-demo/gallery/preshoot-1.webp",
      alt: "Couple in traditional Kandyan wedding attire",
      span: "row-span-2",
    },
    {
      id: "preshoot-2",
      titleEn: "Together Forever",
      titleSi: "සදාකාලික බැඳීම",
      src: "/golden-poruwa-demo/gallery/preshoot-2.webp",
      alt: "Couple smiling together",
    },
    {
      id: "preshoot-3",
      titleEn: "Golden Sunset",
      titleSi: "රන්වන් සැඳෑව",
      src: "/golden-poruwa-demo/gallery/preshoot-3.webp",
      alt: "Romantic sunset portrait",
    },
    {
      id: "preshoot-4",
      titleEn: "The Journey Begins",
      titleSi: "නව දිවි ගමනක ඇරඹුම",
      src: "/golden-poruwa-demo/gallery/preshoot-4.webp",
      alt: "Traditional wedding rings and vows",
      span: "row-span-2",
    },
    {
      id: "preshoot-5",
      titleEn: "Sweet Smiles",
      titleSi: "සිනහ රැඳි මුහුණු",
      src: "/golden-poruwa-demo/gallery/preshoot-5.webp",
      alt: "Joyful couple portrait",
    },
    {
      id: "preshoot-6",
      titleEn: "Sacred Bond",
      titleSi: "පාරිශුද්ධ පෙම් සෙනෙහස",
      src: "/golden-poruwa-demo/gallery/preshoot-6.webp",
      alt: "Poruwa blessings and traditional garland",
    },
  ],
  musicUrl: "/golden-poruwa/music.mp3",
};
