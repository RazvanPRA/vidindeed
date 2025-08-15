import type { User } from "./types";

export const users: User[] = [
  { id: "1", email: "admin@example.com", password: "admin123", role: "Admin" },
  {
    id: "2",
    email: "worker@example.com",
    password: "worker123",
    role: "Worker",
  },
  {
    id: "3",
    email: "customer@example.com",
    password: "cust123",
    role: "Customer",
  },
];

export const workers = [
  { id: "p1",  firstName: "Claudiu",    lastName: "Oprișan" },
  { id: "p2",  firstName: "Ana-Maria",  lastName: "Popescu" },
  { id: "p3",  firstName: "Andrei",     lastName: "Ionescu" },
  { id: "p4",  firstName: "Ioana",      lastName: "Dumitrescu" },
  { id: "p5",  firstName: "Mihai",      lastName: "Georgescu" },
  { id: "p6",  firstName: "Elena",      lastName: "Stan" },
  { id: "p7",  firstName: "Radu",       lastName: "Marin" },
  { id: "p8",  firstName: "Cristina",   lastName: "Petrescu" },
  { id: "p9",  firstName: "Vlad",       lastName: "Stoica" },
  { id: "p10", firstName: "Alexandra",  lastName: "Munteanu" },
  { id: "p11", firstName: "Sorin",      lastName: "Ene" },
  { id: "p12", firstName: "Gabriela",   lastName: "Dobre" },
  { id: "p13", firstName: "Bogdan",     lastName: "Rusu" },
  { id: "p14", firstName: "Cătălina",   lastName: "Neagu" },
  { id: "p15", firstName: "Florin",     lastName: "Matei" },
  { id: "p16", firstName: "Raluca",     lastName: "Pavel" },
  { id: "p17", firstName: "Octavian",   lastName: "Barbu" },
  { id: "p18", firstName: "Diana",      lastName: "Ilie" },
  { id: "p19", firstName: "Ștefan",     lastName: "Voicu" },
  { id: "p20", firstName: "Irina",      lastName: "Drăghici" },
];


export const jobs = [
  {
    jobId: "28766",
    created: "April 27th 2025, 10:18PM",
    typeZone: "(GMT -6:00) Central Time",
    address: "Wendover Pl, Champaign, IL",
    service: "Video Edit Pack",
    distribuitorID: "674",
    boEmail: "example@exe.com",
    photographerEmail: "team@illini360.com",
    source: "https://example.com/video/28766",
    intructions: "Trim start/end, color grade, add intro",
    length: "3 Min",
    orderClips: "A, B, C",
    job: "JOB In progress",
    sinn: "RAJ",
    status: "In Progress",
    workerList:workers
  },
  {
    jobId: "28767",
    created: "May 2nd 2025, 02:45PM",
    typeZone: "(GMT -5:00) Eastern Time",
    address: "1600 Amphitheatre Parkway, Mountain View, CA",
    service: "Highlight Reel",
    distribuitorID: "675",
    boEmail: "prod@videosvc.com",
    photographerEmail: "photo@shootersinc.com",
    source: "https://example.com/video/28767",
    intructions: "Select top 10 moments, sync music, fade transitions",
    length: "5 Min",
    orderClips: "Clip1, Clip3, Clip7",
    job: "JOB Completed",
    sinn: "MKL",
    status: "Completed",
    workerList:workers
  },
  {
    jobId: "28768",
    created: "June 15th 2025, 09:10AM",
    typeZone: "(GMT +1:00) Central European Time",
    address: "Schönhauser Allee 175, 10119 Berlin, Germany",
    service: "Social Media Clips",
    distribuitorID: "676",
    boEmail: "social@mediacorp.de",
    photographerEmail: "berlin@photoagency.de",
    source: "https://example.de/video/28768",
    intructions: "Create 3 vertical clips (15s each), add subtitles",
    length: "45 Sec total",
    orderClips: "SeqA, SeqB, SeqC",
    job: "JOB Pending",
    sinn: "BRL",
    status: "Not Assigned",
    workerList: workers
  },
  {
    jobId: "28769",
    created: "July 1st 2025, 07:30PM",
    typeZone: "(GMT +0:00) Greenwich Mean Time",
    address: "221B Baker Street, London, UK",
    service: "Corporate Promo",
    distribuitorID: "677",
    boEmail: "promo@corpmedia.co.uk",
    photographerEmail: "studio@londonphoto.co.uk",
    source: "https://corpmedia.co.uk/video/28769",
    intructions: "Add logo animation, voice‑over sync, logo outro",
    length: "2 Min",
    orderClips: "Intro, Body, Outro",
    job: "JOB In review",
    sinn: "LND",
    status: "Approved",
    workerList:workers
  },
];


