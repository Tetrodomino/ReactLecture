import { useState } from 'react';
import './App.css';

function App() {
    //const [foods, setFoods] = useState(['피자', '삼겹살', '불고기']);
    const [final, setFinal] = useState('');
    
    const click = (event) => {
        event.preventDefault();
        if (event.target.value == 'C')
        {
            setFinal('');
        }
        else if (event.target.value == '+' || event.target.value == '-' || event.target.value == '/' || event.target.value == '*' || event.target.value == '=')
        {
            if (final.length == 0)
            {    
                setFinal('');
            }
            else
            {
                let f = final.charAt(final.length - 1);

                if (f != '+' && f != '-' && f != '/' && f != '*' && f != '=' && event.target.value != '=')
                {
                    setFinal(final + event.target.value)
                }

                if (f != '+' && f != '-' && f != '/' && f != '*' && f != '=' && event.target.value == '=')
                {
                    let numbers = [];
                    let number = '';

                    for (let i = 0; i < final.length; i++)
                    {
                        let e = final.charAt(i);

                        if (e != '+' && e != '-' && e != '/' && e != '*' && e != '=')
                        {
                            number = number + e;
                        }
                        else
                        {
                            numbers.push(number);
                            number = '';
                            numbers.push(e);
                        }

                        if (i == final.length - 1)
                        {
                            numbers.push(number);
                        }
                    }

                    for (let i = 0; i < numbers.length; i++)
                    {
                        if (numbers[i] == '*')
                        {
                            numbers[i - 1] = parseFloat(numbers[i - 1]) * parseFloat(numbers[i + 1]);
                            numbers.splice(i, 2);
                            i--;
                        }
                        else if (numbers[i] == '/')
                        {
                            numbers[i - 1] = parseFloat(numbers[i - 1]) / parseFloat(numbers[i + 1]);
                            numbers.splice(i, 2);
                            i--;
                        }
                    }

                    for (let i = 0; i < numbers.length; i++)
                    {
                        if (numbers[i] == '+')
                        {
                            numbers[i - 1] = parseFloat(numbers[i - 1]) + parseFloat(numbers[i + 1]);
                            numbers.splice(i, 2);
                            i--;
                        }
                        else if (numbers[i] == '-')
                        {
                            numbers[i - 1] = parseFloat(numbers[i - 1]) - parseFloat(numbers[i + 1]);
                            numbers.splice(i, 2);
                            i--;
                        }
                    }

                    setFinal(final + event.target.value + numbers[0]);
                }
            }
        }
        else
        {
            setFinal(final + event.target.value)
        }
    }
  
    return (
        <div>
            <div style={{fontSize: '3rem'}}>
               {final} 
            </div>
            <table border={1}>
                <tr>
                    <td colSpan="4">{eval}<input type="hidden" name="eval" value="${eval}" /></td>
                </tr>
                <tr>
                    <td><button type="submit" name="op" value="C" onClick={click}>C</button></td>
                    <td><button type="submit" name="op" value="/" onClick={click}>÷</button></td>
                    <td><button type="submit" name="op" value="*" onClick={click}>×</button></td>
                    <td><button type="submit" name="op" value="-" onClick={click}>－</button></td>
                </tr>
                <tr>
                    <td><button type="submit" name="num" value="7" onClick={click}>7</button></td>
                    <td><button type="submit" name="num" value="8" onClick={click}>8</button></td>
                    <td><button type="submit" name="num" value="9" onClick={click}>9</button></td>
                    <td rowSpan="2"><button type="submit" name="op" value="+" onClick={click}>＋</button></td>
                </tr>
                <tr>
                    <td><button type="submit" name="num" value="4" onClick={click}>4</button></td>
                    <td><button type="submit" name="num" value="5" onClick={click}>5</button></td>
                    <td><button type="submit" name="num" value="6" onClick={click}>6</button></td>
                </tr>
                <tr>
                    <td><button type="submit" name="num" value="1" onClick={click}>1</button></td>
                    <td><button type="submit" name="num" value="2" onClick={click}>2</button></td>
                    <td><button type="submit" name="num" value="3" onClick={click}>3</button></td>
                    <td rowSpan="2"><button type="submit" name="op" value="=" onClick={click}>＝</button></td>
                </tr>
                <tr>
                    <td colSpan="3"><button type="submit" name="num" value="0">0</button></td>
                </tr>
            </table>
        </div>
    );
}
  
export default App;