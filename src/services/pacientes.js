import AsegDataService from './dataService'

export const aseguradoras = ['Mapfre', 'Universal', 'Humano', 'BBVA']

export const nombres = [
  'Juan', 'Jose', 'Pedro', 'Pablo',
  'Santiago', 'Andres', 'Felipe', 'Judas',
  'Bartolome', 'Simon', 'Jesus'
]

export const apellidos = [
  'Garcia', 'Rodriguez', 'Gonzalez', 'Fernandez', 'Lopez',
  'Martinez', 'Sanchez', 'Perez', 'Gomez', 'Martin'
]

class PacientesFetch {
    constructor() {
        this.pacientes = []
    }

    retrievePacientes = () => {
        AsegDataService.getAll()
        .then(response => {
            return response.data.pacientes;
        })
        .catch(e => {
            console.log(e);
        });
    };

    save = (data) => {
        AsegDataService.createPaciente(data)
        .then((response) => {
            console.log('Added new Paciente')
            console.log(response.data);
            return response.data
        })
        .catch((e) => {
            console.log(e);
    });}

    borrar = (id) => {
        AsegDataService.borrarPaciente(id)
          .then((response) => {
            console.log(response.data)
            console.log(`Borrado: ${id}`)
            return response.data
          })
          .catch((e) => {
            console.log(e);
          });
    }

    deleteAllPacientes = () => {
        let pacientes = this.retrievePacientes()
        pacientes.map((pac) => {
            return this.borrar(pac._id);
    })}

    addRandomPacientes = (n=5) => {
        for (let i = 0; i < n; i++) {
            let data = {
              name: `name ${i}`,
              surname: `apellido ${i}`,
              cedula: `cedula ${i}`,
              aseg: aseguradoras[
                Math.floor(Math.random() * aseguradoras.length)
              ],
              monto: Math.random() * 10000,
              fecha: new Date(
                2021,
                Math.round(Math.random() * 6),
                Math.round(Math.random() * 30)
              ),
            };
            console.log(data);
            return this.save(data)
    }}
}


export default new PacientesFetch();

