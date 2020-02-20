const getApiResponse = payload =>{
    return fetch(payload)
    .then(res=> res)
    .then(res=>{console.log(res); return res.json();});    
}


export const getCityListService = () =>{
    const URL = "https://pl2ern4.github.io/weather-cities/";
    let cityList=[];
    return getApiResponse(URL).then(resp=>{
        return new Promise((resolve,reject)=>{
            console.log(resp,"resp");
            resp.map((obj,key)=>{
                cityList[key]=[];
                cityList[key].push({'title':obj['city']['name'],'id':obj['id']});
                // cityList[key].push({})
            });
            resolve(cityList);
        }).then(resp=>resp);
    })
}