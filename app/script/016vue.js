//criando novo componente
Vue.component('novo', {
    template: 
        `
        <div>Olá Mundo !</div>
        `
});
//O componente só pode ter uma tag padrão. ex: <h1></h1>, <h2></h2>

let root = new Vue({ 
    el: "#root", 
    component:[
        'novo'
    ],
    methods:{

    }
});