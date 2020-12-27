import { Button, Card, Col, Input, InputNumber, Row } from "antd";
import React, { Component } from "react";

interface FirstSectionProps {

}
interface FirstSectionState {
}



export default class FirstSection extends Component<FirstSectionProps, FirstSectionState, any> {

    constructor(props: any) {
        super(props)
        this.state = {
        }
        this.cardClick = this.cardClick.bind(this);
    }
    cardClick(event: number) {
        console.log(event)
    }
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
                        <Row>
                            <Card
                                hoverable
                                style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px", backgroundColor: "gray", MozWindowShadow: "-moz-initial" }}
                                onClick={() => this.cardClick(1)}
                                cover={<img alt="example" src="http://www.maceraparkcamlidere.com/wp-content/uploads/2018/04/Y%C3%BCksek-%C4%B0p-Parkuru-750x423.jpg" />}
                                title={"PARKUR"}
                            />
                        </Row>
                        <Row>
                            <Input prefix="₺" value={20} suffix="TRY" />
                            <Input prefix="$" value={5} suffix="USD" />
                            <Input prefix="€" value={7} suffix="EUR" />
                            <Input prefix="₽" value={1} suffix="RUB" />
                            <Input prefix="£" value={5} suffix="GBP" />
                        </Row>

                    </Col>
                    <Col span={1}></Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            onClick={() => this.cardClick(2)}
                            cover={<img alt="example" src="http://www.maceraparkcamlidere.com/wp-content/uploads/2018/02/zipline.jpg" />}
                            title={"ZIPLINE"}
                        ></Card>
                        <Row>
                            <Input prefix="₺" value={20} suffix="TRY" />
                            <Input prefix="$" value={5} suffix="USD" />
                            <Input prefix="€" value={7} suffix="EUR" />
                            <Input prefix="₽" value={1} suffix="RUB" />
                            <Input prefix="£" value={5} suffix="GBP" />
                        </Row>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            onClick={() => this.cardClick(3)}
                            cover={<img alt="example" src="http://www.maceraparkcamlidere.com/wp-content/uploads/2018/02/tirmanma-duvari-01-750x423.jpg" />}
                            title={"DUVAR"}

                        ></Card>
                        <Row>
                            <Input prefix="₺" value={20} suffix="TRY" />
                            <Input prefix="$" value={5} suffix="USD" />
                            <Input prefix="€" value={7} suffix="EUR" />
                            <Input prefix="₽" value={1} suffix="RUB" />
                            <Input prefix="£" value={5} suffix="GBP" />
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }

}