/**
 * Copy images and assets from your old portfolio (5amsat/Elsawy) into macportfolio.
 * Run from repo root: node scripts/copy-portfolio-assets.js
 *
 * Prereq: Update OLD_PORTFOLIO_PATH below if your path is different.
 */
const fs = require("fs");
const path = require("path");

const OLD_PORTFOLIO_PATH = "E:\\REACTAPPS\\5amsat\\Elsawy";
const MAC_PORTFOLIO_PATH = path.resolve(__dirname, "..");
const PUBLIC_IMAGES = path.join(MAC_PORTFOLIO_PATH, "public", "images");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyFile(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn("Skip (not found):", src);
    return;
  }
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
  console.log("Copied:", path.basename(dest));
}

// Copy project screenshots: old public/projects/1.webp .. 16.webp -> public/images/1.webp .. 16.webp
ensureDir(PUBLIC_IMAGES);
const oldProjects = path.join(OLD_PORTFOLIO_PATH, "public", "projects");
if (fs.existsSync(oldProjects)) {
  for (let i = 1; i <= 16; i++) {
    const src = path.join(oldProjects, `${i}.webp`);
    const dest = path.join(PUBLIC_IMAGES, `${i}.webp`);
    copyFile(src, dest);
  }
} else {
  console.warn("Old portfolio projects folder not found:", oldProjects);
}

// Copy profile photo if you have one in old portfolio (e.g. in public or elsewhere)
const possibleProfile = [
  path.join(OLD_PORTFOLIO_PATH, "public", "profile.jpg"),
  path.join(OLD_PORTFOLIO_PATH, "public", "me.jpg"),
  path.join(OLD_PORTFOLIO_PATH, "public", "elsawy.jpg"),
];
for (const src of possibleProfile) {
  if (fs.existsSync(src)) {
    const ext = path.extname(src);
    copyFile(src, path.join(PUBLIC_IMAGES, `elsawy${ext}`));
    break;
  }
}

console.log("\nDone. Add your profile photo as public/images/elsawy.jpg if needed.");
