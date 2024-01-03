# ⚛️💨 Universal Nativewind

## Native

> ℹ️ For all these steps you need to install EAS first

```bash
npm install -g eas-cli
```

```bash
eas build:configure
```

Login to expo account

```bash
eas login
```

Build for all native platforms (IOS, Android)

```bash
npm run native:build:all
```

Build for IOS

```bash
npm run native:build:ios
```

Build for Android

```bash
npm run native:build:android
```

More info @ <https://docs.expo.dev/build/setup/>

> ⚠️ There is an issue with hot reloading on the web, so you may experience missing updates. This issue has already been fixed in an [upcoming Metro release](https://github.com/expo/expo/pull/25339), and Mark from Nativewind [may implement a fix before that](https://github.com/marklawlor/nativewind/issues/643). In any case this does not happen all the time and you can still work by focusing on a mobile-first approach. If you notice that updates are missing on the web, they will show up a bit later (based on my experience) or after making some additional changes on native mobile.

## Web Deploy

Scripts to build and deploy your app on the web with a static deploy configuration.

> ℹ️ You need to install netlify CLI first to use `web:deploy` and `web:deploy:prod` scripts

```bash
npm install -g netlify-cli
```

Build web project to the **dist** folder

```bash
npm run web:build
```

Deploy to Netlify with testing URL

```bash
npm run web:deploy
```

Deploy to production URL

```bash
npm run web:deploy:prod
```

### Example deploy to Netlify

<https://universal-nativewind-v4-starter.netlify.app/>

## Path alias

Enabled for you to import modules using `@/components` custom alias instead of a relative path. You can extend it to add more alias paths as you wish.

```jsx
import YourComponent from "@/components/YourComponent";
```
