const express = require('express')
const {graphqlHTTP}  = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')



const app = express()


//connnect to Mongodb Atlas db
 mongoose.connect("mongodb+srv://<username>:<password>@cluster0.nzlho.mongodb.net/graphql_db?retryWrites=true&w=majority")
 mongoose.connection.once('open',()=>{
     console.log('Connected to database..');
 })
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(5000., ()=>{
    console.log('Server Running...')
})