# Amir Ashraf’s portfolio

A bilingual English/Arabic portfolio for Amir Ashraf, a mechatronics engineering student. Built with React, TypeScript, and Vite, with Amir’s supplied portrait, responsive layouts, bilingual Read more controls, invention illustrations, achievement cards, and all 24 supplied award certificates.

## Local development

```sh
bun install
bun run dev
```

Production checks and preview:

```sh
bun run build
bun run lint
bun run preview
```

## Content

Edit `src/content.ts` to update both languages. English is the default; the language switch updates the document language and direction and saves the preference locally. All certificates live in `public/awards/` as optimized WebP previews and upright PDFs.

The homepage features three certificates. React Router serves the complete bilingual gallery at `/certificates`. Production hosting must rewrite non-asset paths to `index.html` so direct links and page refreshes work.

### Rotate certificates

```sh
bun run rotate-certificates
```

The script rotates the sideways source PDFs 90° left, rebuilds the WebP previews from the upright PDFs, and generates actual image dimensions and cache versions in `src/certificateImages.ts`. The page uses those dimensions to show the complete certificates at every screen size. Requires Python 3, Ghostscript, Poppler (`pdftoppm`), and FFmpeg on PATH; the script also detects tools installed through Nix.

Unmodified source PDFs are saved once in the Git-ignored `.certificate-originals/` directory. Subsequent runs rebuild from those originals, preventing repeated rotation. A fresh checkout recognizes the generated upright PDFs through their recorded hashes. When replacing a source certificate, replace its backup PDF as well before regenerating.

The biography and certificates supplied in `New WinRAR archive.rar` are the source material. The original archive is excluded from Git. Invention descriptions distinguish ideas from tested results; no granted patents or measured efficiency figures are claimed. No contact details were supplied, so there are no contact buttons or placeholder addresses.

Certificate provenance:

| Portfolio asset | Source archive file |
| --- | --- |
| Egypt Innovates recognition | `File.PDF` |
| National third place | `File0003.PDF` |
| Directorate first place | `File0016.PDF` |
| District first place | `File0022.PDF` |
| Science fair participation, 2019 | `File0013.PDF` |
| Science fair participation, 2020 | `File0020.PDF` |

## Git origin

The intended origin is `git@github.com:zieko33/amir-ashraf-portfolio.git`. The provided environment has an empty, read-only `.git` directory, so repository initialization cannot complete there. Run these commands in a writable checkout:

```sh
git init
git remote add origin git@github.com:zieko33/amir-ashraf-portfolio.git
git remote -v
```

If `origin` already exists, use `git remote set-url origin git@github.com:zieko33/amir-ashraf-portfolio.git` instead. Repository files can also be published through the connected GitHub app without modifying local Git metadata. The portfolio has not been deployed.

## Validation

The production build and ESLint pass. Both languages were rendered to HTML and checked for section targets, project controls, translations, and the existence of all 24 certificate previews and PDFs. Visual browser and live interaction checks remain unverified because this environment prevents local server binding and Chromium startup.
