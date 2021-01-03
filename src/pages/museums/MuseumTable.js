import React, { Component } from 'react';
import { Link, params } from 'react-router-dom';

class MuseumTable extends Component {
    constructor() {
        super();
        this.state = {
            title: "Museum Table"
        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <Link to="/museum/add"> <button> Add Museum </button> </Link>
                <table>
                    <tr>
                        <th> Nama </th>
                        <th> Negara </th>
                        <th> Aksi </th>
                    </tr>
                    <tr>
                        <td> Museum Sri Baduga </td>
                        <td> Indonesia </td>
                        <td>  
                            <button> Update </button> 
                            <button> Delete </button>
                        </td>
                    </tr>
                    <tr>
                        <td> Lee Kuan Yew Museum </td>
                        <td> Singapore </td>
                        <td>  
                            <Link to="/museum/update/2" params={{values: "2"}}> <button> Update </button> </Link>
                            <button> Delete </button>
                        </td>
                    </tr>
                </table>

            </div>

        );       
    }
}

export default MuseumTable;