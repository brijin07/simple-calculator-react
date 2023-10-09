import { Button, Stack, TextField } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [principle, setprinciple] = useState("");
  const [rate, setrate] = useState("");
  const [year, setyear] = useState("");
  const [interest, setinterest] = useState(0);

  const calculateinterest = (e) => {
    e.preventDefault();
    console.log(principle, rate, year);
    if (!principle || !rate || !year) {
      alert("please fill the form completly");
    } else {
      setinterest((principle * rate * year) / 100);
    }
  };

  const resetForm = () => {
    setprinciple("");
    setrate("");
    setyear("");
    setinterest("0");
  };

  return (
    <div className="app">
      <form onSubmit={calculateinterest}>
        {/* to hold text field */}
        <div className="text-field">
           <h3 style={{lineheight:'1px',fontFamily:'unset', color:'white' ,fontWeight:'inherit', textTransform:'uppercase',marginBottom:'5px'}}>Total simple interest</h3>

        {/* <h1>Simple calculator</h1> */}
          {/* principle amount */}
          <div className="input">
           
            <div className="output">
             <h1>₹{interest}</h1>
            
         
           
            </div><br />
            <TextField value={principle || " "}
              onChange={(e) => setprinciple(e.target.value)}
              className="outlined-basic"
              id="outlined-basic"
              label="principle amount"
              // variant="outlined"
              defaultValue="Hello World"
            
            />
            
          </div>

          {/* interest */}
          <div className="input">
            <TextField value={rate || " "}
              onChange={(e) => setrate(e.target.value)}
              className="outlined-basic"
              id="outlined-basic"
              label="rate of interest"
              variant="outlined"
            />
          </div>

          {/* time period */}
          <div className="input">
            <TextField value={year || " "}
              onChange={(e) => setyear(e.target.value)}
              className="outlined-basic"
              id="outlined-basic"
              label="time period"
              variant="outlined"
            />
          </div>

          {/* button */}
          <div className="btn-group">
            <Stack direction="row" spacing={2}>
              <Button
                type="submit"
                className="btn"
                style={{ backgroundColor: "black" }}
                variant="contained"
              >
                Calcultor
              </Button>
              <Button
                onClick={resetForm}
                className="btn"
                style={{ backgroundColor: "black" }}
                variant="outlined"
              >
                Reset
              </Button>
            </Stack>
            <br />
            
          </div>
        </div>
      </form>
   
    </div>
  );
}

export default App;
