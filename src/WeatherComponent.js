import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const WeatherComponent = props =>{
    return <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={props.cityList && props.cityList.map(option => option.title)}
                renderInput={params => (
                    <TextField {...params} label="freeSolo" margin="normal" variant="outlined" fullWidth />
                )}
            />
}

export default WeatherComponent;