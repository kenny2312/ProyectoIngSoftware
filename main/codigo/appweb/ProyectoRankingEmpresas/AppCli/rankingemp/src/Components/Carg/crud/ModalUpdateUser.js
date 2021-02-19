
import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import AuthService from "../../../services/auth.service";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import UserService from "../../../services/user.service";
export default function SimpleModal(props) {
  const  Usuario= {
        user: "",
         pass: "",
        name: "",
        lastname:"",
        group: 0
    }
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [user, setUser] = React.useState('ass');
    const [pass, setPass] = React.useState('');
    const [name, setName] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [group, setGroup] = React.useState('');
    const [fuser, setFuser] = React.useState(Usuario);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setGroup(event.target.value);
    };

    const handleClickOpen = (estado) => {
        setOpen(true);
        if(estado.equal("edit")){

        }
    };

    const handleClose = () => {
       
        setOpen(false);
    };
    const handleSaveUser = async() => {
       
        let onejtos = {
            user: user,
            password: pass,
            name: name,
            lastname: lastname,
            GrupuserId: group
        }
        setFuser(onejtos);
        
      
       
        setOpen(false);
        await handleCreateUser(onejtos);
        console.log(fuser);
    };
    const handleCreateUser = async (vars) => {

        var update = await UserService.postUser(vars);

    };
    
   


    return (
        <div>
            
            <Button variant="outlined" color="primary"   onClick={handleClickOpen("add")}>
                Agregar
            </Button>
                Editar
            <Button variant="outlined" color="default"  onClick={handleClickOpen("edit")}>
            </Button>
            <Button variant="outlined" color="secondary"   onClick={handleClickOpen("delete")}>
                Eliminar
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                
                <DialogTitle id="responsive-dialog-title">{"Crear Usuario"}</DialogTitle>
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
                                        
                                        fullWidth
                                        id="name"
                                        label="Nombre"
                                        name="name"
                                        type="text"
                                        value={"value"}
                                        />
                                        
                                    <TextField
                                        onChange={e =>
                                            setUser(e.target.value)
                                        }
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="user"
                                        label="Usuario"
                                        type="text"
                                        id="user"

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

                                    />
                                   
                                   
                                    <InputLabel   id="demo-simple-select-autowidth-label">Grupo</InputLabel>
                                    <Select
                                      
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={group}
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
