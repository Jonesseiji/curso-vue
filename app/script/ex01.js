//#region Ex01 VUE

//window.alert("teste")
let root = new Vue({
    el: "#root",
    data: {
        frutas: [],
        novaFruta:"",
        totalFrutas: 0
    },
    methods: {
        inserirFruta: function() {
            this.frutas.push(this.novaFruta)
        },
        limparCampos: function(){
            this.frutas = []
            this.novaFruta = ''
        }
    }
});