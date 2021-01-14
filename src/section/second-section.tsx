import { Button, Card, Col, Input, Radio, Row, Tooltip } from "antd";
import React, { Component } from "react";
import { Currency } from "src/model/Currency";
import { GameTracks } from "src/model/GameTracks";

interface SecondSectionProps {

}
interface SecondSectionState {
    currency: Currency;
}



export default class SecondSection extends Component<SecondSectionProps, SecondSectionState, any> {
    currencies: Currency[] = [
        { id: 1, icon: "₺", code: "TRY", name: "Türk Lirası", exchangeRate: 1 },
        { id: 2, icon: "$", code: "USD", name: "Dolar", exchangeRate: 7.44 },
        { id: 3, icon: "€", code: "EUR", name: "Euro", exchangeRate: 9.08 },
        { id: 4, icon: "₽", code: "RUB", name: "Ruble", exchangeRate: 0.10 },
        { id: 5, icon: "£", code: "GBP", name: "Sterlin", exchangeRate: 10.01 }];

    gameTracks: GameTracks[] = [
        { id: 1, name: "Parkur", try: 100, usd: 15, eur: 13, gbp: 10, rub: 1000 },
        { id: 2, name: "Zipline", try: 90, usd: 14, eur: 12, gbp: 9, rub: 900 },
        { id: 3, name: "Duvar", try: 80, usd: 13, eur: 11, gbp: 8, rub: 800 },];

    constructor(props: any) {
        super(props)
        this.state = {
            currency: this.currencies[0]
        }
        this.cardClick = this.cardClick.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);

    }
    cardClick(event: number) {
        console.log(event)
    };
    handleSizeChange(e: any) {
        this.setState({ currency: e.target.value });
    };
    render() {
        return (
            <>
                <Row>
                    <Col span={4}>
                    </Col>
                    <Col span={16}>
                        <h1>{"Parkur seçimini yapabilirsin"}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col span={2}>
                    </Col>
                    <Col span={6} >

                    </Col>
                    <Col span={1}></Col>
                    <Col span={6}>
                        <Row>
                            <Col span={24}>
                                <Radio.Group value={this.state.currency} onChange={this.handleSizeChange}>
                                    <Radio.Button style={{ height: "70px", width: "70px" }} value={this.currencies[0]}>{this.currencies[0].code}</Radio.Button>
                                    <Radio.Button style={{ height: "70px", width: "70px" }} value={this.currencies[1]}>{this.currencies[1].code}</Radio.Button>
                                    <Radio.Button style={{ height: "70px", width: "70px" }} value={this.currencies[2]}>{this.currencies[2].code}</Radio.Button>
                                    <Radio.Button style={{ height: "70px", width: "70px" }} value={this.currencies[3]}>{this.currencies[3].code}</Radio.Button>
                                    <Radio.Button style={{ height: "70px", width: "70px" }} value={this.currencies[4]}>{this.currencies[4].code}</Radio.Button>
                                </Radio.Group>
                                <Tooltip title="search">
                                    <Button type="primary" shape="circle" />
                                    {/* <AntIcon></AntIcon> */}
                                </Tooltip>
                                <Input type={"primary"} prefix={this.state.currency.icon} value={
                                    this.state.currency.code === "TRY" ? this.gameTracks[0].try :
                                        this.state.currency.code === "USD" ? this.gameTracks[0].usd :
                                            this.state.currency.code === "EUR" ? this.gameTracks[0].eur :
                                                this.state.currency.code === "GBP" ? this.gameTracks[0].gbp :
                                                    this.state.currency.code === "RUB" ? this.gameTracks[0].rub : ""} suffix={this.state.currency.name} />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={6}>
                    </Col>
                </Row>
            </>
        );
    }

}