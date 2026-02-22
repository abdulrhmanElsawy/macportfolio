/**
 * Work folders (Finder) from your old portfolio.
 * Image paths: public/images/1.webp through 16.webp (same order as projects).
 */
const FOLDER_POSITIONS = [
  "top-10 left-5",
  "top-10 left-40",
  "top-10 right-40",
  "top-10 right-5",
  "top-36 left-5",
  "top-36 left-40",
  "top-36 right-40",
  "top-36 right-5",
  "top-52 left-5",
  "top-52 left-40",
  "top-52 right-40",
  "top-52 right-5",
  "top-72 left-5",
  "top-72 left-40",
  "top-72 right-40",
  "top-72 right-5",
];

const projects = [
  { id: 1, titleEn: "BROS", desEn: "A premium dessert and drinks destination offering a variety of cakes, waffles, crepes, coffee, and matcha.", link: "https://bros-ksa.com/" },
  { id: 2, titleEn: "Sharjah Police", desEn: "The official website of the Sharjah Police Headquarters, providing digital services for traffic, security, and community inquiries.", link: "https://www.shjpolice.gov.ae/" },
  { id: 3, titleEn: "Al Mohtawa", desEn: "A Saudi company specializing in information technology and business solutions, offering digital transformation, infrastructure, and data management services.", link: "https://almohtawa.com.sa/" },
  { id: 4, titleEn: "ACPCA", desEn: "A construction and contracting company specializing in building construction, roads, bridges, infrastructure projects, and equipment rental.", link: "https://acpca.net/" },
  { id: 5, titleEn: "New Trend", desEn: "A luxury car rental service based in Riyadh, offering premium vehicles for business, special events, and airport transfers.", link: "https://newtrendsa.com/" },
  { id: 6, titleEn: "Proeffect", desEn: "A media production and digital assets agency offering services like video production, animation, event documentation, and auditory identity design.", link: "https://proeffect.sa/" },
  { id: 7, titleEn: "EgyPet", desEn: "A comprehensive pet care platform in Egypt connecting pet owners with vets, shops, adoption services, and lost & found assistance.", link: "https://egypet.site/" },
  { id: 8, titleEn: "Magic Fixer", desEn: "A building maintenance company in the UAE providing plumbing, electrical, HVAC, and general repair services.", link: "https://magicfixer.net/" },
  { id: 9, titleEn: "Magic Building Material Trading", desEn: "A leading trading company in the UAE supplying electrical, plumbing, hardware, and power tool products.", link: "https://magicdxb.com/" },
  { id: 10, titleEn: "Aurora Marketing Agency", desEn: "A Jeddah-based marketing agency providing branding, advertising, social media management, and event activation services.", link: "https://aurora-ksa.com/" },
  { id: 11, titleEn: "Egypt Fresh Energy", desEn: "An agricultural enterprise focused on producing and exporting premium fresh fruits and vegetables from farm to table.", link: "https://egyptfreshenergy.com/" },
  { id: 12, titleEn: "Iridium Infinite", desEn: "A service provider assisting healthcare professionals with medical licensing, certification, and employment processes in the UAE and GCC.", link: "https://www.iridiuminfinte.com/" },
  { id: 13, titleEn: "OFSAERA", desEn: "A technical consultancy firm specializing in financial services analytics, data management, and OFSAA administration.", link: "https://ofsaera.com/" },
  { id: 14, titleEn: "Bluray Media", desEn: "A creative agency offering artistic production, digital marketing, TV/film production, and health sector marketing strategies.", link: "https://www.bluray-media.com/" },
  { id: 15, titleEn: "SunMaxAuto", desEn: "A premium automotive care center specializing in car wrapping, paint protection films (PPF), and detailing services.", link: "https://sunmaxauto.ae/" },
  { id: 16, titleEn: "Meister", desEn: "A subsidiary of Nesma Batterjee specializing in manufacturing high-quality construction chemicals like adhesives and waterproofing.", link: "https://www.meister-me.com/" },
];

function slug(name) {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export const workProjectsForFinder = projects.map((p, index) => {
  const folderId = 4 + index + 1;
  const pos = FOLDER_POSITIONS[index % FOLDER_POSITIONS.length];
  const fileSlug = slug(p.titleEn);
  return {
    id: folderId,
    name: p.titleEn,
    icon: "/images/folder.png",
    kind: "folder",
    position: pos,
    children: [
      {
        id: 1,
        name: `${p.titleEn} Project.txt`,
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        position: "top-5 left-10",
        description: p.desEn.split(". ").filter(Boolean).map((s) => (s.endsWith(".") ? s : s + ".")),
      },
      {
        id: 2,
        name: `${fileSlug}.com`,
        icon: "/images/safari.png",
        kind: "file",
        fileType: "url",
        href: p.link,
        position: "top-10 right-20",
      },
      {
        id: 4,
        name: `${fileSlug}.png`,
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 right-80",
        imageUrl: `/images/${p.id}.webp`,
      },
    ],
  };
});
