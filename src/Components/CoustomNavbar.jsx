import React,{useState}from 'react'


function CoustomNavbar() {

  return (
    <div>
          <nav  className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div  className="container-fluid">
    <a  className="navbar-brand" href="#">MyBlogs</a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
        <li  className="nav-item">
          <a  className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="#">Login</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="#">Signup</a>
        </li>
      
        <li  className="nav-item dropdown">
          <a  className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul  className="dropdown-menu">
            <li><a  className="dropdown-item" href="#">Services</a></li>
            <li><a  className="dropdown-item" href="#">Contact</a></li>
            <li><hr  className="dropdown-divider"/></li>
            <li><a  className="dropdown-item" href="#">Youtube</a></li>
          </ul>
        </li>
        <li  className="nav-item">
          <a  className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      {/* <form  className="d-flex" role="search">
        <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button  className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
       <li  className="nav-item">
          <a  className="nav-link disabled" aria-disabled="true">simple text</a>
        </li>
    </div>
  </div>
</nav>
    </div>
  );
}
export default CoustomNavbar