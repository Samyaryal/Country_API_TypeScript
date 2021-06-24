import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBodyData from './TableBody';
import TableHeadData from './TableHead';

function TableData() {
  
  return (

    <TableContainer >
      <Table >
        <TableHeadData />
        <TableBodyData />
      </Table>
    </TableContainer>

  )
}
export default TableData;