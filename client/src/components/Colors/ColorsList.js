import React, { useEffect } from 'react'
import {
    List,
    Datagrid,
    TextField,
    SingleFieldList,
    ChipField,
    ReferenceArrayField,
} from 'react-admin';
import { dataProvider } from '../../App';


const ColorsList = (props) => {

    const getData = async () => {
        const { data } = await dataProvider.getList('colors', {
            pagination: { page: 1, perPage: 5 },
            sort: { field: 'title'},
        })

        console.log(data);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <List {...props}>
            <Datagrid>
                <TextField source="title" />
                <TextField source="color" />
                
                <ReferenceArrayField label="Options" reference="choose_several" source="options">
                    <SingleFieldList>
                        <ChipField source="name" />
                    </SingleFieldList>
                </ReferenceArrayField>
            </Datagrid>
        </List>
  )
}


export default ColorsList
