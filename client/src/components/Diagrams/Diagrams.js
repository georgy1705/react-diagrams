import React, { useEffect, useState } from 'react'
import { dataProvider } from '../../App'
import Chart1 from './Chart1'
import Chart2 from './Chart2'
import Chart3 from './Chart3'
import "./diagrams.css"


const Diagrams = () => {
    const [chart1, setChart1] = useState([])
    const [chart2, setChart2] = useState([])
    const [chart3, setChart3] = useState([])

    const getData = async () => {
        const { data } = await dataProvider.getList('task3', {
          pagination: { page: 1, perPage: 5 },
          sort: { field: 'title'},
        })

        setChart1(data[0].chart1)
        setChart2(data[0].chart2)
        setChart3(data[0].chart3)
    }

    useEffect(() => {
        getData()
    }, [])
    
  return (
      <>
        <h2 className='chart-title'>Chart One</h2>
        <Chart1 data={chart1}/>

        <h2 className='chart-title'>Chart Two</h2>
        <Chart2 data={chart2}/>

        <h2 className='chart-title'>Chart Three</h2>
        <Chart3 data={chart3}/>
      </>
  )
}

export default Diagrams