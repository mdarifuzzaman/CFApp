import React, { Component } from 'react'
import {FaTimes} from 'react-icons/fa'


export default class ListCFItems extends Component {
    constructor(){
        super()
    }

    render() {
        return (
            <div className="appointment-list item-list mb-3">                
                {this.props.cfItems.map(item => (
                    <div className="pet-item col media py-3" key={item.id}>
                    <div className="mr-3">
                      <button className="pet-delete btn btn-sm btn-danger" onClick={()=> this.props.deleteItem(item)}>
                          <FaTimes />
                      </button>
                    </div>
        
                    <div className="pet-info media-body">
                      <div className="pet-head d-flex">
                        <span className="pet-name" contentEditable suppressContentEditableWarning onBlur={e => this.props.updateInfo('caseNo', e.target.innerText, item.id)}>{item.caseNo}</span>                        
                        

                      </div>
        
                      <div className="owner-name">
                        <span className="label-item">Part No: </span>
                        <span  contentEditable suppressContentEditableWarning onBlur={e => this.props.updateInfo('partNo', e.target.innerText, item.id)}>{item.partNo}</span>                        

                        <br></br>
                        <span className="label-item">Quantity: </span>
                        <span contentEditable suppressContentEditableWarning onBlur={e => this.props.updateInfo('hsCode', e.target.innerText, item.id)}>{item.quantity}</span>

                        
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span className="label-item">Unit Price: </span>
                        <span contentEditable suppressContentEditableWarning onBlur={e => this.props.updateInfo('unitPrice', e.target.innerText, item.id)}>{item.unitPrice}</span>

                        
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span className="label-item">Total Price: </span>
                        <span contentEditable suppressContentEditableWarning onBlur={e => this.props.updateInfo('totalPrice', e.target.innerText, item.id)}>{item.totalPrice}</span>

                        
                        <br></br>
                        <span className="apt-notes">Net Weight Per Pcs: </span>
                        <span className="apt-notes" contentEditable suppressContentEditableWarning onBlur={e => this.props.updateInfo('netWeightPerPcs', e.target.innerText, item.id)}>                            
                            {item.netWeightPerPcs}
                        </span>

                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span className="apt-notes">Net Weight: </span>
                        <span className="apt-notes" contentEditable suppressContentEditableWarning onBlur={e => this.props.updateInfo('netWeight', e.target.innerText, item.id)}>                            
                            {item.netWeight}
                        </span>

                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span className="apt-notes">Gross Weight: </span>
                        <span className="apt-notes" contentEditable suppressContentEditableWarning onBlur={e => this.props.updateInfo('grossWeight', e.target.innerText, item.id)}>                            
                            {item.grossWeight}
                        </span>

                      </div>     
                      <div>
                        <span className="label-item">Part Name: </span>
                        <span contentEditable suppressContentEditableWarning onBlur={e => this.props.updateInfo('partName', e.target.innerText, item.id)}>                            
                            {item.partName}
                        </span>
                      </div>      
                      <div>
                        <span className="label-item">HS Code: </span>
                        <span contentEditable suppressContentEditableWarning onBlur={e => this.props.updateInfo('hsCode', e.target.innerText, item.id)}>                            
                            {item.hsCode}
                        </span>
                      </div>       
                    </div>
                  </div>
                ))}
            </div>
        )
    }
}
