import React, {useState} from 'react';
import './index.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  
  const [categoryHome, setCategoryHome] = useState(true);
  const [categoryServices, setCategoryServices] = useState(false);
  const [categoryContact, setCategoryContact] = useState(true);

  return (
    <div className="wrapper portfolio-sec">
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
