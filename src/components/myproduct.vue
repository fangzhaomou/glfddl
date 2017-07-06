<template>
	<div class="myproduct">
		<div class="myproduct-img">
			<a :href="producturl">
				<img class="myproductimg-item" :src="productitem" />
			</a>
		</div>
		<div class="myproduct-text">
			{{ producttext }}
		</div>
	</div>
</template>

<script>
	export default {
		props: ['productitem',"productname","producttext","producturl"],
		data:function(){
			return {
				
			}
		},
		mounted:function(){
		}
	}
</script>

<style lang="less">
	.myproduct{
		width: 100%;
		height: 150px;
		display: flex;
		flex-direction:row;
		align-items:center;
		.myproduct-img{
			width: 100px;
			height: 100px;
			min-height: 100px;
			min-width: 100px;
			border-radius: 50px;
			overflow: hidden;
			.myproductimg-item{
				width: 100px;
				height: 100px;
				transition: all .3s;
			}
			&:hover{
				cursor: pointer;
			}
			&:hover .myproductimg-item{
				margin-top: -10px;
				margin-left: -10px;
				width: 120px;
				height: 120px;
			}
		}
		.myproduct-text{
			margin-left: 20px;
			color: #fff;
		}
	}
</style>