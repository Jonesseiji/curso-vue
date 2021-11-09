let root = new Vue({
    el: "#root",
    data: {
        valor:'<h1>Titulo VUE</h1>'
    },
    methods:{
        t1: function(params) {
            this.valor = "<h1>Titulo novo Vue</h1>"
        },
        t3: function(params) {
            this.valor = "<h3>Titulo novo Vue</h3>"
        },
        t5: function(params) {
            this.valor = "<h5>Titulo novo Vue</h5>"
        }
    }
})