# Fixing the Google Ads "Birth Control, Fertility, and Testing" Disapproval

This document records how we cleared the **"Birth Control, Fertility, and Testing"**
policy disapproval on the Klinik Keluarga Bertam Impian Google Ads campaign, so the
same issue can be fixed quickly if it recurs.

- **Site:** https://www.klinikkeluargabertamimpian.my
- **Policy:** Birth Control, Fertility, and Testing (country-restricted — was disallowed in 25 targeted countries)
- **Outcome:** Ad approved after removing/rewording reproductive-health content and replacing medical photos with icons.
- **Reference clinic that never got flagged:** https://klinikhaya.my/

---

## TL;DR — the checklist

If the campaign gets disapproved under this policy again, work through this in order:

1. **Never use these words anywhere on the landing page** (this was the #1 trigger):
   - `Perancang Keluarga` / `perancangan keluarga` (family planning)
   - `kaedah perancang` (contraceptive methods), contraception, birth control, IUD, pil perancang
2. **Remove reproductive "testing" content**, especially:
   - `Saringan Kanser Pangkal Rahim` / pap smear / cervical screening
   - Any `HIV test` / STD/STI testing images or copy (we even had a stray unused
     `public/rawatanumum/HIVtest.jpeg` that had to go)
3. **Use icons, not photos**, for the services section — clinical/medical photos can be
   classified as reproductive/medical content by the crawler. We swapped every service
   photo for a bundled `@iconify/react` `medical-icon`.
4. **Pregnancy / antenatal / women's health CAN stay** — Klinik Haya keeps ultrasound,
   antenatal, women's health, and menstrual/hormone services and still passes. So don't
   nuke everything; the killers are *contraception* and *reproductive testing*, not
   maternity care.
5. **Deploy first, then re-appeal.** A disapproval does NOT auto-clear when you change the
   page — the "Failed" status shown is from the previous appeal. You must redeploy, verify
   the live site, then file a fresh **Request review / Appeal**.
6. **If it still fails with a clean page, the trigger is at the campaign level, not the
   code:**
   - **Ad copy** wording (e.g. "Klinik Mesra Wanita…").
   - **Country targeting** — this policy is restricted in ~25 specific countries. Targeting
     Malaysia only (like Klinik Haya) avoids the restriction entirely.

---

## Timeline of what we changed (in order)

Each step was deployed and re-appealed; the appeal result is noted.

| # | Commit | Change | Appeal result |
|---|--------|--------|---------------|
| 1 | `d87d282`→ earlier | Removed **"Perancang Keluarga"** item + "perancangan keluarga" wording from the Kesihatan Wanita section, deleted its image | Still Failed |
| 2 | — | Removed the **entire "Kesihatan Wanita dan Sokongan Ibu Hamil"** section (antenatal, pregnancy vaccination, ultrasound, pap smear, lactation) + images | Still Failed |
| 3 | `b80ab2b` | Restored maternity care with compliant framing ("Penjagaan Ibu Hamil", "Buku Pink"), kept **pap smear out** | Still Failed |
| 4 | `6145beb` | Removed the maternity section again (per request) | **Partially successful** |
| 5 | `d87d282` | **Replaced all service photos with `@iconify/react` icons**; deleted all service image folders incl. stray `HIVtest.jpeg` | Improved |
| 6 | `1861966` | **Mirrored Klinik Haya's service listing** exactly (icon-only cards, two groups) | **Approved** |

> The two changes that mattered most were **(a) removing contraception + reproductive-testing
> terms** and **(b) replacing medical photos with icons**. Once the page matched Klinik Haya's
> icon-based, contraception-free listing, the ad was approved.

---

## The winning landing-page pattern (mirror of Klinik Haya)

The services section (`src/components/sections/services.tsx`) is now icon-only, split into
two groups. Keep it this way.

### Group 1 — "Kepakaran Kami" (8 services, with descriptions)

1. Pemeriksaan Ultrasound Antenatal
2. Kesihatan Wanita
3. Postnatal Laktasi & Penyusuan Ibu
4. Penjagaan Ibu Mengandung
5. Masalah Haid & Hormon
6. Pembedahan Kecil & Prosedur
7. Pediatrik & Vaksinasi
8. Saringan Kesihatan

### Group 2 — "Lain-lain Perkhidmatan Kami" (compact icon cards)

Rawatan Am & Akut · Medical Checkup Pelajar/Prapekerjaan · Ujian Darah, Air Kencing & ECG ·
Rawatan Denggi, COVID-19 & Influenza · Pemeriksaan Kuning Bayi (Jaundis) · Nebuliser & Sedut
Kahak · Rawatan Cuci Luka · Suntikan Vaksin Dewasa dan Kanak-kanak · Kesihatan Mental &
Kaunseling · Pembedahan Ketuat dan Ketumbuhan Kulit · Khatan Kanak-kanak · Khatan Dewasa ·
Suntikan Sendi (Intraarticular Injection)

### Implementation notes

- Icons come from the **bundled** `@iconify-json/medical-icon` collection, registered once
  with `addCollection(medicalIcons)` — so they render offline with **no runtime Iconify API
  calls**. Only use icon names that exist in that set (list them with:
  `node -e "console.log(Object.keys(require('./node_modules/@iconify-json/medical-icon/icons.json').icons).join('\n'))"`).
- **No `<Image>` / `next/image` photos** in the services section.
- There is one generic `ultrasound` word left in `src/components/sections/about.tsx` (listed
  with ECG/blood tests/emergency). It's generic diagnostic imaging, low risk, and was fine to
  keep. Remove it only if a future disapproval persists after everything else is clean.

---

## Words / assets to keep OFF the landing page

**Blocked (reproductive contraception & testing):**
`perancang keluarga`, `perancangan keluarga`, `kaedah perancang`, contraception, birth
control, IUD, `pil perancang`, `Saringan Kanser Pangkal Rahim`, pap smear, cervical
screening, `HIV test`, STD/STI testing.

**Safe (proven by Klinik Haya):**
antenatal / `ultrasound antenatal`, `Penjagaan Ibu Mengandung`, `Kesihatan Wanita`,
`Masalah Haid & Hormon`, lactation / `penyusuan`, pediatrics, vaccination, general
screening (`Saringan Kesihatan`), minor surgery, wound care.

---

## If it happens again — quick procedure

1. Run a search for the blocked words across the repo:
   ```bash
   grep -rniE "perancang|kaedah perancang|contracepti|birth control|IUD|pangkal rahim|pap ?smear|HIV|STD|STI" src/ public/
   ```
2. Remove/reword any hits. Prefer **icons over medical photos** in service listings.
3. Delete orphaned images from `public/` (they can still be crawled even if unlinked).
4. `npx tsc --noEmit` to confirm the build is clean.
5. Commit, push, and **wait for the deploy** to go live.
6. Verify the live site with a fetch/visit — confirm the offending content is gone.
7. In Google Ads, open the disapproved ad → **Request review / Appeal**. Note in the appeal
   that the flagged content has been removed.
8. If still disapproved with a clean page → fix **ad copy** and **country targeting** in the
   Google Ads console (target Malaysia only, like Klinik Haya).
