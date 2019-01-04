import Vue from 'vue';
import { installer as HttpService } from '@/services/http.service';

Vue.use(HttpService);
Vue.prototype.$bus = new Vue();
