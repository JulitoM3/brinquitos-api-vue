<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col md="6">
          <NavComponent/>
        </b-col>
        <b-col md="6" id="buttons">
          <b-navbar toggleable="md" >
            <b-navbar-toggle target="navbar-toggle-collapse">
              <template #default="{ expanded }">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                <b-icon v-else icon="chevron-bar-down"></b-icon>
              </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse" is-nav>
              <nav>
                <ul class="topnav sticky-navbar">
                  <li class="right">
                    <router-link :to="{ name: 'Home' }">Inicio</router-link>
                  </li>
                  <li class="right">
                    <router-link :to="{ name: 'Services' }">Servicios</router-link>
                  </li>
                  <li class="right">
                    <router-link :to="{ name: 'About' }">Nosotros</router-link>
                  </li>
                  <li class="right">
                    <router-link :to="{ name: 'Contact' }">Contacto</router-link>
                  </li>
                  <li class="right">
                    <router-link :to="{ name : 'Login' }">Inicia sesión</router-link>
                  </li>
                </ul>
              </nav>
            </b-collapse>
          </b-navbar>
        </b-col> 
      </b-row>
      <hr />
      <router-view />
    </b-container>
  </div>
</template>
<script>
import NavComponent from '@/components/NavComponent.vue'
export default{
  components:{
    NavComponent
  }
}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lobster);




ul.topnav {
  list-style-type: none;
  padding-top: 40px;
  overflow: hidden;
  background-color: white;
}

ul.topnav li {
  float: right;
}

ul.topnav li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

ul.topnav li a:hover:not(.active) {
  background-color: #d5e2d6;
  color: black;
  border-radius: 5px;
}

ul.topnav li a.active {
  background-color: #d5e2d6;
  color: black;
}

ul.topnav li.right {
  float: left;
}

@media screen and (max-width: 600px) {
  ul.topnav li.right,
  ul.topnav li {
    float: none;
  }
}
</style>

