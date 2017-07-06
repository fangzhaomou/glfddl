<!--顶部logo+菜单区域-->
<template>
	<div class="mytitle">
		<img class="mytitle-bg" src="http://dianlan.nos-eastchina1.126.net/%E7%9F%A9%E5%BD%A2%201.png" width="100%" height="100%"/>
		<div class="mytitle-top">
			<div class="mytitle-logo">
				<img src="http://dianlan.nos-eastchina1.126.net/logo.png" alt="logo" width="200px" height="42px"/>
			</div>
			<div class="mytitle-search">
				<el-input v-model="searchval" placeholder="请输入内容"></el-input>
				<img src="http://dianlan.nos-eastchina1.126.net/search.png" alt="搜索" />
			</div>
		</div>
		<div class="mytitle-menu">
			<div class="menu-content">
				<div class="menu-item" v-for="item in menu" :id="item.name">
					<a :href="item.url">{{ item.name }}</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import menu from '../json/menu.json';
	import { classedit } from '../other/classedit.js';
	
	export default {
		props: ['message'],
		data:function(){
			return {
				searchval:"",
				menu:menu
			}
		},
		mounted:function(){
			classedit.addClass(document.getElementById(this.message),"active");
		}
	}
</script>

<style lang="less">
	@mygreen:#91F6C0;
	.active{
		border-bottom: 3px solid @mygreen;
	}
	.mytitle{
		position: relative;
		width: 100%;
		height: 120px;
		display: flex;
		flex-direction:column;
		z-index: 999;
		.mytitle-bg{
			opacity: 0.9;
		}
		.mytitle-top{
			position: absolute;
			width: 100%;
			height: 60px;
			top: 0;
			left: 0;
			display: flex;
			flex-direction:row;
			justify-content:space-between;
			.mytitle-logo{
				width: 200px;
				height: 60px;
				margin-left: 20px;
				text-align: center;
				img{
					margin-top: 18px;
				}
			}
			.mytitle-search{
				align-self:flex-end;
				width: 300px;
				height: 60px;
				display: flex;
				flex-direction:row;
				.el-input{
					height: 30px;
					width: 200px;
					.el-input__inner{
						background-color:rgba(0,0,0,0);
						height: 30px;
						width: 200px;
						border: 2px solid @mygreen;
						margin-top: 25px;
					}
				}
				img{
					height: 22px;
					width: 22px;
					margin-top: 29px;
					margin-left: 5px;
				}
			}
				
		}
		.active{
			border-bottom: 3px solid @mygreen;
		}
		.mytitle-menu{
			position: absolute;
			width: 100%;
			height: 60px;
			top: 60px;
			left: 0;
			display: flex;
			flex-direction:row;
			justify-content:flex-end;
			.menu-content{
				width: auto;
				margin-top: 10px;
				height: 30px;
				display: flex;
				flex-direction:row;
				.menu-item{
					line-height: 30px;
					font-size: 14px;
					font-weight: 600;
					margin: 0 20px;
				}
			}
		}
	}
</style>