
import { useState } from 'react';
import './App.css'

function App() {
const [files,setFiles] = useState("")
  const handleChange =(e)=>{
    console.log(e.target.files);
    // setFiles(e.target.files);

  }
  const handleSubmit = (e)=>{
    // e.preventDefault();j
  }

  return (
    <section>
      <div className="form">
      <form onSubmit= {(e)=> handleSubmit(e)}>
        <label htmlFor="fileInput" >Upload your photo here</label>
        <input type="file"  id="fileInput" onChange={(e) => handleChange(e)} required accept="image/png, image/jpeg, image.jfif"/>
        <button>Submit</button>
      </form>
      </div>
      
    </section>
  )
}

export default App
