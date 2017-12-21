import Vue from 'vue';
import App from './components/App';
{{#router}}
import router from './router';
{{/router}}
{{#resource}}
import resource from 'vue-resource';
Vue.use(resource);
{{/resource}}

{{#axios}}
import axios from 'axios';
Vue.prototype.$http = axios;
{{/axios}}
{{#iview}}
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
{{/iview}}

{{#element}}
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
{{/element}}


Vue.config.productionTip = false;



new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  template: '<App/>',
  components: {
    App
  },
  render: (createElement) => createElement(App)
});