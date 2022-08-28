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
// Vue
const app = new Vue({
    el: '#root',
    data: {
        todos,
        newTask: ''

    },
    methods: {
        toggleDone(todo) {
            console.log('funge')
            if (todo.done === true) {
                todo.done = false
            } else {
                todo.done = true
            }
        },
        addTask() {
            console.log('funge')
            this.todos.push({
                text: this.newTask,
                done: false,
            })
            this.newTask=''

        }

    },

})
// end Vue
const done = false
const tasks = [done ? 'done' : '', 'todo']