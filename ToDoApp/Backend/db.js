const mongoose=require('mongoose');

connect(".mongodb.net/")

const todoSchema = Schema({
    title: String,
    description: String,
    completed: Boolean
}) 

const todo=model('todo' , todoSchema)

export default {
    todo
}
