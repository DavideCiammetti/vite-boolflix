import { createApp } from 'vue'
import '../style/style.scss'
import App from './App.vue'
import "@fontsource/fredoka-one";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(fas, far)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
