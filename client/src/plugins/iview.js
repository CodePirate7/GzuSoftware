import Vue from 'vue'
import iView from 'iview'

Vue.use(iView)

import 'iview/dist/styles/iview.css'
import router from "../router";


router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});