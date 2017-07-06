<template>
	<div class="mytable">
		<div class="mytable-contant">
			<table>
				<tr v-for="item in message" style="border: 3px solid #fff;">
					<td style="background-color: #DFE2E9;padding: 0 50px 0 10px;">{{ item.left }}</td>
					<td style="padding: 0 50px 0 60px;">{{ item.right }}</td>
				</tr>	
			</table>
		</div>
	</div>
</template>

<script>
	import tabledata from '../json/cabletable.json';
	
	export default{
		props: ['message'],
		data:function () {
			return {
				
			}
		},
		methods:{
			
		},
		mounted:function(){
			/*console.log(this.message);*/
		}
	}
</script>

<style>
</style>