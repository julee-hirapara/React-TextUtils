import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-secondary')
  // }
  const toggleMode = (cls) => {
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add("bg-"+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#041b33';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Try TextUtiles - Word Counter,Character Counter' mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
