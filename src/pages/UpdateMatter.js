import React, { Component, useContext, useState } from 'react'
import {CaseContext} from '../CaseContext';
import {FaEdit} from 'react-icons/fa';


export default function UpdateMatter(props) {
    
    
    
    const updateCaseNo = (e) => {
        setCaseNo(e.target.value);
    }

    const updateMatterName = (e) => {
        setMatterName(e.target.value);
    }


    const [matters, setMatters] = useContext(CaseContext); 
    const id = parseInt(props.match.params.id);
    const selectedMatter = matters.find(matter => matter.id === id);

    const [caseNo, setCaseNo] = useState(selectedMatter.id);
    const [matterName, setMatterName] = useState(selectedMatter.name);

    
    const handleAdd = (e) => {
        e.preventDefault();
    }
    console.log(props);
    return (
        <div>
        <div className="apt-addheading card-header bg-primary text-white">
            <FaEdit /> Update Matter
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate onSubmit={handleAdd}>
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
                    value={caseNo}
                    onChange={updateCaseNo}
                    />
                </div>
                </div>
                <div className="form-group form-row">
                <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="matterName"
                    readOnly
                >
                    matter Name
                </label>
                <div className="col-md-10">
                    <input
                    type="text"
                    className="form-control"
                    name="matterName"
                    placeholder="Matter Name"
                    value={matterName}
                    onChange={updateMatterName}
                    />
                </div>
                </div>
                <hr></hr>
                <button>Save Matter</button>
            </form>
        </div>
    </div>
    )
}


