import React, { useState} from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { aseguradoras } from '../../services/pacientes';
import './selectComponent.css'

const SelectComponent = props => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        let newValue = event.target.value
        setAge(newValue);
        props.changedAseg(newValue)
    };

    let newAseg = ['Todos']

    aseguradoras.map((aseg) => {
        return newAseg.push(aseg)
    })

    return (
        <div className='divForm'>
            <FormControl className='selectForm'>
                <InputLabel id="demo-simple-select-label">Seguro</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                >
                    {newAseg.map((aseg)=> {
                        return <MenuItem value={aseg} id={aseg}>{aseg}</MenuItem>

                    })}
                </Select>
            </FormControl>
        </div>
    )
}



export default SelectComponent
