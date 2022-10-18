<template>
  <nav>
      <v-toolbar app>
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Vuetify </span>
        <span>Demo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Dropdown
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
      
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" >
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Personal Life', icon: 'mdi-view-dashboard', path: '/stringPersonal' },
           { title: 'Programming Skills', icon: 'mdi-plus-one', path: '/basicMath' },
           { title: 'About Programming', icon: 'mdi-help-box', path: '/stringApp'},
           { title: 'About TIP', icon: 'mdi-help-box', path: '/stringTip'},
           { title: 'About Vuetify', icon: 'mdi-help-box', path: '/stringVuetify'},
           { title: 'About API', icon: 'mdi-help-box', path: '/stringApi'},
           { title: 'String Manipulation', icon: 'mdi-help-box', path: '/stringManipulation'},
           { title: 'Calculator', icon: 'mdi-help-box', path: '/stringCalculator'},
           { title: 'Compute', icon: 'mdi-help-box', path: '/stringCompute'},
           { title: 'AxiosDemo', icon: 'mdi-help-box', path: '/stringAxios'},
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>