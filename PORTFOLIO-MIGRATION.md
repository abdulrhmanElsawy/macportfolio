# Portfolio migration (Elsawy content)

Your **macportfolio** app is now wired to **your** data from the old portfolio at `E:\REACTAPPS\5amsat\Elsawy`.

## What was updated

- **Contact / socials**: GitHub (abdulrhmanElsawy), Facebook, LinkedIn (abdelrhman-elsawy), Khamsat reviews link.
- **Work (Finder)**: 16 projects from your old portfolio (BROS, Sharjah Police, Al Mohtawa, ACPCA, New Trend, Proeffect, EgyPet, Magic Fixer, Magic Building Material Trading, Aurora, Egypt Fresh Energy, Iridium Infinite, OFSAERA, Bluray Media, SunMaxAuto, Meister). Each folder has a `.txt` (description), a link (`.url`), and an image (`.png` → image from project).
- **About**: Image paths and about-me copy now reference you (Abdelrhman Elsawy). Placeholder image paths: `elsawy.jpg`, `elsawy-2.jpg`, `elsawy-3.jpg`.
- **Contact window**: Uses `elsawy.jpg` and your name.

## What you need to do

### 1. Copy project images from the old portfolio

Project images are expected at `public/images/1.webp` … `public/images/16.webp` (same names as in your old `public/projects/`).

**Option A – run the script (from repo root):**

```bash
node scripts/copy-portfolio-assets.js
```

If your old portfolio is not at `E:\REACTAPPS\5amsat\Elsawy`, edit `scripts/copy-portfolio-assets.js` and set `OLD_PORTFOLIO_PATH` to your path, then run the command again.

**Option B – copy manually**

- From: `E:\REACTAPPS\5amsat\Elsawy\public\projects\`
- To: `E:\REACTAPPS\macportfolio\public\images\`
- Keep the same names: `1.webp`, `2.webp`, … `16.webp`.

### 2. Add your profile photo(s)

- Put your main photo at **`public/images/elsawy.jpg`** (used in Contact and About).
- Optionally add **`elsawy-2.jpg`** and **`elsawy-3.jpg`** for the extra About me images (or reuse `elsawy.jpg` by copying it).

### 3. (Optional) Tweak About me text

In `src/constants/index.js`, search for `"Hey! I'm Adrian"` in `ABOUT_LOCATION` and replace that block with your own short bio (the image paths there already point to `elsawy.jpg`).

### 4. (Optional) Resume and gallery

- **Resume**: Replace `public/files/resume.pdf` with your PDF, or leave as is.
- **Gallery**: Edit the `gallery` array in `src/constants/index.js` and add your own image paths under `public/images/` if you want different photos in the Gallery window.

## Removing the old placeholder block in constants

There is a leftover block in `src/constants/index.js` named `_WORK_LOCATION_PLACEHOLDER_REMOVE` (the previous 3 sample projects). It is unused. You can delete that entire block (from `const _WORK_LOCATION_PLACEHOLDER_REMOVE = {` down to its closing `};`) to keep the file clean.

## Project data source

Your 16 projects are defined in **`src/data/elsawyWork.js`**. To add/remove or edit projects, change that file; the Finder “Work” section reads from it.
