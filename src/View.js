import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './View.css';
import $ from 'jquery';
import Autocomplete from './Autocomplete';
import './Autocomplete.css';
class View extends React.Component {
    constructor(props) {
        super(props);

    }

    newSuggestions = [
        "Alligator",
        "Bask",
        "Crocodilian",
        "Death Roll",
        "Eggs"
    ];



    myChangeHandler = (event) => {
        if ($("#file")[0].files.length > 2) {
            alert("You can select only 2 file");
        } else {
            alert("file added ..");
        }
    }

    ageCalculate = (event) => {
        var d = new Date("2019-02-20");
        var DOB = new Date(d);
        var today = new Date();
        var age = today.getTime() - DOB.getTime();
        var elapsed = new Date(age);
        var year = elapsed.getYear() - 70;
        var month = elapsed.getMonth();
        var day = elapsed.getDay();
        // if(year == 0)
        // var ageTotal = month + " Month";
        // else
        var ageTotal = year + " Year - " + month + " Month";
        return ageTotal;
    }

    render() {

        return (
            <div className="" >
                <div className="container-fluid mb-2 div1" >
                    <div className="row text-center">
                        <div className="col">
                            <label>Instrument ID</label>
                            <p>1001</p>
                        </div>
                        <div className="col">
                            <label>Instrument Name</label>
                            <p>CVD-14</p>
                        </div>
                        <div className="col">
                            <label>Instrument Family</label>
                            <p>Health</p>
                        </div>
                        <div className="col">
                            <label>Manufactured Date</label>
                            <p>2019-02-20</p>
                        </div>
                        <div className="col">
                            <label>Age</label>
                            <p>{this.ageCalculate()}</p>
                        </div>
                        <div className="col">
                            <label>Serial Number</label>
                            <p>ID-007</p>
                        </div>
                        <div className="col">
                            <label>Finance Site</label>
                            <p>www.ABC.com</p>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="formWrap text-left">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="">Display Name</label>
                                    <input type="text" className="form-control" defaultValue="Display-1" id="" placeholder="" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="">Description</label>
                                    <textarea className="form-control" id="" rows="3"></textarea>
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="inputState">Type</label>
                                    <select id="inputState" className="form-control">
                                        <option selected value="Instrument">Instrument</option>
                                        <option value="Accessory">Accessory</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="inputState">Classification</label>
                                    <select id="classificaion" className="form-control">
                                        <option selected value="Shippable Demo Instrument">Shippable Demo Instrument</option>
                                        <option value="On-site Demo Instrumen">On-site Demo Instrument</option>
                                        <option value="Shippable Demo Instrument">On-site PKI-used Instrument</option>
                                        <option value="On-site Demo Instrumen">Rental Instrument</option>

                                        <option value="Loan Instrument">Loan Instrument</option>
                                        <option value="On-site Demo Instrumen">Collaboration-Site Instrument</option>
                                        <option value="Shippable Demo Instrument">Return Instrument</option>
                                        <option value="On-site Demo Instrumen">Under maintenance or repair Instrument</option>

                                        <option value="Loan Instrument">Customer Instrument</option>
                                        <option value="On-site Demo Instrumen">Scrapped Instrument</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className="form-check-input" type="checkbox" id="gridCheck" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <label className="form-check-label" for="gridCheck">Installation Require</label>

                                </div>
                                <div className="form-group col-md-4">
                                    <label for="inputState">Booking Buffer</label>
                                    <select id="inputState" className="form-control">
                                        <option selected value="3">3</option>
                                        <option value="5">5</option>
                                        <option value="7">7</option>
                                    </select>
                                </div>
                            </div>



                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="inputState">Home Location</label>
                                    <select id="country" className="form-control" >
                                        <option selected value="BG">GB</option>
                                        <option value="PL">POLAND</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-4">
                                    <label for="">&nbsp;</label>
                                    <div className="">

                                        <Autocomplete/>

                                    </div>
                                    {/* <input type="text" className="form-control" id="" placeholder="Detail Location" /> */}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-12">

                                    <div>
                                        <label for="Moveable">Movable Asset</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="yes" name="Moveable" value="Bike" />&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>Yes</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                     </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="no" name="Moveable" value="Bike" checked />&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>No</span>&nbsp;&nbsp;
                                     </div>

                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="Layer">Layer Of Perameter</label>
                                    <div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="" name="Layer" checked />&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>Super-Teritory</span>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline2" name="Layer" />&nbsp;&nbsp;&nbsp;&nbsp;
                                            {/* <label className="custom-control-label" for="Layer">Globle-Teritory</label> */}
                                            <span>Globle-Teritory</span>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="" name="Layer" />&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>Teritory</span>
                                            {/* <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                            <label className="custom-control-label" for="Layer">Teritory</label> */}
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="" name="Layer" />&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>Sub-Teritory</span>
                                            {/* <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                            <label className="custom-control-label" for="customRadioInline1">Sub-Teritory</label> */}
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="" name="Layer" />&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>Country</span>
                                            {/* <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                            <label className="custom-control-label" for="customRadioInline1">Country</label> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="Bookable">Conditiont</label>
                                    <div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="" name="Bookable" checked />&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>Bookable</span>
                                            {/* <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                                            <label className="custom-control-label" for="customRadioInline1">Bookable</label> */}
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="" name="Bookable" />&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>Not-Bookable</span>
                                            {/* <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                            <label className="custom-control-label" for="customRadioInline2">Not-Bookable</label> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="Scalable">Movable Asset</label>
                                    <div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="" name="Scalable" checked />&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>Scalable</span>
                                            {/* <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                                            <label className="custom-control-label" for="customRadioInline1">radio</label> */}
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="" name="Scalable" />&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>Not-Scalable</span>
                                            {/* <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                            <label className="custom-control-label" for="customRadioInline2">radio</label> */}
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="" name="Scalable" />&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>To-Be-Scrapped</span>
                                            {/* <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                            <label className="custom-control-label" for="customRadioInline2">radio</label> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="">Condition Coments</label>
                                    <textarea className="form-control" id="" rows="3"></textarea>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="">Usage Coments</label>
                                    <textarea className="form-control" id="" rows="3"></textarea>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="">File Upload</label>
                                    <input type="file" className="form-control" id="file" onChange={this.myChangeHandler} multiple />
                                </div>
                            </div>


                            <div class="row">
                                <div class="col">
                                    <div class="mx-auto w-50 p-3 text-center">
                                        <button id="" className="btn-sm btn-warning">CANCLE</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button id="" className="btn-sm btn-primary"> SAVE </button>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>



        )
    }
}
export default View;
