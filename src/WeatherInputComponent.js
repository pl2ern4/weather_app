import React,{useState} from 'react';
import { throttle  } from "throttle-debounce";

const WeatherInputComponent = props =>{

    const [selectedValue,setSelectedValue] = useState('');
    const [showOption,setshowOption] = useState(props.cityList.length>0);


    const onChange= e =>{ 
        setSelectedValue(e.target.value);
        if(e.target.value){
            props.getCityList({"city":e.target.value});
            setshowOption(true);
        }
    }

    const handleClickCityOption = e => {
        setSelectedValue(e.title);
        setshowOption(false);
        props.getWeather({"id":e.id});
        
    }

    return (<>
        <input 
            type="text" 
            className={`inputText ${(showOption && `selection-option`)||''}`} 
            onChange={e=>throttle(10000, onChange(e))}
            value={selectedValue}
            required/>
       <span className="floating-label">Select City</span>   
       {showOption &&  <ul>
            {props.cityList.map(obj=><li key={obj.id} id={obj.id} onClick={e=>handleClickCityOption({...obj})}>{obj.title}</li>)}
        </ul>} 
    </>)
}

export default WeatherInputComponent;