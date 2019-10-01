import React, { Component } from 'react'

export default class SearchCFItem extends Component {
    render() {
        return (
            <div className="search-appointments row justify-content-center my-4">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  id="SearchItems"
                  type="text"
                  className="form-control"
                  aria-label="Search Products" onChange={e => this.props.searchItems(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort by: <span className="caret" />
                  </button>
    
                  <div className="sort-menu dropdown-menu dropdown-menu-right">
                    <button className={
                        'sort-by dropdown-item ' + 
                        (this.props.orderBy === 'partName' ? 'active' : '')
                    } onClick={e=> this.props.changeOrder('partName', this.props.orderDir)} href="#">
                      Part Name
                    </button>
                    <button className={
                        'sort-by dropdown-item ' + 
                        (this.props.orderBy === 'hsCode' ? 'active' : '')
                    } onClick={e=> this.props.changeOrder('hsCode', this.props.orderDir)} href="#">
                      HS Code
                    </button>                    
                    <div role="separator" className="dropdown-divider" />
                    <button className={
                        'sort-by dropdown-item ' + 
                        (this.props.orderDir === 'asc' ? 'active' : '')
                    } onClick={e=> this.props.changeOrder(this.props.orderBy, 'asc')} href="#">
                      Asc
                    </button>
                    <button className={
                        'sort-by dropdown-item ' + 
                        (this.props.orderDir === 'desc' ? 'active' : '')
                    } onClick={e=> this.props.changeOrder(this.props.orderBy, 'desc')} href="#">
                      Desc
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
