<template>
	<div class="projects-home">
		<div class="projects-top">
			<div class="bg-one">
				<img src="http://dianlan.nos-eastchina1.126.net/%E8%83%8C%E6%99%AF.png" width="100%" height="100%"/>	
			</div>
			<div class="carousel">
				<el-carousel :interval="4000" type="card"  height="340px">
				    <el-carousel-item v-for="item in carousel" :key="item">
				       <img :src="item.url" alt="item.name" width="100%" height="100%"/>
				    </el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<div class="projects-center">
			<div class="center-title">
				<div class="line"></div>
				<div class="text">
					Project Introduction
				</div>
			</div>
			<el-row :gutter="180">
			  <el-col style="margin-top: 40px;" :span="8" v-for="item in projectsitem"><my-project-product :message="item"></my-project-product></el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import projectsitem from '../json/projectsitem.json'
	import MyProjectProduct from '../components/myprojectproduct.vue';
	import carousel from '../json/carousel.json';
	
	export default{
		data:function () {
			return {
				carousel:carousel,
				projectsitem:projectsitem
			}
		},
		methods:{
			
		},
		components: {
		   'my-project-product':MyProjectProduct
		},
		mounted:function(){
			
		}
	}
</script>

<style lang="less">
	.projects-home{
		width: 100%;
		height: auto;
		.projects-top{
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
				width: 90%;
				left: 4%;
				top: 120px;
				height: 380px;
				padding: 20px 0;
			}
		}
		.projects-center{
			width: 100%;
			padding: 50px 8%;
			height: 750px;
			background-color: #656F8B;
			.center-title{
				position: relative;
				display: flex;
				justify-content:center;
				text-align: center;
				height: 30px;
				.line{
					width: 100%;
					height: 1px;
					background-color: #ccc;
				}
				.text{
					position: absolute;
					top: -15px;
					width: 180px;
					line-height: 20px;
					font-size: 14px;
					color: #ccc;
					background-color: #656F8B;
				}
			}
		}
	}
</style>