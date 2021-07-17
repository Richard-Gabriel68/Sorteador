let app = new Vue ({
    el:"#app",
    data: {
        nome: '',
        lista: [],
    },
    methods: {
        add:function(){
            this.lista.push(this.nome)
        },
        sort:function(){
            winner = this.lista[Math.floor(Math.random() * this.lista.length)]

            document.querySelector('#winner').innerHTML = 'Sorteando...'

            setTimeout(function(){
                document.querySelector('#winner').style.color = 'green'

                document.querySelector('#winner').innerHTML = `Parabéns <strong>${winner}</strong>`
            },1500)
            
        },
        reset:function(){
            document.querySelector('#winner').innerHTML = 'Ganhador: '

            document.querySelector('#winner').style.color = '#000'
        }
    },
})