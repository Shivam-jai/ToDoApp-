const mongoose=require('mongoose');

connect(".mongodb.net/")

const todoSchema = Schema({
    title: String,
    description: String,
    completed: Boolean
}) 

const todo=model('todos' , todoSchema)

export default {
    todo
}