import axios from "axios";

export default axios.create({
	baseUrl: "https://api.thedogapi.com/v1",
	headers: {
		"Content-type": "application/json",
		"x-api-key" : "live_it8ojGGtasajuixn5P5uZaUk40WzyizDSE7T8JKCQAfGsW7LFdhFGrgn6vK03PVX"
	}
})