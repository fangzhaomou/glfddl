<template>
	<div class="cableitem">
		<div class="cableitem-content">
			<div class="cableitem-title">
				Browse：
				<a href="./home.html">
					<p>Home</p>
				</a>
				&nbsp;&nbsp;/&nbsp;&nbsp;
				<router-link to="/">
					<p>Cable</p>
				</router-link>
				&nbsp;&nbsp;/&nbsp;&nbsp;
				<p class="last">{{ $route.query.title }}</p>
			</div>
			<div class="cableitem-main">
				<div class="cableitem-main-msg">
					<div class="cablemsg-title">
						<div class="title-img">
							<img src="http://dianlan.nos-eastchina1.126.net/%E5%9B%BE%E5%B1%82%203.png" alt="cable" width="380px" height="120px"/>
						</div>
						<div class="title-name">
							<p v-for="item in producttextarr">{{ item }}</p>
						</div>
					</div>
					<div class="cableitem-text">
						<div class="mytext" v-for="item in tabletext">
							<div class="mytexttitle">
								{{ item.title }}
							</div>
							<div class="mytextcontent">
								{{ item.msg }}
							</div>
						</div>
						<div class="mytext" v-for="item in tabletable">
							<div class="mytexttitle">
								{{ item.title }}
							</div>
							<div class="mytextcontent">
								<my-table :message = "item.msg"></my-table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import tabledata from '../json/cabletable.json';
	import TwoTable from '../components/twotable.vue';
	
	export default {
		data:function(){
			return {
				producttextarr:[],
				tabletext:[],
				tabletable:[]
			}
		},
		components: {
		   'my-table':TwoTable
		},
		mounted:function(){
			this.tabletext = JSON.parse(this.$route.query.message).text;
			this.tabletable = JSON.parse(this.$route.query.message).table;
			var arr = this.$route.query.title.split('\r\n'); 
			this.producttextarr = arr;
			document.getElementsByTagName("body")[0].scrollTop = 0;
			
		}
	}
</script>

<style lang="less">
	.cableitem{
		background-color: #FAFBFC;
		.cableitem-content{
			margin-top: 120px;
			background-color: #DFE2E9;
			.cableitem-title{
				width: 100%;
				height: 30px;
				padding-left: 10px;
				background-color: #656F8B;
				display: flex;
				color: #fff;
				line-height: 30px;
				a{
					color: #fff;
				}
				.last{
					color: #ccc;
				}
			}
			.cableitem-main{
				padding: 14px;
				width: 75%;
				margin-left: 12.5%;
				.cableitem-main-msg{
					width: 100%;
					height: auto;
					min-height: 40px;
					background-color: #fff;
					border-radius: 4px;
					padding: 12px 8px;
					.cablemsg-title{
						width: 100%;
						height: 140px;
						padding: 10px;
						display: flex;
						background-color: #656F8B;
						border-radius: 4px;
						align-items:center;
						.title-img{
							width: 380px;
							height: 120px;
						}
						.title-name{
							margin-left: 20px;
							text-align: center;
							flex-grow: 1;
							color: #fff;
							font-weight: 600;
							font-size: 18px;
							line-height: 30px;
						}
					}
					.cableitem-text{
						margin: 10px;
						.mytext{
							margin-top: 30px;
							.mytexttitle{
								font-size: 16px;
								color: #777;
								line-height: 24px;
								font-weight: 600;
							}
							.mytextcontent{
								font-size: 12px;
								color: #000;
								line-height: 20px;
								font-weight: 590;
							}
						}
					}
				}
			}
		}
	}
</style>