
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React ,{useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import UserService from "../services/emp.service";
import UserContext from '../../UserContext';

export default function SimpleModal(props) {
  const  Usuario= {
       guid:"",
       address:"",
       code: "",
       name: "",
       city: "",
       phone:"",
       industry: "",
    }
    const {user, setUser}=useContext(UserContext);
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    //datos de formulario
    const [code, setCode] = React.useState('');
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [industry, setIndustry] = React.useState('');
     //
    const [fuser, setFuser] = React.useState(Usuario);
    const [stateact, setStateact] = React.useState('');

    const handleChange = (event) => {
        fuser.industry=undefined;
        setIndustry(event.target.value);
    };

    const handleClickOpen = () => {
        setStateact("create");
        setOpen(true);
    };
    const handleClickEdit = async () => {
        setStateact("edit");
        if(user.seleclist !== undefined)
        {
        let primerconincedica= user.seleclist.slice().shift()
      
       if(primerconincedica !== undefined){
       let obj = await UserService.GetUser(primerconincedica)
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
        setOpen(true);
    }else{
        alert("nope")
    }
}else{
    alert("nope")
}
    };
    const handleClose = () => {
       
        setOpen(false);
    };
    const handleSaveUser = async() => {
       
      
        
      
       
        
        if(stateact==="edit"){
       
          var coleccion= {
                ...fuser,
                code: (code !="") ?code:fuser.code,
                name: (name !="")? name:fuser.name,
                address: (address !="")?address:fuser.address,
                city: (city !="")? city:fuser.city,
                phone: (phone !="")? phone:fuser.phone,
                industry: (industry !="")? industry:fuser.industry}
                console.log(coleccion)
            await UserService.UpdateUser(coleccion)
            setOpen(false);
        }else{
            let onejtos = {
                code: code,
                name: name,
                address: address,
                city: city,
                phone: phone,
                industry:industry,
            }
            setFuser(onejtos);
            setOpen(false);
            await handleCreateUser(onejtos);
        }
        
        
        setUser({...user,update:true})
    };
    const handleCreateUser = async (vars) => {
       
        

        await UserService.postUser(vars);

    };
    const handleDeleteUser =  async () => {
       
       
        user.seleclist.map( async (x) =>{
       return   await UserService.deleteUser(x)

        });
      

        setUser({...user,seleclist:[],update:true})
        console.log(user.seleclist);
    };
   
    


    return (
        <div  >
        <Grid  container spacing={2}>
        <Grid item xs={4}>
            <Button variant="outlined" color="primary"  onClick={handleClickOpen}>
                Agregar
            </Button>
            </Grid>
            <Grid item ms={2}>
            <Button variant="outlined" color="default" onClick={handleClickEdit}>
                Editar
            </Button>
            </Grid>
            <Grid item xs={4}>
            <Button variant="outlined" color="secondary" onClick={handleDeleteUser}>
                Eliminar
            </Button>
            </Grid>
            </Grid>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{stateact==="edit"? "Editar Cargo"  : "Nuevo Cargo"}</DialogTitle>
            
                <DialogContent>
                    <Grid container component="main" >
                        
                        <form   noValidate>
                            <Grid container spacing={3}>
                                <Grid item lg={6} >
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
                                        defaultValue={stateact==="edit"? fuser.code: ""}
                                    />
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
                                        defaultValue={stateact==="edit"? fuser.code: ""}
                                    />
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
                                        defaultValue={stateact==="edit"? fuser.code: ""}
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
                                        defaultValue={
                                            
                                            stateact==="edit"? fuser.name  : ""
                                            
                                        
                                        
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
                                        defaultValue={stateact==="edit"? fuser.address: ""}
                                    />
                                </Grid>
                                <Grid item lg={6}>
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
                                        defaultValue={stateact==="edit"? fuser.city: ""}
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
                                        defaultValue={stateact==="edit"? fuser.phone: ""}
                                    />
                                   
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
                                        defaultValue={stateact==="edit"? fuser.code: ""}
                                    />
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
                                        defaultValue={stateact==="edit"? fuser.code: ""}
                                    />
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
                                        defaultValue={stateact==="edit"? fuser.code: ""}
                                    />

                                </Grid>
                            </Grid>

                        </form>

                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSaveUser} color="primary">
                        Guardar
          </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Cancelar
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
