import {useState} from 'react'

const Form = () => {


 const [inputValues, setinputValues] = useState({
    nick:"",
    monthSubs : 0,
    avatar: "" ,
    description: ""

 })

  const handleSubmit =() => {

  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setinputValues({
        ...inputValues,
        [e.target.name]: e.target.value
    })
  }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="nes-field">
  <label htmlFor="nick">Nick</label>
  <input onChange = {handleInputChange} value={inputValues.nick} type="text" id="nick" className="nes-input" required name="nick" />
</div>            
<div className="nes-field">
  <label htmlFor="monthSubs">monthSubs</label>
  <input onChange = {handleInputChange} value={inputValues.monthSubs} type="text" id="monthSubs" className="nes-input" required name="monthSubs"/>
</div>            
<div className="nes-field">
  <label htmlFor="avatar">Avatar</label>
  <input onChange = {handleInputChange} value={inputValues.avatar} type="text" id="avatar" className="nes-input" required name="avatar" />
</div>            <div className="nes-field">
  <label htmlFor="description">Description</label>
  <textarea onChange = {handleInputChange} value={inputValues.description}  id="description" className="nes-textarea" required name="description"/>
</div>
           
            <button className="nes-btn">Add new sub!</button>
        </form>
    </div>
  )
}

export default Form
