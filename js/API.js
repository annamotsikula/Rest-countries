// Mini services of API to easily read, store, delete or clear data
class miniService {
    constructor() {
        this.storage = localStorage;
    }
    add(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    }
    delete(key) {
        this.storage.removeItem(key);

    }
    read(key){
        return JSON.parse(this.storage.getItem(key));
    }
    clear () {
        this.storage.clear()
    }

}
SERVICES = new miniService();
// API of Log in User (already registered)
class API {
    loginURL = "https://reqres.in/api";

    async loginRequest(element, options={}, ) {
        try {
          const response = await fetch(`${this.loginURL}${element.endpoint}`, options);
          const result = await response.json();
          return result;

        }
        catch (err) {
            console.log(err);
            return;
        }
    }
        

    async login(email, password) {
        const element = {
            endpoint: '/login',
        };
        const options = {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers : { 'content-type' : 'application/json'}  

        };    
            
        try {
        const result = await this.loginRequest(element, options);
        return result;
        }
        catch(err){
        console.log(err);
        }
    }
    
}
APIlogin = new API();
window.windowKey = "token";
// API of countries
class mainAPI { 
    mainURL = "https://restcountries.eu/rest/v2";
    async countries(param, options={}, ) {
        try {
          const response = await fetch(`${this.mainURL}${param.endpoint}`, options);
          const result = await response.json();
          return result;

        }
        catch (err) {
            console.log(err);
            return;
        }

    }

    async allcountries(name) {
        const param = {
            endpoint: '/all',
        };
        const options = {
            method: "GET",
            
        };    
            
        try {
        const result = await this.countries(param, options);
        return result;
        }
        catch(err){
        console.log(err);
        }
    }    
    
}
window.countryApi = new mainAPI();

