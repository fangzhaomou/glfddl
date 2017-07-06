<!--cable-->
<template>
	<div class="cable">
		<my-title message = "Cable"></my-title>
		<div class="cable-content">
			<router-view class="cable-router">
			</router-view>
			<div class="cable-bottom">
				<my-bottom></my-bottom>
			</div>
		</div>
	</div>
</template>

<script>
	import MyTitle from '../components/mytitle.vue';
	import MyOProduct from '../components/myoproduct.vue';
	import MyBottom from '../components/mybottom.vue';
	import cablecenter from '../json/cablecenter.json'
	
	export default{
		data:function () {
			return {
				cablecenter:cablecenter
			}
		},
		methods:{
			
		},
		components: {
		   'my-title': MyTitle,
		   'my-oproduct':MyOProduct,
		   'my-bottom':MyBottom
		},
		mounted:function(){
			
		}
	}
</script>

<style lang="less">
	.cable{
		position: relative;
		width: 100%;
		.cable-content{
			position: absolute;
			top: 0;
			height: auto;
			min-height: 100%;
			width: 100%;
			.cable-router{
				width: 100%;
			}
			.cable-bottom{
				position: absolute;
				bottom: -50px;
				width: 100%;
			}
		}
	}
</style>