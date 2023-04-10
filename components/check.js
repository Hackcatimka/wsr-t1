import { app } from "../private/app.js";
export const check = {
    template: `
    <div>
        <div className="container mh" >
            <div className= "row">
                <div className="form-group"> 
                    <div className = "row-block">
                        <h1> Функционал: 
                        <div class = "container px-5 bg-dark">
                            <div class="row gx-10">
                                <div class = "col">
                                    <button class = "btn btn-danger"@click=transfer()> Произвести оплату </button>
                                </div>
                                <div class = "col">
                                    <button className="btn btn-danger" @click=accept()> Подтвердить заявку </button>
                                </div>
                                <div class = "col">
                                    <button className="btn btn-danger" @click=time()> Изменить время </button>
                                </div>
                                <div class = "col">
                                    <button class = "btn btn-danger" @click=test()> Надо придумать </button>
                                </div>
                            </div>
                        </div>

            
            <div v-if = "status==1" class = " row-block">
                <div className="container mh">
                    <div className="form-group">
                        <div className="row">
                            <p className="header"><strong>{{header_name}}</strong></p>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <div className="row-block bg-dark">
                                    <p class="text-white"><strong>Наградить токенами CMON</strong></p>
                                    <div className="row mb  ">
                                        <label className="col-sm-5 text-white ">Адрес получателя:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control col-sm-5" id="reward_to"/></div>
                                        </div>
                                    <div className="row mb">
                                        <label className="col-sm-5 text-white">Сумма получения:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control col-sm-5" id="reward_amount"/>
                                        </div>
                                    </div>
                                    <button className="btn btn-danger" @click="reward()">send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>    
            <div v-if="status==2" class = "bg-dark row-block">
                <div className="form-group">
                <div className="rounded row-block">
                    <p class="text-white"><strong>Получить запросы на инвестирование</strong></p>
                    <button className="btn btn-primary" @click="getRequests()">call</button>
                </div>
                <div v-for="item in requests" className="rounded row-block">
                    <div className="row">
                        <label className="col-sm-2">id:</label>
                        <label className="col-sm-8">{{item[0]}}</label></div>
                    <div className="row">
                        <label className="col-sm-2">name:</label>
                        <label className="col-sm-8">{{item[1]}}</label></div>
                    <div className="row">
                        <label className="col-sm-2 mb">address:</label>
                        <label className="col-sm-8">{{item[2]}}</label></div>
                    <button className="btn btn-primary col-sm-2 mr" @click="answerRequest(item[0], true)">accept</button>
                    <button className="btn btn-danger col-sm-2" @click="answerRequest(item[0], false)">reject</button>
                </div>
            </div>
            </div>
            <div v-if = "status==3" class = "bg-dark">
                <div className="container mh">
                <div className="form-group">
                    <p className="header text-white"><strong>Управление временем</strong></p>
                    <div className="rounded row-block">
                        <p class="text-white"><strong>Изменить time_dif</strong></p>
                        <div className="row">
                            <label htmlFor="" className="text-white col-sm-3">time_start:</label>
                            <label htmlFor="" className="text-white col-sm-4">{{time_start}}</label>
                        </div>
                        <div className="row">
                            <label htmlFor="" className="text-white col-sm-3">time_now:</label>
                            <label htmlFor="" className="text-white col-sm-4">{{time_now}}</label>
                        </div>
                        <div className="row">
                            <label htmlFor="" className="text-white col-sm-3">time_system:</label>
                            <label htmlFor="" className="text-white col-sm-4">{{time_system}}</label>
                        </div>
                        <div className="row">
                            <label htmlFor="" className="text-white col-sm-3">time_dif:</label>
                            <label htmlFor="" className="text-white col-sm-4">{{time_dif}}</label>
                        </div>
                        <div className="row mb">
                            <label htmlFor="" className="text-white col-sm-3">state:</label>
                            <label htmlFor="" className="text-white col-sm-4">{{state}}</label>
                        </div>
                        <button className="btn btn-primary" @click="getState()">call</button>
                    </div>
                    <div className="rounded row-block">
                        <p class="text-white"><strong>Изменить time_dif</strong></p>
                        <div className="row mb">
                            <label htmlFor="" className="text-white col-sm-4">новое значение</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="upDif_amount"/>
                            </div>
                        </div>
                        <button className="btn btn-danger" @click="upDif">send</button>
                    </div>
                </div>
                </div>
            </div>
            <div v-if = "status==0" class = "bg-dark">
                    <p class = "text-white"> Не выбрана не одна функция</p>
                </div>
            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>`,
    data (){
        return {

            status: 0,
        }
    },
    methods: {

        transfer (){
            this.status = 1
            
            console.log(this.status);
        },

        accept () {
            this.status = 2
            console.log(this.status);
        },

        time() {
            this.status=3
        }

    }

}