import express, { json } from 'express';
import { createTodo, updateTodo } from './types';
import { todo } from './db';
const app= express();


app.use(json());

app.post('/todo', async function(req,res){
  const createPayload= req.body;
  const parsePayload= createTodo.safeParse(createPayload);

  if(!parsePayload.success){
    res.status(411).json({
        msg: 'You sent the wrong inputs'
    }); 
    return;

  }
 await todo.create({
  title: createPayload.title,
  description: createPayload.description,
   completed: false
 });
 res.json({
  msg: 'ToDo created'
 });

});

app.get('/todos', async function(req,res){
  const todos= await todo.find();

  res.json({
    todos
  });

});

app.put('/completed', async function(req,res){
  const updatePayload= req.body;
  const parsePayload= updateTodo.safeParse(updatePayload);

  if(parsePayload.success){
    res.status(411).json({
        msg: 'You sent a wrong inputs'
    });
    return;
  }
  await todo.update({
    _id: req.body.id
  }, {
    completed: true
  });
  res.json({
    msg: 'todo marked as completed'
  });
  
});

app.listen(3000);

