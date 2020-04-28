# emoji-favicon-cli

A CLI tool to generate a `favicon.ico` file from an emoji name.

Uses the emoji names and images from either:

- the [GitHub API](https://developer.github.com/v3/emojis/) (the default), or
- the [WebFX Emoji Cheat Sheet project](https://github.com/WebpageFX/emoji-cheat-sheet.com), via the [`emoji-img` project](https://github.com/rumkin/emoji-img).

Image conversion provided by the [`png-to-ico` project](https://github.com/steambap/png-to-ico). Emoji browsing provided by the [`emojilib` project](https://github.com/muan/emojilib).

## Usage

```bash
npx emoji-favicon-cli [<emoji-name>]
                      [--provider <provider>]
                      [--destination <destination>]
```

- Creates a file named `favicon.ico`.
- If the emoji name is not provided then an interactive browser will be presented. (Refer to [Awes0meM4n's GitHub cheat sheet](https://awes0mem4n.github.io/emojis-github.html) or the [WebFX cheat sheet](http://www.emoji-cheat-sheet.com) for supported emoji names.)
- Default destination is "`.`".
- Default provider is `github`. Other available providers include: `webfx`

## Examples

```bash
npx emoji-favicon-cli
npx emoji-favicon-cli tada
npx emoji-favicon-cli -d public ghost
npx emoji-favicon-cli --provider webfx sunglasses
```

## How to use the favicon

Make sure the `favicon.ico` file is in the root of the site's static files directory. Then put the following in the `<head>` element of the site's `index.html`:

```html
<link rel="shortcut icon" href="/favicon.ico" />
```
