import React, { useState } from 'react';

import "./Box.css"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Dialogs from "./Dialogs";


const useStyles = makeStyles({
    root: {
        minWidth: 345,
        margin: "1rem",
        boxShadow:"5px 10px grey"
    },
    media: {
        height: 240,
    },
});



function Boxs(props) {
    const [open, setOpen] = useState([{id:false}]);
    const classes = useStyles();
    let json = props.json.categories;
    

    return (
        <div className="list_box" >


            {json.map((item, index) => (
                <Card className={classes.root} key={item.idCategory}  >
                    <CardActionArea >
                        <CardMedia
                            className={classes.media}
                            image={item.strCategoryThumb}
                            title={item.strCategory}
                            
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.strCategory}
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                    </Button>


                        <Dialogs json={item} open={open} setOpen={setOpen} />

                    </CardActions>
                </Card>
            ))}


        </div>
    )
}
export default Boxs;