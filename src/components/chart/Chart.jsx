import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './chart.css'

export default function Chart({title, data, dataKey, grid}) {
    return (
        <div className='chart'>
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey='name' stroke="#555" />
                    <YAxis />
                    {grid && <CartesianGrid stroke='#e0dfdf'/>}
                    <Line type='monotone' dataKey='uv' stroke="#5550bd" />
                    <Line type='monotone' dataKey='pv' stroke="#52501d" />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
