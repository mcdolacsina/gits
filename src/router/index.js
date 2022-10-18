import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import PersonalView from '../views/PersonalView.vue'
import AboutTip from '../views/AboutTip.vue'
import AboutVuetify from '../views/AboutVuetify.vue'
import AboutApi from '../views/AboutApi.vue'
import StringManipulation from '../views/StringManipulation.vue'
import StringCalculator from '../views/StringCalculator.vue'
import StringCompute from '../views/StringCompute.vue'
import StringAxios from '../views/StringAxios.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/stringPersonal',
      name: 'stringPersonal',
      component: PersonalView
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
      path: '/stringTip',
      name: 'stringT',
      component: AboutTip
      },
      {
        path: '/stringVuetify',
        name: 'stringVuetify',
        component: AboutVuetify
        },
        {
          path: '/stringVuetify',
          name: 'stringVuetify',
          component: AboutVuetify
          },
          {
            path: '/stringApi',
            name: 'stringApi',
            component: AboutApi
            },
            {
              path: '/stringManipulation',
              name: 'stringManipulation',
              component: StringManipulation
              },
              {
                path: '/stringCalculator',
                name: 'stringCalculator',
                component: StringCalculator
                },
                {
                  path: '/stringCompute',
                  name: 'stringCompute',
                  component: StringCompute
                  },
                  {
                    path: '/stringAxios',
                    name: 'stringAxios',
                    component: StringAxios
                    },
                 
      
      
    
  

  ]
})

export default router
