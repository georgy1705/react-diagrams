import React from 'react'
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import ColorsList from './components/Colors/ColorsList';
import ColorsCreate from './components/Colors/ColorsCreate';
import Table from './components/Table/Table';

export const dataProvider = restProvider('http://localhost:3000')

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
        <Resource name="colors" list={ColorsList} create={ColorsCreate} />
        <Resource name="choose_one" />
        <Resource name="choose_several" />
        <Resource name="table" list={Table} />
        <Resource name="task2" />
    </Admin>
  )
}


export default App
