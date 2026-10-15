import express from "express"

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
  res.send("Users are coming soon")
})


const users = [
    {id:1, name:"Rohan", email: "john@example.com"},
    {id:2, name:"John", email: "daker@example.com"},
    {id:3, name:"Bod Johnson", email: "Johnson@example.com"},
    {id:4, name:"Bodir ", email: "bodir@example.com"},
]

app.get('/users' ,(req, res)=>{
    res.send(users)
})


app.listen(PORT, ()=>{
    console.log(`Server is runnng on port ${PORT}`);
})