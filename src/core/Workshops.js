import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { API } from '../backend'
import { getworkshops } from '../superAdmin/helper/workshopApiCalls';
import Base from './Base'
function Workshops() {

    const [workshops, setWorkshops] = useState([]);
    const [error, seterror] = useState(false);

    const loadAllWorkshops = () => {
        getworkshops().then(data => {
            if (data.error) {
                seterror(data.error);
            } else {
                setWorkshops(data);
            }
        });
    };

    useEffect(() => {
        loadAllWorkshops();
    }, []);



    return (
        <Base title="Workshops">

            {workshops.map((workshop, index) => {
                return (
                    <div key={index} className="col-4 mb-4">
                        {/* <Card product={product} /> */}
                        <Link
                            className="btn btn-success"
                            to={`/workshop/${workshop._id}`}
                        >
                            <span className="">View</span>
                        </Link>
                        <pre>
                            {
                                JSON.stringify(workshop, null, 2)
                            }</pre>
                    </div>
                );
            })}
        </Base>
    )
}

export default Workshops
