const app = new Vue ({

    el: "#app",
    data: {
        titolo: "To Do List",
        done: false,
        newToDo: "",
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
        },

        addNewToDo: function() {

            if (this.newToDo !== "") {

                this.toDoList.push({text: this.newToDo, done: true})

            } else {

                alert("Inserisci del testo prima di aggiungere una task")

            }

            this.newToDo = ""
        }
    }


})