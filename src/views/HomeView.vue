<template>

  <b-container class="home mt-5">

    <h1>{{mixinMessage}}</h1>

    <form @submit.prevent="onSubmit" @reset.prevent="onReset">

      <section class="row col-sm-6">

        <article class="col-sm-12 mb-3">
          <CustomInput v-model="form.firstName" :state="states.firstNameState" label="Nombre" id="first_name" placeHolder="Escribe tu nombre" />
        </article>

        <article class="col-sm-12 mb-3">
          <CustomInput v-model="form.lastName" :state="states.lastNameState" label="Apellido" id="last_name" placeHolder="Escribe tu apellido" />
        </article>

        <article class="col-sm-12 mb-3">
          <CustomInput v-model="form.email" :state="states.emailState" label="Correo electrónico" id="email" type="email" placeHolder="Escribe tu correo electrónico" />
        </article>

        <article class="col-sm-12 mb-3">
          <CustomButton title="Cancelar" type="reset" variant="danger"/>
        </article>

        <div class="col-sm-12 mb-3">
          <CustomButton title="Enviar" type="submit" />
        </div>

      </section>

    </form>

  </b-container>

</template>

<script>

export default {

  name: 'HomeView',

  components: {
    CustomInput: () => import(/* webpackChunkName: "CustomInput" */ '@/components/CustomInput.vue'),
    CustomButton: () => import(/* webpackChunkName: "CustomButton" */ '@/components/CustomButton.vue')
  },

  data(){

    return {

      form: {
        firstName: '',
        lastName: '',
        email: ''
      },

      states: {
        firstNameState: null,
        lastNameState: null,
        emailState: null,
      }

    }

  },

  methods: {

    validateInputs(){

      (this.form.firstName != '') ? this.states.firstNameState = null : this.states.firstNameState = false;
      (this.form.lastName != '') ? this.states.lastNameState = null : this.states.lastNameState = false;
      (this.form.email != '') ? this.states.emailState = null : this.states.emailState = false;

    },

    onSubmit(){

      this.validateInputs();

      console.log(JSON.stringify(this.form, null, 3));

    },

    onReset(){

      this.form = {
        firstName: '',
        lastName: '',
        email: ''
      },

      this.states = {
        firstNameState: null,
        lastNameState: null,
        emailState: null,
      }

    }

  }

}

</script>