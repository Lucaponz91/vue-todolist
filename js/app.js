const todos = [{
    text: 'Studiare',
    done: true
},
{
    text: 'Spesa per il cane',
    done: false
},
{
    text: 'Comprare uranio',
    done: true
}
]
const app = new Vue({
    el: '#root',
    data: {
        todos

    },
    methods: {
        toggleDone(todo) {
            console.log('funge')
            if (todo.done === true) {
                todo.done = false
            } else {
                todo.done = true
            }
        }
    }

})

const done = false
const tasks = [done ? 'done' : '', 'todo']