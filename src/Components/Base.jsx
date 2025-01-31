import React from 'react'
import CoustomNavbar from './CoustomNavbar'

function Base({title = "Welcome to our website", children}) {
  
  return (

    <div className='container-fluid p-0 m-0'>
        <CoustomNavbar/>
        {children}


        <h1 className="container">THIS IS FOOTER</h1>


    </div>
  )

}

export default Base