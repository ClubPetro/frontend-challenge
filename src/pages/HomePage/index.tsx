import { CardsAreaContainer, HeaderContainer, HomePageContainer, SearchAreaContainer } from './style';
import logo from '../../images/logo.png'
import { Button, Grid, Select, MenuItem, Input } from '@mui/material'
import InputMask from 'react-input-mask';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardComponent from '../../components/Card';


interface CountryProps {
    flag: string
    nativeName: string
    name: string
}

interface CardProps {
    goal: string
    place: string
    country: string
    flag: string
    id: number
}

export default function HomePage(){

    const [countries, setCountries] = useState<CountryProps[]>([])
    const [selectedCountry, setSelectedCountry] = useState("")
    const [place, setPlace] = useState("")
    const [goal, setGoal] = useState("")
    const [cards, setCards] = useState<CardProps[]>([])

    useEffect(() => {

        getCards()

        axios.get("https://restcountries.com/v2/all")
            .then(response => {
                const countriesArr = response.data?.map((country: CountryProps) => {
                    return { nativeName: country.nativeName, flag: country.flag, name: country.name }
                })
                setCountries(countriesArr)
        })
        
    }, [])

    const getCards = () => {
        axios.get("http://localhost:3004/cards")
            .then(response => {
                const cardsArr = response.data
                setCards(cardsArr)
            })
    }

    const handleAdd = () => {
        const country = countries.find(country => country.name === selectedCountry)
        if(country && selectedCountry && place && goal){
            let card = { country: selectedCountry, place, goal, flag: country.flag }
            axios.post("http://localhost:3004/cards", card)
            .then(response => {
                getCards()
            })
            setGoal("")
            setPlace("")
            setSelectedCountry("")
        }
    }

    const handleDelete = (id: number) => {
        axios.delete("http://localhost:3004/cards/" + id)
            .then(response => {
               getCards()
            })
    }

    const handleEdit = (card: CardProps) => {
        axios.put("http://localhost:3004/cards/" + card.id, card)
        .then(response => {
           getCards()
        })
    }


    return (
        <HomePageContainer>
            <HeaderContainer>
                <img src={logo} alt="logo"></img>
            </HeaderContainer>
            <SearchAreaContainer>
                <Grid container rowSpacing={2} columnSpacing={12} wrap='wrap'>
                    <Grid item lg={3} md={12} sm={12} xs={12}>
                        <div className='inputColumn'>
                            <span>País</span>
                            <Select
                                displayEmpty
                                value={selectedCountry}
                                onChange={e => setSelectedCountry(e.target.value)}
                                renderValue={(selected: string) => {
                                    if (!selected) {
                                    return <span style={{color: '#00000060'}}>Selecione...</span>
                                    }
                                    return selected
                                }}
                            >
                                {countries?.length > 0 && countries.map((country: CountryProps) => {
                                    return <MenuItem key={country.name} value={country.name}>{country.name}</MenuItem>
                                })}
                            </Select>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <div className='inputColumn'>
                            <span>Local</span>
                            <Input 
                                value={place}
                                onChange={e => setPlace(e.target.value)}
                                placeholder='Digite o local que deseja conhecer' 
                                disableUnderline
                            />
                        </div>
                    </Grid>
                    <Grid item lg={3} md={12} sm={12} xs={12}>
                        <div className='inputColumn'>
                            <span>Meta</span>
                            <InputMask 
                                mask="99/9999" 
                                value={goal}
                                onChange={e => setGoal(e.target.value)}
                            >
                                {() => <Input disableUnderline placeholder='mês/ano'/>}
                            </InputMask>
                        </div>
                    </Grid>
                    <Grid item lg={2} md={12} sm={12} xs={12}>
                        <div className='inputColumn'>
                            <span className='noselect' style={{color: '#4F9419'}}>button</span>
                            <Button onClick={handleAdd}>Adicionar</Button>
                        </div>
                    </Grid>
                </Grid>
            </SearchAreaContainer>
            <CardsAreaContainer>
                <Grid container spacing={4} columns={30}>   
                    {cards?.length > 0 && cards.map(card => {
                        return (
                            <Grid item xs={15} sm={10} md={6} key={card.id}>
                                <CardComponent 
                                    id={card.id} 
                                    key={card.id} 
                                    goal={card.goal} 
                                    place={card.place} 
                                    country={card.country} 
                                    flag={card.flag}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                />
                            </Grid>
                        )
                    })}    
                </Grid>
            </CardsAreaContainer>
        </HomePageContainer>
    )
}