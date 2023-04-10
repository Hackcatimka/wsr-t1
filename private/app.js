
import {invise} from "../components/invise.js"
import {login} from "../components/login.js"
import {counter} from "../components/counter.js"
import {some} from "../components/some.js"
import { personal } from "../components/personal.js"
import { check } from "../components/check.js"

const routes = [
    {path: "/counter", component: counter},
    {path: "/login", component: login},
    {path: "/invise/:id", component: invise},
    {path: "/some", component: some},
    {path: "/personal", component: personal},
    {path: "/check", component: check}
]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export const app = Vue.createApp({})
app.use(router)
app.mount("#app")