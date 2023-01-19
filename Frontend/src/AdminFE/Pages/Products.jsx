import { Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Searchbar from '../Components/Searchbar'
import "../css/Products.css"
import { SingleProd } from './SingleProd'


const Products = () => {
  const [optval,setOptval] =useState('')
  const [query,setQuery] = useState('')
  const [suggest,setSuggest] = useState([])
  const [data, setData] = useState([])
  const [jsdata,setJsdata] = useState([])
  const [change,setChange] = useState(false)
  const toast = useToast()

  const getprods = () => {
    return axios.get(`http://localhost:5000/face/`)
      .then((res) => setData(res.data))
      .then((err) => console.log(err))
  }
console.log(optval)
  useEffect(() => {
    getprods()
    if(query===""){
      setSuggest([])
    }else{
      let textQuery = query.trim().toLowerCase()
     let newSuggest = data.filter((el)=>{
        if(optval==="_id"){
          return el._id.toLowerCase().indexOf(textQuery)!==-1?true:false
        }else{
          return el.title.toLowerCase().indexOf(textQuery)!==-1?true:false
        }
      })
      .map((el)=>el)
      setSuggest(newSuggest)
    }
  }, [change,query,optval])
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/face/addjson',(JSON.parse(jsdata)))
    .then((res)=>{
      setChange(!change)
      toast({
        title: 'Product Added.',
        description: "added product to backend.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    })
    .catch((err)=>{
      toast({
        title: "error while posting product",
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    })
  }
  const queryHandler=useCallback((val)=>{
    setQuery(val)
  },[])
  const optionHandler=useCallback((val)=>{
    setOptval(val)
  },[])
  console.log(data)
  console.log(query)

  return (
    <div>
      <Navbar />
      <h2>Query</h2>
      <Searchbar queryHandler={queryHandler} optionHandler={optionHandler} suggest={suggest}/>  
      <div className='admin-products'>
      <div className='adding-product'>
        <div>
          <form onSubmit={handleSubmit}>
          <label >You Have JSON File !!!</label>
          <Textarea
            placeholder='You Have JSON File ! Paste or Drop Here !!!'
            size='sm'
            name='jsonfile'
            onChange={(e)=>setJsdata((e.target.value))}
            />
          <input type="submit" />
            </form>
        </div>

      </div>
      <div className='all-products'>
        {
          suggest.length>0 ?
          suggest.map((el) => {
            return (<div key={Date.now() + Math.random()}>
              <SingleProd {...el} />
            </div>)
          }):
          data.map((el) => {
            return (<div key={Date.now() + Math.random()}>
              <SingleProd {...el} />
            </div>)
          })
        }
      </div>

    </div>
    </div>
  )
}

export default Products