import React, { useState } from "react";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from "@material/react-material-icon";
// import Slider from "react-slick";
import { useSelector } from "react-redux";

import { Container, Search, Logo, Wrapper, CarouselTitle, Carousel, ModalTitle, ModalContent } from './styles'
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components'

import logo from '../../assets/logo.svg'
import restaurante from '../../assets/restaurante-fake.png'

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            setQuery(inputValue);
        }
    }

    const handleOpneModal = (placeId) => {
        setPlaceId(placeId);
        setModalOpened(true);
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do site" />
                    <TextField
                        label='Pesquisar restaurantes'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </TextField>
                    {restaurants.length > 0 ? (
                        <>
                            <CarouselTitle>Na sua área</CarouselTitle>
                            <Carousel {...settings}>
                                {restaurants.map((restaurant) => (
                                    <Card 
                                        key={restaurant.place_id}
                                        photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
                                        title={restaurant.name}
                                    />
                                ))}
                            </Carousel>
                        </>
                    ) : (
                        <Loader />
                    )}
                </Search>
                {restaurants.map((restaurant) => (
                    <RestaurantCard 
                        onClick={() => handleOpneModal(restaurant.place_id)}
                        restaurant={restaurant} 
                    />
                ))}
            </Container>
            <Map query={query} placeId={placeId} />
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} >
                {restaurantSelected ? (
                    <>
                        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                        <ModalContent>
                            {restaurantSelected?.opening_hours?.isOpen
                                ? "Aberto agora!"
                                : "Fechado no momento"
                            }
                        </ModalContent>
                    </>
                ) : (
                    <>
                        <Skeleton width='10px' height='10px' />
                        <Skeleton width='10px' height='10px' />
                        <Skeleton width='10px' height='10px' />
                        <Skeleton width='10px' height='10px' />
                    </>
                )}
            </Modal>
        </Wrapper> 
    )
};

export default Home;