import React, {Component} from 'react'

class Calculator extends Component {

    state = {
        num1: '',
        num2: '',
        sum: 0
    }

    //function should be able to change num1 or num2 depending on the value its passed 
    changeNum = (e) => {
        if(e.target.id === 'firstNum'){
            this.setState({
                num1: e.target.value
            })
        } else {
            this.setState({
                num2: e.target.value
            })
        }
    }

    addInputs = ()=> {
        this.setState({
            sum: Number(this.state.num1) + Number(this.state.num2)
        })
    }

    render() {
        return(
            <div className='container'>
                <h1>Add with React!</h1>

                <div className='add'>
                    <input type='text' id='firstNum' placeholder={this.state.num1} onChange={(event) => this.changeNum(event)} value={this.state.num1}></input>
                    <span>+</span>
                    <input type='text' placeholder={this.state.num2} id='secondNum' placeholder={this.state.num2} onChange={(event) => this.changeNum(event)} value={this.state.num2}/>
                    <button onClick={this.addInputs}>=</button>
                    <h3>Addition results go here!</h3>
                    <p>{this.state.sum}</p>
                </div>
            </div>
        )
    }
}

export default Calculator