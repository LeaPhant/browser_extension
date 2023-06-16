<img src="./img/libredirect_full.svg" height="50"/>

A fork of libredirect to add reddit archival features. Browser extension that redirects YouTube, Twitter, TikTok... requests to alternative privacy friendly frontends and backends.

<a href="https://github.com/LeaPhant/libredirect_redditarchive/releases/download/2.6.4/LibRedirectRA-2.6.4.xpi">Download</a> for Firefox.

## Translate
<a href="https://hosted.weblate.org/projects/libredirect/extension">
    <img src ="./img/weblate.svg">
</a>

## Development
Install [Node.js](https://nodejs.org/)
```bash
git clone https://github.com/libredirect/browser_extension
cd browser_extension
npm install
npm run html # Generates html using Pug
```
#### Run on Firefox
```bash
npm run start
```

#### Build a zip package for Firefox
```bash
npm run build
```

#### Install the zip package on Firefox (temporarily)
1. Type in the address bar: `about:debugging#/runtime/this-firefox`
2. Press `Load Temporary Add-on...`
3. Select `libredirect-VERSION.zip` from `web-ext-artifacts` folder

#### Install the zip package on Firefox ESR, Developer Edition, Nightly
1. Type in the address bar: `about:config`
2. Set `xpinstall.signatures.required` to `false`
3. Type in the address bar: `about:addons`
4. Click on the gear shaped `settings` button and select `Install Add-on From File...`
5. Select `libredirect-VERSION.zip` from `web-ext-artifacts` folder

#### Run on Chromium
1. Open `chrome://extensions`
2. Enable `dev mode`
3. Select `load unpacked extension`
4. Select `src` folder

---

Forked from [Privacy Redirect](https://github.com/SimonBrazell/privacy-redirect)
