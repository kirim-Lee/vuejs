<template>
	<contactForm mode="update" :contact="contact" />
</template>
<script>
	import ContactForm from './ContactForm.vue';
    export default{
        name:'update-contact',
		components:{ContactForm},
		props:['contact']
    }
</script>
