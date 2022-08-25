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

})