<template>
	<div class="contactus">
		<my-title message = "Contact us"></my-title>
		<div class="contactus-content">
			<div class="contactus-router">
				<div class="router-main">
					<div class="routermain-title">
						Our location
					</div>
					<div class="map" id="mymap">
						
					</div>
					<div class="routermain-contact">
						<div class="contact-email">
							<div class="email-title">
								Name
							</div>
							<div class="email-name">
								<input class="email-input" type="text" />
							</div>
							<div class="email-title">
								Email
							</div>
							<div class="email-addr">
								<input  class="email-input" type="text" />
							</div>
							<div class="email-title">
								Message
							</div>
							<div class="email-message">
								<textarea class="email-textarea"></textarea>
							</div>
							<div class="email-send">
								<a href="javascript:void(0);" @click.prevent="emailsend">Send</a>
							</div>
						</div>
						<div class="contact-QR">
							<img src="http://dianlan.nos-eastchina1.126.net/%E4%BA%8C%E7%BB%B4%E7%A0%81.png" alt="QR code" width="160px" height="160px"/>
							<p>As long as you need,</p>
							<p>we`ve been here all the time!</p>
						</div>
					</div>
				</div>
			</div>
			<div class="contactus-bottom">
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
			emailsend:function(){
				this.$message({
					message:'发送成功！',
					type:'success'
				});
			}
		},
		components: {
		   'my-title': MyTitle,
		   'my-bottom':MyBottom
		},
		mounted:function(){
			createMap();
		}
	}
	function createMap(){
		var map = new BMap.Map("mymap", {
			enableMapClick: false
		}); // 创建Map实例，构造底图时，关闭底图可点功能
		var point = new BMap.Point(120.147631,30.299379); // 创建点坐标  
		map.centerAndZoom(point, 16); // 初始化地图，设置中心点坐标和地图级别
		//地图平移缩放控件，PC端默认位于地图左上方，它包含控制地图的平移和缩放的功能。移动端提供缩放控件，默认位于地图右下方。
		var opts = {
			type: BMAP_NAVIGATION_CONTROL_SMALL,
			anchor: BMAP_ANCHOR_TOP_LEFT
		}; //控制控件的位置跟形状
		map.addControl(new BMap.NavigationControl(opts));
		map.addControl(new BMap.OverviewMapControl()); //缩略地图控件，默认位于地图右下方，是一个可折叠的缩略地图。
		map.addControl(new BMap.ScaleControl()); //比例尺控件，默认位于地图左下方，显示地图的比例关系。
		map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
		var marker = new BMap.Marker(point);        // 创建标注    
		map.addOverlay(marker);                     // 将标注添加到地图中
	}
</script>
<style lang="less">
	@bgcolor:#DFE2E9;
	.contactus{
		position: relative;
		width: 100%;
		.contactus-content{
			position: absolute;
			top: 0;
			height: auto;
			min-height: 100%;
			width: 100%;
			.contactus-router{
				width: 100%;
				background-color: #fff;
				margin-top: 120px;
				background-color: @bgcolor;
				padding: 30px 15%;
				.router-main{
					height: auto;
					.routermain-title{
						font-size: 16px;
						color: #777;
						line-height: 24px;
						font-weight: 600;
					}
					.map{
						margin-top: 5px;
						width: 100%;
						height: 350px;
					}
					.routermain-contact{
						width: 100%;
						height: auto;
						margin-top: 0px;
						display: flex;
						.contact-email{
							width: 400px;
							height: auto;
							.email-title{
								font-size: 14px;
								color: #777;
								line-height: 20px;
								font-weight: 600;
								margin-top: 10px;
							}
							.email-name,.email-addr{
								width: 60%;
								height: 20px;
							}
							.email-message{
								width: 95%;
								height: 100px;
							}
							.email-textarea{
								width: 100%;
								height: 100px;
								border: 2px solid #fff;
								border-radius: 6px;
								background-color: @bgcolor;
								font-size: 14px;
								line-height: 20px;
								padding: 0 10px;
								font-weight: 600;
							}
							.email-input{
								font-weight: 600;
								width: 100%;
								height: 20px;
								border: 2px solid #fff;
								border-radius: 6px;
								background-color: @bgcolor;
								font-size: 12px;
								line-height: 20px;
								padding: 0 10px;
							}
							.email-send{
								width: 100%;
								margin-top: 20px;
								height: 30px;
								text-align: right;
								a{
									height: 30px;
									font-size: 16px;
									padding: 3px 15px;
									color: #fff;
									font-weight: 600px;
									background-color: #656F8B;
									border-radius: 6px;
								}
							}							
						}
						.contact-QR{
							flex-grow: 1;
							width: 400px;
							margin-top: 30px;
							padding-left: 30px;
							text-align: center;
							p{
								font-size: 14px;
								color: #777;
								line-height: 20px;
								font-weight: 600;
								margin-top: 10px;
							}
						}
					}
				}
			}
			.contactus-bottom{
				position: absolute;
				bottom: -50px;
				width: 100%;
			}
		}
	}
</style>