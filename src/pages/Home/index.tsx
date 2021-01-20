import React, { useCallback, useEffect, useState } from 'react';
import {Form, Col, Row, Select, Input, Button } from 'antd';
import { ToastContainer } from 'react-toastify';
import InputMask from 'react-input-mask';
import axios from 'axios'

import Card from '../../components/Card';
import { apiUrl } from '../../services/api';
import { notifySuccess, notifyError } from '../../utils/toastify'
import Iplace from '../../interfaces/Iplace';
import { baseUrl } from '../../services/backend';

import './home.css'

function Home() {

    const { Option } = Select
    const [countries, setCountries] = useState<any[]>([])
    const [place, setPlace] = useState<Iplace>({
        country: {
            name: "",
            flag: ""
        },
        local: "",
        target: ""
    })
    const [places, setPlaces] = useState<Iplace[]>([])
    const [id, setId] = useState(0)

    const handleSelectInput = (value: string) => {
        setPlace({...place, country: {
            name: value.substring(0, value.indexOf('-')),
            flag: value.substring(value.indexOf('-') + 1)
        }})
    }

    const savePlaceToGo = () => {
        axios.post(baseUrl, place)
            .then((resp) => {
                notifySuccess("Cadastro Realizado com Sucesso")
                setId(resp.data.id)
            }).catch((error) => {
                if(error.response) {
                    notifyError(error.response.data)
                    return
                }
            })
    }

    const loadCountries = useCallback(() => {
        axios.get(apiUrl)
            .then(resp => {
                setCountries(resp.data)
            })
    },[])

    const loadPlacesToGo = useCallback(() => {
        axios.get(baseUrl)
            .then((resp) => {
                setPlaces(resp.data)
        })
    },[])

    useEffect(() => {
        loadCountries()
        loadPlacesToGo()
    }, [loadCountries, loadPlacesToGo, id])

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
                        <Col xl={6} md={6} sm={10} xs={10}>
                            <Form.Item label="País">
                                <Select
                                    placeholder="Selecione..."
                                    showSearch
                                    onChange={handleSelectInput}
                                >
                                    {countries.map(country => {
                                        return <Option 
                                                    value={`${country.translations.br}-${country.flag}`}
                                                    key={country.name}
                                                >
                                                    {country.translations.br}
                                                </Option>
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xl={8} md={6} sm={12} xs={12}>
                            <Form.Item label="Local">
                                <Input 
                                    placeholder="Digite o local que deseja conhecer"
                                    onChange={(e) => setPlace({...place, local: e.target.value})}
                                />
                            </Form.Item>
                        </Col>
                        <Col xl={4} md={4} sm={10} xs={10}>
                            <Form.Item label="Meta">
                                <InputMask 
                                    mask="99/9999" 
                                    className="input-mask"
                                    placeholder="mês/ano"
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
                            />
                })}
            </div>
        </>
    )
}

export default Home;