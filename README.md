# Frontend Stage 1B: Testable Profile Card

This repository contains a responsive, accessible profile card built with plain HTML, CSS, and JavaScript.

## Live Demo

- Live URL: `<add-your-live-url>`

## Repository

- GitHub URL: `<add-your-repo-url>`

## Tech Stack

- HTML5 (semantic structure)
- CSS3 (responsive layout with Grid/Flexbox)
- Vanilla JavaScript (epoch time updates and theme behavior)

## Run Locally

1. Clone the repository.
2. Open the project folder.
3. Open `index.html` in a browser, or run with VS Code Live Server.

## Stage 1B Requirement Coverage

The following required test IDs are implemented:

- `test-profile-card`
- `test-user-name`
- `test-user-bio`
- `test-user-time`
- `test-user-avatar`
- `test-user-social-links`
- `test-user-hobbies`
- `test-user-dislikes`

In addition, visible UI elements across the profile page include `data-testid` attributes to support stable end-to-end checks.

Optional per-link social IDs are also included:

- `test-user-social-github`
- `test-user-social-twitter`
- `test-user-social-linkedin`

## Accessibility Notes

- Avatar image includes meaningful `alt` text.
- Semantic tags are used (`article`, `header`, `figure`, `nav`, `section`, `ul`, `li`).
- Social links are keyboard-focusable and have visible focus styling.
- Social links open in a new tab with `rel="noopener noreferrer"`.
- Time output uses `aria-live="polite"` for assistive technologies.

## Responsiveness

- Mobile: stacked card layout.
- Tablet and desktop: split layout with avatar/social panel and profile details.
- Lists and text wrap cleanly to prevent overflow on smaller screens.

## Project Structure

```
.
|-- index.html
|-- public/
|   |-- style.css
|   |-- script.js
|   `-- 1750585599725.jfif
`-- README.md
```

## Submission

- Submission form: https://docs.google.com/forms/d/e/1FAIpQLSfyENWbGf9qRkmDj77BIEAPkO0WwIqDpeR6_dte026HA-KuWQ/viewform

Before submitting, replace the placeholder live and repository URLs above.
