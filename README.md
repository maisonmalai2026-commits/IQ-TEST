# CogniScale Professional IQ Test

A static HTML/CSS/JavaScript test website. It includes:

- 41 original reasoning questions
- 25-minute timer
- clean professional layout
- sign-in gate before displaying the result
- IQ score estimate and domain breakdown
- no answer key or explanations shown in the final report

## How to view locally

1. Extract the ZIP file.
2. Open the extracted folder.
3. Double-click `index.html`.

## How to upload to GitHub Pages

Upload the extracted files directly to your repository root:

```text
index.html
styles.css
app.js
README.md
```

Do not upload only the ZIP file. GitHub Pages needs `index.html` in the root folder.

## Login note

The included sign-in screen is a front-end gate for a static website. It stores the name/email in the visitor's browser using localStorage. For real user accounts, passwords, dashboards, or saved results across devices, connect a backend service such as Firebase, Supabase, or your own server.
