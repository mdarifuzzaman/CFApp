import React, { Component } from 'react'
import {FaPlus} from 'react-icons/fa';

export default class AddCFItem extends Component {

    constructor(){
        super();
        this.state = {
            caseNo: 0,
            partNo: '',
            partName: '',
            hsCode: '',
            quantity: 0,
            unitPrice: 0,
            totalPrice: 0,
            netWeightPerPcs: 0,
            netWeight: 0,
            grossWeight: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleAdd(e){
        e.preventDefault();

        if(this.state.caseNo === 0){
            alert("Case no cannot be empty");
            return;
        }

        if(this.state.partNo === ''){
            alert("Part no cannot be empty");
            return;
        }

        if(this.state.partName === ''){
            alert("Part name cannot be empty");
            return;
        }

        if(this.state.hsCode === ''){
            alert("HS Code cannot be empty");
            return;
        }

        if(this.state.quantity === 0){
            alert("Quantity cannot be empty");
            return;
        }

        if(this.state.unitPrice === 0){
            alert("Unit Price cannot be empty");
            return;
        }

        if(this.state.totalPrice === 0){
            alert("Total Price cannot be empty");
            return;
        }

        if(this.state.netWeightPerPcs === 0){
            alert("Net Weight Per Pcs cannot be empty");
            return;
        }

        if(this.state.netWeight === 0){
            alert("Net Weight cannot be empty");
            return;
        }

        if(this.state.grossWeight === 0){
            alert("Gross Weight cannot be empty");
            return;
        }

        let item = {
            caseNo: this.state.caseNo,
            partNo: this.state.partNo,
            partName: this.state.partName,
            hsCode: this.state.hsCode,
            quantity: this.state.quantity,
            unitPrice: this.state.unitPrice,
            totalPrice: this.state.totalPrice,
            netWeightPerPcs: this.state.netWeightPerPcs,
            netWeight: this.state.netWeight,
            grossWeight: this.state.grossWeight
        };

        this.props.addItem(item);
        this.setState({
            caseNo: 0,
            partNo: '',
            partName: '',
            hsCode: '',
            quantity: 0,
            unitPrice: 0,
            totalPrice: 0,
            netWeightPerPcs: 0,
            netWeight: 0,
            grossWeight: 0
        });
    }

    render() {
        return (
            <div className={'card textcenter mt-3 ' + (this.props.formDisplay === false ? '' : 'add-appointment')} 
              onClick={this.props.toggleForm}>
                <div className="apt-addheading card-header bg-primary text-white">
                    <FaPlus /> Add Product
                </div>
  
                <div className="card-body">
              <form id="aptForm" noValidate onSubmit={this.handleAdd}>
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="caseNo"
                    readOnly
                  >
                    Case No
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="caseNo"
                      placeholder="Case No"
                      value={this.state.caseNo}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="partNo"
                    readOnly
                  >
                    Part No
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="partNo"
                      placeholder="Part No"
                      value={this.state.partNo}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>   

                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="partName"
                    readOnly
                  >
                    Part Name
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="partName"
                      placeholder="Part Name"
                      value={this.state.partName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>             
  
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="hsCode"
                  >
                   HS Code
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="hsCode"
                      placeholder="HS Code"
                      value={this.state.hsCode}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="quantity"
                  >
                    Quantity
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="quantity"
                      placeholder="Quantity"
                      value={this.state.quantity}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="unitPrice"
                  >
                    Unit Price
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="unitPrice"
                      placeholder="Unit Price"
                      value={this.state.unitPrice}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="totalPrice"
                  >
                    Total Price
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="totalPrice"
                      placeholder="Total Price"
                      value={this.state.totalPrice}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="netWeightPerPcs"
                  >
                    Net Weight Per Pcs
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="netWeightPerPcs"
                      placeholder="Net Weight Per Pcs"
                      value={this.state.netWeightPerPcs}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="netWeight"
                  >
                    Net Weight
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="netWeight"
                      placeholder="Net Weight"
                      value={this.state.netWeight}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="grossWeight"
                  >
                    Gross Weight
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="grossWeight"
                      placeholder="Gross Weight"
                      value={this.state.grossWeight}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-group form-row mb-0">
                  <div className="offset-md-2 col-md-10">
                    <button
                      type="submit"
                      className="btn btn-primary d-block ml-auto"
                    >
                      Add Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )
    }
}
