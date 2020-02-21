const getApiResponse = payload =>{
    return fetch(payload)
    .then(res=> res)
    .then(res=>res.json());    
}


export const getCityListService = () =>{
    const URL = "https://pl2ern4.github.io/weather-cities/";
    let cityList=[];
    return getApiResponse(URL).then(resp=>{
        return new Promise((resolve,reject)=>{
            resp.map((obj)=>{
                cityList.push({"title":obj["city"]["name"],"id":obj["city"]["id"]["$numberLong"]});
            });
            resolve(cityList);
        }).then(resp=>resp);
    })
}

export const getCityWeatherService = payload=>{
    const URL= `http://api.openweathermap.org/data/2.5/forecast?id=${payload.id}&APPID=771d67e00059108e0fb1d280194d3bf2`;
    return getApiResponse(URL).then(resp=>resp);
}