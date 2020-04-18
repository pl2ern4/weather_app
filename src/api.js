
const headers = {"content-type":"application/json;charset=UTF-8"};

const getApiResponse = payload =>{
    return fetch(payload,{...headers,method:'GET'})
    .then(res=> {
        
        return res;
    })
    .then(res=>res.json());    
}


export const getCityListService = payload =>{
    // const URL = `http://localhost:4000/search?name=${payload && payload.city||''}`;
    const URL = `https://city-list-for-weather.herokuapp.com/search?name=${(payload && payload.city)||''}`;
    let cityList=[];
    return getApiResponse(URL).then(resp=>{
        return new Promise((resolve,reject)=>{
            cityList=resp.data.map(obj=>({"title":`${obj["name"]} ${obj["country"]}`,"id":obj["id"]}));
            resolve(cityList);
        }).then(resp=>resp);
    })
}

export const getCityWeatherService = payload=>{
    const URL= `https://api.openweathermap.org/data/2.5/forecast?id=${((payload && payload.id)||'14256')}&APPID=771d67e00059108e0fb1d280194d3bf2`;
    return getApiResponse(URL).then(resp=>resp);
}