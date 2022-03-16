import React, { useEffect, useMemo, useState } from 'react'
import { 
    useExpanded, 
    useSortBy, 
    useTable,
    useFilters,
    usePagination
} from 'react-table'
import { SelectColumnFilter, DefaultColumnFilter } from './Filters'
import { Styles } from './TableStyles'
import './table.css'
import {Button, Select, MenuItem, Input} from '@material-ui/core';


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
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize }
      } = useTable(
            {
                columns,
                data,
                filterTypes,
                defaultColumn
            }, 
            useFilters, useSortBy, useExpanded, usePagination)
      

    return (
        <Styles>
            <div className='tableWrap'>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())} >
                                {column.render('Header')}
                                <div>{column.canFilter ? column.render('Filter') : null}</div>
                                <span>
                                    {column.isSorted
                                    ? column.isSortedDesc
                                        ? ' ▼'
                                        : ' ▲'
                                    : ''}
                                </span>
                            </th>
                            ))}
                        </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                                )
                            })}
                            </tr>
                        )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <Button variant="outlined" color="primary" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
                </Button>
                <Button variant="outlined" color="primary"  onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
                </Button>
                <Button variant="outlined" color="primary" onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
                </Button>
                <Button variant="outlined" color="primary" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
                </Button>
                <span className='table-footer'>
                Page {pageIndex + 1} of {pageOptions.length}
                </span>
                <span className='table-footer'>
                | Go to page: {' '}
                <Input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(page)
                    }}
                    style={{ width: '50px' }}
                />
                </span>{' '}
                <Select
                id='select'
                value={pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value))
                }}
                >
                {[10, 20, 30, 40, 50].map(pageSize => (
                    <MenuItem key={pageSize} value={pageSize}>
                    Show {pageSize}
                    </MenuItem>
                ))}
                </Select>
            </div>
        </Styles>
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
                    if (i === 1) {
                        item = {
                            "Header": "Наименование плана",
                            "accessor": "name",
                            "Filter": SelectColumnFilter,
                            "filter": "includes"
                        }
                    }
                    return item
                })

                res.unshift({
                    "id": 'expander',
                    Cell: ({ row }) => 
                    row.canExpand ? (
                        <span
                        {...row.getToggleRowExpandedProps()}
                        >
                        {row.isExpanded ? '↓' : '→'}
                        </span>
                    ) : null,
                })

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