# emoji-favicon-cli

A CLI tool to generate a `favicon.ico` file from an emoji name. Perfect for when you are spinning up a new project and need a favicon to get started.

## Usage

[Node.js](https://nodejs.org) version 8.2.0 or later is required. Use `npx` to invoke the command:

```bash
npx emoji-favicon-cli [<emoji-name>] [-d <destination>] [-v <vendor>]
```

The command has the following basic behavior:

- Presents an interactive emoji browser in the terminal if the emoji name is not provided.
- Creates a file named `favicon.ico` at the destination.
- Uses `.` as the default destination.
- Uses `google` as the default vendor. For the full list of supported vendors, see below.

## Examples

```bash
npx emoji-favicon-cli
npx emoji-favicon-cli tada
npx emoji-favicon-cli -d public ghost
npx emoji-favicon-cli -v apple sunglasses
```

## How to use the favicon

Make sure the `favicon.ico` file is in the root of the site's static files directory. Then put the following in the `<head>` element of the site's `index.html`:

```html
<link rel="shortcut icon" href="/favicon.ico" />
```

## Supported vendors

The following emoji vendors are supported:

- `apple`
- `facebook`
- `github`
- `google`
- `joy-pixels`
- `samsung`
- `twitter`
- `webfx`
- `windows`

## Image sources

This tool does not include any emoji images in its package. Emoji images are retrieved at runtime from the following sources:

- the `emojiii` [project](https://github.com/bruceCzK/Emojiii/) ([cheatsheet](http://unicode.org/emoji/charts/full-emoji-list.html))
- the GitHub `emojis` [API](https://developer.github.com/v3/emojis/) ([cheatsheet](https://github.com/ikatyang/emoji-cheat-sheet))
- the WebFX `emoji-cheat-sheet.com` [project](https://github.com/WebpageFX/emoji-cheat-sheet.com) ([cheatsheet](https://www.webfx.com/tools/emoji-cheat-sheet/))

GitHub project assets are retrieved via the [JSDelivr](https://www.jsdelivr.com) content delivery network.

## Known limitations

Emoji searching is powered by [`emojilib`](https://github.com/muan/emojilib). Not every vendor provides every emoji found in `emojilib`, and some vendors provide additional emojis not found in `emojilib`.
