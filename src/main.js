import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowLeft, faDesktop, faMobileAlt, faPlug, faCogs, faExternalLinkAlt, faUndo, faRedo, faExpand, faBars, faColumns, faCode, faEye, faSave, faTimes, faArrowUp, faArrowDown, faCopy, faTrashAlt, faPlus, faHeading, faFont, faParagraph, faList, faImage, faPlayCircle, faImages, faVolumeUp, faStop} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faArrowLeft, faDesktop,faMobileAlt, faPlug, faCogs, faExternalLinkAlt, faUndo, faRedo, faExpand, faBars, faColumns, faCode, faEye, faSave, faTimes, faArrowUp, faArrowDown, faCopy,faTrashAlt, faPlus,
  faHeading, faFont, faParagraph, faList,faImage, faImages, faPlayCircle, faVolumeUp )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
