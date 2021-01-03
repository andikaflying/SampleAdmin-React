import React, { Component } from 'react';
//Artinya semua fungsi dimasukkan ke classNameName OtherActions
import * as MuseumActions from '../../actions/museums/MuseumActions';
import MainView from '../MainView';
import museumStores from '../../stores/museums/MuseumStores';

class AddMuseum extends Component {
    constructor() {
        super();
         this.state = {
            countries : museumStores.getCountryList(),
            headTitle : "Add Museum CRUD",
            title : "Museum",
        };
    }

    render() {
        return(
            <MainView page={this.displayPage()} title={this.state.headTitle} />
        );
    }

    displayPage() {
        return(
          <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Add Museum</h4>
                            </div>
                            <div className="content">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Museum Name</label>
                                                <input type="text" className="form-control" placeholder="Museum Name" name="museum_name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Total Rating</label>
                                                <input type="text" className="form-control" placeholder="Total Rating" name="total_rating" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input type="text" className="form-control" placeholder="Museum Name" name="address" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input type="text" className="form-control" placeholder="Total Rating" name="phone" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Youtube Code</label>
                                                <input type="text" className="form-control" placeholder="Youtube Code" name="youtube_code" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Image Cover</label>
                                                <input type="text" className="form-control" placeholder="Image URL" name="image_cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <select className="form-control">
                                                    {
                                                        this.state.countries.map(
                                                            (variabel) =>
                                                                <option> { variabel} </option>
                                                        )
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Website Link</label>
                                                <input type="text" className="form-control" placeholder="Website Link" name="website_link" />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success btn-fill pull-right">Add Museum</button>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default AddMuseum;
