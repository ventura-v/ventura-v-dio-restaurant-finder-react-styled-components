import React from 'react';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png'

import { Restaurant, RestaurantInfo, RestaurantTitle, RestaurantAddress, RestaurantPicture } from './styles';

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <RestaurantTitle>Nome do Restaurante</RestaurantTitle>
            <ReactStars
                count={5}
                isHalf
                value={4.5}
                edit={false}
                activeColor="#e7711c"
            />
            <RestaurantAddress>Endereço</RestaurantAddress>
        </RestaurantInfo>
        <RestaurantPicture src={restaurante} alt="imagem do restaurante" />
    </Restaurant>
);

export default RestaurantCard;