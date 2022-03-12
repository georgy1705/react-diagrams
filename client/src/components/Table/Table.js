import React, { useEffect, useMemo, useState } from 'react'
import { 
    useExpanded, 
    useSortBy, 
    useTable,
    useFilters, 
    useGlobalFilter
} from 'react-table'
import { SelectColumnFilter, DefaultColumnFilter } from './Filters'


const TableSettings = ({ columns, data }) => {
    const filterTypes = useMemo(
        () => ({
          text: (rows, id, filterValue) => {
            return rows.filter(row => {
              const rowValue = row.values[id]
              return rowValue !== undefined
                ? String(rowValue)
                    .toLowerCase()
                    .startsWith(String(filterValue).toLowerCase())
                : true
            })
          },
        }),
        []
    )

    const defaultColumn = React.useMemo(
        () => ({
          Filter: DefaultColumnFilter,
        }),
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
      } = useTable(
            {
                columns,
                data,
                filterTypes,
                defaultColumn,
                initialState: {
                    expanded: { "0": true, "1": true, "2": true }
                }
            }, 
            useFilters, useSortBy, useExpanded)
      

    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        style={{
                        borderBottom: 'solid 3px red',
                        background: 'aliceblue',
                        color: 'black',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                        }}
                    >
                        {column.render('Header')}
                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                        <span>
                            {column.isSorted
                            ? column.isSortedDesc
                                ? ' 🔽'
                                : ' 🔼'
                            : ''}
                        </span>
                    </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return (
                        <td
                            {...cell.getCellProps()}
                            style={{
                            padding: '10px',
                            border: 'solid 1px gray',
                            background: 'papayawhip',
                            }}
                        >
                            {cell.render('Cell')}
                        </td>
                        )
                    })}
                    </tr>
                )
                })}
            </tbody>
        </table>
    )
}


const Table = () => {
    const [columnsTable, setColumnsTable] = useState([])
    const [dataTable, setDataTable] = useState([])

    const getHeader = () => 
        fetch('http://localhost:5000/task2')
            .then((response) => response.json())
            .then((data) => {
                const header = data[0].table.header
                const res = header.map((item, i) => {
                    if (i == 1) {
                        item = {
                            "Header": "Наименование плана",
                            "accessor": "name",
                            "Filter": SelectColumnFilter,
                            "filter": "includes"
                        }
                    }
                    return item
                })
                console.log();
                setColumnsTable(res)
            })
            
    
    const getData = () => 
        fetch('http://localhost:5000/task2')
            .then((response) => response.json())
            .then((data) => setDataTable(data[0].table.data))

    useEffect(() => {
        getHeader()
        getData()
    }, [])
  
    return (
        <TableSettings columns={columnsTable} data={dataTable} />
    )
}

export default Table