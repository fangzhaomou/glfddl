<template>
	<div class="projectitem">
		<div class="projectitem-content">
			<div class="projectitem-title">
				Browse：
				<a href="./home.html">
					<p>Home</p>
				</a>
				&nbsp;&nbsp;/&nbsp;&nbsp;
				<router-link to="/">
					<p>Projects</p>
				</router-link>
				&nbsp;&nbsp;/&nbsp;&nbsp;
				<p class="last">{{ $route.query.title }}</p>
			</div>
			<div class="projectitem-main">
				<div class="projectitem-main-msg">
					<div class="projectitem-title">
						<div class="title-name">
							<p>
								{{ $route.query.title }}
							</p>
						</div>
						<div class="title-img">
							<img :src="$route.query.url" alt="cable" width="300px" height="120px"/>
						</div>
					</div>
					<div class="projectitem-text">
						<div class="mytext">
							<video :src="video" controls="controls" class="myvideo">
								您的浏览器不支持 video 标签。
							</video>
							<div class="mytext-text">
								{{ text }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		data:function(){
			return {
				producttextarr:[],
				video:"",
				text:""
			}
		},
		mounted:function(){
			this.text = JSON.parse(this.$route.query.message).text;
			this.video = JSON.parse(this.$route.query.message).video;
			/*var arr = this.$route.query.title.split('\r\n'); 
			this.producttextarr = arr;*/
			document.getElementsByTagName("body")[0].scrollTop = 0;
		}
	}
</script>

<style lang="less">
	.projectitem{
		background-color: #FAFBFC;
		.projectitem-content{
			margin-top: 120px;
			background-color: #DFE2E9;
			.projectitem-title{
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
			.projectitem-main{
				padding: 14px;
				width: 75%;
				margin-left: 12.5%;
				.projectitem-main-msg{
					width: 100%;
					height: auto;
					min-height: 40px;
					background-color: #fff;
					border-radius: 4px;
					padding: 12px 8px;
					.projectitem-title{
						width: 100%;
						height: 140px;
						padding: 10px;
						display: flex;
						background-color: #656F8B;
						border-radius: 4px;
						align-items:center;
						.title-img{
							width: 300px;
							height: 120px;
						}
						.title-name{
							margin-left: 20px;
							text-align: center;
							flex-grow: 1;
							color: #fff;
							padding: 0 50px;
							font-weight: 600;
							font-size: 18px;
							line-height: 30px;
						}
					}
					.projectitem-text{
						margin: 10px;
						.mytext{
							width: 100%;
							height: auto;
							margin-top: 30px;
							.myvideo{
								width: 75%;
								margin-left: 12.5%;
								min-height: 400px;
							}
							.mytext-text{
								width: 100%;
								padding: 30px;
								font-size: 14px;
								font-weight: 600px;
								line-height: 20px;
								word-break:break-all;
							}
						}
					}
				}
			}
		}
	}
</style>