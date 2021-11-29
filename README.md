**RNA SEQUENCING**

Data visualization built with Nextjs (React framework), Recharts (data viz), Fauna (database), and Chakra (UI).

Testing with Jest/React Testing Library.

- Data query from Fauna via lambda function at `/src/pages/api/rna/index.ts` 
- Fetched for Nextjs pages via `useRnaApi` hook at `/src/pages/api/hooks/useRnaApi.ts`

Deployed to Vercel at https://rna-sequence-8rewaip49-domobritton.vercel.app/

To get the frontend running locally:
- Clone this repo
- `npm install` to install all dependencies
- `npm run dev` to start the local server

**PERFORMANCE**

<img width="488" alt="Screen Shot 2021-11-29 at 12 33 38 PM" src="https://user-images.githubusercontent.com/16581660/143938944-2d8f2708-959a-4390-a35c-23ecd70472db.png">

***MOBILE***
![IMG_0549](https://user-images.githubusercontent.com/16581660/143824000-f5ae07fd-bffd-4f5b-bdbd-a1e39901bfa3.jpeg)
![IMG_0551](https://user-images.githubusercontent.com/16581660/143824017-ce5a9f22-054a-4dc4-8c9a-a8d62f714f48.jpeg)
![IMG_0550](https://user-images.githubusercontent.com/16581660/143824027-f6b8ed4f-8973-4b05-b321-9880e7952916.jpeg)

***DESKTOP***
![rna-seq-desktop](https://user-images.githubusercontent.com/16581660/143824037-08fa3369-aa19-4a87-a04c-c2a0faa01575.gif)
