# Can Lv — Academic Homepage

A buildless, bilingual academic homepage designed for direct deployment to GitHub Pages or any static host.

## Preview locally

From the project directory:

```powershell
python -m http.server 4173 --directory dist
```

Then open `http://localhost:4173`.

## Deploy to GitHub Pages

Copy the contents of `dist/` to the root of a repository named `LvCan926.github.io`, then enable GitHub Pages from the repository settings. Alternatively, configure a GitHub Actions workflow to publish the `dist/` directory.

## Replace the avatar

Add a portrait as `dist/profile.jpg`, then replace the `.avatar` block in `dist/index.html` with:

```html
<div class="avatar avatar-photo">
  <img src="profile.jpg" alt="Portrait of Can Lv" />
</div>
```

Add the following rule to `dist/styles.css`:

```css
.avatar-photo img { width: 100%; height: 100%; object-fit: cover; border-radius: inherit; }
```

## Content notes

- The advisor name is standardized as `周仕佶 / Shiji Zhou`.
- Education dates were not supplied, so the site labels those entries by degree rather than inventing dates.
- Internship descriptions are intentionally broad until verified project details are available.
