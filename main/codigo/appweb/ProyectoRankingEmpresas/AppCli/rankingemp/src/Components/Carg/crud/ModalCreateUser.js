
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
import UserService from "../../../services/user.service";
import UserContext from '../../UserContext';
export default function SimpleModal(props) {
  const  Usuario= {
       guid:"",
        user: "",
         pass: "",
        name: "",
        lastname:"",
        group: 0
    }
    const {user, setUser}=useContext(UserContext);
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [useru, setUseru] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [name, setName] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [group, setGroup] = React.useState('');
    const [fuser, setFuser] = React.useState(Usuario);
    const [stateact, setStateact] = React.useState('');

    const handleChange = (event) => {
        setGroup(event.target.value);
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
      

        setFuser({
            guid:obj.guid,
            user: obj.user,
            password: obj.password,
            name: obj.name,
            lastname: obj.lastName,
            GrupuserId: 1
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
                user: (useru !="") ?useru:fuser.user,
                password: (pass !="")? pass:fuser.pass,
                name: (name !="")?name:fuser.name,
                lastname: (lastname !="")? lastname:fuser.lastname,
                group: (group !=undefined)? fuser.group : group }
                console.log(coleccion)
            await UserService.UpdateUser(coleccion)
            setOpen(false);
        }else{
            let onejtos = {
                user: useru,
                password: pass,
                name: name,
                lastname: lastname,
                GrupuserId: group
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
   
    const updateform=(campo,valor)=>{
    
        setUseru(valor);
      return valor
    }


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
                <DialogTitle id="responsive-dialog-title">{stateact==="edit"? "Editar Usuario"  : "Crear Usuario"}</DialogTitle>
            
                <DialogContent>
                    <Grid container component="main" >
                        
                        <form   noValidate>
                            <Grid container spacing={3}>
                                <Grid item lg={6} >
                                    <TextField
                                        onChange={e =>
                                            setName(e.target.value)
                                        }
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Nombre"
                                        name="name"
                                        type="text"
                                        defaultValue={stateact==="edit"? fuser.name: ""}
                                    />
                                    <TextField
                                        onChange={e =>
                                            setUseru(e.target.value)
                                        }
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="user"
                                        label="Usuario"
                                        type="text"
                                        id="user"
                                        defaultValue={
                                            
                                            stateact==="edit"? fuser.user  : ""
                                            
                                        
                                        
                                        }
                                    />
                                    <TextField
                                        onChange={e =>
                                            setPass(e.target.value)
                                        }
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="pass"
                                        label="Contraseña"
                                        type="text"
                                        id="pass"
                                        defaultValue={stateact==="edit"? fuser.password: ""}
                                    />
                                </Grid>
                                <Grid item lg={6}>
                                    <TextField
                                        onChange={e =>
                                            setLastname(e.target.value)
                                        }
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="lastname"
                                        label="Apellido"
                                        type="text"
                                        id="lastname"
                                        defaultValue={stateact==="edit"? fuser.lastname: ""}
                                    />
                                   
                                   
                                    <InputLabel   id="demo-simple-select-autowidth-label">Grupo</InputLabel>
                                    <Select
                                      
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={stateact==="edit"? fuser.GrupuserId:group}
                                        onChange={handleChange}
                                       
                                        autoWidth
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>admin</MenuItem>
                                        <MenuItem value={2}>client</MenuItem>
                                        <MenuItem value={3}>visitor</MenuItem>
                                    </Select>

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
