import React from 'react';
import withAsyncData from "../../../../HOCs/withAsyncData";

const Users = () => {
    return (
        <div>
            list of users with action
        </div>
    );
};

export default withAsyncData(Users);
