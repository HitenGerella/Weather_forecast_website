const API_KEY = "d56fff64365ebc56131c13bbf20595d2";
const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";
const raj = document.querySelector('#rajasthan');
const mum = document.querySelector('#mumbai');

// const API_KEY = "d70dbade43267e3da1ab0a649a7d9466";
// const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";

const getWeather = async (city) => {
    const http = new slhttp();
    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
    try{
        if(city == "Rajastha"){
            mum.style.display = 'none';
            raj.style.display = 'block';
        }
        const res = await http.get(url);
        console.log(res)
        return {
            state: 'success',
            weatherInfo: res 
        };
    } catch(e){
        return{
            state: 'error',
            weatherInfo: null
        }
    }
}
getWeather("Goa");
