<template>
  <div>
      <b-card>
          <b-form @submit="login">
            <label>Correo:</label>
            <b-form-input placeholder="ejemplo@gmail.com" v-model="form.email" type="email"></b-form-input>
            <br>
            <label>Contraseña:</label>
            <b-form-input v-model="form.password" type="password"></b-form-input>
            <br>
            <b-button type="submit" variant="outline-primary" class="form-control">Iniciar sesión</b-button>

          </b-form>
      </b-card>
  </div>
</template>

<script>
export default {
data(){
    return {
        form:{
            email : '',
            password : '',
        }
    }
},
methods:{
    login(event){
event.preventDefault()

    }
}
}
</script>

<style>

</style>