<template>
	<div class="projectproduct">
		<div class="myoproduct-img">
			<router-link :to="{path:'/item',query: {message:item,title:message.text,url:message.url}}">
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
	.projectproduct{
		width: 100%;
		height: 260px;
		display: flex;
		flex-direction:column;
		align-items:center;
		background-color: #fff;
		border:1px solid #ccc;
		box-shadow: 5px 5px 8px #444;
		.myoproduct-img{
			width: 100%;
			height: 140px;
			min-height: 140px;
			overflow: hidden;
			.myoproductimg-item{
				width: 100%;
				height: 140px;
				transition: all .3s;
			}
			&:hover{
				cursor: pointer;
			}
			&:hover .myoproductimg-item{
				margin-top: -5px;
				margin-left: -5%;
				width: 110%;
				height: 150px;
			}
		}
		.myoproduct-text{
			color: #000;
			line-height: 20px;
			font-size: 14px;
			height: 120px;
			margin-top: 15px;
			display: flex;
			flex-direction:column;
			text-align: center;
		}
	}
</style>