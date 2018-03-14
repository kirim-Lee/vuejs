<template>
  <div>
    <search placeholder="두글자 이상 입력 후 엔터!"></search>
    <contact-list></contact-list>
  </div>
</template>

<script>
  import Search from './components/Search.vue';
  import ContactList from './components/ContactList.vue';
  export default {
	  name: 'app',
	  components:{Search,ContactList}
  }
</script>

<style>

</style>
