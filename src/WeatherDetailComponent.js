import React from 'react';
import { head } from 'lodash';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const WeatherDetailComponent = props =>{ console.log(props,'props')
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
    const products = props.weatherDetail && 
                        props.weatherDetail.map(obj=>{
                            const weather = head(obj['weather']);
                            return {
                                'dt': getTime(obj.dt),
                                'img': weather['icon'],
                                'temperature': `${obj['main']['temp_min']}/${obj['main']['temp_max']} °C`,
                                'weather':`${weather['main']}(${weather['description']})`,
                                'humidity':obj['main']['humidity']+'%',
                                'wind_speed':obj['wind']['speed']+' mps',
                                'feels_like': obj['main']['temp'],
                            }
                        })
    return <BootstrapTable data={ products }>
                <TableHeaderColumn row='0' colSpan='1' dataField='dt' isKey={ true } ></TableHeaderColumn>
                <TableHeaderColumn row='0' colSpan='3'>Conditions</TableHeaderColumn>
                <TableHeaderColumn row='0' colSpan='3'>Comfort</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='dt'>Day</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='img' dataFormat={img=>`<img src="http://openweathermap.org/img/w/${img}.png" width="40" height="40"/>`}></TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='temperature'>Temperature</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='weather'>Weather</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='feels_like'>Feels Like</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='wind_speed'>Wind</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='humidity'>Humidity</TableHeaderColumn>
        </BootstrapTable>
}

export default WeatherDetailComponent;