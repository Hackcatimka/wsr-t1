import { app } from "../private/app.js"
export const invise = {
    template: ` 
    <div class="form-row container mh">
        <div class="form-group">
            <div class="row"><h1> Пользователь {{$route.params.id}} </h1></div>
                <div class = "row-control border border-info">
                    <div class=" tc">
                            <div class = "center-block">
                                <p class = "form-control col-sm-16 col-md-3 col-md-offset-2 col-lg-6">your address: {{address}}</p>
                            </div>
                            <div class = "form-control-center"> 
                                <p class = "form-control-center tc">Количество CMON: {{CMON}} </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>    
    `,
    data(){
        return{
            id: "nety",
            address: "don`t have address",
            CMON: "not enought",
        }
    },
    mounted(){
        this.id = app.config.globalProperties.id
        this.address = app.config.globalProperties.address
    }
    

}