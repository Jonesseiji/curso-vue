let root = new Vue({ 
    el: "#root", 
    data:{ 
        nome: "Jones",
        sobrenome: "Bezerra",
    },
    methods:{
        nomeCompletoM: function(params) {
            return this.nome + " " + this.sobrenome
        }
    },
    computed:{
        nomeCompletoC: function(){
            return this.nome + " " + this.sobrenome
            
        }
    }
});