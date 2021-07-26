import React, { useState, useEffect } from 'react'
import { isAuthenticated } from '../auth/helper';
import { API, BASE_API } from '../backend'
import { getWorkshop, registerInWorkshop } from '../superAdmin/helper/workshopApiCalls';
import Base from './Base'
import ImageHelper from './helper/ImageHelper';
function Workshop({ match }) {

    const [workshop, setWorkshop] = useState(null);
    const [error, seterror] = useState(false);


    const { user, token } = isAuthenticated();
    const loadWorkshop = () => {
        getWorkshop(match.params.workshopId).then(data => {
            if (data.error) {
                seterror(data.error);
            } else {
                setWorkshop(data);
            }
        });
    };

    useEffect(() => {
        loadWorkshop();
    }, []);


    const registerWorkshop = () => {

        registerInWorkshop(user._id, token, match.params.workshopId).then(
            data => {
                console.log(data)
                if (data.error) {
                    console.log(data.error)
                } else {
                    console.log("registered success")
                }
            }
        ).catch(err => {
            console.log(err)
        })
    }


    return (
        <Base title="Workshop">

            <pre>
                {
                    JSON.stringify(workshop, null, 2)
                }
            </pre>

            <img src={`${BASE_API}${workshop?.workshop.photo}`} alt="" />

            {
                user &&
                <button onClick={registerWorkshop}> Register </button>
            }
            {/* <ImageHelper product={workshop} /> */}
            {/* .split('/').pop() */}
        </Base>
    )
}

export default Workshop
