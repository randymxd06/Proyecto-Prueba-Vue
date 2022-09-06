<template>

  <b-container class="home mt-5">

    <h1>{{mixinMessage}}</h1>

    <form>

      <section class="row col-sm-6">

        <article class="col-sm-12 mb-3">
          <CustomInput v-model="form.firstName" label="Nombre" id="first_name" placeHolder="Escribe tu nombre" />
        </article>

        <article class="col-sm-12 mb-3">
          <CustomInput v-model="form.lastName" label="Apellido" id="last_name" placeHolder="Escribe tu apellido" />
        </article>

        <article class="col-sm-12 mb-3">
          <CustomInput v-model="form.email" label="Correo electrónico" id="email" type="email" placeHolder="Escribe tu correo electrónico" />
        </article>

      </section>

    </form>

  </b-container>

</template>

<script>

export default {

  name: 'HomeView',

  components: {
    CustomInput: () => import(/* webpackChunkName: "CustomInput" */ '@/components/CustomInput.vue')
  },

  data(){

    return {

      form: {
        firstName: '',
        lastName: '',
        email: ''
      }

    }

  }

}

</script>
