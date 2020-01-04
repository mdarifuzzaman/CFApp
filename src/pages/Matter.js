import React, { Component, useContext } from 'react'
import {CaseContext} from '../CaseContext';


export default function Matter(props) {
    
    const [matters, setMatters] = useContext(CaseContext); 
    const id = parseInt(props.match.params.id);
    const selectedMatter = matters.find(matter => matter.id === id);
    console.log(props);
    return (
        <div>
            {
                
                <div key={selectedMatter.id}>
                    <a key={selectedMatter.id} href='#'>{selectedMatter.name} - {selectedMatter.desc}</a>
                </div>
            
            }

        </div>
    )
}

