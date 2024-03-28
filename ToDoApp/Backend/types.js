const zod= require("zod")

const createTodo=zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo= zod.object({
    id: zod.stirng()
})

module.exports = {
    createTodo,
    updateTodo
}