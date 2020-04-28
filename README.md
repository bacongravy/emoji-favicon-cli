# emoji-favicon-cli

A CLI tool to generate a `favicon.ico` file from an emoji name. Perfect for when you are spinning up a new project and need a favicon to get started. Faster and easier to use than the free online interactive favicon generators.

## Emoji providers

This tool does not include its own emoji images. Multiple image providers are supported:

- `github`: [api](https://developer.github.com/v3/emojis/) and [cheatsheet](https://github.com/ikatyang/emoji-cheat-sheet)
- `iamcal`: [project](https://github.com/iamcal/emoji-data) and [cheatsheet](http://unicodey.com/emoji-data/table.htm)
- `webfx`: [project](https://github.com/rumkin/emoji-img) and [cheatsheet](https://www.webfx.com/tools/emoji-cheat-sheet/)

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

Some providers support multiple vendors. To specify a vendor join it to the provider name with a dot. If a vendor is not specified the provider default will be used.

- The `iamcal` provider supports four vendors: `iamcal.apple`, `iamcal.facebook`, `iamcal.google` (default), `iamcal.twitter`

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
