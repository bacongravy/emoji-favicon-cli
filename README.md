# emoji-favicon-cli

A CLI tool to generate a `favicon.ico` file from an emoji name.

Uses the emoji names and images from either:

- the [GitHub API](https://developer.github.com/v3/emojis/) (the default), or
- the [WebFX Emoji Cheat Sheet project](https://github.com/WebpageFX/emoji-cheat-sheet.com), via the [`emoji-img` project](https://github.com/rumkin/emoji-img).

Image conversion provided by the [`png-to-ico` project](https://github.com/steambap/png-to-ico).

## Usage

```bash
npx emoji-favicon-cli [--provider <provider>]
                      <emoji-name>
                      [<destination>]
```

- Creates a file named `favicon.ico`.
- Emoji name is required. Refer to [awes0mem4n's GitHub cheat sheet](https://awes0mem4n.github.io/emojis-github.html) or the [WebFX cheat sheet](http://www.emoji-cheat-sheet.com) for supported emoji names.
- Default destination is "`.`".
- Default provider is `github`.

## Examples

```bash
npx emoji-favicon-cli tada
npx emoji-favicon-cli ghost public
npx emoji-favicon-cli --provider webfx sunglasses
```

## How to use the favicon

Make sure the `favicon.ico` file is in the root of the site's static files directory. Then put the following in the `<head>` element of the site's `index.html`:

```html
<link rel="shortcut icon" href="/favicon.ico" />
```
