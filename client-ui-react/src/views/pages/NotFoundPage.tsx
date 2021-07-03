import React from 'react';
import { useEffect } from 'react';


function NotFoundPage() {
    useEffect(() => {
        document.title = 'Page Not Found'
    },[])
    return (
        <>
            NotFoundPage
        </>
    )
}

export default NotFoundPage;