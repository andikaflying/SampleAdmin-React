//{ Component } artinya import class Component dari React
import React, { Component } from 'react';
import { Link, params } from 'react-router-dom';
import * as MuseumActions from '../../actions/museums/MuseumActions';
import museumStores from '../../stores/museums/MuseumStores';
import MainView from '../MainView';
//import Modal from 'react-modal';
import ContohModal from './ContohModal';

class Museum extends Component {
    constructor() {
        super();
        this.state = {
            museums : museumStores.getAllMuseums(),
            headTitle : "Museum CRUD",
            title : "Museum",
            isModalOpen: false
        };
    }

    componentWillMount() {
    
    }

    componentWillUnmount() {

    }

    render() {
        return( 
            <MainView page={this.displayPage()} title={this.state.headTitle} />
        );
    }

    displayPage() {
       const addBtnStyle = {
            margin: '10px 0px 0px 20px'
       };
       const deleteBtnStyle = {
            margin: '0px 0px 0px 20px'
       };
       let modalStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            background: '#fff'
        }

        let backdropStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            zIndex: '9998',
            background: 'rgba(0, 0, 0, 0.3)'
        }

       return( 
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="header">
                                            <h4 className="title">{this.state.title}</h4>
                                        </div>
                                        <div>
                                            <Link to="/museum/add"> 
                                                <button type="submit" className="btn btn-info btn-fill" style={addBtnStyle}>Add Museum</button>
                                            </Link>
                                        </div>
                                        <div className="content table-responsive table-full-width">
                                            <table className="table table-hover table-striped">
                                                <thead>
                                                    <th>Number</th>
                                                    <th>Name</th>
                                                    <th>Country</th>
                                                    <th>Action</th>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.museums.map( 
                                                            (variabel, index) => 
                                                                <tr> 
                                                                    <td> {index + 1} </td>
                                                                    <td> {variabel.name} </td>
                                                                    <td> {variabel.country} </td>
                                                                    <td>
                                                                        <Link to={ "/museum/update/" + variabel.id } > 
                                                                            <button type="submit" className="btn btn-success btn-fill">Update</button> 
                                                                        </Link>
                                                                        <button type="submit" className="btn btn-danger btn-fill" style={deleteBtnStyle} onClick={() => this.openModal()}>Delete</button>  
                                                                    </td>
                                                                </tr> 
                                                        ) 
                                                    }
                                                </tbody>
                                            </table>
                                            <ContohModal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                                                 <h1>Modal title</h1>
                                                 <p>hello</p>
                                                 <p>
                                                     <button onClick={() => this.closeModal()}>Close</button>
                                                </p>
                                            </ContohModal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
        );
    }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
}

export default Museum;