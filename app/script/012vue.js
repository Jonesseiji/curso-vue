let root = new Vue({
    el: "#root",
    data: {
        nome: "Jones"
    },
    methods:{
        exibir: function(){
            this.nome = "Jones Seiji Kadomoto Bezerra"
        }
    }
})