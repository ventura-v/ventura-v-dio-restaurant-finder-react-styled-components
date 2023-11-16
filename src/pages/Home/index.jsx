import React, { useState } from "react";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from "@material/react-material-icon";
// import Slider from "react-slick";

import { Container, Search, Logo, Wrapper, CarouselTitle, Carousel } from './styles'
import { Card, RestaurantCard, Modal } from '../../components'

import logo from '../../assets/logo.svg'
import restaurante from '../../assets/restaurante-fake.png'

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

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
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Na sua área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title="Nome do restaurante" />
                        <Card photo={restaurante} title="Nome do restaurante" />
                        <Card photo={restaurante} title="Nome do restaurante" />
                        <Card photo={restaurante} title="Nome do restaurante" />
                        <Card photo={restaurante} title="Nome do restaurante" />
                        <Card photo={restaurante} title="Nome do restaurante" />
                        <Card photo={restaurante} title="Nome do restaurante" />
                        <Card photo={restaurante} title="Nome do restaurante" />
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
        </Wrapper>
    )
};

export default Home;