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
        save: function() {
            console.log(JSON.stringify(this.gzh));
        }
    }
});