import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import { Statistics } from "./Statistics";

export default class FeedbackApp extends Component {
     state = {
            good: 0,
            neutral: 0,
            bad: 0,
            }

            
    onLeaveFeedback = (e) => {
        
        const buttonName = e.target.name;
          
        this.setState((prevState) => {
                return { [buttonName]: prevState[buttonName] += 1 };
        })
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const total = (good + neutral + bad);

        return total;
    }

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;
        const total = (good + neutral + bad);
        const procentPositiveFeedback = (good * 100 / total);

        return procentPositiveFeedback;
    }
 
       
        
    
    
    render() {
        const { good, neutral, bad } = this.state;

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
                    <Statistics good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()} />
                </Section>
            </>

        );
    };
};
