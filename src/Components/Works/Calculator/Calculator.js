import React from 'react';
import './Calculator.css'

class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        number: 0,
        numberReset: true,
        actionClear: "AC",
        equationDisplay: "",
        calculatorDisplay: "0",
        operatorHasBeenTyped: false,
        operatorTyped: false,
        negativeTyped: false,
        zeroTyped: false,
        decimalTyped: false,
        equalsTyped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
      let value = e.target.value;
      let num = this.state.number;
      let reset = this.state.numberReset;
      let equal = this.state.equalsTyped;
      let eq = this.state.equationDisplay;
      let dis = this.state.calculatorDisplay;
      let z = this.state.zeroTyped;
      let dec = this.state.decimalTyped;
      let op = this.state.operatorTyped;
      let opHas = this.state.operatorHasBeenTyped;
      let negative = this.state.negativeTyped;
      switch(value) {
        case "clear":
          this.setState({
            number: 0,
            numberReset: true,
            actionClear: "AC",
            equationDisplay: "",
            calculatorDisplay: "0",
            operatorTyped: false,
            operatorHasBeenTyped: false,
            negativeTyped: false,
            zeroTyped: false,
            decimalTyped: false,
            equalsTyped: false
          });
          break;
        case "+/-":
          if(num === 0 && negative === false && opHas === false && equal === false){
            this.setState({
              equationDisplay: "",
              calculatorDisplay: "-0",
              negativeTyped: true
            });
          }
          else if(num === 0 && negative === false && opHas === true && equal === false){
            this.setState({
              equationDisplay: eq + "-",
              calculatorDisplay: dis,
              negativeTyped: true
            });
          }
          else if(num !== 0 && negative === false && opHas === false && equal === false){
            this.setState({
              equationDisplay: "-" + eq,
              calculatorDisplay: "-" + dis,
              negativeTyped: true
            });
          }
          else if(num !== 0 && negative === false && opHas === true && equal === false){
            var negativeTemp = eq.substring(0, eq.length-dis.length);
            var negativeTemp2 = eq.substring(eq.length-dis.length, eq.length);
            this.setState({
              equationDisplay: negativeTemp + "-" + negativeTemp2,
              calculatorDisplay: "-" + dis,
              negativeTyped: true
            });
          }
          else if(equal === true){
            this.setState({
              equationDisplay: "-" + dis,
              calculatorDisplay: "-" + dis,
              negativeTyped: true,
              equalsTyped: false
            });
          }
          break;
        case "%":
          if(opHas === false){
            let percent = parseFloat(dis) / 100;
            this.setState({
              equationDisplay: percent,
              calculatorDisplay: percent
            });
          }
          
          break;
        case "÷":
        case "×":
        case "–":
        case "+":
          if(equal !== true && op === false){
            this.setState({
              number: 0,
              equationDisplay: eq + value,
              calculatorDisplay: value,
              operatorTyped: true,
              operatorHasBeenTyped: true,
              zeroTyped: false,
              decimalTyped: false,
              negativeTyped: false
            });
          }
          //if after an operand is typed and another operand is typed that is +, x, or division it will replace the previous operand
          //ex.) 3+x -> 3x. The addition symbol gets replaced by the multiplication symbol.
          else if(equal !== true && op === true && negative === false && z === false){
            var temp = eq.substring(0, eq.length-1);
            this.setState({
              number: 0,
              equationDisplay: temp + value,
              calculatorDisplay: value,
              operatorTyped: true,
              zeroTyped: false,
              decimalTyped: false
            });
          }
          else if(equal !== true && op === true && negative === false && z === true){
            var temp2 = eq.substring(0, eq.length);
            this.setState({
              number: 0,
              equationDisplay: temp2 + value,
              calculatorDisplay: value,
              operatorTyped: true,
              zeroTyped: false,
              decimalTyped: false
            });
          }
          else if(equal !== true && op === true && negative === true){
            console.log("I")
            var temp3 = eq.substring(0, eq.length-2);
            this.setState({
              number: 0,
              equationDisplay: temp3 + value,
              calculatorDisplay: value,
              operatorTyped: true,
              zeroTyped: false,
              decimalTyped: false
            });
          }
          else if(equal === true){
            this.setState({
              number: 0,
              equationDisplay: dis + value,
              calculatorDisplay: value,
              operatorTyped: true,
              operatorHasBeenTyped: true,
              zeroTyped: false,
              decimalTyped: false,
              equalsTyped: false
            });
          }
          break;
        case "9":
        case "8":
        case "7":
        case "6":
        case "5":
        case "4":
        case "3":
        case "2":
        case "1":
          //starting off and pressing a number
          if(num === 0 && reset === true){
            this.setState({
              number: value,
              numberReset: false,
              actionClear: "C",
              equationDisplay: value,
              calculatorDisplay: value,
              operatorTyped: false
            });
          }
          else if(num === 0 && reset === false && equal === false && z === false){
            this.setState({
              number: value,
              equationDisplay: eq + value,
              calculatorDisplay: value,
              operatorTyped: false
            });
          }
          else if(num === 0 && reset === false && equal === false && z === true){
            let sub = eq.substring(0,eq.length - 1);
            this.setState({
              number: value,
              equationDisplay: sub + value,
              calculatorDisplay: value,
              operatorTyped: false
            });
          }
          else if(num !== 0 && reset === false && equal === true){
            this.setState({
              number: value,
              equationDisplay: value,
              calculatorDisplay: value,
              operatorTyped: false,
              equalsTyped: false
            });  
          }
          else{
            //typing a multi-digit number
            //value is the value of each button you press
            this.setState({
              equationDisplay: eq + value,
              calculatorDisplay: dis + value,
              operatorTyped: false
            });
          }
          break;
        case "0":
          if(reset === true){
            return;
          }
          else if(num === 0 && z === true){
            return;
          }
          else if(num === 0 && reset === false && equal === false){
            this.setState({
              number: 0,
              equationDisplay: eq + "0",
              calculatorDisplay: "0",
              zeroTyped: true
            });
          }
          else if(num !== 0 && reset === false && equal === true){
            this.setState({
              number: 0,
              equationDisplay: "0",
              calculatorDisplay: "0",
              zeroTyped: true,
              equalsTyped: false
            });
          }
          else {
            this.setState({
              equationDisplay: eq + "0",
              calculatorDisplay: dis + "0"
            });
          }
          break;
        case ".":
          if(dec === true){
            return;
          }
          else if(reset === true){
            this.setState({
              number: "0.",
              numberReset: false,
              actionClear: "C",
              equationDisplay: "0.",
              calculatorDisplay: "0.",
              decimalTyped: true
            });
          }
          else if(num === 0 && reset === false && z === false){
            this.setState({
              number: "0.",
              numberReset: false,
              equationDisplay: eq + "0.",
              calculatorDisplay: "0.",
              decimalTyped: true
            });
          }
          else if(num === 0 && reset === false && z === true){
            this.setState({
              number: "0.",
              equationDisplay: eq + ".",
              calculatorDisplay: dis + ".",
              decimalTyped: true
            });
          }
          else if(num !== 0 && reset === false && equal === false){
            this.setState({
              number: "0.",
              equationDisplay: eq + ".",
              calculatorDisplay: dis + ".",
              decimalTyped: true
            });
          }
          else if(num !== 0 && reset === false && equal === true){
            this.setState({
              number: "0.",
              equationDisplay: "0.",
              calculatorDisplay: "0.",
              decimalTyped: true,
              equalsTyped: false
            });
          }
          break;
        case "=":
          //hitting equals at the start
          if(reset === true){
            return;
          }
   
          else if(reset === false && opHas === false){
            this.setState({
              equationDisplay: eq + "=" + dis,
              equalsTyped: true
            })
          }
          else if(opHas === true){
            let numArr = eq.split(/[^0-9.]+/);
            let opArr = eq.split(/[0-9.]+/g).join("").split("");  
            let n = "";
            let j = 0;
            let k = 1;
            if(eq.substring(0,1) === "-"){
              n = numArr[1] * (-1);
              j++;
              k++;
            }
            else {
              n = parseFloat(numArr[0]);
            }
            let opIndices = [];
            for(let i = 1; i < eq.length; i++){
              if(eq[i] === "–" || eq[i] === "+" || eq[i] === "×" || eq[i] === "÷"){
                opIndices.push(i);
              }
            }
            let a = 0;
            for(j; j < opArr.length; j++){
              for(k; k < numArr.length; k++){
                switch(opArr[j]){
                  case "+":
                    if(eq.substring(opIndices[a]+1, opIndices[a]+2) === "-"){
                       n = n + (parseFloat(numArr[k]) * (-1));
                       j+=2;
                    }
                    else {
                      n = n + (parseFloat(numArr[k]));
                      j++;
                    }
                    a++;
                    break;
                  case "–":
                    if(eq.substring(opIndices[a]+1, opIndices[a]+2) === "-"){
                       n = n - (parseFloat(numArr[k]) * (-1));
                       j+=2;
                    }
                    else {
                      n = n - (parseFloat(numArr[k]));
                      j++;
                    }
                    a++;
                    break;
                  case "×":
                   if(eq.substring(opIndices[a]+1, opIndices[a]+2) === "-"){
                       n = n * (parseFloat(numArr[k]) * (-1));
                       j+=2;
                    }
                    else {
                      n = n * (parseFloat(numArr[k]));
                      j++;
                    }
                    a++;
                    break;
                  case "÷":
                    if(parseFloat(numArr[k]) !== 0){
                      if(eq.substring(opIndices[a]+1, opIndices[a]+2) === "-"){
                        n = n / (parseFloat(numArr[k]) * (-1));
                        j+=2;
                      }
                      else {
                        n = n / (parseFloat(numArr[k]));
                        j++;
                      }
                    }
                    else {
                      if(eq.substring(opIndices[a]+1, opIndices[a]+2) === "-"){
                        n = Number.NEGATIVE_INFINITY;
                      }
                      else {
                        n = Number.POSITIVE_INFINITY;
                      }
                    }
                    a++;
                    break;
                  default:
                    break;
                }
              } 
            }
            a = 0;
            this.setState({
              number: n,
              equationDisplay: eq + "=" + n,
              calculatorDisplay: n,
              equalsTyped: true,
              operatorTyped: false,
              operatorHasBeenTyped: false
            });
          }
          break;
        default:
          break;  
      }
      
    }
    
    render() {
      return (
        <div id="calculator">
          <div id="display">
            <div id="equation-display">
              {this.state.equationDisplay}
            </div>
            <div id="calculator-display">
              {this.state.calculatorDisplay}
            </div>
            <div id="calculator-pads">
              <button id="clear" className="pad normal-pad clear-pad" value="clear" type="button" onClick={this.handleClick}>
                {this.state.actionClear}
              </button>
              <button id="positive-negative" className="pad normal-pad clear-pad" value="+/-" type="button" onClick={this.handleClick}>
                +/-
              </button>
              <button id="percent" className="pad normal-pad clear-pad" value="%" type="button" onClick={this.handleClick}>
                %
              </button>
              <button id="divide" className="pad normal-pad arithmetic-pad" value="÷" type="button" onClick={this.handleClick}>
                ÷
              </button>
              <button id="seven" className="pad normal-pad number-pad" value="7" type="button" onClick={this.handleClick}>
                7
              </button>
              <button id="eight" className="pad normal-pad number-pad" value="8" type="button" onClick={this.handleClick}>
                8
              </button>
              <button id="nine" className="pad normal-pad number-pad" value="9" type="button" onClick={this.handleClick}>
                9
              </button>
              <button id="multiply" className="pad normal-pad arithmetic-pad" value="×" type="button" onClick={this.handleClick}>
                ×
              </button>
              <button id="four" className="pad normal-pad number-pad" value="4" type="button" onClick={this.handleClick}>
                4
              </button>
              <button id="five" className="pad normal-pad number-pad" value="5" type="button" onClick={this.handleClick}>
                5
              </button>
              <button id="six" className="pad normal-pad number-pad" value="6" type="button" onClick={this.handleClick}>
                6
              </button>
              <button id="subtract" className="pad normal-pad arithmetic-pad" value="–" type="button" onClick={this.handleClick}>
                –
              </button>
              <button id="one" className="pad normal-pad number-pad" value="1" type="button" onClick={this.handleClick}>
                1
              </button>
              <button id="two" className="pad normal-pad number-pad" value="2" type="button" onClick={this.handleClick}>
                2
              </button>
              <button id="three" className="pad normal-pad number-pad" value="3" type="button" onClick={this.handleClick}>
                3
              </button>
              <button id="add" className="pad normal-pad arithmetic-pad" value="+" type="button" onClick={this.handleClick}>
                +
              </button>
              <button id="zero" className="pad long-pad number-pad" value="0" type="button" onClick={this.handleClick}>
                0
              </button>
              <button id="decimal" className="pad normal-pad number-pad" value="." type="button" onClick={this.handleClick}>
                .
              </button>
              <button id="equals" className="pad normal-pad arithmetic-pad" value="=" type="button" onClick={this.handleClick}>
                =
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Calculator;
  //export { default as Calculator } from "/Components/MyPortfolio/Calculator";