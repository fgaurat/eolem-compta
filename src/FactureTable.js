import React, { Component } from 'react';


class FactureTable extends Component {

    state = {
        data:[]
    };


    componentDidMount(){
        const order='order=rowid,desc';
        const include='columns=rowid,facnumber,datec,total';
        const filter = 'filter=datec,cs,2018'
        const transformToJson = 'transform=1'
        const url = `http://compta.eolem.com/apiv2/api.php/llx_facture?${transformToJson}&${order}&${include}&${filter}`;
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            this.setState({data:data.llx_facture})
        });

    }

    render() {



        const factures = this.state.data.map((fact,index)=>
            <tr key={index}>
                <td>{fact.rowid}</td>
                <td>{fact.datec}</td>
                <td>{fact.facnumber}</td>
                <td>{fact.total}</td>
            </tr>
        );

        return (
            <>
                <h2>FactureTable</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>rowid</th>
                            <th>datec</th>
                            <th>facnumber</th>
                            <th>total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {factures}
                    </tbody>
                </table>

            </>
        );
    }
}

export default FactureTable;
