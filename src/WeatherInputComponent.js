import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const WeatherInputComponent = props =>{
    const [value,setValue] = React.useState(null);
    return <Autocomplete
                id="free-solo-demo"
                freeSolo
                value={value}
                onChange={(event, newValue) => {
                    props.getWeather(newValue);
                    setValue(newValue);
                    return;
                }}
                options={props.cityList && props.cityList.map(option => option.title)}
                renderInput={params => (
                    <TextField {...params} label="freeSolo" margin="normal" variant="outlined" fullWidth />
                )}
            />
}

export default WeatherInputComponent;