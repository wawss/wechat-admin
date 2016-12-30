'use strict';

var vm = new Vue({
    el: '#v-ctl',
    data: {
        gzh: {
            gzhName: '',
            gzhType: '服务号',
            gzhID: '',
            gzhAppID: '',
            gzhAppSecret: '',
            gzhLogoURL: ''
        }
    },
    methods: {
        save: function save() {
            console.log(JSON.stringify(this.gzh));
        }
    }
});
var a = 1;