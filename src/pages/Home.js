import React, { Component } from 'react'
import ListCFItems from '../components/ListCFItems';
import AddCFItem from '../components/AddCFItem';
import SearchCFItem from '../components/SearchCFItem';
import Total from '../components/Total'

import {without, findIndex} from 'lodash';

export default class Home extends Component {

    constructor(){
        super();
        this.state = {
            items: [],
            lastIndex: 0,
            formDisplay: true,
            orderBy: 'partName',
            orderDir: 'asc',
            queryText: ''
          }
      
          this.toggleForm = this.toggleForm.bind(this);
          this.addItem = this.addItem.bind(this);
          this.changeOrder = this.changeOrder.bind(this);
          this.searchItem = this.searchItem.bind(this);
          this.updateInfo = this.updateInfo.bind(this);
          this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(item){
        var confirmed = window.confirm("Are you sure to delete this product?");
        if(confirmed === false){
          return;
        }
        let tempItems = this.state.items;
        tempItems = without(tempItems, item);
        this.setState({
          items: tempItems
        });
  
        localStorage.setItem('cf-items', JSON.stringify(tempItems));
    }    
  
    updateInfo(name, value, id){
      let tempItems = this.state.items;    
      
      if(tempItems !== null){
        let itemIndex = findIndex(tempItems, {
          id: id
        });
        tempItems[itemIndex][name] = value;
  
        localStorage.setItem('cf-items', JSON.stringify(tempItems));
  
        this.setState({
          items: tempItems
        });
      }
      
  
      
    }
  
    changeOrder(order, dir){
      this.setState({
        orderBy: order,
        orderDir: dir
      });
    }
  
    searchItem(value){
      this.setState({
        queryText: value
      });
    }
  
    addItem(item){
      console.log(item);
      let tempItems = localStorage.getItem('cf-items');
      let tempItems2 = [];
      if(tempItems !== null){
        tempItems2 = JSON.parse(tempItems);
        tempItems2.push(item);
      }
      else{
        tempItems2.push(item);
      }
  
      localStorage.setItem('cf-items', JSON.stringify(tempItems2));
      this.setState({
        items: tempItems2
      });
    }
  
    toggleForm(){
      console.log('toggle form called');
      this.setState({
        formDisplay: false
      })
    }
  
    componentDidMount(){
      const tempItems = localStorage.getItem('cf-items');
  
      let items = [];
      if(tempItems !== null){
          const tempItem2 = JSON.parse(tempItems);
          let nextIndex = 0;
          items = tempItem2.map(item => {
            item.id = nextIndex;
            nextIndex = nextIndex + 1
            this.setState({lastIndex: nextIndex});
            return item;
        });
      }
  
      this.setState({items: items});
      
    }

    render() {
        let totalQuantity = 0;
        let totalUnitPrice = 0;
        let totalPrice = 0;
        let totalNetWeightPerPcs = 0;
        let totalNetWeight = 0;
        let totalGrossWeight = 0;
        let order;
        let filteredItems = this.state.items;

        if(filteredItems !== null){
        if(this.state.orderDir === 'asc'){
            order = 1;
        }
        else{
            order = -1;
        }

        
    
        filteredItems = filteredItems.sort((a, b) => {

            if(a[this.state.orderBy] === null || a[this.state.orderBy] === undefined){
            return 1;
            }

            if(b[this.state.orderBy] === null || b[this.state.orderBy] === undefined){
            return 1;
            }

            if(a[this.state.orderBy].toLowerCase() <  b[this.state.orderBy].toLowerCase()){
            return -1 * order;
            }
            else{
            return 1 * order;
            }
        }).filter(eachItem => {
            return (
            eachItem['partName'] !== undefined && eachItem['partName'].toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
            eachItem['hsCode'] !== undefined && eachItem['hsCode'].toLowerCase().includes(this.state.queryText.toLowerCase())
            );
        });
        }
        else{
            filteredItems = [];
        }

        if(this.state.items.length != filteredItems.length){
            filteredItems.forEach(item => {
                totalQuantity += parseFloat(item.quantity);
                totalUnitPrice += parseFloat(item.unitPrice);
                totalPrice += parseFloat(item.totalPrice);
                totalNetWeightPerPcs += parseFloat(item.netWeightPerPcs);
                totalNetWeight += parseFloat(item.netWeight);
                totalGrossWeight += parseFloat(item.grossWeight);
    
            });
        }
        


        return (
            <main className="page bg-white" id="petratings">
                <div className="container">
                <div className="row">
                    <div className="col-md-12 bg-white">
                    <div className="container">      
                        <AddCFItem toggleForm={this.toggleForm} formDisplay={this.state.formDisplay} addItem={this.addItem}></AddCFItem>
                        <SearchCFItem orderBy={this.state.orderBy} orderDir = {this.state.orderDir} changeOrder={this.changeOrder} searchItems = {this.searchItem}></SearchCFItem>
                        <ListCFItems cfItems={filteredItems} updateInfo = {this.updateInfo} deleteItem = {this.deleteItem}></ListCFItems>
                        <Total totalQuantity={totalQuantity} totalUnitPrice={totalUnitPrice} totalPrice={totalPrice} totalNetWeightPerPcs={totalNetWeightPerPcs} totalNetWeight={totalNetWeight} totalGrossWeight={totalGrossWeight}></Total>
                    </div>  
                    </div> 
                </div>
                </div>
        </main>
        )
    }
}
