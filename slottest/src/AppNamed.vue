<template>
	<div id="app">
		<layout>
			<h1 slot="header">헤더 영역</h1>
			<div slot="sidebar">
				<ul class="menu">
					<li v-for="a in sidebars"><a :href="a.link">{{a.menu}}</a></li>
				</ul>
			</div>
			<div slot="content">
				<h2>컨텐츠 영역</h2>
				<p>김수한무 거북이와 두루미...(생략)</p>
				<p>김수한무 거북이와 두루미...(생략)</p>
				<p>김수한무 거북이와 두루미...(생략)</p>
				<p>김수한무 거북이와 두루미...(생략)</p>
			</div>
			<p slot="footer">Footer text</p>
		</layout>
	</div>
</template>

<script>
	import Layout from './components/NamedSlot';
	export default {
		name: "app-named",
		data(){
			return {
				sidebars:[
					{menu:"Home",link:"#"},
					{menu:"About",link:"#"},
					{menu:"Contact",link:"#"},
					{menu:"Vue.js",link:"#"}
				]
			}
		},
		components:{Layout}
	}
</script>

<style>

</style>