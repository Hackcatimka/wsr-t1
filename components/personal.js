import { app } from "../private/app.js"
export const personal = {
    template: `
    <div>
        <div className="container mh">
            <div className="form-group">
                <div className="row">
                    <p className="header"><strong>{{header_name}}</strong></p>
                </div>
                <div className="row">
                    <div className="form-group">
                        <div className="row-block">
                            <p><strong>Наградить токенами CMON</strong></p>
                            <div className="row mb  ">
                                <label className="col-sm-4">Адрес получателя</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control col-sm-8" id="reward_to"/></div>
                                </div>
                            <div className="row mb">
                                <label className="col-sm-4">Сумма получения</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="reward_amount"/>
                                </div>
                            </div>
                            <button className="btn btn-danger" @click="reward()">send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`,

    data () {
        return {
            header_name: '',
            status: 0,
            address: '',
            user_balance: 0,
            requests: [[1, 'Vasya', 'very-long-address']],
        }
    },
    methods: {
        async login() {
            let res = await ethereum.request({
                method: 'eth_requestAccounts',
            })
            this.address = res[0]
            app.config.globalProperties.address = this.address
            let res2 = await callData('getRoleID', res[0])
            this.status = res2.data
            app.config.globalProperties.status = this.status
        },
        
    }
}

