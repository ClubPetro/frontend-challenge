import React, { useCallback, useEffect, useState } from 'react';
import {Form, Col, Row, Select, Input, Button } from 'antd';
import { ToastContainer } from 'react-toastify';
import InputMask from 'react-input-mask';
import axios from 'axios'

import Card from '../../components/Card';
import { apiUrl } from '../../services/api';
import { notifySuccess, notifyError } from '../../utils/toastify'
import validation from "../../utils/validation"
import Iplace from '../../interfaces/Iplace';
import { baseUrl } from '../../services/backend';

import './home.css'
import ICountry from '../../interfaces/ICountry';

function Home() {

    const defaultPlace = {
        country: {
            name: "",
            flag: ""
        },
        local: "",
        target: ""
    }
    const { Option } = Select
    const [countries, setCountries] = useState<ICountry[]>([])
    const [place, setPlace] = useState<Iplace>({...defaultPlace})
    const [places, setPlaces] = useState<Iplace[]>([])
    const [id, setId] = useState(0)
    const [isPlacesUpdated, setIsPlacesUpdated] = useState(false)

    const handleSelectInput = (name: string) => {
        const { flag } = countries.filter(country => country.name === name)[0]
        
        setPlace({...place, country: {
            name,
            flag
        }})
    }

    const savePlaceToGo = () => {

        const idForm = id !== 0 ? `/${id}` : ''
        const method = id !== 0 ? 'put' : 'post'

        try {
            validation(place)
            axios[method](baseUrl.concat(idForm), place)
            .then(() => {
                notifySuccess("Cadastro Realizado com Sucesso")
                setIsPlacesUpdated(!isPlacesUpdated)
            })
        } catch (error) {
            notifyError(error.message)
        }
        
    }

    const loadCountries = useCallback(async () => {
        const response = await axios.get(apiUrl)
        const countries = response.data.map((country: any) => {
            return {name: country.translations.br, flag: country.flag}
        })
        setCountries(countries)
    },[])

    const loadPlacesToGo = useCallback(() => {
        axios.get(baseUrl)
            .then((resp) => {
                setPlaces(resp.data)
        })
    },[])

    function loadPlaceToGo(place: Iplace) {
        setPlace({...place})
        if(place.id) {
            setId(place.id)
        }
    }

    function removePlaceToGo(place: Iplace) {
        axios.delete(`${baseUrl}/${place.id}`)
            .then(() => {
                alert("Local excluído com sucesso!")
                setIsPlacesUpdated(!isPlacesUpdated)
            })
    }

    useEffect(() => {
        loadCountries()
        loadPlacesToGo()
    }, [loadCountries, loadPlacesToGo, isPlacesUpdated])

    return (
        <>
            <div className="search-area-container">
                <ToastContainer />
                <Form 
                    layout="vertical"
                    onSubmitCapture={(e) => {
                        e.preventDefault() 
                    }}
                >
                    <Row>
                        <Input hidden value={id}/>
                        <Col xl={6} md={6} sm={10} xs={10}>
                            <Form.Item label="País">
                                <Select
                                    placeholder="Selecione..."
                                    showSearch
                                    value={place.country.name}
                                    onChange={(name) => {
                                        handleSelectInput(name);
                                    }}
                                >
                                    {countries.map(country => {
                                        return (
                                            <Option 
                                                value={`${country.name}`}
                                                key={country.name}
                                            >
                                                {country.name}
                                            </Option> 
                                        )
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xl={8} md={6} sm={12} xs={12}>
                            <Form.Item label="Local">
                                <Input 
                                    placeholder="Digite o local que deseja conhecer"
                                    value={place.local}
                                    onChange={(e) => setPlace({...place, local: e.target.value})}
                                    required
                                />
                            </Form.Item>
                        </Col>
                        <Col xl={4} md={4} sm={10} xs={10}>
                            <Form.Item label="Meta">
                                <InputMask 
                                    mask="99/9999" 
                                    className="input-mask"
                                    placeholder="mês/ano"
                                    value={place.target}
                                    required
                                    onChange={(e) => setPlace({...place, target: e.target.value})}
                                />
                            </Form.Item>
                        </Col>
                        <Col className="button-col" xl={4} md={6} sm={12} xs={12}>
                            <Button htmlType="submit" onClick={savePlaceToGo}>Adicionar</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="card-area-container">
                {places.map((place: Iplace) => {
                    return <Card 
                                countryFlag={place.country.flag}
                                countryName={place.country.name}
                                local={place.local}
                                target={place.target}
                                key={place.id}
                                handleEditButtonClick={() => loadPlaceToGo(place)}
                                handleRemoveButtonClick={() => removePlaceToGo(place)}
                            />
                })}
            </div>
        </>
    )
}

export default Home;