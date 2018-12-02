import React from 'react';
import ShareFoodModalContainer from "./ShareFood/ShareFoodModalContainer";
import MyListings from "./MyListings/MyListings";

const Restaurant = () => {
    return (
        <div>
            <MyListings />
            <ShareFoodModalContainer />
        </div>
    );
};

export default (Restaurant);
