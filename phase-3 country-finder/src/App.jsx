import React from 'react'
import { useState,useEffect } from 'react'
import CountryList from './Components/CountryList';
import SearchBar from './Components/SearchBar';

function App() {
let [data,setCountryData]=useState([]);
 let[errors,setErrors]=useState(null);
    let[loading,setLoading]=useState(false)
    useEffect(()=>{
        async function getData(){
            try{
            let res=await fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags");
            if(!res.ok){
                throw new Error("failed to fetch");//we are using throw instead of directly seterror fun because if we use fun the code continues to execute the next line meaning our aim is to stop execution if datta is not fetched and this throw will stop nextline from executing by givig control directly to catch block
            }
            let userData=await res.json()//line executes only if,if block fails to execute
            setCountryData(userData)//storing data
        }
            catch(err){
                setErrors(err.message)
            }
        }getData();
    },[])
    
        const onSearch=async(input)=>{
            try{
            let res=await fetch(`https://restcountries.com/v3.1/name/${input}`);
            if(res.status!=200){
                throw new Error("failed to fetch");//we are using throw instead of directly seterror fun because if we use fun the code continues to execute the next line meaning our aim is to stop execution if datta is not fetched and this throw will stop nextline from executing by givig control directly to catch block
            }
            let result=await res.json()//line executes only if,if block fails to execute
            setCountryData(result)//storing data
        }
            catch(err){
                setErrors(err.message)
            }
        }
    

  return (
    <div className='flex'>
      <CountryList countries={data}/>
      <SearchBar onSearch={onSearch}/>
    </div>
  )
}

export default App