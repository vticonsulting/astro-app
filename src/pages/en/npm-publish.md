---
title: npm publish
layout: ../../layouts/main-layout.astro
---

<!-- https://github.com/sindresorhus/np#np- -->

## `np`

```jsonc
{
	"name": "my-awesome-package",
	"private": true,
	"scripts": {
		"lint": "xo --fix",
		// build the documentation before tagging the release:
		"version": "./build-docs && git add docs",
		"release": "np"
	},
	"devDependencies": {
		"np": "*",
		"xo": "*"
	},
	"np": {
		// never use Yarn
		"yarn": false,
		// use `dist` as the subdirectory to publish
		"contents": "dist"
	},
	"xo": {
		"space": true
	}
}
```

## Config

`np` can be configured both locally and globally. When using the global `np` binary, you can configure any of the CLI flags in either a `.np-config.js`, `.np-config.cjs` or `.np-config.json` file in the home directory. When using the local `np` binary, for example, in a `npm run` script, you can configure `np` by setting the flags in either a top-level `np` field in `package.json` or in a `.np-config.js`, `.np-config.cjs` or `.np-config.json` file in the project directory. If it exists, the local installation will always take precedence. This ensures any local config matches the version of `np` it was designed for.

Currently, these are the flags you can configure:

- `anyBranch` - Allow publishing from any branch (`false` by default).
- `branch` - Name of the release branch (`master` by default).
- `cleanup` - Cleanup `node_modules` (`true` by default).
- `tests` - Run `npm test` (`true` by default).
- `yolo` - Skip cleanup and testing (`false` by default).
- `publish` - Publish (`true` by default).
- `preview` - Show tasks without actually executing them (`false` by default).
- `tag` - Publish under a given dist-tag (`latest` by default).
- `yarn` - Use yarn if possible (`true` by default).
- `contents` - Subdirectory to publish (`.` by default).
- `releaseDraft` - Open a GitHub release draft after releasing (`true` by default).
- `testScript` - Name of npm run script to run tests before publishing (`test` by default).
- `2fa` - Enable 2FA on new packages (`true` by default) (setting this to `false` is not recommended).
- `message` - The commit message used for the version bump. Any `%s` in the string will be replaced with the new version. By default, npm uses `%s` and Yarn uses `v%s`.




## Why

- [Interactive UI](#interactive-ui)
- Ensures you are publishing from your release branch (`main` and `master` by default)
- Ensures the working directory is clean and that there are no unpulled changes
- Reinstalls dependencies to ensure your project works with the latest dependency tree
- Ensures your Node.js and npm versions are supported by the project and its dependencies
- Runs the tests
- Bumps the version in package.json and npm-shrinkwrap.json (if present) and creates a git tag
- Prevents [accidental publishing](https://github.com/npm/npm/issues/13248) of pre-release versions under the `latest` [dist-tag](https://docs.npmjs.com/cli/dist-tag)
- Publishes the new version to npm, optionally under a dist-tag
- Rolls back the project to its previous state in case publishing fails
- Pushes commits and tags (newly & previously created) to GitHub/GitLab
- Supports [two-factor authentication](https://docs.npmjs.com/getting-started/using-two-factor-authentication)
- Enables two-factor authentication on new repositories
  <br>
  <sub>(does not apply to external registries)</sub>
- Opens a prefilled GitHub Releases draft after publish
- Warns about the possibility of extraneous files being published
- See exactly what will be executed with [preview mode](https://github.com/sindresorhus/np/issues/391), without pushing or publishing anything remotely
- Supports [GitHub Packages](https://github.com/features/packages)
