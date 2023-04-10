export const counter = {
    template: `<div>
    <button @click = res()> НЕ жми сюда </button>
    <p> {{count}} </p>
    </div>`,
    data(){
        return{
            count: 0,
        }
    },
    methods: {
        res() {
            this.count += 1
        }
    },
    mounted(){

    }  
}