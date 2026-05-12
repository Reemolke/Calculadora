import React from 'react';
import './CalculatorCase.css';
import { useState } from 'react';

function CalculatorCase(){
    const [displayValue, setDisplayValue] = useState('0');
    const [operation, setOperation] = useState('');
    const [numbers, setNumbers] = useState([]);
    // 1: sum, 2: rest, 3: multiply, 4: division, 5: nothing
    const handleButtonClick = (value) => {
        setDisplayValue(value);
        setNumbers([...numbers, value]);
    }
    const handleClear = () => {
        setDisplayValue('0');
        setNumbers([]);
        setOperation('');
    }
    const handleOperation=()=>{
        let number1=0;
        let number2=0;
        let operand;
        let result;
        for(let number of numbers){
            switch(number){
                case '+':
                    operand = '+';
                    break;
                case '-':
                    operand = '-';
                    break;
                case '*':
                    operand = '*';
                    break;
                case '/':
                    operand = '/';
                    break;
                default:
                    if(operand != undefined){
                        number2 += String(number);
                    }else{
                        number1 += String(number);
                    }
                    if(number2 != undefined && number1 != undefined && operand != undefined){
                        switch(operand){
                            case '+':
                                result = parseFloat(number1) + parseFloat(number2);
                                break;
                            case '-':
                                result = parseFloat(number1) - parseFloat(number2);
                                break;
                            case '*':
                                result = parseFloat(number1) * parseFloat(number2);
                                break;
                            case '/':
                                result = parseFloat(number1) / parseFloat(number2);
                                break;
                        }
                }
                    break;
            }
            
        }
        if(result != undefined){
            setNumbers([result]);
            setDisplayValue(result);
        }else{
            handleClear();
        }
        
    }
return(
    <div className='calculatorCase'>
        <div className='display'>{displayValue}</div>
        <table>
            <tr>
                <td onClick={() => handleButtonClick('7')}>7</td>
                <td onClick={() => handleButtonClick('8')}>8</td>
                <td onClick={() => handleButtonClick('9')}>9</td>
                <td onClick={() => handleButtonClick('/')}>/</td>
            </tr>
            <tr>
                <td onClick={() => handleButtonClick('4')}>4</td>
                <td onClick={() => handleButtonClick('5')}>5</td>
                <td onClick={() => handleButtonClick('6')}>6</td> 
                <td onClick={() => handleButtonClick('*')}>*</td>
            </tr>
            <tr>
                <td onClick={() => handleButtonClick('1')}>1</td>
                <td onClick={() => handleButtonClick('2')}>2</td>
                <td onClick={() => handleButtonClick('3')}>3</td>
                <td onClick={() => handleButtonClick('-')}>-</td>
            </tr>
            <tr>
                <td onClick={() => handleButtonClick('0')}>0</td>
                <td onClick={() => handleClear()}>C</td>
                <td onClick={() => {handleOperation();}}>=</td>
                <td onClick={() => handleButtonClick('+')}>+</td>
            </tr>
        </table>
    </div>
)
}
export default CalculatorCase;