import React,{Component} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PropTypes from 'prop-types';
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {data:[]};
    }
    componentWillReceiveProps(Props){ console.log(Props)
    }
    imgCol(img){
        return '<img src="http://openweathermap.org/img/w/'+img+'.png" width="40" height="40"/>';
    }
    render(){
        console.log(this.props.temperature_det)
        return (
            (this.props.temperature_det!=null && this.props.temperature_det.length>0)?
                <BootstrapTable data={this.props.temperature_det}>
                    <TableHeaderColumn row='0' colSpan='1' dataField='dt' isKey={ true } ></TableHeaderColumn>
                    <TableHeaderColumn row='0' colSpan='3'>Conditions</TableHeaderColumn>
                    <TableHeaderColumn row='0' colSpan='3'>Comfort</TableHeaderColumn>
                    <TableHeaderColumn row='0' colSpan='2'>Precipitation</TableHeaderColumn>
                    <TableHeaderColumn row='1' dataField='dt'>Day</TableHeaderColumn>
                    <TableHeaderColumn row='1' dataField='img' dataFormat={this.imgCol.bind(this)}></TableHeaderColumn>
                    <TableHeaderColumn row='1' dataField='temp'>Temperature</TableHeaderColumn>
                    <TableHeaderColumn row='1' dataField='weather'>Weather</TableHeaderColumn>
                    <TableHeaderColumn row='1' dataField='fl'>Feels Like</TableHeaderColumn>
                    <TableHeaderColumn row='1' dataField='wd_speed'>Wind</TableHeaderColumn>
                    <TableHeaderColumn row='1' dataField='humid'>Humidity</TableHeaderColumn>
                    <TableHeaderColumn row='1' dataField='chance'>Chance</TableHeaderColumn>
                    <TableHeaderColumn row='1' dataField='amt'>Amount</TableHeaderColumn>
                </BootstrapTable>
            :null
        );
    }
}
Header.propTypes={
    temperature_det : PropTypes.array,
     header_value:  PropTypes.array
};
export default Header;