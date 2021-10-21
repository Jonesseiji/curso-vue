//#region Index 1
/* let root = new Vue({ //instanciando Vue
    el: "#root", //el = elemento (pode ser string, array, etc) e deve ter o id utilizado no html para associá-lo ao vue)
    data:{ //variáveis da instância Vue
        nome: "Jones Seiji",
        idade: 19,
        visivel: true
    }
}); */
//#endregion

//#region Index 2
let root = new Vue({ //instanciando Vue
    el: "#root", //el = elemento (pode ser string, array, etc) e deve ter o id utilizado no html para associá-lo ao vue)
    data:{ //variáveis da instância Vue
        membros: [ //declarando objetos dentro de um array
            {nome: "Jones Seiji", idade: 19},
            {nome: "Miya Colioni", idade: 01},
            {nome: "Ayumi Colioni", idade: 01}
        ]

        /*nomes: [
            "Jones Seiji",
            "Miya Colioni",
            "Ayumi Colioni"
        ] */
    }
});
//#endregion