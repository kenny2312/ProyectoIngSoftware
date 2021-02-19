import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React ,{useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';

import UserService from './services/emp.service.js';
export default function InfoEmp() {
    const  Usuario= {
        guid:"",
        address:"",
        code: "",
        name: "",
        city: "",
        phone:"",
        industry: "",
     }
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    //datos de formulario
    const [code, setCode] = React.useState('');
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [industry, setIndustry] = React.useState('');


    const [fuser, setFuser] = React.useState(Usuario);
    const [stateact, setStateact] = React.useState('');


    const handleChange = (event) => {
        fuser.industry=undefined;
        setIndustry(event.target.value);
    };

    const LoadEmp = async()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        let id=user.id;
    let obj = await UserService.GetUser2(id)
    console.log(obj);

      setFuser({
          guid:obj.guid,
          code: obj.code,
          name: obj.name,
          address: obj.address,
          city: obj.city,
          phone: obj.phone,
          industry:obj.industry,
      });

    };

    useEffect( async () => {
       
        await LoadEmp();

    },[LoadEmp]);

    return (

<Grid container component="main" >
                        
                        <form   noValidate>
                            <Grid container spacing={2}>
                            <DialogTitle id="responsive-dialog-title">{"Informacion de la empresa"}</DialogTitle>
                       
                            <DialogContent>
                          
                                <Grid item lg={10} >
                                <Divider />
                                    <TextField
                                        onChange={e =>
                                            setCode(e.target.value)
                                        }
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="code"
                                        label="Codigo"
                                        name="code"
                                        type="text"
                                   
                                        value={fuser.code}
                                    />
                                    <TextField
                                        onChange={e =>
                                            setName(e.target.value)
                                        }
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="Empresa"
                                        label="Nombre de la Empresa"
                                        type="text"
                                        id="Empresa"
                                        value={
                                            
                                            fuser.name
                                            
                                        
                                        
                                        }
                                    />
                                    <TextField
                                        onChange={e =>
                                            setAddress(e.target.value)
                                        }
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="Direccion"
                                        label="Direccion"
                                        type="text"
                                        id="Direccion"
                                        value={fuser.address}
                                    />
                                </Grid>
                                <Grid item lg={10}>
                                    <TextField
                                        onChange={e =>
                                            setCity(e.target.value)
                                        }
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="Ciudad"
                                        label="Ciudad"
                                        type="text"
                                        id="Ciudad"
                                        value={fuser.city}
                                    />
                                     <TextField
                                        onChange={e =>
                                            setPhone(e.target.value)
                                        }
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="Phone"
                                        label="Telefono"
                                        type="text"
                                        id="Telefono"
                                        value={ fuser.phone}
                                    />
                                   
                                    <InputLabel   id="demo-simple-select-autowidth-label">Industria</InputLabel>
                                    <Select
                                      
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                      
                                        value={fuser.industry!== undefined? fuser.industry:industry}
                                        onChange={handleChange}
                                       
                                        autoWidth
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"privada"}>privada</MenuItem>
                                        <MenuItem value={"agricola"}>agricola</MenuItem>
                                        <MenuItem value={"aaaa"}>aaaa</MenuItem>
                                    </Select>

                                </Grid>
                                </DialogContent>
                            </Grid>
                          
                        </form>

                    </Grid>



    );
}