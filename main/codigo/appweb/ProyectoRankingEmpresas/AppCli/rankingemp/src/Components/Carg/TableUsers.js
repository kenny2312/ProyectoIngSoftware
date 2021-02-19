import React, { useEffect, useState,useContext} from 'react';
import UserContext from '../UserContext';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table  from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import TablePagination from '@material-ui/core/TablePagination';
import UserService from "./services/user.service";


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function UserList() {
   

const {user, setUser}=useContext(UserContext);
  console.log(user);
 

  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [listU, setListU] = React.useState([]);
  const [update, setUpdate] = React.useState(true);
    const ListUser = async () => {
      setSelected([]);
        var list = await UserService.getListUser()
        setListU(list)

    }  
    useEffect(() => {
      async function fetchData() {
        let estado=true;
       estado=user.update!==undefined ?  user.update : update;
        if(estado)  {
          await ListUser() 
          setUpdate(false);
          setUser({...user,update:undefined})
      }
      
      }
      fetchData();

    },[listU,update,user]);
  const handleChangePage=((event, newPage)=> {
    setPage(newPage);
  })
  const handleChangeRowsPerPage=((event)=> {
    setRowsPerPage(event.target.value);
  })
  function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
  }
  
  function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }
  const isSelected = (name) => selected.indexOf(name) !== -1;
  const handleClick = (event, name) => {
  
    const selectedIndex = selected.indexOf(name);

    let newSelected = [];
   
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
 
    setSelected(newSelected.slice());
    setUser({...user,seleclist:newSelected.slice()})
  };
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, listU.length - page * rowsPerPage);
  return (
    <React.Fragment>
      <Title>Lista de Usuarios</Title>
      <Table size="small">
        <TableHead>
      
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Usuario</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
                  {stableSort(listU, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((listU,index) =>   {
                        const isItemSelected = isSelected(listU.guid);
                        const labelId = `enhanced-table-checkbox-${index}`;
                     return (
                     
                     <TableRow 
                      hover
                      onClick={(event) => handleClick(event, listU.guid)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={listU.guid}
                      selected={isItemSelected}
                     
                     >
                        <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                     
                      <TableCell>{listU.name}</TableCell>
                              <TableCell>{listU.lastName}</TableCell>
                      <TableCell>{listU.user}</TableCell>
                      <TableCell>{listU.creationDate}</TableCell>
                     <TableCell align="right">0000</TableCell>
            </TableRow>
          )})}
          {emptyRows > 0 && (
              <TableRow style={{ height: 49 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
              count={listU.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </React.Fragment>
  );
}
