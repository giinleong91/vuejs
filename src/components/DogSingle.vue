<template>
	<router-link :to="'/breeds'">Back</router-link>
	<div class="row">
		<h1>Details of {{ item.name }}</h1>
		<table class="table" id="tableDetail">
			<thead>
				<th>Title</th>
				<th>Details</th>
			</thead>
			<tbody>
				<tr>
					<th>Picture</th>
					<td>
						<figure class="image">
							<img :src="`https://cdn2.thedogapi.com/images/`+ item.reference_image_id+`.jpg`">
						</figure>
					</td>	
				</tr>
				<tr>
					<th>Origin</th>
					<td>{{ item.origin }}</td>
				</tr>
				<tr>
					<th>Lifespan</th>
					<td>{{ item.life_span }}</td>
				</tr>
				<tr>
					<th>Temperament</th>
					<td>{{ item.temperament }}</td>
				</tr>
				<tr>
					<th>Height</th>
					<td>
						<div v-for="(heightprop, index) in item.height" v-bind:key="index.id">
							<div>
								<span class="text-capitalize">{{ index }}</span> :
									<span>
									{{ heightprop }}
									</span>
							</div> 
						</div>
					</td>
				</tr>
				<tr>
					<th>Weight</th>
					<td>
						<div v-for="(weightprop, index) in item.weight" v-bind:key="index.id">
							<div>
								<span class="text-capitalize">{{ index }}</span> :
									<span>
									{{ weightprop }}
									</span>
							</div> 
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
import {useRoute} from 'vue-router';
import DogService from "../Dogservice"; 
export default{
	name: "DogSingle",
	data(){
		return {
			item: {
				image: ""
			},
		};
	},
	mounted()
	{
		const route = useRoute();
		console.warn("route", route.params.id);
	},
	created(){
		const id = this.$route.params.id;
		this.retrieveDog(id);
		// this.item = this.items.find((item) => item.id == id);
	},
	methods:{
		retrieveDog(id){
			DogService.getSingle(id).then(response => {
				this.item = response.data;
			})
			.catch(e => {
				console.log(e);
			})
		}
	}
}
</script>
<style>
	#tableDetail{
		text-align: left;
	}
	#tableDetail thead th:nth-child(1){
		width: 40%;
	}
	.image img{
		width:20%;
	}
</style>