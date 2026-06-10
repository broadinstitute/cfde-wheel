# CFDE Wheel Widget

A standalone JavaScript widget version of `cfdeWheel.vue`, packaged as a single embeddable script using the same Vite + CSS-injected build pattern as `site-shell`.

The widget now ships with its required images in `public/assets`, so the default experience does not depend on remote image URLs at runtime.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production artifact is `dist/cfde-wheel.js`.

## Usage

Add the script to your page:

```html
<script src="https://cdn.jsdelivr.net/gh/broadinstitute/cfde-wheel@main/dist/cfde-wheel.js"></script>
```

Then either use the custom element:

```html
<cfde-wheel></cfde-wheel>
```

To set an explicit launcher size in pixels:

```html
<cfde-wheel size="48"></cfde-wheel>
```

Without a `size` attribute, the icon fills its parent box and stays contained within it.

Or use an auto-bound trigger:

```html
<button data-cfde-wheel-trigger="true">Open wheel</button>
```

Or open it imperatively:

```html
<script>
  window.CfdeWheel.open();
</script>
```

## API

- `window.CfdeWheel.open(options?)`
- `window.CfdeWheel.close()`
- `window.CfdeWheel.init()`
- `window.CfdeWheel.create(options)`

`options` currently supports overriding `dccs`, `centers`, `target`, and `closeOnEscape`.
