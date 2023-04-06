import functions from "firebase-functions";
import express from "express"; 
import cors from "cors"; 
import { addEmployee, getAllEmployees, deleteEmployee, updateEmployee } from "./src/employees.js";

const app = express(); 
app.use(cors());
app.use(express.json()); //needed for POST and PATCH

app.get("/", (req,res) => {
    res.send("I am gRoot."); 
}); 

app.get("/test", (req, res) => {
    res.send("My cloud function API is working!😃")
});
app.get("/hello", (req, res) => {
    res.send("Hello there!"); 
});


app.post("/employees", addEmployee); 
app.get("/employees", getAllEmployees); 
app.patch("/employees/:id", updateEmployee);
app.delete("/employees/:id", deleteEmployee); 

export const api = functions.https.onRequest(app);
// line 1 imports functions library from firebase
// lines 2-11 CREATES an express API 
// line 13 say create a function that creates a cloud function that listens and send a request to the API
