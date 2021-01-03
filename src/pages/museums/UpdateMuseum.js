import React, { Component } from 'react';
//Artinya semua fungsi dimasukkan ke classNameName OtherActions
import * as MuseumActions from '../../actions/museums/MuseumActions';
import MainView from '../MainView';
import museumStores from '../../stores/museums/MuseumStores';

class UpdateMuseum extends Component {
    constructor() {
        super();
        this.state = {
            countries : museumStores.getCountryList(),
            headTitle : "Update Museum CRUD",
            title : "Update Museum",
            //this.props.match.params.value
        };
    }

    componentWillMount() {
         this.setState( {museumInfo: museumStores.getMuseum(this.props.match.params.value)} );
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
                                    <h4 className="title"> {this.state.title} </h4>
                                </div>
                                <div className="content">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Museum Name</label>
                                                    <input type="text" className="form-control" placeholder="Museum Name" name="museum_name" value={this.state.museumInfo.name} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Total Rating</label>
                                                    <input type="text" className="form-control" placeholder="Total Rating" name="total_rating" value={this.state.museumInfo.totalRating} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Address</label>
                                                    <input type="text" className="form-control" placeholder="Museum Name" name="address" value={this.state.museumInfo.address} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Phone</label>
                                                    <input type="text" className="form-control" placeholder="Total Rating" name="phone" value={this.state.museumInfo.phone} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Youtube Code</label>
                                                    <input type="text" className="form-control" placeholder="Youtube Code" name="youtube_code" value={this.state.museumInfo.youtubeCode} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Image Cover</label>
                                                    <input type="text" className="form-control" placeholder="Image Cover" name="image_cover" value={this.state.museumInfo.imageCover} />
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
                                                    <input type="text" className="form-control" placeholder="Website Link" name="website_link" value={this.state.museumInfo.websiteLink} />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-success btn-fill pull-right">Update Museum</button>
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

export default UpdateMuseum;