import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App !</h1>
            <p>putting app.jsx inside main.jsx || it's just an theory overview on vitereact</p>
        </div>
    )
}


//const ReactElement = {
  //  type: 'a',
    //props: {
      //  href: 'http://google.com',
        //target: '_blank'
  //  },
    //children:'Click me to visit google'
// }

const anotherElement = (
    <a href="http://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google.'
)

    
createRoot(document.getElementById('root')).render(

  <App />

)
    
  
  