<template>
  <div>
      <b-card>
         <b-alert show variant="danger" v-if="hasErrors">
             {{ error }}
         </b-alert>

<b-form @submit.prevent="login">
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
    import AxiosService from '@/API-Services/AxiosService.js'
export default {
data(){
    return {
        form:{
            email : 'admin@brinquitos.com',
            password : '12345678',
        },
        hasErrors : false,
        error : ''
    }
},
methods:{
    login(){
        AxiosService.login(this.form.email, this.form.password)
        .then((response)=>{
            console.log(response.data)
            localStorage.setItem('token', response.data.access_token)
            localStorage.setItem('user', response.data.name)
        })
        .catch((error) => {
            let responseError = error.response.data.error
            this.hasErrors = true
            this.error = responseError
        })
    }
}
}
</script>

<style>

</style>