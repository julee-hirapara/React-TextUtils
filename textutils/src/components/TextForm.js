import React, {useState} from 'react'

// console.log(useState('Enter text here'))
export default function TextForm(props) {
  // 1
  const handleUpperClick = ()=>{
    // console.log("uppercase was clicked "+ text);
    let new_text = text.toUpperCase();
    setText(new_text)
    props.showAlert("Converted into UpperCase", "success");
  }
  // 2
  const  handleLowerClick= ()=>{
    // console.log("uppercase was clicked "+ text);
    let new_text = text.toLowerCase();
    setText(new_text)
    props.showAlert("Converted into LowerCase", "success");
  
  }
  // 3
  const capitalizeFirstLetter = () =>{
    let new_text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(new_text)
    props.showAlert("Converted into SentenceCase", "success");
  }
  // 4
  const capitalizeEveryWord = ()=>{
    let new_text = text.replace(/\b\w/g, char => char.toUpperCase());
    setText(new_text)
    props.showAlert("Converted into TitleCase", "success");

  }
  // 5
  const handleClearClick = () =>{
    let new_text = '';
    setText(new_text)
    props.showAlert("Clear the existing Textarea", "success");

  }
  // 6
  const handlecopy = () =>{
    //  var text =document.getElementById("mybox");
    //  text.select();
    navigator.clipboard.writeText(text);
    //  navigator.clipboard.writeText(text.value);
    //  document.getSelection().removeAllRanges();
     props.showAlert("Copied to clipboard", "success");
  }
  // 7
  const handleExtraSpaces = () =>{
    let new_text = text.split(/[ ]+/);
    setText(new_text.join(" "))
    props.showAlert("Remove ExtraSpaces", "success");
  }

  const handleOnChange = (event)=>{
    // console.log("Onchange event work ");
    setText(event.target.value);
  }
  // const [text, setText] = useState('Enter text here');
  const [text, setText] = useState('');

  //  text = "new state";    //wrong way to change the state
  // setText("new text");    //correct way to change the state 
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'#041b33':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#192f47':'white', color:props.mode==='light'?'black':'white'}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpperClick}>Convert to uppsercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={capitalizeFirstLetter}>Sentence case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={capitalizeEveryWord}>Title case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'#041b33':'white'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
      {/* <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters</p> */}
      <p>{0.008 * text.split(" ").length} Minutes for reading a words </p>
      <h2>Previews</h2>
      <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  )
}
