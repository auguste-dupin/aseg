import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { userData } from '../../dummyData.js'
import AddPacientes from '../../components/addPacientes/AddPacientes'
import Pacientes from '../../components/pacientes/Pacientes'
import Test from '../../components/pacientes/test'
import { useState, useEffect } from 'react'
import AsegDataService from '../../services/dataService'
import ChartTest from '../../components/chart/ChartTest'
import SelectComponent from '../../components/selectComponent/SelectComponent'

const fetchData = async (timeRange, aseg) => {
    if (aseg === 'Todos') {
        try {
            const res = await AsegDataService.getAll();
            const results = res.data.pacientes;
            return results;
        } 
        catch (e) {
            console.error(e);
        }       
    } else {
        try {
            const res = await AsegDataService.find(timeRange, aseg);
            const results = res.data.pacientes;
            return results;
        } 
        catch (e) {
            console.error(e);
        }
    }
}

export default function Home() {
    const [data, setData] = useState([])
    const [changed, setChanged] = useState(false)
    const [timeRange, setTimeRange] = useState('all')
    const [aseg, setAseg] = useState('Todos')


    useEffect(() => {
        fetchData(timeRange, aseg).then((apiPacientes) => {
            setData(apiPacientes)
        })
    }, [timeRange, aseg])

    useEffect(() => {
        fetchData(timeRange, aseg).then((apiPacientes) => {
            setData(apiPacientes)
            setChanged(false)
            console.log('Updated Data')
        })
    }, [changed, timeRange, aseg])
    
    const changedData = () => {
        setChanged(true)
    }

    const changedAseg = (newAseg) => {
        setAseg(newAseg)
        changedData()
    }

    return (
        <div className='home'>
            <FeaturedInfo />
            {/* <Chart 
                title='Pagos'
                data={userData}
                dataKey='name'
                grid
            /> */}

            <ChartTest
                title='Pagos'
                data={userData}
                dataKey='name'
                grid
            />
            <SelectComponent  changedAseg={changedAseg}/>
            <Pacientes changedData={changedData} data={data} />
            <AddPacientes changedData={changedData}/>

        </div>
    )
}
