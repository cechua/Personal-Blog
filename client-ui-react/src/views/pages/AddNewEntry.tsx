import React from 'react';
import { useEffect } from 'react';


function AddNewEntry() {
    useEffect(() => {
        document.title = 'Add New Entry'
    },[])
    return (
        <>
            AddNewEntry
        </>
    )
}

export default AddNewEntry;