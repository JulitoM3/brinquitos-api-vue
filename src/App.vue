<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col md="6"
          ><div id="title">
            <div class="circle">
              <h1>
                <span>Brinquitos</span>
              </h1>
            </div>
          </div>
        </b-col>
        <b-col md="6" id="buttons">
          <nav>
            <ul class="topnav sticky-navbar">
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
                <a href="../vistas/login.php">Inicia sesión</a>
              </li>
            </ul>
          </nav>
        </b-col>
      </b-row>

      <hr />
      <router-view />
    </b-container>
  </div>
</template>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lobster);
#title {
  font-family: 'Lobster', cursive;
}
.circle {
  height: 100px;
  width: 100px;
  margin-top: 200px;
}

h1 {
  color: #d5e2d6;
  margin-left: -8px;
  line-height: 80px;
  margin-top: -204px;

  /*-----------------------*/
  text-shadow: 1px 1px #4a744d, 2px 2px #4a744d, 3px 3px #4a744d,
    4px 4px #4a744d, 5px 5px #4a744d, 6px 6px #4a744d, 7px 7px #4a744d,
    8px 8px #4a744d, 9px 9px #4a744d, 10px 10px #4a744d, 11px 11px #4a744d,
    12px 12px #4a744d, 13px 13px #4a744d, 14px 14px #4a744d, 15px 15px #4a744d,
    16px 16px #4a744d, 17px 17px #4a744d, 18px 18px #4a744d, 19px 19px #4a744d,
    20px 20px #4a744d, 21px 21px #4a744d, 22px 22px #4a744d, 23px 23px #4a744d,
    24px 24px #4a744d, 25px 25px #4a744d, 26px 26px 6px #06520c;
}

span:nth-child(1) {
  font-size: 80px;
}

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

