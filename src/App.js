import { useState } from "react";

const App = () => {
    const [value, setValue] = useState({ 
        normal: 'por defecto', 
        texto: '', 
        select: '', 
        check: false,
        estado: 'feliz',
    })
    const handleChange = ({ target }) => {
        setValue((state) => ({
            ...state,
            [target.name]: target.type === 'checkbox' 
                ? target.checked 
                : target.value
        }));
    }
    console.log(value);
    return(
        <div>
            {value.length < 5 ? <span>Longitud minima de 5</span> : null}
            <input type="text" name="normal" value={value.normal} onChange={handleChange}/>
            <textarea name="texto" onChange={handleChange} value={value.texto}/>

            <select value={value.select} name="select" onChange={handleChange}>
                <option value=''>-- Seleccione --</option>
                <option value='gatofeliz'>Gato feliz</option>
                <option value='gatitofeliz'>Gatito feliz</option>
                <option value='gatitotriste'>Gatito triste</option>
                <option value='alonso'>Alonso</option>
            </select>

            <input 
                type="checkbox"
                name="check"
                onChange={handleChange}
                checked={value.check}
            />

            <div>
                <label>Gato</label>
                <input 
                onChange={handleChange} 
                type="radio" 
                value='feliz' 
                name="estado" 
                checked={value.estado === 'feliz'}
                /> Feliz
                <input 
                onChange={handleChange} 
                type="radio" 
                value='triste' 
                name="estado"
                checked={value.estado === 'triste'}
                />Triste
                <input 
                onChange={handleChange} 
                type="radio" 
                value='alonso' 
                name="estado"
                checked={value.estado === 'alonso'}
                />Alonso
            </div>
        </div>
    )
}

export default App;