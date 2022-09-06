<template>
  
    <button class="col-sm-12" :class="'btn btn-'+variant" :type="type">
        {{title}}
    </button>

</template>

<script>

export default {

    props: {

        title: {
            required: true,
            type: String,
            default: 'button'
        },

        type: {
            required: true,
            type: String,
            default: 'button'
        },

        variant: {
            required: false,
            type: String,
            default: 'primary'
        }

    }

}

</script>

<style>

</style>