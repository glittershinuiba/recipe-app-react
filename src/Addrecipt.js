import React, { useState } from 'react'

import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import Fab from '@material-ui/core/Fab';
function Addrecipt(props) {
    const sethidden = props.sethidden;
    const Data = props.Data.categories;
    const setData = props.setDate_json;
    const [Name, setname] = useState("");
    const [str, setstr] = useState("");
    const [url, setUrl] = useState();
    const id = Data[Data.length - 1].idCategory;
    const handonclick = () => {
        sethidden(0);
    }
    const add = () => {
        setData({
            categories: [...Data, {
                idCategory: `${parseInt(id) + 1}`,
                strCategoryThumb: url,
                strCategory: Name,
                strCategoryDescription: str
            }]
        });
        alert("0k");
    }
    return (
        <div style={{ margin:40 }}>
            <CloseIcon onClick={handonclick} style={{ float: 'right' }}>close</CloseIcon>
            <p>Name</p>
            <TextField onChange={(e) => { setname(e.target.value) }} label="Name" ></TextField>
            <p>details</p>
            <TextField onChange={(e) => { setstr(e.target.value) }}></TextField>
            <br/>
            <div style={{marginTop :20 ,marginBottom:20}}> 
            <Fab color="primary"> 


                <FolderIcon />
                
            </Fab>
            <input type="file" accept="image/*" onChange={(e) => {
                    let url = URL.createObjectURL(e.target.files[0]);
                    setUrl(url);
                }} />
                </div>
            <Button onClick={add} >addrecipt</Button>
        </ div> 
    )
}
export default Addrecipt;