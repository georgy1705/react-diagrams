import React from 'react'
import { VictoryGroup, VictoryLegend, VictoryPie } from 'victory'
import "./diagrams.css"
import DiagramTheme from './DiagramTheme'

const Chart2 = ({data}) => {
  return (
    <>
        <VictoryLegend
            height={60}
            data={[{ name: "2012" }, { name: "2013" }]}
            orientation="vertical"
            gutter={50}
            y={20}
            style={{ border: { stroke: "black" }, labels: {fontSize: 7} }}
            colorScale={["#00CED1", "#1E90FF"]}
        />
        <VictoryGroup height={200} padding={{top: 10, bottom: 25}} theme={DiagramTheme()}>
            <VictoryPie
                innerRadius={50}
                data={data.data2013}
                style={{ 
                    data: {
                        fillOpacity: 0.3, stroke: "#4682B4", strokeWidth: 2
                    },
                    labels: { fontSize: 7, fontWeight: "bold" } 
                }}
            />
            <VictoryPie
                innerRadius={10}
                labelRadius={({ innerRadius }) => innerRadius + 5 }
                data={data.data2012}
                style={{ 
                    data: {
                        fillOpacity: 0.7, stroke: "#E0FFFF", strokeWidth: 1
                    },
                    labels: { fill: "white", fontSize: 4, fontWeight: "bold" } 
                }}
            />
        </VictoryGroup>
    </>
    
        
  )
}

export default Chart2