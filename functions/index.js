import functions from "firebase-functions";
import express from "express"; 
import cors from "cors"; 

const app = express(); 
app.use(cors());
app.use(express.json()); //needed for POST and PATCH

app.get("/test", (req, res) => {
    res.send("My cloud function API is working!😃")
});

app.get("/hello", (req, res) => {
    res.send("Hello there!"); 
});

export const api = functions.https.onRequest(app);
// line 1 imports functions library from firebase
// lines 2-11 CREATES an express API 
// line 13 say create a function that creates a cloud function that listens and send a request to the API
