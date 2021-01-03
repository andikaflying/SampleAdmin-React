import React, { Component } from 'react';
import museumFormStores from '../stores/MuseumFormStores';
import * as MuseumActions from '../actions/MuseumActions';

class MuseumForm extends Component {
    constructor() {
        super();
        this.state = {
            form : museumFormStores.getAddMuseumVars().form,
            title: museumFormStores.getAddMuseumVars().title,
            listNegara : museumFormStores.getListNegara()
        };
    }
    //Mount = menyusun. Ini method override yg dieksekusi sistem pertama kali
    componentWillMount() {
        //Method utk membuat perubahan
        //Method dari Store ke Component
        museumFormStores.on("change", () => { this.setState( { 
                listNegara: museumFormStores.getListNegara(),
                form: museumFormStores.getAddMuseumVars().form
            })
        });
    }

    /*  Unmount = tidak menyusun. Dipanggil sebelum komponent dihancurkan
        Digunakan untuk : 
        -- membersihkan DOM yg dibuat di componentWillMount (Supaya tidak memori tdk bertambah jika page nya dieksekusi lebih dari 1 kali)
        -- Menghapus any timer dibuat di componentWillMount
        DOM = https://www.w3schools.com/js/js_htmldom.asp
    */
    componentWillUnmount() {

    }

    render() {
        return(
            this.displayForm()
        );
    }

    addNewForm() {
        MuseumActions.addNewForm();
    }

    addNewCountry() {
        MuseumActions.addNewCountry();
    }
    
    displayForm() {
        return(
            <div>
                <h3> {this.props.match.params.value} </h3> 
                <button onClick={this.addNewCountry.bind(this)} > Nambah negara </button>
                <button onClick={this.addNewForm.bind(this)}> Tambah form </button>
                {
                    this.state.form.map( (HTMLVariabel) => <div> {HTMLVariabel} </div> ) 
                } 
                <br/>
                {
                    this.state.listNegara.map( (a) => <div> {a} </div> )
                }
            </div>
        );
    }
    /*
    displayForm() {
        return(
            <div>
                 <button onClick={this.addNewForm.bind(this)}> Create! </button>
                <h3> {this.state.title} </h3>
                <div>
                    <label> Nama : </label> 
                    <input type="text" name="museum" value={this.state.formContent[0]} /> <br/>
                </div>
                <div>
                    <label> Negara : </label> 
                    <select>
                        {
                            this.state.listNegara.map((negara) => <option> {negara} </option>)
                        }
                    </select>
                </div>
                <div>
                    <label> Alamat : </label> 
                    <input type="text" name="alamat" value={this.state.formContent[1]} /> <br/>
                </div>
                <div>
                    <label> Deskripsi : </label> 
                    <input type="text" name="deskripsi" value={this.state.formContent[2]} /> <br/>
                </div>
                <div>
                    <input type="submit" value="OK" /> 
                </div>
            </div>
        );
    }*/
}

export default MuseumForm;