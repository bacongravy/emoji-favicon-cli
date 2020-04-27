# emoji-favicon-cli

A CLI tool to generate a `favicon.ico` file from an emoji name.

Uses the emoji names and images from the [WebFX Emoji Cheat Sheet project](https://github.com/WebpageFX/emoji-cheat-sheet.com), via the [`emoji-img` project](https://github.com/rumkin/emoji-img).

Image conversion provided by the [`png-to-ico` project](https://github.com/steambap/png-to-ico).

## Usage

Emoji name is required. Creates a file named `favicon.ico`. Default destination is "`.`".

```bash
npx emoji-favicon-cli <emoji-name> [<destination>]
```

## Examples

```bash
npx emoji-favicon-cli tada
npx emoji-favicon-cli ghost public
```

## How to use the favicon

Make sure the `favicon.ico` file is in the root of the site's static files directory. Then put the following in the `<head>` element of the site's `index.html`:

```html
<link rel="shortcut icon" href="/favicon.ico" />
```
