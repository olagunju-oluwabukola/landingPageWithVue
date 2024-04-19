import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '../views/Homepage.vue'
import About from '../views/About.vue'
import  Courses from '../views/Courses.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', 
          component: Homepage
    
    },
    { path: '/About', 
    component: About

},
{ path: '/Courses', 
    component: Courses

},

{ path: '/Contact', 
component: Contact

}
    ]
  })

  export default router