import React, {Component} from 'react';

class InputBox extends  Component{
    handleKey(e)
    {
        if(e.which===13)
            this.props.weatherForecast(e);
    }
    render()
    {
        return (
            <div className="row">
                <div className="col-md-6">
                    <h2>Search Weather here</h2>
                    <div id="custom-search-input">
                        <div className="input-group col-md-12">
                            <input id="city" type="text" className="form-control input-lg" placeholder="Eg: London" onKeyUp={this.handleKey.bind(this)} />
                            <span className="input-group-btn">
                                <button className="btn btn-info btn-lg" type="button" onClick={this.props.weatherForecast.bind(this)}>
									<i className="glyphicon glyphicon-search"></i>
								</button>
							</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InputBox;