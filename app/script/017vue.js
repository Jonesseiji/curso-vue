//criando novo componente
Vue.component('pai', {
    template: 
        `
            <div>
                <p>Este é o componente pai</p>
                <filho></filho>
            </div>
        `
});

Vue.component('filho', {
    template:
    `
        <div>
            <p>Este é o componente filho</p>
        </div>
    `
});

let root = new Vue({ 
    el: "#root", 
    component:[
        'pai',
        'filho'
    ],
    methods:{

    }
});