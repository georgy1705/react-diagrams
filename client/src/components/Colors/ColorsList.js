import { makeStyles } from '@material-ui/core';
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


const useStyles = makeStyles({
    row: {
        backgroundColor: '#FFFAFA',
    },
    headerCell: {
        backgroundColor: '#ADD8E6',
        borderBottom: '1px solid #0000FF'
    }
});


const ColorsList = (props) => {
    const classes = useStyles(props);

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
            <Datagrid classes={classes}>
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
