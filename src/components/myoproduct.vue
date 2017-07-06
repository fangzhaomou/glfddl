<template>
	<div class="myoproduct">
		<div class="myoproduct-img">
			<router-link :to="{path:'/item',query: {message:item,title:message.text}}">
				<img class="myoproductimg-item" :src="message.url" />
			</router-link>
		</div>
		<div class="myoproduct-text">
			<p v-for="item in producttextarr">{{ item }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["message"],
		data:function(){
			return {
				producttextarr:[],
				item:""
			}
		},
		mounted:function(){
			var arr = this.message.text.split('\r\n'); 
			this.producttextarr = arr;
			this.item = JSON.stringify(this.message.item);
		}
	}
</script>

<style lang="less">
	.myoproduct{
		width: 100%;
		height: 170px;
		display: flex;
		flex-direction:column;
		align-items:center;
		.myoproduct-img{
			width: 100%;
			height: 90px;
			min-height: 90px;
			overflow: hidden;
			.myoproductimg-item{
				width: 100%;
				height: 90px;
				transition: all .3s;
			}
			&:hover{
				cursor: pointer;
			}
			&:hover .myoproductimg-item{
				margin-top: -5px;
				margin-left: -5%;
				width: 110%;
				height: 100px;
			}
		}
		.myoproduct-text{
			color: #fff;
			line-height: 20px;
			font-size: 14px;
			height: 40px;
			margin-top: 15px;
			display: flex;
			flex-direction:column;
			text-align: center;
		}
	}
</style>