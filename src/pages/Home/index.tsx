import React, { useEffect, useState } from 'react';
import {Form, Col, Row, Select, Input, Button } from 'antd';
import InputMask from 'react-input-mask';
import axios from 'axios'

import Card from '../../components/Card';
import { apiUrl } from '../../services/api';

import './home.css'
import Iplace from '../../interfaces/Iplace';

function Home() {

    const { Option } = Select
    // const [ form ] = Form.useForm();
    const [countries, setCountries] = useState<any[]>([])
    const [place, setPlace] = useState<Iplace>({
        country: {
            name: "",
            flag: ""
        },
        local: "",
        target: ""
    })

    const handleSelectInput = (value: string) => {
        setPlace({...place, country: {
            name: value.substring(0, value.indexOf('-') - 1),
            flag: value.substring(value.indexOf('-') + 2)
        }})
    }

    useEffect(() => {
        axios.get(apiUrl)
            .then(resp => {
                setCountries(resp.data)
            })
    }, [])

    return (
        <>
            <div className="search-area-container">
                <Form 
                    layout="vertical"
                    onSubmitCapture={(e) => {
                        e.preventDefault()
                        console.log(place)
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
                                        return <Option value={`${country.translations.br} - ${country.flag}`}>{country.translations.br}</Option>
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
                            <Button htmlType="submit">Adicionar</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="card-area-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default Home;