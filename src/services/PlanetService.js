

export default class PlanetService {

    constructor(props) {
        this.url = "https://swapi.co/api/planets/";       

        this.myHeaders = new Headers();       
        this.myHeaders.append('Access-Control-Allow-Origin', '*');
        this.myHeaders.append('Content-Type', 'application/json');       
        this.myHeaders.append('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS');       
    }

    async getCount() {      
        var myRequest = new Request(this.url, this.myHeaders);       
        return fetch(myRequest)
        .then(function(response) {
          return response.json()
        })
    }

    async getCount2() {      
        var myRequest = new Request(this.url, this.myHeaders);       
        return await Promise.resolve(fetch(myRequest));
    }

    async getPlanet(id){        
        var myRequest = new Request(this.url + id + "/", this.myHeaders);       
        return fetch(myRequest)
        .then(function(response) {
          return response.json()
        })

    }
}