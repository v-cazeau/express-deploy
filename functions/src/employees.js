import { db } from "./dbConnect.js"; 
import { FieldValue } from "firebase-admin/firestore"; //imported to get timestamp (1/2)

const coll = db.collection("employee");

//CRUD ADD
export async function addEmployee(req, res) {
    const newEmployee = req.body; 
    newEmployee.createdAt = FieldValue.serverTimestamp(); //insert timestamp (2/2)
    await coll.add(newEmployee);
    res.status(201).send({message: "Employee successfully added."});
}
// CRUD GET/READ ALL
export async function getAllEmployees(req, res) {
    const collection = await coll.get();
    const employees = collection.docs.map( doc => ({...doc.data(), id: doc.id})); 
    res.status(200).send(employees); 
}

// CRUD DELETE 
export async function deleteEmployee(req,res) {
    const { id } = req.params; //equivalent to  const id = req.params.id

    await coll.doc(id).delete();
    res.status(202).send("Employee has been deleted."); 
}

// CRUD UPDATE 
export async function updateEmployee(req, res) {
    const { id } = req.params;
    const updateInfo = req.body; 

    await coll.doc(id).update(updateInfo); 
    res.status(202).send("Employee has been updated.");
}
