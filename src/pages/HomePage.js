import React from 'react';
import { Link } from 'react-router-dom';
import { fetchQuotablesFromAPI } from '../utils/API';

export default function HomePage() {

    const [quotablesData, setQuotablesData] = React.useState([]);

    React.useEffect(() => {
        fetchQuotablesFromAPI((response) => {
            if (response !== null) {
                console.log("\n\n \n\n HomePage fetchQuotablesFromAPI: ", response);
                setQuotablesData(response);
            }
        });
    }, []);

    return (
        <div className='shadow-sm p-3'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Author</th>
                        <th scope="col">Date Added</th>
                        <th scope="col">Date Modified</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        quotablesData.map((quote, index) => {
                            return (
                                <tr>
                                    <th scope="row">{parseInt(index + 1)}</th>
                                    <td><Link className='btn btn-link p-0' to={`/` + quote._id}>{quote.author}</Link></td>
                                    <td>{quote.dateAdded}</td>
                                    <td>{quote.dateModified}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
