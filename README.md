# emoji-favicon-cli

A CLI tool to generate a `favicon.ico` file from an emoji name. Perfect for when you are spinning up a new project and need a favicon to get started. Faster and easier to use than the free online interactive favicon generators.

## Emoji providers

This tool does not include its own emoji images. Multiple image providers are supported:

- `github`: [api](https://developer.github.com/v3/emojis/) and [cheatsheet](https://github.com/ikatyang/emoji-cheat-sheet)
- `iamcal`: [project](https://github.com/iamcal/emoji-data) and [cheatsheet](http://unicodey.com/emoji-data/table.htm)
- `emojiii`: [project](https://github.com/bruceCzK/Emojiii/) and [cheatsheet](http://unicode.org/emoji/charts/full-emoji-list.html)
- `webfx`: [project](https://github.com/rumkin/emoji-img) and [cheatsheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
- `biezhi`: [project](https://github.com/biezhi/emojis)

Emoji names and keywords are provided by the [`emojilib` project](https://github.com/muan/emojilib).

## Usage

Installation is not required, you can use `npx` to invoke the command:

```bash
npx emoji-favicon-cli [<emoji-name>] [-p <provider>] [-d <destination>]
```

The command has the following basic behavior:

- Creates a file named `favicon.ico` at the destination.
- Presents an interactive emoji browser if the the emoji name is not provided.
- Uses `github` as the default provider.
- Uses `.` as the default destination.

Some providers support returning images from multiple vendors. To choose a specific vendor append its name to the provider name with a dot, e,g. `emojiii.apple`. If a vendor is not specified the default vendor for the provider is used.

- The `iamcal` provider supports: `apple`, `facebook`, `google` (default), `twitter`
- The `emojiii` provider supports: `apple`, `facebook`, `google` (default), `joy-pixels`, `samsung`, `twitter`, `windows`

## Examples

```bash
npx emoji-favicon-cli
npx emoji-favicon-cli tada
npx emoji-favicon-cli -p iamcal.apple sunglasses
npx emoji-favicon-cli -d public ghost
```

## How to use the favicon

Make sure the `favicon.ico` file is in the root of the site's static files directory. Then put the following in the `<head>` element of the site's `index.html`:

```html
<link rel="shortcut icon" href="/favicon.ico" />
```
