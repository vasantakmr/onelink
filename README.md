# onelink 🪁

a decluttered, open source, and free alternative to linktree

## 🚀 Getting Started

#### our Hosted

- Head to [onelink12.com](https://onelink12.vercel.app)
- Hit the `Get Started` button
- Sign up with Github, Google, or Email
- Follow the onboarding steps to create your first link

#### Self Hosted

- Clone the [onelink repo](httsp://github.com/vasantakmr/onelink) and run `npm install`
- Follow the `.env.example` file to create your own `.env` file
- Set up your database by running `npx prisma migrate dev --name init` and `npx prisma generate`
- Run `npm run dev` to start the development server

When setting it up, all environment variables are optional at build-time, but required througout usage. For example, if you don't want to include Github or Google authentication, you can leave those variables blank. However, if you try to use them, it will throw an error.

## 📝 Features

- [x] Customizable links and icons
- [x] Over 9 beautiful themes
- [x] Advanced analytic engine
- [x] Use custom domains for free
- [x] Fully self-hostable and open source
- [x] Blazingly fast using SSR

## 📦 Built With

- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Prisma](https://prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Vercel](https://vercel.com/)
- [Cloudflare](https://cloudflare.com/)

## ✨ Developer Notes

- You'll occasionally notice VCF references in the codebase. onelink12 used to support adding contact cards that would allow anyone to import your contact information into their phone. This feature has been removed to reduce third-party dependencies, now we only need a database and cloudflare images!
- There may be some wack code througout, feel free to open a PR to fix it! I originally started this project as a way to learn Next, but as it grew I figured it would be fun to fix it up and opensource:)
- If you have any questions, feel free to reach out to me on [Twitter](https://twitter.com/vasantakmr) 🍉

<br />

**onelink is completely free for all features**

**if you end up using it, consider tossing a star ⭐**
