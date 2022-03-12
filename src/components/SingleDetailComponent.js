import React from 'react';

export default function SingleDetailComponent({ title, quotableData }) {
    return (
        <div className='row mx-auto'>
            <div className='col-lg-2 col-md-2 col-sm-4 col-5 p-0'>
                <strong>{title}</strong>
            </div>
            <div className='col-lg-10 col-md-10 col-sm-8 col-7 p-0'>
                {quotableData ?? <h6>{quotableData}</h6>}
            </div>
        </div>
    )
}
