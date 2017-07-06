<template>
	<div class="myprojects">
		<my-title message = "Projects"></my-title>
		<div class="project-content">
			<router-view class="project-router">
			</router-view>
			<div class="project-bottom">
				<my-bottom></my-bottom>
			</div>
		</div>
	</div>
</template>
<script>
	import MyTitle from '../components/mytitle.vue';
	import MyBottom from '../components/mybottom.vue';
	
	export default{
		data:function () {
			return {
				
			}
		},
		methods:{
			
		},
		components: {
		   'my-title': MyTitle,
		   'my-bottom':MyBottom
		},
		mounted:function(){
			
		}
	}
</script>
<style lang="less">
	.myprojects{
		position: relative;
		width: 100%;
		.project-content{
			position: absolute;
			top: 0;
			height: auto;
			min-height: 100%;
			width: 100%;
			.project-router{
				width: 100%;
			}
			.project-bottom{
				position: absolute;
				bottom: -50px;
				width: 100%;
			}
		}
	}
</style>