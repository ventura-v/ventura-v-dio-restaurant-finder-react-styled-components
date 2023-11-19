import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png'

import { 
            Restaurant, 
            RestaurantInfo, 
            RestaurantTitle, 
            RestaurantAddress, 
            RestaurantPicture 
        } from './styles';
import Skeleton from '../Skeleton';

const RestaurantCard = ({ restaurant, onClick }) => {
    const [imageloaded, setimageloaded] = useState(false);

    return (
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <RestaurantTitle>{restaurant.name}</RestaurantTitle>
                <ReactStars
                    count={5}
                    isHalf
                    value={restaurant.rating}
                    edit={false}
                    activeColor="#e7711c"
                />
                <RestaurantAddress>{restaurant.vicinity || restaurant.formatted_address}</RestaurantAddress>
            </RestaurantInfo>
            <RestaurantPicture
                imageloaded={imageloaded ? "true" : "false"}
                src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
                onLoad={() => setimageloaded(true)}
                alt="imagem do restaurante" 
            />
            {!imageloaded && <Skeleton width='100px' height='100px' />}
        </Restaurant>
    );
}


export default RestaurantCard;