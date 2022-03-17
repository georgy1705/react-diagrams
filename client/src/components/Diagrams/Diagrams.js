import React, { useEffect, useState } from 'react'
import { Tab, TabbedShowLayout } from 'react-admin'
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
      <TabbedShowLayout>
          <Tab label="Chart №1">
            <Chart1 data={chart1} className="chart1" />
          </Tab>
          <Tab label="Chart №2" path="chart2">
            <Chart2 data={chart2}/>  
          </Tab>
          <Tab label="Chart №3" path="chart3">
            <Chart3 data={chart3}/>  
          </Tab>
      </TabbedShowLayout>
  )
}

export default Diagrams