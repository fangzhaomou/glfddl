<!--首页-->
<template>
	<div class="homepage">
		<div class="homepage-top">
			<my-title message = "Home"></my-title>
			<div class="bg-one">
				<img src="http://dianlan.nos-eastchina1.126.net/%E8%83%8C%E6%99%AF.png" width="100%" height="100%"/>	
			</div>
			<div class="carousel">
				<el-carousel height="380px" @change="carouseltoggle" :interval=5000>
				    <el-carousel-item v-for="item in carousel" :key="item">
				      	<img :src="item.url" alt="item.name" width="100%" height="100%"/>
				    </el-carousel-item>
				</el-carousel>
				<!--<el-collapse-transition v-for="item in 4">
			        <div v-show="carouselindex == item-1">
			        	aaaaaaaaaaaaaaaaa
			        </div>
			    </el-collapse-transition>-->
			</div>
		</div>
		<div class="homepage-center">
			<el-row :gutter="150">
			  <el-col :span="12" v-for="item in homepagecenter"><my-product :producturl="item.to" :productitem="item.url" :productname="item.name" :producttext="item.text"></my-product></el-col>
			</el-row>
		</div>
		<div class="homepage-bottom">
			<my-bottom></my-bottom>
		</div>
	</div>
</template>

<script>
	import MyTitle from '../components/mytitle.vue';
	import MyProduct from '../components/myproduct.vue';
	import MyBottom from '../components/mybottom.vue';
	import carousel from '../json/carousel.json';
	import homepagecenter from '../json/homepagecenter.json';
	
	export default{
		data:function () {
			return {
				carousel:carousel,
				homepagecenter:homepagecenter,
				carouselindex:0
			}
		},
		methods:{
			carouseltoggle:function(index){
				this.carouselindex = index;
			}
		},
		components: {
		   'my-title': MyTitle,
		   'my-product':MyProduct,
		   'my-bottom':MyBottom
		},
		mounted:function(){
			
		}
	}
</script>

<style lang="less">
	.homepage{
		position: relative;
		width: 100%;
		.homepage-top{
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
		.homepage-center{
			width: 100%;
			padding: 50px 8%;
			height: 400px;
			background-color: #656F8B;
		}
	}
</style>