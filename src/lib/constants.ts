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
  { title: "Events", url: "/events" },
];

export interface Sponsor {
  name: string;
  tier: "diamond" | "platinum" | "gold" | "silver" | "iron" | "bronze";
  badge?: string; // only for sponsors from silver to diamond
  link?: string; // only for badges
}

// Sponsors:

// Kinetic Custom Trailers - Platinum
// TD Bank - Gold
// Nufloors Penticton - Gold
// Wyper Law - Gold
// FRC Grant - Gold
// Neuhouzz Real Estate - Silver
// Total Restoration - Silver
// Tony's Meats - Iron
// Cutting Edge Counters - Iron
// Bradford Bookkeeping - Iron
// Westland Insurance - Iron
// Drew Ashton - Bronze

export const sponsors: Sponsor[] = [
  { name: "Kinetic Custom Trailers", tier: "platinum", badge: "/images/sponsors/Kinetic.svg", link: "https://kinetic-group.com/" },

  { name: "TD Bank", tier: "gold", badge: "/images/sponsors/TD Bank.svg", link: "https://www.td.com/ca/en/personal-banking/" },
  { name: "Nufloors Penticton", tier: "gold", badge: "/images/sponsors/Nufloors.svg", link: "https://www.nufloors.ca/penticton" },
  { name: "Wyper Law", tier: "gold", badge: "/images/sponsors/Wyper Law.svg", link: "https://wyperlaw.ca/" },
  { name: "FRC Grant", tier: "gold", badge: "/images/sponsors/FIRST.svg", link: "https://www.firstinspires.org/robotics/frc" },

  { name: "Neuhouzz Real Estate", tier: "silver", badge: "/images/sponsors/Neuhouzz.svg", link: "https://neuhouzz.ca/" },
  { name: "Total Restoration", tier: "silver", badge: "/images/sponsors/Total Restoration.svg", link: "https://totalrestoration.ca/" },

  { name: "Tony's Meats", tier: "iron" },
  { name: "Cutting Edge Counters", tier: "iron" },
  { name: "Bradford Bookkeeping", tier: "iron" },
  { name: "Westland Insurance", tier: "iron" },

  { name: "Drew Ashton", tier: "bronze" },
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

export const photoDrive2024 = "https://drive.google.com/drive/folders/1mS3VU2atscVExsfSAT5wZRaRGCx4G_-Z";

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
