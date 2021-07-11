import { useState } from 'react'
import './addPacientes.css'
import AsegDataService from '../../services/dataService'



const AddPacientes = props => {
    const [name, setName] = useState('Nombre')
    const [surname, setSurname] = useState('Apellido')
    const [cedula, setCedula] = useState('Cedula')
    const [monto, setMonto] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [aseg, setAseg] = useState('Mapfre')
    
    const handleNameChange = (event) => {
        setName(event.target.value);
        // console.log(name)
    };

    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
        // console.log(surname);
    };
    
    const handleCedulaChange = (event) => {
        setCedula(event.target.value);
        // console.log(cedula);
    };
    
    const savePacientes = () => {
        let data = {
          fecha: new Date(),
            name: name,
            surname: surname,
            cedula: cedula,
            monto: monto,
            aseg: aseg
        }
        AsegDataService.createPaciente(data).then(() => {
            props.changedData()
            console.log(`${name} ${surname} fue agregado`)
            setSubmitted(true)
            setName('Nombre')
            setSurname('Apellido')
            setCedula('Cedula')
            setMonto(0)
            setAseg('Universal')
        })
    };



    return (
      <div className="addPaciente">
        <h3 className="title">Crear Nuevo Paciente</h3>
        <div className="submit-form">
          {submitted ? (
            <>
            <div>
              <h4>Agregado</h4>
            </div>
            <div>
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  placeholder={name}
                  onChange={handleNameChange}
                  name="name"
                />
                <label htmlFor="surname">Apellido:</label>
                <input
                  type="text"
                  className="form-control"
                  id="surname"
                  required
                  placeholder={surname}
                  onChange={handleSurnameChange}
                  name="surname"
                />
                <label htmlFor="cedula">Cedula:</label>
                <input
                  type="text"
                  className="form-control"
                  id="cedula"
                  required
                  placeholder={cedula}
                  onChange={handleCedulaChange}
                  name="cedula"
                />
                <label htmlFor="monto">Monto:</label>
                <input
                  type="number"
                  className="form-control"
                  id="monto"
                  // required
                  placeholder={monto}
                  onChange={(e) => setMonto(e.target.value)}
                  name="monto"
                />
                <label htmlFor="aseg">Seguro:</label>
                <input
                  type="text"
                  className="form-control"
                  id="aseg"
                  // required
                  placeholder={aseg}
                  onChange={(e) => setAseg(e.target.value)}
                  name="aseg"
                />
              </div>
              <button onClick={savePacientes} className="btn btn-success" type='button'>
                Agregar
              </button>
            </div>
            </>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  placeholder={name}
                  onChange={handleNameChange}
                  name="name"
                />
                <label htmlFor="surname">Apellido:</label>
                <input
                  type="text"
                  className="form-control"
                  id="surname"
                  required
                  placeholder={surname}
                  onChange={handleSurnameChange}
                  name="surname"
                />
                <label htmlFor="cedula">Cedula:</label>
                <input
                  type="text"
                  className="form-control"
                  id="cedula"
                  required
                  placeholder={cedula}
                  onChange={handleCedulaChange}
                  name="cedula"
                />
                <label htmlFor="monto">Monto:</label>
                <input
                  type="number"
                  className="form-control"
                  id="monto"
                  // required
                  placeholder={monto}
                  onChange={(e) => setMonto(e.target.value)}
                  name="monto"
                />
                <label htmlFor="aseg">Seguro:</label>
                <input
                  type="text"
                  className="form-control"
                  id="aseg"
                  // required
                  placeholder={aseg}
                  onChange={(e) => setAseg(e.target.value)}
                  name="aseg"
                />
              </div>
              <button onClick={savePacientes} className="btn btn-success" type='button'>
                Agregar
              </button>
            </div>
          )}
        </div>
      </div>
    );
}

export default AddPacientes
