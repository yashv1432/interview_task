import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SingleDetailComponent from '../components/SingleDetailComponent';
import { fetchSingleQuotableFromAPI } from '../utils/API';

export default function DetailPage() {

    const { id } = useParams();

    const [quotableData, setQuotableData] = React.useState([]);

    React.useEffect(() => {
        fetchSingleQuotableFromAPI(id, (response) => {
            if (response !== null) {
                console.log("\n\n \n\n DetailPage fetchSingleQuotableFromAPI: ", response);
                setQuotableData(response);
            }
        });
    }, []);

    const renderSingleTagComponent = (data) => (
        <div className='col-lg-3 col-md-3 col-sm-4 col-6 p-0 me-3'>
            <div className='shadow-sm text-center p-2' style={{ borderRadius: '5px' }}>
                {data}
            </div>
        </div>
    )

    return (
        <div className='container my-5'>
            <div className='shadow p-4'>

                <Link className='btn btn-link mb-3' to="/">Go back</Link>

                <h1>{quotableData.content}</h1>

                <div className='shadow-sm p-3 my-4'>
                    <SingleDetailComponent
                        title="Author:"
                        quotableData={quotableData.author}
                    />
                    <SingleDetailComponent
                        title="Length:"
                        quotableData={quotableData.length}
                    />
                    <SingleDetailComponent
                        title="Added on:"
                        quotableData={quotableData.dateAdded}
                    />
                    <SingleDetailComponent
                        title="Modified on:"
                        quotableData={quotableData.dateModified}
                    />
                </div>

                <h6>Tags</h6>

                <div className='row mx-auto mt-2'>
                    {quotableData.tags !== undefined && quotableData.tags !== null
                        ? renderSingleTagComponent(quotableData.tags[0])
                        : <></>}
                    {quotableData.tags !== undefined && quotableData.tags !== null
                        ? renderSingleTagComponent(quotableData.tags[1])
                        : <></>}
                </div>
            </div>
        </div>
    )
}
