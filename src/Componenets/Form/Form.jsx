import React, { useState } from "react";


const Form = () => {
    const [inputValue, setInputValue] = useState({
        name : '',
    });


    const [pValue , setPvalue] = useState([]);
  
    const HandleChange = (e) => {
      let value = e.target.value;
      setInputValue({...inputValue , [e.target.name]:value})  
      
    }
    
    const HandleSubmit = (e) => {
        e.preventDefault();
        setPvalue(inputValue);
        setPvalue([...pValue , inputValue]);
        setInputValue({
          name : "",
        });
        console.log("inputValue" , inputValue);

      
    }
  
    return (
        <div>
            <div className="container">
                <form onSubmit={HandleSubmit}>
                    <div className="sp">
                        <input type="text" name="name" value={inputValue.name} onChange= {HandleChange} placeholder="Enter your comment" />
                    </div> 
                <br />
                <div className="dy">
                    <button type="submit" className="bg-info">Submit</button>
                </div>
            
                {
                    pValue.map((s)=>{
                        return(

                            <h4>{s.name}</h4>
                        )
                    })
                }
                </form>
            </div>
        </div>
    )
  }


export default Form;
