import { Button, Col, Row, Steps } from "antd"
import React, { Component } from "react"
import { Step } from "src/model/Step";

interface WizardProps {
    stepList: Step[];
    currentStepKey: number;
    content?: any;
    onChange?: (currentStepKey: number, clickedStepKey: number) => Promise<boolean> | boolean;
    onPreviousClick?: (currentStepKey: number, clickedStepKey: number) => Promise<boolean> | boolean;
    onNextClick?: (currentStepKey: number, clickedStepKey: number) => Promise<boolean> | boolean;
}
interface WizardState {
    currentStepKey: number;
}
export abstract class Wizard extends Component<WizardProps, WizardState, any> {

    constructor(props: any) {
        super(props)
        this.state = {
            currentStepKey: this.props.currentStepKey ? this.props.currentStepKey : 0
        }
        this.previousClick = this.previousClick.bind(this);
        this.nextClick = this.nextClick.bind(this);
        this.handleChange = this.handleChange.bind(this);



    }
    async previousClick(): Promise<void> {
        let clickedStepKeyState = this.state.currentStepKey;
        clickedStepKeyState--;
        if (this.props.onPreviousClick) {
            const result = await this.props.onPreviousClick(this.state.currentStepKey, clickedStepKeyState)
            if (result === undefined || result === false) {
                return;
            }
        }
        const result = await this.handleChange(this.state.currentStepKey, clickedStepKeyState);
        if (result === undefined || result === false) {
            return;
        }
        this.setState({ currentStepKey: clickedStepKeyState });
    }
    async nextClick(): Promise<void> {
        let clickedStepKeyState = this.state.currentStepKey;
        clickedStepKeyState++;
        if (this.props.onNextClick) {
            const result = await this.props.onNextClick(this.state.currentStepKey, clickedStepKeyState)
            if (result === undefined || result === false) {
                return;
            }
        }
        const result = await this.handleChange(this.state.currentStepKey, clickedStepKeyState);
        if (result === undefined || result === false) {
            return;
        }
        this.setState({ currentStepKey: clickedStepKeyState });
    }
    async handleChange(previousStepKey: number, nextStepKey: number): Promise<boolean> {
        if (this.props.onChange) {
            const result = await this.props.onChange(previousStepKey, nextStepKey);
            return result;
        }
        return true;
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}>
                        <Steps current={this.state.currentStepKey}>
                            {this.props.stepList.map(item => (
                                <Steps.Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                    </Col>
                </Row>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22}>
                        {this.props.content}
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span={12}>
                        <Button onClick={this.previousClick} >Geri</Button>
                    </Col>
                    <Col span={12}>
                        <Button onClick={this.nextClick} >İleri</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}