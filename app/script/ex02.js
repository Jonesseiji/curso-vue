let root = new Vue({
    el: "#root",
    data: {
        pais: '',
        imagem: ''
    },
    methods: {
        mostrarPortugal: function(){
            this.pais = 'Portugal'
            this.imagem = '/app/public/img/band-portugal.png'
        },
        
        mostrarBrasil: function(){
            this.pais = 'Brasil'
            this.imagem = '/app/public/img/band-brasil.png'
        },
        
        mostrarJapao: function(){
            this.pais = 'Japão'
            this.imagem = '/app/public/img/band-japao.png'
        }
    }
});

root.mostrarBrasil();