# Voice123 test

Small UI to search a talent at voice123 database (sandbox)

## Live test

Here you can access the [Voice123 seach](https://voice123-test-beige.vercel.app/)


## Application setup guide

Clone the repository, then

```bash
npm install
```

```bash
npm run dev
```

## Worklog

15/02/23

- 13h30: Start reading and understand the test;
- 14h:  Setup a new project with vite, ts eslint and prettier;
- 14h40: start create Search view and pages;
- 17h : Creating the requests to API;

16/02/23

- 8h30: Finishing with all fetches and fix some types;
- 10h: Creating UI with cards and all the good stuffs;
- 11h: Try get the sound a better then the regular HTML (not quite there);
- 13h20 - 14h lunch;
- 14:10: Finish Ui  <Card />
- 16h:  Create the SeachItems;
- 17h21: Types for searchItems and pages numbers;
- 18h09 : Link to profile artist;
- 19h: Pagination;
- 11h: Create github repository and deploy to vercel

17/02/23

- 9h : Try to find a better way to update the pages;
- 10h: Creating the Readme
- 12h: Add test

## Future improvements and recommendations

- I used react query to fetch and cache the data, with that the client only needed to request once the same page.
- Need find a better way to have the total page to app;
- Need to show the audio timeline.
- Create some testes;
