# Frontend Wizards Stage 1B

This project contains required Stage 1B tasks:

Stage 1B: Testable Profile Card

## Live URL

Add your hosted URL here after deployment:

- Live: `<your-live-url>`

## Repository URL

Add your GitHub repository URL:

- Repo: `<your-repo-url>`

## Run locally

Because this is plain HTML/CSS/JS, open `index.html` directly in a browser, or use a local server.

Example with VS Code Live Server:

1. Open the folder in VS Code.
2. Start Live Server on `index.html`.

## Stage 1B (Testable Profile Card)

Implemented all required content with exact test IDs:

- `test-profile-card`
- `test-user-name`
- `test-user-bio`
- `test-user-time` (updates continuously in milliseconds)
- `test-user-avatar` (with meaningful `alt`)
- `test-user-social-links` (+ individual social test IDs)
- `test-user-hobbies`
- `test-user-dislikes`

Also implemented:

- Semantic HTML (`article`, `header`, `figure`, `nav`, `section`, lists)
- Keyboard-focusable social links with visible focus style
- `target="_blank"` + `rel="noopener noreferrer"` on social links

## Responsive behavior

Designed for:

- Mobile (320px): vertical stacking, form fields stack cleanly
- Tablet (768px): improved spacing and two-column form details
- Desktop (1024px+): richer layout with avatar/content split and aligned controls

The layout avoids overflow with long titles and long description text via wrapping and collapsible content.

## Known limitations

- Delete action currently hides the todo card in UI only (no undo, no persistence).
- Data is in-memory and resets on page refresh.

## Submission checklist

Before submission, update this README with:

- Hosted live URL
- Final repository URL
- Any extra notes for evaluators

Submission form:

- [Submission Form](https://docs.google.com/forms/d/e/1FAIpQLSfyENWbGf9qRkmDj77BIEAPkO0WwIqDpeR6_dte026HA-KuWQ/viewform)
