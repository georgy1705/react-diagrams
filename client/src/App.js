import React from 'react'
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import ColorsList from './components/Colors/ColorsList';
import ColorsCreate from './components/Colors/ColorsCreate';
import Table from './components/Table/Table';
import Diagrams from './components/Diagrams/Diagrams';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';


export const dataProvider = restProvider('http://localhost:3000')

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
        <Resource name="colors" 
          list={ColorsList} create={ColorsCreate} 
          icon={InvertColorsIcon} 
          title="Diagram App"
        />
        <Resource name="choose_one" />
        <Resource name="choose_several" />

        <Resource name="table" options={{ label: 'Table' }} list={Table} />
        <Resource name="task2" />

        <Resource name="diagrams" list={Diagrams} icon={StackedLineChartIcon}/>
    </Admin>
  )
}


export default App
