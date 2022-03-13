import React from 'react'
import { VictoryLegend, VictoryPie, VictoryStack} from 'victory'
import "./diagrams.css"

const Chart2 = ({data}) => {
  return (
    <>
        <VictoryLegend
            height={100}
            data={[{ name: "2012" }, { name: "2013" }]}
            orientation="vertical"
            gutter={50}
            y={30}
            style={{ border: { stroke: "black" } }}
            colorScale={["tomato", "orange"]}
        />
      
        <VictoryStack colorScale={["tomato", "orange"]} padding={{ top: 0 }}>
            <VictoryPie
                width={300} height={300}
                innerRadius={50}
                data={data.data2013}
                style={{ 
                    data: {
                        fillOpacity: 0.3, stroke: "#c43a31", strokeWidth: 2
                    },
                    labels: { fontSize: 7, fontWeight: "bold" } 
                }}
            />
            <VictoryPie
                width={300} height={300}
                innerRadius={10}
                labelRadius={({ innerRadius }) => innerRadius + 5 }
                data={data.data2012}
                style={{ 
                    data: {
                        fillOpacity: 0.7, stroke: "#F08080", strokeWidth: 1
                    },
                    labels: { fill: "white", fontSize: 4, fontWeight: "bold" } 
                }}
            />
        </VictoryStack>
    </>
    
        
  )
}

export default Chart2