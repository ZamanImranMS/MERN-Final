import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'photo', headerName: '', width: 70 },
    { field: 'Name', headerName: 'NAME', width: 130 },
    { field: 'Sex', headerName: 'SEX', width: 70},
    { field: 'Place', headerName: 'PLACE', width: 130 },
    {
      field: 'Dateofbirth',
      headerName: 'DATE OF BIRTH',
      width: 130,
    },
    {
      field: 'group',
      headerName: 'GROUP',
      width: 160,
    },
  ];
  
  

function Datatable() {
  const [tableData, setTableData]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3333/students")
    .then((data)=>data.json())
    .then((data)=>setTableData(data))
  },[])
  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /></div>
    </div>
  )
}
export default Datatable

