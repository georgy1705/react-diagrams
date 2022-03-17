import React from 'react'
import { 
    VictoryBar, 
    VictoryChart, 
    VictoryAxis,
    VictoryGroup,
    VictoryLegend
} from 'victory';
import DiagramTheme from './DiagramTheme';


const Chart1 = ({data}) => {
    return (
        <VictoryChart 
            theme={DiagramTheme()}
            height={250}
            width={500}
            domainPadding={20}
        >
            <VictoryLegend x={60}
                orientation="horizontal"
                gutter={20}
                style={{ border: { stroke: "black" }, data: {fontSize: 14 } }}
                data={[
                    { name: "Project 1" },
                    { name: "Project 2" },
                    { name: "Project 3" },
                    { name: "Project 4" }
                  ]}
            />
            <VictoryAxis
                tickValues={[
                    'Jan', 'Feb', 'Mar', 'Apr', 
                    'May', 'Jun', 'Jul', 'Aug', 
                    'Sep', 'Oct', 'Nov', 'Dec'
                    ]}
            />
            <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x/1000}k`)}
            />
            <VictoryGroup offset={4}
                сolorScale={"qualitative"}>
                <VictoryBar
                data={data.project1}  
            />
            <VictoryBar
                data={data.project2}
            />
            <VictoryBar
                data={data.project3}
            />
            <VictoryBar
                data={data.project4}
            />
            </VictoryGroup>
        </VictoryChart>
  )
}

export default Chart1