import React, {createContext, useState} from 'react'

export const CaseContext = createContext();

export const CaseProvider = props => {
    const [matters, setMatters] = useState([
        {
            id: 1,
            name: 'Matter1',
            desc: 'A sample matter',
            matterType: 'Road Traffic Accident',
            files: [],
            status: 1
        },
        {
            id: 2,
            name: 'Matter2',
            desc: 'A sample matter 2',
            matterType: 'Road Traffic Accident',
            files: [],
            status: 2
        },
        {
            id: 3,
            name: 'Matter3',
            desc: 'A sample matter 3',
            matterType: 'Road Traffic Accident',
            files: [],
            status: 3
        },
        {
            id: 4,
            name: 'Matter4',
            desc: 'A sample matter 4',
            matterType: 'Road Traffic Accident',
            files: [],
            status: 4
        },
        {
            id: 5,
            name: 'Matter5',
            desc: 'A sample matter',
            matterType: 'Road Traffic Accident',
            files: [],
            status: 1
        }
    ]);

    return (
        <CaseContext.Provider value={[matters, setMatters]}>
            {props.children}
        </CaseContext.Provider>
    );
}