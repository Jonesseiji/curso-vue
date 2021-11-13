let root = new Vue({ 
    el: "#root", 
    data:{ 
        novoNome: '',
        nomes: []
    },
    methods:{
        adicionar: function(params) {
            document.addEventListener("keypress", function(send){
                if(send.key === "Enter"){
                    const btn = document.querySelector("#send")

                    btn.click();
                }
            })

            this.nomes.push(this.novoNome)
            this.novoNome = ''
        }
    },
    filters: {
        capitalizar: function(value) {
            return value.toUpperCase()
        }
    }
});