import express from "express"
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());


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

app.post('/users', (req, res) =>{
    console.log('data fromm client', req.body);
    // Temporary data storage
    const newUser = req.body;
    newUser.id =users.length + 1;
    users.push(newUser);

    res.send({success: true, message: 'User added successfully'})
})


app.listen(PORT, ()=>{
    console.log(`Server is runnng on port ${PORT}`);
})