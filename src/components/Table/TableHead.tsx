import React , {useContext } from "react";
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell'
import ThemeContext from '../Context/ThemeContext';

function TableHeadData() {
  const { theme } = useContext(ThemeContext);
  return (
    <TableHead style={theme}>
      <TableRow  style={{ background: theme.background, color: theme.color }} className="table-head" >
        <TableCell style={{fontSize:"18px", background: theme.background, color: theme.color }}  align ="center" >FLAG </TableCell>
        <TableCell style={{fontSize:"18px", background: theme.background, color: theme.color }} align ="center">NAME</TableCell>
        <TableCell style={{fontSize:"18px", background: theme.background, color: theme.color }} align ="center">POPULATION</TableCell>
        <TableCell style={{fontSize:"18px", background: theme.background, color: theme.color }} align ="center">REGION</TableCell>
        <TableCell style={{fontSize:"18px", background: theme.background, color: theme.color }} align ="center">LANGUAGE</TableCell>
        <TableCell style={{fontSize:"18px", background: theme.background, color: theme.color }} align ="center"> BUY </TableCell>
      </TableRow>
    </TableHead>
  )
}

export default TableHeadData;