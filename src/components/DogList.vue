<template>
	<div class="row" style="margin-bottom: 10px;">
		<div class="col-sm-12 alert alert-success">
			Dogs List
		</div>
	</div>
	<div>
		<table class="table" id="tableList">
			<thead>
				<th>ID</th>
				<th>Name</th>
				<th>Breed Group</th>
			</thead>
			<tbody>
				<tr v-for="item in items" :key="item.id">
					<td>{{item.id}}</td>
					<td><router-link :to="'/breeds/'+item.id">{{item.name}}</router-link></td>
					<td>{{item.breed_group}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import DogService from "../Dogservice";  
    export default { 
        name: 'DogList',  
        data() {  
       return {  
      items: [],
    };  
  },
          created()
        {  
             this.retrieveDogs();  
        },  
      
    methods: {  
        retrieveDogs() {  
      DogService.getAll().then(response => {  
      this.items = response.data; 
        })  
        .catch(e => {  
          console.log(e);  
        });  
    },  
  
}  
}  
</script>

<style>
	#tableList{
		text-align: left;
	}
</style>