import React, {Component} from 'react';
import {connect} from 'react-redux';
import './NumberCode.css';

class NumberCode extends Component {
    render() {
        const numberBtn = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "<", "0", "C"];
        return (
            <div className="NumberCode">
                <div className="numberShow">
                    <h2 className="numberText">{this.props.counter}</h2>
                </div>
                <div className="numbersBtn">
                    <div className="numbersBlock">
                        {
                            numberBtn.map((btn, key) => {
                                    if (btn === "C"){
                                    return <button key={key} onClick={this.props.deleteC} className="nubBtn btn delete">
                                        {btn}
                                    </button>
                                }
                                if (btn === "<"){
                                    return <button key={key} onClick={this.props.deleteOne} className="nubBtn btn delete">
                                        {btn}
                                    </button>
                                }
                                if (btn){
                                    return <button key={key} onClick={() => this.props.addNumber(btn)} className="nubBtn btn num">
                                            {btn}
                                    </button>
                                }
                            })
                        }
                    </div>
                    <div className="decisionBlock">
                        <button onClick={() => this.props.addNumber('+')} className="nubBtn btn E">+</button>
                        <button onClick={() => this.props.addNumber('-')} className="nubBtn btn E">-</button>
                        <button onClick={() => this.props.addNumber('*')} className="nubBtn btn E">*</button>
                        <button onClick={this.props.equally} className="nubBtn btn E" >=</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mepStateToProps = state => {
    return {
        counter: state.counter
    };
};


const mapDispatchProps = dispatch => {
    return {
        addNumber: number => dispatch({type: 'ADD_NUMBER', number}),
        deleteOne: () => dispatch({type: 'DELETE_ONE'}),
        deleteC: () => dispatch({type: 'DELETE_C'}),
        equally: () => dispatch({type: 'EQUALLY'}),
    }
};



export default connect(mepStateToProps, mapDispatchProps)(NumberCode);