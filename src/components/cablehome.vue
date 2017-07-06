<template>
	<div class="cable-home">
		<div class="cable-top">
			<div class="bg-one">
				<img src="http://dianlan.nos-eastchina1.126.net/%E8%83%8C%E6%99%AF.png" width="100%" height="100%"/>	
			</div>
			<div class="carousel">
				<img src="http://dianlan.nos-eastchina1.126.net/%E9%98%B2%E7%81%AB%E7%94%B5%E7%BC%86%E5%A4%A7%E5%9B%BE.png" alt="电缆" height="380px" width="100%"/>
			</div>
		</div>
		<div class="cable-center">
			<el-row :gutter="60">
			  <el-col :span="8" v-for="item in cableitem"><my-oproduct :message="item"></my-oproduct></el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import cablecenter from '../json/cablecenter.json'
	import cableitem from '../json/cableitem.json'
	import MyOProduct from '../components/myoproduct.vue';
	
	export default{
		data:function () {
			return {
				cablecenter:cablecenter,
				cableitem:cableitem
			}
		},
		methods:{
			
		},
		components: {
		   'my-oproduct':MyOProduct
		},
		mounted:function(){
			
		}
	}
</script>

<style lang="less">
	.cable-home{
		width: 100%;
		height: auto;
		.cable-top{
			position: relative;
			height: 500px;
			width: 100%;
			.bg-one{
				position: absolute;
				top: 0;
				width: 100%;
				left: 0;
				height: 100%;
				z-index: -1;
			}
			.carousel{
				position: absolute;
				width: 80%;
				left: 10%;
				top: 120px;
				height: 380px;
			}
		}
		.cable-center{
			width: 100%;
			padding: 50px 8%;
			height: 400px;
			background-color: #656F8B;
		}
	}
</style>