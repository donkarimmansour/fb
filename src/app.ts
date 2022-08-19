import FB from './fb';
import TwoFARequiredError from './errors/twoFARequiredError';
import GroupPost from './models/groupPost';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();




// async function getGroupPosts() {


//   const fb = await FB.init({
//     groupIds: ["688252945110766"],
//     useCookies: true,
//     disableAssets: true,
//     headless: false,
//     output: './',
//   }, './cookies.json');



//   try {
//     await fb.login(
//      "don.karimmansour@gmail.com" , // process.env.FACEBOOK_USERNAME!,
//      "Kmwr/@98f" , //process.env.FACEBOOK_PASSWORD!,
//     );


//   } catch (e) {

//     if (e instanceof TwoFARequiredError) {
//       await fb.enterAuthCode("process.env.FACEBOOK_2FA_CODE"!);
//     }

//   }

//   await fb.getGroupPosts(parseInt( "688252945110766"
//     //process.env.FACEBOOK_GROUP_ID!
//     , 10), undefined, (g: GroupPost) => console.log(g), false);

// }

// getGroupPosts().then();


const app : Express = express();
const port : any = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
