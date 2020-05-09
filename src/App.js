
import './App.css';
import Boxs from "./Boxs"
import Addrecipt from "./Addrecipt"
import CloseIcon from '@material-ui/icons/Close';
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
  const [flag, setflag] = useState(0);
  const [hidden,sethidden]=useState(0);
  const [Date_json, setDate_json] = useState({ categories: [] });
  const [count, setcount] = useState(0);
  const [search, setsearch] = useState("");
  const [searchdate, setsearchdate] = useState({ categories: [] })
  const handlesearch = (Search) => {
    let i = 0;

    console.log(Search);

    for (i = 0; i < Date_json.categories.length; i++) {

      if (Date_json.categories[i].strCategory == Search) {
        setflag(1);
        setsearchdate({ categories: [Date_json.categories[i]] });
        return
      }
    }

    if (flag == 0) {
      alert("没有此菜单");
    }

  };

  const addrecipt=()=>{
    sethidden(1);
    
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
  if(hidden==0){
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
              onChange={(e) => { setsearch(e.target.value) }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon color='inherit' onClick={() => handlesearch(search)} />
            </IconButton>

            <Button color="inherit" onClick={addrecipt}>addrecpit</Button>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          {Date_json.categories.length > 0 && flag == 0 ? <Boxs json={Date_json}></Boxs> : <> <CloseIcon onClick={() => setflag(0)}> close </CloseIcon> <Boxs json={searchdate}></Boxs></>}
        </header>
      </div>
    </>



  );
}
else{
  return(<Addrecipt Data={Date_json} setDate_json={setDate_json} sethidden={sethidden} ></Addrecipt>);
}
}
export default App;
