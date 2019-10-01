import React, { Component } from 'react'

export default class Total extends Component {
    constructor(){
        super();
    }



    render() {
        return (
            <div>
               <table border="1" style={{margin: 10}}>
                   <thead>
                       <tr style={{background: 'cyan'}}>
                           <td>Total Quantity</td>
                           <td>Total Unit Price</td>
                           <td>Total Price</td>
                           <td>Total Net Weight Per Pecs</td>
                           <td>Total Net Weight</td>
                           <td>Total Gross Weight</td>
                       </tr>
                   </thead>
                   <tbody>
                        <tr style={{fontWeight: 'bold'}}>
                            <td>{this.props.totalQuantity}</td>
                            <td>{this.props.totalUnitPrice}</td>
                            <td>{this.props.totalPrice}</td>
                            <td>{this.props.totalNetWeightPerPcs}</td>
                            <td>{this.props.totalNetWeight}</td>
                            <td>{this.props.totalGrossWeight}</td>
                        </tr>
                   </tbody>
               </table>
            </div>
        )
    }
}
