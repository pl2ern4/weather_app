import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const WeatherComponent = props =>{
    const [value,setValue] = React.useState(null);
    return <Autocomplete
                id="free-solo-demo"
                freeSolo
                value={value}
                onChange={(event, newValue) => {
                    console.log(event.which,"eve",newValue);
                    setValue(newValue);
                    return;
                }}
                options={props.cityList && props.cityList.map(option => option.title)}
                renderInput={params => (
                    <TextField {...params} label="freeSolo" margin="normal" variant="outlined" fullWidth />
                )}
            />
}

export default WeatherComponent;