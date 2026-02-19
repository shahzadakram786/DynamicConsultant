# DynamicConsultant


## Dynamic design system (production-ready tokens)

This project now uses CSS design tokens in `app/globals.css` for dynamic styling at scale:

- **Color system**: all semantic colors come from root custom properties (`--primary`, `--foreground`, `--card`, etc.).
- **Typography scale**: fluid type tokens (`--text-h1` ... `--text-body`) with configurable `--font-scale`.
- **Spacing scale**: consistent spacing tokens (`--space-*`) and section spacing (`--section-space-*`) controlled by `--space-scale`.
- **Density + text-size controls**: set `data-density` and `data-font-size` on `<body>` to switch visual density and typography globally.

### Runtime examples

Use body attributes to change the UI without rewriting component classes:

- Compact spacing: `data-density="compact"`
- Comfortable spacing: `data-density="comfortable"`
- Small text scale: `data-font-size="sm"`
- Large text scale: `data-font-size="lg"`

These attributes provide an extensible foundation for future user preferences or admin theme controls.