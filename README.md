# respiraworks-download-data
This repo hosts the code to easily download test data for RespiraWorks - a NFP company providing open source tech.

Purpose
- I'm setting this all up as a side project, to help me learn a little bit more about alternative deployment methods/code strucutures; and to benefit the company!
- Following this guide for how deployment was setup: https://www.freecodecamp.org/news/deploy-a-react-node-app-to/

To test locally:
1. Clone the repo
2. run ```npm i``` and ```npm update```
3. run ```nodemon server``` in the root of the folder to run the server
4. Open a separate window then run ```npm start``` in client/app1
5. Look at  http://localhost:3000

To test production:
1. From the root of the folder run ```cd client/app1```
2. Run ```npm run build```
3. Cut and paste the new production build into the server folder
4. See the product and changes on Heroku: https://respiraworks-download-data.herokuapp.com/
