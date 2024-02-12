import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark'?'white':'#041b33',
        backgroundColor: props.mode === 'dark'?'#041b33':'white',
        // border: '2px solid',
        // borderColor: props.mode === 'dark'?'white':'#041b33'
    }
    // const [myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor :'white'
    // })
    // const [ btntext , setBtntext] = useState("Enable Light Mode")

    // const toggleStlye = () =>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor :'black'
    //         })
    //         setBtntext("Enale Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor :'white',
    //             border :'1px solid white'
    //         })
    //         setBtntext("Enale Light Mode")
    //     }
    // }
  return (
    <>
    <div className='container' style={myStyle}>
        <h1 className='my-2' style={{color: props.mode === 'dark'?'white':'#041b33'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Text Analysis</strong>
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                TextUtils allows users to perform various text analysis tasks, including counting characters, words, sentences, and providing readability statistics. It provides valuable insights into the structure and complexity of the entered text.
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Dark/Light Mode Toggle</strong>
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                The app offers a convenient Dark/Light mode toggle, enhancing user experience by providing a choice of visual themes. Users can switch between light and dark modes, making the interface comfortable for different lighting conditions.
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Responsive Design</strong>
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                TextUtils is built with a responsive design, ensuring a seamless experience across various devices and screen sizes. Whether on a desktop, tablet, or mobile device, users can access and utilize the app's features with ease.
                </div>
            </div>
            </div>
        </div>
    {/* <div className="container my-3">
        <button className="btn btn-primary my-3" onClick={toggleStlye} type='button'>{btntext}</button>
    </div> */}
    </div>
    </>
  )
}
