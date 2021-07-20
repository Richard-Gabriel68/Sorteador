let app = new Vue ({
    el:"#app",
    data: {
        nome: '',
        lista: [],
        listaD: []
    },
    mounted() {
        this.lista = localStorage.pessoa.split(',')
        this.listaD = localStorage.pessoa.split(',')
    },
    methods: {
        add:function(){
            this.lista.push(this.nome)
            localStorage.pessoa = this.lista
            this.listaD = localStorage.pessoa.split(',')
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
        },
        clear:function(){
            localStorage.removeItem('pessoa')
            this.listaD = []
        }
    },
})