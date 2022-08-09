import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 
 const [nayok , setNayok] = useState([])
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setNayok(data))
}, [])
  // const nayok = [
  //   {name:'josim' , age:34}, {name:'Bapparaj' , age:16}, {name:'dipjol' , age:55},{name:'Alamgil' , age:44}
  // ] 
  const [gender , setGender] = useState([])
  useEffect(()=> {
    fetch('https://randomuser.me/api/?page=4&results=10&seed=abc')
    .then(res => res.json())
    .then(data => setGender(data.results))
  },[])
  const products =[
    {name:'jutha' , prich:'199'},
    {name:'shavan' , prich:'49'},
    {name:'powter' , prich:'55'},
    {name:'shawl' , prich:'59'},
    {name:'mas' , prich:'139'}
  ]
  return (
    <div className="App">
      <DisplayMovies></DisplayMovies>
      <Gender></Gender>
      {
        gender.map( result => <Gender gender={result.gender} kye={result.id} email={result.email} phone={result.phone}></Gender>)
      }
    
      {
          nayok.map(nayok => <Nayok name={nayok.name} age={nayok.age}></Nayok>)
      }

      {
        products.map(pro => <Product name={pro.name} prich={pro.prich}></Product>)
      }

      
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}
function Gender(props){

  const genderStyle = {
    border:'4px solid #c0392b',
    background:'#34495e',
    margin:'20px',
    padding:'20px',
    color:'#ffff'
  }
  return (
    <div style={genderStyle}>
      <h2>Gender: {props.gender}</h2>
      <h3>Email: {props.email}</h3>
      <h4>Phone: {props.phone}</h4>
    </div>
  )
}

function Product(props){
  const [count , setCount] = useState(1)

  const productStyle = {
    border:'4px solid #8e44ad',
    background:'#e67e22',
    margin:'20px',
    padding:'20px',
    color:'#ffff'
  }
  return(
    <div style={productStyle}>
      <h1>Product:{props.name}</h1>
      <h2>prich: {props.prich}</h2>
      <h3>My need: {count} </h3>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={ () => setCount(count - 1)}>decrement</button>
      <div>
        <button>Buy Now</button>
      </div>
    </div>
  )
}


function Nayok(props){
  const styleBorder ={
    border:'2px solid red',
    margin:'20px',
  }
  return (
    <div style={styleBorder}>
      <h1>Ami nayok-{props.name}</h1>
      <h3>I have done 5 moves in {props.age || 31} yeres</h3>
    </div>
  )
}
function DisplayMovies(){
  const [count , setCount] = useState( 9)
  return (
    <div>
      <button onClick={ () => setCount(count + 1)} >click me</button>
      <h3>Numbaer of Movies: {count} </h3>
      <Movies count={count +1}></Movies>
      <Movies count={count +2 }></Movies>
      <Movies count={count + 3}></Movies>
      <Movies count={count}></Movies>
      <Movies count={count}></Movies>
    </div>
  )
}
function Movies(props){
  return <h4>Number of Movies: {props.count}</h4>
}

export default App;
