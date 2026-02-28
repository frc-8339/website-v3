export const email = "penticton.robotics@gmail.com";
export const mrWalkerEmail = "jwalker@sd67.bc.ca";

export const competitionDate = new Date(1736010000000);

export const homeButtons: {
  title: string;
  url: string;
}[] = [
  { title: "Student Benefits", url: "/benefits" },
  { title: "Apply to Join", url: "https://l.tobycm.dev/prsignup" },
  { title: "Sponsor/Donate", url: "/power" },
  {
    title: "Join our newsletter",
    url: "https://a6d48789.sibforms.com/serve/MUIFAHA4a2bQgaDI2t2lG9Y5tvpSvvS9XLERjKR-IcBJZrR-8yuWNKN_Y5HBhJGhYze57PzdNb1XGW-1LW1iu_0MPq5UWiYzNmgi2feAkqF6VonwtH6M6qtExpa53u9c92lQJ5GMB0L81suX-11MO930HXfPapDQXgGfrBRdBWhzoLHh06aqe09KemRHKPuzTr7wFSFALUHIzViF9A==",
  },
];

export interface Sponsor {
  name: string;
  tier: "diamond" | "platinum" | "gold" | "silver" | "iron" | "bronze";
  image?: string; // only for sponsors from silver to diamond
  link?: string; // only for badges
  invertBackground?: boolean;
}

// Sponsors:

// Gold Sponsors
// Nufloors - $1,000
// FIRST Robotics - $1,250
// Greyback -$2,500
// Fraternal Order of Eagles - $1,000
// CUPE 523 - $1,000
// Rotary Club of Penticton - $1,000
// Kinetic - $1,500
// Community Futures Okanagan Similkameen - $1,000

// Silver Sponsors
// Rene and Anita Buttar - $500
// Penticton Foundry - $500
// Beem Credit Union - $500
// Brutus - $500

// Iron Sponsors
// Bradford Bookkeeping - $150
// Cutting Edge Countertops - $200
// Home Hardware - $150
// McLeod & Schneiderat - $300
// Dr. Buttar & Dr. Grewal Inc - $150
// Total Restoration - $200
// Marcus Makes - In-Kind
// Emochoice - In-Kind

export const sponsors: Sponsor[] = [
  { name: "Kinetic Custom Trailers", tier: "gold", image: "/images/sponsors/Kinetic.png", link: "https://kinetic-group.com/" },
  { name: "Fraternal Order of Eagles", tier: "gold", image: "/images/sponsors/FOE logo.svg", link: "https://bcfoe.com/" },
  { name: "Nufloors Penticton", tier: "gold", image: "/images/sponsors/Nufloors.png", link: "https://www.nufloors.ca/penticton" },
  { name: "Greyback Construction", tier: "gold", image: "/images/sponsors/Greyback.png", link: "https://www.greyback.com/", invertBackground: true },
  { name: "FIRST Robotics", tier: "gold", image: "/images/sponsors/FIRST.svg", link: "https://www.firstinspires.org/robotics/frc" },
  { name: "CUPE 523", tier: "gold", image: "/images/sponsors/CUPE 523.svg", link: "https://523.cupe.ca/" },
  { name: "Rotary Club", tier: "gold", image: "/images/sponsors/Rotary Club of Penticton.svg", link: "https://rotarypenticton.com/" },
  { name: "Community Futures Okanagan Similkameen", tier: "gold", image: "/images/sponsors/cfos.png", link: "https://www.cfokanagan.com/" },

  { name: "Penticton Foundry", tier: "silver", image: "/images/sponsors/Penticton Foundry.png", link: "https://www.pentictonfoundry.com/" },
  { name: "Beem Credit Union", tier: "silver", image: "/images/sponsors/Beem.png", link: "https://beemcreditunion.ca/", invertBackground: true },
  { name: "Rene and Anita Buttar", tier: "silver" },
  { name: "Brutus", tier: "silver", image: "/images/sponsors/Brutus.png", link: "https://www.brutusbodies.com/", invertBackground: true },
  { name: "Dash Digital", tier: "iron", image: "/images/sponsors/dashdigital.png", link: "https://www.dashdigital.ca/" },

  { name: "Home Hardware", tier: "iron" },
  { name: "Cutting Edge Counters", tier: "iron" },
  { name: "Bradford Bookkeeping", tier: "iron" },
  { name: "McLeod & Schneiderat", tier: "iron" },
  { name: "Dr. Buttar & Dr. Grewal Inc", tier: "iron" },
  { name: "Total Restoration", tier: "iron" },
  { name: "Marcus Makes", tier: "iron" },
  { name: "Emochoice", tier: "iron" },
];

export const sponsorFiles: string[] = [
  "/images/sponsors/Kinetic.svg",

  "/images/sponsors/TD Bank.svg",
  "/images/sponsors/Wyper Law.svg",
  "/images/sponsors/FIRST.svg",
  "/images/sponsors/Nufloors.svg",

  "/images/sponsors/Total Restoration.svg",
  "/images/sponsors/Neuhouzz.svg",
];

export const mediaGoogleDrive = "https://drive.google.com/drive/folders/1mS3VU2atscVExsfSAT5wZRaRGCx4G_-Z";

interface Objective {
  date: Date;
  name: string;
}

export const objectives: Objective[] = [
  {
    date: new Date(1736010000000),
    name: "2025 REEFSCAPE Kickoff",
  },
  {
    date: new Date(1736528400000),
    name: "2025 REEFSCAPE Prototyping",
  },
  {
    date: new Date(1737133200000),
    name: "2025 REEFSCAPE Finalizing Design",
  },
  {
    date: new Date(1738342800000),
    name: "2025 REEFSCAPE Individual Systems building",
  },
  {
    date: new Date(1739379600000),
    name: "2025 REEFSCAPE Robot Assembly",
  },
  {
    date: new Date(1740589200000),
    name: "2025 REEFSCAPE Competition",
  },
];

export const brevoFormUrl =
  "https://a6d48789.sibforms.com/serve/MUIFAHA4a2bQgaDI2t2lG9Y5tvpSvvS9XLERjKR-IcBJZrR-8yuWNKN_Y5HBhJGhYze57PzdNb1XGW-1LW1iu_0MPq5UWiYzNmgi2feAkqF6VonwtH6M6qtExpa53u9c92lQJ5GMB0L81suX-11MO930HXfPapDQXgGfrBRdBWhzoLHh06aqe09KemRHKPuzTr7wFSFALUHIzViF9A==";
