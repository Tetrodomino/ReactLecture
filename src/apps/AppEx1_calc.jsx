import { useState } from 'react';
import './App.css';

function App() {
    const [final, setFinal] = useState('');
    const [ppp, setPpp] = useState([]);
    
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
                else if (f != '+' && f != '-' && f != '/' && f != '*' && f != '=' && event.target.value == '=')
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
                    console.log(numbers[0]);

                    setFinal(final + event.target.value + numbers[0]);
                    // 예상: final = "(수식) = (결과)"
                    // 실제: final = "(수식)"
                    setPpp([...ppp, final + event.target.value + numbers[0]]);
                    setFinal('');
                }
            }
        }
        else
        {
            let f = final.charAt(final.length - 1);

            if (f == '/' && event.target.value == '0')
            {
                alert("0으로 나눌 수 없습니다!");
            }
            else
            {
                setFinal(final + event.target.value);
            }
        }
    }
  
    return (
        <div className="calc">
            <div style={{fontSize: '3rem'}}>
                {
                    ppp.map(pp => (
                        <div key={pp}>
                            {pp}
                        </div>
                    ))
                }
                {final} 
            </div>
            <br />
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
                    <td><button type="submit" name="op" value="+" onClick={click}>＋</button></td>
                </tr>
                <tr>
                    <td><button type="submit" name="num" value="4" onClick={click}>4</button></td>
                    <td><button type="submit" name="num" value="5" onClick={click}>5</button></td>
                    <td><button type="submit" name="num" value="6" onClick={click}>6</button></td>
                    <td><button type="submit" name="op" value="=" onClick={click}>＝</button></td>
                </tr>
                <tr>
                    <td><button type="submit" name="num" value="1" onClick={click}>1</button></td>
                    <td><button type="submit" name="num" value="2" onClick={click}>2</button></td>
                    <td><button type="submit" name="num" value="3" onClick={click}>3</button></td>
                    <td><button type="submit" name="num" value="0" onClick={click}>0</button></td>
                </tr>
            </table>
        </div>
    );
}
  
export default App;