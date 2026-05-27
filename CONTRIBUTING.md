
## Reporting bugs and suggestions

1. Make sure both your **browser** and **StyleChan** are up to date.
2. Disable your other extensions & scripts to identify conflicts.
3. If your issue persists, open a [new issue](https://github.com/3nly/StyleChan/issues) with the following information:
  1. Precise steps to reproduce the problem, with the expected and actual results.
  2. Console errors, if any.
  3. Browser version.

Open your console with:
- `Ctrl + Shift + J` on Chrome.
- `Ctrl + Shift + K` on Firefox.

## Development & Contribution

### Get started

- Install [node.js](http://nodejs.org/).
- Install [Grunt's CLI](http://gruntjs.com/) with `npm install -g grunt-cli`.
- Clone StyleChan.
- `cd` into it.
- Install/Update StyleChan dependencies with `npm install`.

### Build

- Build with `grunt`.

### Lint

StyleChan uses [ESLint](https://eslint.org/) with the flat config format (`eslint.config.mjs`).

**Command line:**
```
npm install eslint --save-dev   # install ESlint
npx eslint --init               # generate a config file
```

After that:
```
npm run lint                    # check src/ for errors
npx eslint src/                 # same, without the npm script
```

**VSCode integration:**

Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

**Config notes:**

- `src/meta/` and `src/style.js` are excluded
  - These contain grunt template syntax (`<%= %>`) that ESLint cannot parse
- Custom globals (`$`, `$lib`, `$SS`, `$docBody`, `$docHead`, `TCaptcha`) are declared

**Fix common issues:**

```
npx eslint src/ --fix    # auto-fix formatting issues only
```

### Release

- Update the version with `grunt patch`, `grunt minor` or `grunt major`.
- Release with `grunt release`.

Note: this is only used to release new StyleChan versions, and is **not** needed or wanted in pull requests.

### Contribute

- Edit the sources.
- Open a pull request to merge branch.
