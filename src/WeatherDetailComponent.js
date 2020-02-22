import React from 'react';
import { head } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    mainHeader:{
        fontWeight:900,
    },
    header:{
        fontWeight:800,
    }
});

const WeatherDetailComponent = props =>{

    const classes = useStyles();

    const getTime = timeStamp=>{
        var options = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric', 
        },
        intlDate = new Intl.DateTimeFormat( undefined, options );
        return intlDate.format( new Date( 1000 * timeStamp) );
    }
    return  <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.header}>
                    <TableRow>
                        <TableCell colSpan="3" align="left"></TableCell>
                        <TableCell className={classes.mainHeader} colSpan="2" align="left">Conditions</TableCell>
                        <TableCell className={classes.mainHeader} colSpan="2" align="left">Comfort</TableCell>
                    </TableRow>
                </TableHead>    
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.header} align="left">Date & Time</TableCell>
                        <TableCell className={classes.header} align="left"></TableCell>
                        <TableCell className={classes.header} align="left">Temperature</TableCell>
                        <TableCell className={classes.header} align="left">Weather</TableCell>
                        <TableCell className={classes.header} align="left">Humidity</TableCell>
                        <TableCell className={classes.header} align="left">Wind Speed</TableCell>
                        <TableCell className={classes.header} align="left">Feels like</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.weatherDetail.map(obj=>{
                    const weather=head(obj['weather']);
                    return <TableRow key={obj.dt}>
                                <TableCell align="left">{getTime(obj.dt)}</TableCell>
                                <TableCell align="left"><img alt={obj.dt} src={`https://openweathermap.org/img/w/${weather['icon']}.png`} width="40" height="40"/></TableCell>
                                <TableCell align="left">
                                    {`${obj['main']['temp_min']}/${obj['main']['temp_max']} °C`}
                                </TableCell>
                                <TableCell align="left">{`${weather['main']} (${weather['description']})`}</TableCell>
                                <TableCell align="left">{`${obj['main']['humidity']}%`}</TableCell>
                                <TableCell align="left">{`${obj['wind']['speed']}mps`}</TableCell>
                                <TableCell align="left">{obj['main']['temp']}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>    
}

export default WeatherDetailComponent;