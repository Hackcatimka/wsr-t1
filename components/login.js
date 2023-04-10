import { app } from "../private/app.js"
export const login = {
    template: `
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="description" content="">
      <meta name="author" content="">
  
      <title>Signin Template for Bootstrap</title>
  
      <link rel="canonical" href="https://getbootstrap.com/docs/4.1/examples/sign-in/">
  
      <!-- Bootstrap core CSS -->
      <link href="../../dist/css/bootstrap.min.css" rel="stylesheet">
  
      <!-- Custom styles for this template -->
      <link href="signin.css" rel="stylesheet">
    </head>
  
    <body class="text-center">
      <form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <div class = "form-row">
                <p>Write your id</p>
                <input type="id" id="inputid" class="form-control-center" placeholder="id" required autofocus>
                <p></p>
                <button  class="btn btn-lg btn-primary btn-block" type="submit" @click = log() href ='#invise'> Start Metamask </button>
            </div>
      </form>
    </body>
  </html>

    `,
    data(){
        return {
            id: 'don`t write you id',
            address: "you don`t autorization"
        }
        
    }, 
    methods:{
        async log(){
            if (typeof window.ethereum !== 'undefined') {
                console.log('MetaMask is installed!')
                const addressArr = await ethereum.request({
                    method: 'eth_requestAccounts',
                })
                this.address = addressArr[0]
                app.config.globalProperties.address = this.address
                this.id = document.getElementById('inputid').value
                app.config.globalProperties.id = this.id
                this.$router.push (`invise/${this.id}`)
                
            } else {
                console.error('ERROR: METAMASK IS NOT INSTALLED')
            }
        }
    },



}