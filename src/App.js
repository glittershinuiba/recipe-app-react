
import './App.css';
import Boxs from "./Boxs"

import React, { useState, useEffect } from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
function App() {
  const [Date_json, setDate_json] = useState({ categories: [] });
  const [count, setcount] = useState(0);
  const [search,setsearch]=useState("");
  const [searchdate,setsearchdate]=useState([])
  const handlesearch=(Search)=>{let i=0;
    let flag=0;
    console.log(Search);
    
   for( i=0;i<Date_json.categories.length;i++){
     
    if(Search==Date_json.categories[i].strCategory){
      
      setsearchdate([ ...setsearchdate,Date_json.categories[i]]);
      
      flag=1;
    }
  }
  
  if(flag==0)
  {alert("没有此菜单");
    setcount(1);}
  else{
    setDate_json({categories:searchdate});
    
  }
  }
  
 /**  */
  useEffect(() => {
    wait();
  }, [count]
  )

  function wait() {
    console.log('api 调用' + count);

    var url = "https://www.themealdb.com/api/json/v1/1/categories.php"
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          alert(res.status);
          return;
        }
      })
      .then(data => { setDate_json(data); }
      );
    setcount(0);
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
  }));
  const classes = useStyles();
  return (
    <>
      <div className="App">
        <AppBar position="static">
          <Toolbar>

            <RestaurantIcon />

            <Typography variant="h6" className={classes.title}>
              Recpit
            </Typography>

            <InputBase
              className={classes.input}
              placeholder="Search recpit food"
              inputProps={{ 'aria-label': 'search recpit food' }}
              onChange={(e)=>{setsearch(e.target.value)}}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon color='action' onClick={()=>handlesearch(search)} />
            </IconButton>

            <Button color="inherit">addrecpit</Button>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          {Date_json.categories.length > 0 ? <Boxs json={Date_json}></Boxs> : <div>loading</div>}
        </header>
      </div>
    </>



  );
}

export default App;
