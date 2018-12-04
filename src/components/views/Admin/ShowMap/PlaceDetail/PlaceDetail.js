import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook, faPhone, faStroopwafel} from "@fortawesome/free-solid-svg-icons";

const PageDetail = ({isFetching, place}) => {

    if (isFetching) {
        return (
            <FontAwesomeIcon spin icon={faStroopwafel}/>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card" style={{width: 200, height: 200}}>
                        <div className="card-body text-white bg-light h-50">
                            <h4 className="card-title">{place.name}</h4>
                        </div>
                        <div className="card-body bg-dark text-white h-25">
                            <p className="card-title"><FontAwesomeIcon
                                icon={faAddressBook}/>{"\t" + place.formatted_address}</p>
                        </div>
                        <div className="card-body bg-dark text-white h-25">
                            <p className="card-title"><FontAwesomeIcon
                                icon={faPhone}/>{"\t" + place.formatted_phone_number && place.formatted_phone_number}
                            </p>
                        </div>
                        <div className="card-body bg-dark text-white h-25">
                            <p className="card-title">{place.opening_hours && place.opening_hours.open_now}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default PageDetail;
