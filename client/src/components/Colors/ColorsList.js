import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    SingleFieldList,
    ChipField,
    ReferenceArrayField,
} from 'react-admin';


const ColorsList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source="title" />
            <TextField source="color" />
            
            <ReferenceArrayField label="Tags" reference="choose_several" source="options">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
        </Datagrid>
    </List>
  )
}


export default ColorsList
