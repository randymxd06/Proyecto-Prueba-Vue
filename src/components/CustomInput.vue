<template>
  
    <b-form-group :id="id" :label="label" :label-for="id">
        <b-form-input
            :id="id"
            :value="value"
            :type="type"
            :placeholder="placeHolder"
            @input="$emit('input', $event)"
            :state="(value != '') ? true : state"
        ></b-form-input>
    </b-form-group>

</template>

<script>

export default {

    props: {

        value: {
            required: false,
            type: String,
            default: ''
        },

        id: {
            required: true,
            type: String,
            default: ''
        },

        label: {
            required: true,
            type: String,
            default: ''
        },

        type: {
            required: false,
            type: String,
            default: 'text'
        },

        state: {
            required: false,
            type: Boolean,
            default: null
        },

        placeHolder: {
            required: false,
            type: String,
            default: ''
        }

    },

}

</script>