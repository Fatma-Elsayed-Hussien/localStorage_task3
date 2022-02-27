import React from 'react';
import {useLocation, useParams} from 'react-router-dom';

export default function ProductDetails(){
    const idsParams = useParams();
    const location = useLocation();

    return(
        <>
            <div>
                Page: {idsParams.productId}
                <br/>
                Data: {location.state.name}
            </div>
        </>
    );
}
