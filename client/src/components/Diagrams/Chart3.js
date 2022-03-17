import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack } from 'victory'
import DiagramTheme from './DiagramTheme'

const Chart3 = ({data}) => {
  return (
    <VictoryChart
    domainPadding={1}
    height={200}
    width={500}
    theme={DiagramTheme()}
    >
        <VictoryAxis/>
        <VictoryAxis
            dependentAxis
            tickFormat={['Jan', 'Feb', 'Mar', 'Apr', 
            'May', 'Jun', 'Jul', 'Aug', 
            'Sep', 'Oct', 'Nov', 'Dec']}
        />
        <VictoryStack offset={5}
            сolorScale={"qualitative"}>
            <VictoryBar
            horizontal
            data={data.metric1}  
        />
        <VictoryBar
            horizontal
            data={data.metric2}
        />
        <VictoryBar
            horizontal
            data={data.metric3}
        />
        </VictoryStack>
    </VictoryChart>
  )
}

export default Chart3