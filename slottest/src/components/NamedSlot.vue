<template>
	<div id="pagewrap">
		<header>
			<slot name="header"></slot>
		</header>
		<aside id="sidebar">
			<slot name="sidebar"></slot>
		</aside>
		<section id="content">
			<slot name="content"></slot>
		</section>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script>
	export default {
		name: "named-slot"
	}
</script>

<style >
/*전체구조*/
	#pagewrap{padding:5px; width:960px; margin:20px auto;}
	header{height:100px; padding:0 15px;}
	#content{width:696px; float:left; padding:5px 15px; min-height:300px;}
	#sidebar{width:200px; padding:5px 15px; float:left;}
	footer{clear:both; padding:0 15px;}

	/*980보다 작을때*/
	@media screen and(max-width:980px) {
		#pagewrap{width:94%;}
		#content{clear: both; padding:1% 4%; width:auto; float:none;}
		#sidebar{clear: both; padding:1% 4%; width:auto; float:none;}
		header,footer{padding:1% 4%}
	}

	/*공통스타일*/
	#content{background:#f8f8f8;}
	#sidebar{background:#f0efef;}
	header,#content,#middle,#sidebar{margin-bottom:5px;}
	#pagewrap,header,#content,#middle,#sidebar,footer{border:solid 1px #ccc;}
</style>