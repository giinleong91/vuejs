import http from "./Http-comman";
class DogService {
	getAll(){
		return http.get("https://api.thedogapi.com/v1/breeds?limit=20&page=0");
	}
	
	getSingle(id){
		return http.get("https://api.thedogapi.com/v1/breeds/"+id);
	}

	getImgUrl(img){
		return http.get("https://cdn2.thedogapi.com/images/"+img+".jpg")
	}
}
export default new DogService()