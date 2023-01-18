import React, { useState } from 'react';

import {data} from './component/SampleData'
import './App.css';
import { Navbar } from 'reactstrap';

function App() {

  const data1 = data;
 
  return (
    <div>
    
    <div className="App">
      
    
      <div className='container' style={{ flexDirection: 'row'}}> 
      <div>
        <ul>
          {data1.map((i) =>( 
            <div> 
             
              <div class="container">
            <div class="card">

                <div class="slide slide1">

                    <div class="content">

                        <div class="icon">

                            

                        </div>

                    </div>

                </div>

                <div class="slide slide2">

                    <div class="content">

                        <h3>

                            {i.Product_name}

                        </h3>

                        <p>{i.Product_details}</p>

                    </div>

                </div>
              
                
            </div>
            </div>
            
          
              </div>
           
          ))}
        </ul>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;