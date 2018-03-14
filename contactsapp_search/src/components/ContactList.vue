<template>
	<div>
		<table id="list">
			<thead>
			<tr>
				<th>번호</th>
				<th>이름</th>
				<th>전화번호</th>
				<th>주소</th>
			</tr>
			</thead>
			<tbody id="contacts">
			<tr v-show="contacts.status==='fail'">
				<td colspan="4">{{contacts.message}}</td>
			</tr>
			<tr v-for="contact in contacts">
				<td>{{contact.no}}</td>
				<td>{{contact.name}}</td>
				<td>{{contact.tel}}</td>
				<td>{{contact.address}}</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		name: "contact-list",
		computed:mapState(['contacts'])
	}
</script>

<style scoped>
	#list{width:800px; font:13px "verdana"; border-collapse: collapse;}
	#list tr{border-bottom:solid 1px black;}
	#list thead tr{color:yellow; background-color:purple;}
	#list td, #list th{text-align:center; vertical-align:middle; border:1px solid black;}
</style>