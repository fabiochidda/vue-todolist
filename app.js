const app = new Vue ({

    el: "#app",
    data: {
        titolo: "To Do List",
        done: false,
        toDoList: [
            {
                text: "Finire questo esercizio",
                done: true,
            },
            {
                text: "Formattare il pc",
                done: true,
            },
            {
                text: "Andare avanti su Elden Ring",
                done: true,
            }
        ]

    },
    methods: {
        toggle () {
            this.done = !this.done
        }
    }


})