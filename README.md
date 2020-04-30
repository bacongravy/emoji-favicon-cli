# emoji-favicon-cli

A CLI tool to generate a `favicon.ico` file from an emoji name. Perfect for when you are spinning up a new project and need a favicon to get started. Faster and easier to use than the free online interactive favicon generators.

## Emoji providers

This package does not include its own emoji images. Multiple image providers are supported:

- `biezhi`: [project](https://github.com/biezhi/emojis)
- `emojiii`: [project](https://github.com/bruceCzK/Emojiii/), [cheatsheet](http://unicode.org/emoji/charts/full-emoji-list.html)
- `github`: [api](https://developer.github.com/v3/emojis/), [cheatsheet](https://github.com/ikatyang/emoji-cheat-sheet)
- `iamcal`: [project](https://github.com/iamcal/emoji-data), [cheatsheet](http://unicodey.com/emoji-data/table.htm)
- `webfx`: [project](https://github.com/rumkin/emoji-img), [cheatsheet](https://www.webfx.com/tools/emoji-cheat-sheet/)

Interactive emoji browsing is provided by [`emojilib`](https://github.com/muan/emojilib). Not every provider has every emoji, and some providers have additional emojis not found in `emojilib`. Image asset hosting provided by the [JSDelivr](https://www.jsdelivr.com) CDN.

## Usage

Installation is not required, you can use `npx` to invoke the command:

```bash
npx emoji-favicon-cli [<emoji-name>] [-p <provider>] [-d <destination>]
```

The command has the following basic behavior:

- Creates a file named `favicon.ico` at the destination.
- Presents an interactive emoji browser if the the emoji name is not provided.
- Uses `iamcal` as the default provider.
- Uses `.` as the default destination.

Some providers support returning images from multiple different vendors. To choose a specific vendor append its name to the provider name with a dot, e,g. `emojiii.apple`. If a vendor is not specified then the default vendor for the provider is used.

- The `iamcal` provider supports: `apple`, `facebook`, `google` (default), `twitter`
- The `emojiii` provider supports: `apple`, `facebook`, `google` (default), `joy-pixels`, `samsung`, `twitter`, `windows`

## Examples

```bash
npx emoji-favicon-cli
npx emoji-favicon-cli tada
npx emoji-favicon-cli -p emojiii.apple sunglasses
npx emoji-favicon-cli -d public ghost
```

## How to use the favicon

Make sure the `favicon.ico` file is in the root of the site's static files directory. Then put the following in the `<head>` element of the site's `index.html`:

```html
<link rel="shortcut icon" href="/favicon.ico" />
```
