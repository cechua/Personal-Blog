import React from 'react';
import { useEffect } from 'react';


function HomePage() {
    useEffect(() => {
        document.title = 'Home'
    },[])
    return (
        <>
            Homepage
        </>
    )
}

export default HomePage;