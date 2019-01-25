import Vue from "vue";
import Router from "vue-router";
import App from "./app.vue";

import router from './router';

new Vue({
    el: "#app",
    render: h => h(App),
    router
});