import React, {useState, useEffect} from 'react';
import './index.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import BarLoader from 'react-spinners/BarLoader';

function App() {
  
  const [categoryHome, setCategoryHome] = useState(true);
  const [categoryServices, setCategoryServices] = useState(false);
  const [categoryContact, setCategoryContact] = useState(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {

      let loadInterval = setInterval(() => {
        if (document.readyState === 'complete') {
          setLoading(false)
          clearInterval(loadInterval)
          console.log('1')
        }
      }, 500);
      
    }, 2000);
    
  }, [])

  return (
    <div className="wrapper portfolio-sec">
      
          { loading ? (
          <div className='pre-loader'>
            <BarLoader 
              size={100}
              color={"#ffb719"}
              loading={loading}
            />
          </div>
          ) : (<> </>)
          }

        <div className="nav-toggler nav-toggler-portfolio">
          <span></span>
        </div>

        <div className="proj-exit">
            <span></span>
        </div>

        < Nav
        setCategoryHome={setCategoryHome}
        setCategoryServices={setCategoryServices}
        setCategoryContact={setCategoryContact}
        ></Nav>

        { categoryHome ? ( 
          < Home /> 
        ) : ( <></> ) 
        }
        { categoryServices ? ( 
          < Services /> 
        ) : ( <></> ) 
        }
        { categoryContact ? ( 
          < Contact/> 
        ) : ( <></> ) 
        }
    </div>
  );
}

export default App;
