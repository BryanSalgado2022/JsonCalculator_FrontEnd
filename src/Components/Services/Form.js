import axios from 'axios';
import React, {useState } from 'react'
import { urlGet} from '../../endpoints';

export default function Form() {
    const [form, setForm] = useState({
    
    });
    const [result, setResult] = useState(0)
    //Se usa para todos los campos sin usar muchas variables
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("El formulario se ha enviado");
        axios.get(urlGet,{
            params: {number1: form.firstNumber, number2: form.secondNumber}
        }).then((response) =>{
            setResult(response.data)
            console.log(response.data);
        })
    };

  return (
    <div>
        <h2>Calculator</h2>
        <form onSubmit={handleSubmit}>
            <input type="number" id="firstNumber" name='firstNumber' value={form.name} onChange={handleChange} required/>
            <br/>
            <h2>+</h2>
            <input type="number" id="secondNumber" name='secondNumber' value={form.name} onChange={handleChange} required/>
            <br/>
            <input type="submit" value="Submit" />
        </form>
        <h3>Result:</h3>
        {result}
      </div>
  )
}
