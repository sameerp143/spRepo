import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './View.css';
import $ from 'jquery';
import CountryList from './CountryList';
class View extends React.Component {
    constructor(props) {
        super(props);

    }

    myChangeHandler = (event) => {
        if ($("#file")[0].files.length > 2) {
            alert("You can select only 2 file");
        } else {
            alert("file added ..");
        }
    }

    ageCalculate = (event) => {
        var d = new Date("2020-02-20");
        var DOB = new Date(d);
        var today = new Date();
        var age = today.getTime() - DOB.getTime();
        var elapsed = new Date(age);
        var year = elapsed.getYear() - 70;
        var month = elapsed.getMonth();
        var day = elapsed.getDay();
        if(year == 0)
        var ageTotal = month + " Month";
        else
        var ageTotal = year + " Years," + month + " Months";
        return ageTotal;

    }

    render() {

        return (
            <div className="container" >
                <div className="row row1-stlye">
                    <div className="col-7 col-stlye" >
                        <div className="row">
                            <div className="col-3">
                                <label className="lable">Instrument ID: </label><br/>
                        <span>1001</span>
                            </div>
                            <div className="col-3">
                                <label className="lable">Instrument name:</label><br/>
                        <span>Covida</span>
                            </div>
                            <div className="col-3">
                                <label className="lable">Instrument Family:</label><br/>
                        <span>Health</span>
                            </div>
                            <div className="col-3">
                                <label className="lable">Manufactured Date:</label><br/>
                        <span id="mdate" >2020-02-20</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-4">
                                <label className="lable">Age:</label><br/>
                                <span>{this.ageCalculate()}</span>
                            </div>
                            <div className="col-4">
                                <label className="lable">Serial Number:</label><br/>
                        <span>ID-007</span>
                            </div>
                            <div className="col-4">
                                <label className="lable">Finance Site:</label><br/>
                        <span>www.ABC.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row row-stlye ">
                    <div className="col-3">
                        <label className="lable">Display:</label>&nbsp;&nbsp;
                    <input className="th2" type="text" name="display" defaultValue="DISPALY-1" />
                    </div>
                </div>

                <hr />
                <div className="row row-stlye">
                    <div className="col-1">
                        <label className="lable" id="w3mission">Discripion:</label>
                    </div>
                    <div className="col-2">
                        <textarea id="w3mission" row row-stlyes="4" cols="30" />
                    </div>

                    <div className="col-6">
                        <label className="lable" for="type">Type:</label>&nbsp;&nbsp;
                        <select id="type">
                            <option selected value="Instrument">Instrument</option>
                            <option value="Accessory">Accessory</option>
                        </select>
                    </div>
                </div>

                {/* end */}
                <hr />
                <div className="row row-stlye">
                    <div className="col-3 col-stlye">
                        <label className="lable" for="classificaion">Classificaion:</label>&nbsp;&nbsp;
                        <select id="classificaion">
                            <option selected value="Rental">Rental</option>
                            <option value="on-site">on-site</option>
                        </select>
                    </div>

                    <div className="col-3">
                        <label className="lable" for="classificaion">Installation Require:</label>&nbsp;&nbsp;
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    </div>

                    <div className="col-3">
                        <label className="lable" for="classificaion">Booking Buffer:</label>&nbsp;&nbsp;
                        <select id="classificaion">
                            <option selected value="3">3</option>
                            <option value="5">5</option>
                            <option value="7">7</option>
                        </select>
                    </div>
                    <div className="col-3"></div>
                </div>
                {/* end */}
                <hr />
                <div className="row row-stlye">
                    <div className="col-3 ">
                        <label className="lable" for="classificaion">Home Location:</label>&nbsp;&nbsp;
                        <CountryList />
                        {/* <select id="classificaion">
                            <option selected value="IND">IND</option>
                            <option value="USA">USA</option>
                            <option value="AUS">AUS</option>
                        </select> */}
                    </div>


                    <div className="col-1">
                        <label className="lable" id="w3mission">Detail Location:</label>&nbsp;&nbsp;
                        </div>
                    <div className="col-2">
                        <textarea id="Detail" row row-stlyes="2" cols="30" />
                    </div>
                </div>
                <hr />
                <div className="row row-stlye">
                    <div className="col-3 col-stlye">
                        <label className="lable" for="classificaion">Moveable Asset:</label>&nbsp;&nbsp;
                        <select id="classificaion">
                            <option selected value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>

                <hr />
                <div className="row row-stlye">
                    <div className="col-2">
                        <label className="lable" for="classificaion">Layer Of Perameter:</label>&nbsp;&nbsp;
                                      </div>

                    <div className="col-2">
                        <label className="lable" for="classificaion">Super-Teritory:</label>&nbsp;&nbsp;
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    </div>
                    <div className="col-2">
                        <label className="lable" for="classificaion">Globle-Teritory:</label>&nbsp;&nbsp;
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    </div>
                    <div className="col-2">
                        <label className="lable" for="classificaion">Teritory:</label>&nbsp;&nbsp;
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    </div>
                    <div className="col-2">
                        <label className="lable" for="classificaion">Sub-Teritory:</label>&nbsp;&nbsp;
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    </div>
                    <div className="col-2">
                        <label className="lable" for="classificaion">Country:</label>&nbsp;&nbsp;
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    </div>
                </div>
                <hr />
                <div className="row row-stlye">
                    <div className="col-2 col-stlye">
                        <label className="lable" for="classificaion">Condition:</label>
                    </div>
                    <div className="col-2">
                        <label className="lable" for="classificaion">Bookable:</label>&nbsp;&nbsp;
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    </div>
                    <div className="col-2">
                        <label className="lable" for="classificaion">Not-Bookable:</label>&nbsp;&nbsp;
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    </div>
                </div>
                <hr />
                <div className="row row-stlye">
                    <div className="col-2 col-stlye">
                        <label className="lable" for="classificaion">Scalable:</label>
                    </div>
                    <div className="col-2">
                        <label className="lable" for="classificaion">Scalable:</label>&nbsp;&nbsp;
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    </div>
                    <div className="col-2">
                        <label className="lable" for="classificaion">Not-Scalable:</label>&nbsp;&nbsp;
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    </div>
                    <div className="col-3">
                        <label className="lable" for="classificaion">To-Be-Scrapped:</label>&nbsp;&nbsp;
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    </div>
                </div>
                <hr />
                <div className="row row-stlye">
                    <div className="col-2 col-stlye">
                        <label className="lable" id="w3mission">Condition Coments:</label>&nbsp;&nbsp;
                        </div>
                    <div className="col-2">
                        <textarea id="w3mission" row row-stlyes="4" cols="30" />
                    </div>
                </div>
                <hr />
                <div className="row row-stlye">
                    <div className="col-2 col-stlye">
                        <label className="lable" id="w3mission">Usage Coments:</label>&nbsp;&nbsp;
                        </div>
                    <div className="col-2">
                        <textarea id="w3mission" row row-stlyes="4" cols="30" />
                    </div>
                </div>
                <hr />
                <div className="row row-stlye">
                    <div className="col-2 col-stlye">
                        <label className="lable" id="w3mission">File Upload:</label>&nbsp;&nbsp;
                        </div>
                    <div className="col-3">
                        <input type="file" id="file" onChange={this.myChangeHandler} multiple />
                    </div>
                    <div className="col-1">
                        <span className="col-stlye"><i id="addfile" class="fa fa-plus-circle" aria-hidden="true"></i></span>
                    </div>

                </div>
                <br /><br />
                
                <div>
                <button id="" className="btn-sm btn-primary">SAVE</button>
                    </div>
                    
                    <br /><br />

            </div>
            // end    



        )
    }
}
export default View;
