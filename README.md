# NuxtifyBlok

## Introduction

NuxtifyBlok is a headless e-commerce site template using Nuxt 3, Shopify, and Storyblok.

## Technologies

NuxtifyBlok is using the following technologies:

- [Nuxt3](https://nuxt.com/docs/getting-started/introduction) as the Vue framework.
- [Pinia](https://pinia.vuejs.org/introduction.html) for state management in Vue.
- [Tailwind CSS](https://tailwindcss.com/docs/installation) for CSS styling.
- [Nuxt Apollo](https://apollo.nuxtjs.org/getting-started/quick-start) for GraphQL.
- [Cloudflare Pages](https://developers.cloudflare.com/pages/) for deployment.
- [TypeScript](https://www.typescriptlang.org/docs/) for type safety.
- [Storyblok](https://www.storyblok.com/tp/add-a-headless-CMS-to-nuxt-3-in-5-minutes) for content management.
- [Shopify](https://www.shopify.com/) for headless e-commerce.

## Setup

Make sure to install yarn as the package manager:

```bash
npm install --global yarn

```

## Setup SSL

Storyblok requires that the website is served via HTTPS.


Install [mkcert](https://github.com/FiloSottile/mkcert) on your system
Then cd into the project directory run the following commands:

```bash
cd/path/to/directory

mkcert localhost
mkcert -install

```

## Install dependencies:

```bash
yarn install

```

## Using nvm and npm v16.14.0

To ensure compatibility with the project requirements, we recommend using nvm as the version manager and setting npm to version 16.14.0. 
Cloudflare Pages is compatible with up to npm v16.14.0 as of writing this.

Follow the instructions below to set it up:

Install nvm by running the following command in your terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

```

Close and reopen your terminal to apply the changes. Verify that nvm is installed by running the following command:

```bash
nvm --version

```

Install npm v16.14.0 using nvm:

```bash
nvm install 16.14.0

```

Navigate to the project directory and use nvm to use npm v16.14.0:

```bash
cd /path/to/directory

nvm use

```

## Development Server

Start the development server on `http://localhost:3000`

```bash
yarn dev
```
