## About

Whenever I try a new restaurant, I give it a rating across five dimensions (food, bev, service, comfort, vibe). Often times, I do this in the uber home with my husband and forget our rating the next day. Not anymore! This is a simple web app that allows a user to store their restaurant ratings in Supabase.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Modifications

If you want to make this your own, I suggest you create your own project on Supabase, choose the dimensions you care most about when trying restaurants, and add those as columns to your own `ratings` table. From there, you should add your project url and api key in a `.env` file and change the queries/form accordingly.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
