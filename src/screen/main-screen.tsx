import { Card, Col, Row } from 'antd';
import React, { Component } from 'react'
import { Wizard } from 'src/components/wizard';
import { Step } from 'src/model/Step';
import FirstSection from 'src/section/first-section';
import SecondSection from 'src/section/second-section';
import './style.css';

interface MainScreenProps {

}
interface MainScreenState {
    pageNumber: number;
}



export default class MainScreen extends Component<MainScreenProps, MainScreenState, any> {

    constructor(props: any) {
        super(props)
        this.state = {
            pageNumber: 0
        }
        this.handleWizardPreviousStepClick = this.handleWizardPreviousStepClick.bind(this);
        this.handleWizardNextStepClick = this.handleWizardNextStepClick.bind(this);
        this.handleWizardOnChangeStep = this.handleWizardOnChangeStep.bind(this);
    }
    handleWizardPreviousStepClick(currentStepKey: number, clickedStepKey: number): boolean {
        console.log(currentStepKey);
        console.log(clickedStepKey);

        return true;
    }
    handleWizardNextStepClick(currentStepKey: number, clickedStepKey: number): boolean {
        return true;
    }
    handleWizardOnChangeStep(currentStepKey: number, clickedStepKey: number): boolean {
        this.setState({ pageNumber: clickedStepKey });
        return true;
    }
    render() {
        let stepList: Step[] = [
            {
                pageNumber: 0,
                title: 'First'
            },
            {
                pageNumber: 1,
                title: 'Second'
            },
            {
                pageNumber: 2,
                title: 'Last'
            },
        ];
        let content =
            <>
                {this.state.pageNumber === 0 &&
                    <FirstSection />
                }
                { this.state.pageNumber === 1 &&
                    <SecondSection />
                }
                { this.state.pageNumber === 2 && <div>3.Sayfa</div>}
            </>;

        return (
            <div>
                <br />
                <br />
                <Wizard
                    stepList={stepList}
                    content={content}
                    onPreviousClick={this.handleWizardPreviousStepClick}
                    onNextClick={this.handleWizardNextStepClick}
                    onChange={this.handleWizardOnChangeStep}
                    currentStepKey={this.state.pageNumber}
                />
            </div>
        )
    }
}
