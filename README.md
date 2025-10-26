# @dheerajmahra/editor-config

A simple editorconfig for my personal projects 📝

![NPM Version](https://img.shields.io/npm/v/@dheerajmahra/editor-config)

## Quick Setup (Recommended)

The easiest way to set up this config is to use the CLI utility. It will automatically copy the `.editorconfig` file to your project directory.

Run one of the following commands in your project directory:

```bash
# Using npx (npm)
npx @dheerajmahra/editor-config

# Using pnpm
pnpm dlx @dheerajmahra/editor-config

# Using yarn
yarn dlx @dheerajmahra/editor-config
```

## Requirements

- Node.js v20.11.0 or higher

## What is EditorConfig?

EditorConfig helps maintain consistent coding styles across different editors and IDEs. The `.editorconfig` file defines coding styles like:

- Indentation style (spaces vs tabs)
- Indentation size
- Line ending style (LF vs CRLF)
- Charset
- Trim trailing whitespace
- Insert final newline

Most modern editors and IDEs support EditorConfig either natively or through plugins.

## Manual Setup

If you prefer to set up manually, create a `.editorconfig` file in your project root with the following configuration -

```
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 2

[*.md]
trim_trailing_whitespace = false


```

## License

MIT
