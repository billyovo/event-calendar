// For Nuxt 3
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import {faMoon, faSun, faBook, faNewspaper, faClock, faTrophy, faCalendar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faDiscord);
library.add(faInstagram);
library.add(faFacebook);
library.add(faMoon);
library.add(faSun);
library.add(faBook);
library.add(faNewspaper);
library.add(faClock);
library.add(faTrophy);
library.add(faCalendar);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
