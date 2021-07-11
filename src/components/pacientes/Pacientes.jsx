import AsegDataService from '../../services/dataService'
import { DataGrid } from '@material-ui/data-grid';
import './pacientes.css'
import { DeleteOutline, Add, Refresh } from '@material-ui/icons';
import { aseguradoras, nombres, apellidos } from '../../services/pacientes';



const Pacientes = props => {
    
   const handleDelete = (id) => {
        AsegDataService.borrarPaciente(id).then(() => {
            console.log(`Borrado id:${id}`)
            props.changedData()
        })
    }

    const makeRandom = () => {
        return {
            fecha: new Date(
                2021,
                Math.floor(Math.random() * 6),
                Math.round(Math.random() * 30)
            ),
            name: nombres[
                Math.floor(Math.random() * nombres.length)
            ],
            surname: apellidos[
                Math.floor(Math.random() * apellidos.length)
            ],
            cedula: Math.floor(Math.random() * 100000000000),
            aseg: aseguradoras[
                Math.floor(Math.random() * aseguradoras.length)
            ],
            monto: Math.floor(Math.random() * 10000000)/100,
        } 
    }

    const handleAddRandom = (n=1) => {
        for (let i = 0; i < n; i++) {
            let data = makeRandom()
            AsegDataService.createPaciente(data).then(() => {
                props.changedData()
                console.log(`Agregado ${n} registros`)
            })
        }
    }

    const handleRefresh = () => {
        props.changedData()
    }

    const cols = [
        {field: 'fecha', headerName:'Fecha', width: 150},
        {field: 'name', headerName:'Nombre', width: 130},
        {field: 'surname', headerName:'Apellido', width: 130},
        {field: 'cedula', headerName:'Cedula', width: 130},
        {field: 'aseg', headerName:'Aseguradora', width: 130},
        {field: 'monto', headerName:'Monto', width: 130},
        {field: '_id', headerName:'ID Mongo', hide: true},
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                    <button className='userListEdit'>Edit</button>
                    <DeleteOutline 
                        className='userListDelete' 
                        onClick={()=>handleDelete(params.row._id)}
                    />
                    </>
                )
            }
        }
    ]

    return (
        <div className="pWindow">
            <div className="pacTopbar">
                <h3>Pacientes</h3>
                <div className="right">
                    <div className="refresh" onClick={()=>handleRefresh()}>
                        <Refresh />
                        <p>Refresh</p>
                    </div>
                    <div className="add" onClick={()=>handleAddRandom()}>
                        <Add />
                        <p>Random</p>
                    </div>
                </div>

                
            </div>
            
            <div className='table'>
                <DataGrid 
                    rows={props.data} 
                    columns={cols} 
                    pageSize={10} 
                    checkboxSelection 
                    disableSelectionOnClick
                    getRowId={(row) => row._id}
                />
            </div>
        </div>
    )
}


export default Pacientes