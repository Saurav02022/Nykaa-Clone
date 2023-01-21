import { Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Searchbar from '../Components/Searchbar'
import "../css/Products.css"
import { SingleProd } from './SingleProd'


const Products = () => {
  const [optval, setOptval] = useState('')
  const [query, setQuery] = useState('')
  const [suggest, setSuggest] = useState([])
  const [data, setData] = useState([])
  const [jsdata, setJsdata] = useState([])
  const [change, setChange] = useState(false)
  const [prod, setProd] = useState('face')
  const toast = useToast()

  const getprods = () => {
    setData([])
    return axios.get(`https://fair-pear-salmon-suit.cyclic.app/${prod}/`)
      .then((res) => setData(res.data))
      .then((err) => console.log(err))
  }
  console.log(optval)
  const changeProduct = (e) => {
    if (e.target.value === "skin") {
      setProd("skin")
    } else {
      setProd("face")
    }
  }
  console.log(prod)

  useEffect(() => {
    getprods()
    if (query === "") {
      setSuggest([])
    } else {
      let textQuery = query.trim().toLowerCase()
      let newSuggest = data.filter((el) => {
        if (optval === "_id") {
          return el._id.toLowerCase().indexOf(textQuery) !== -1 ? true : false
        } else {
          return el.title.toLowerCase().indexOf(textQuery) !== -1 ? true : false
        }
      })
        .map((el) => el)
      setSuggest(newSuggest)
    }
  }, [change, query, optval, prod])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://fair-pear-salmon-suit.cyclic.app/${prod}/addjson`, (JSON.parse(jsdata)))

      .then((res) => {
        setChange(!change)
        toast({
          title: 'Product Added.',
          description: "added product to backend.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      })
      .catch((err) => {
        toast({
          title: "error while posting product",
          description: err.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })
  }
  const queryHandler = useCallback((val) => {
    setQuery(val)
  }, [])
  const optionHandler = useCallback((val) => {
    setOptval(val)
  }, [])
  console.log(data)
  console.log(query)

  return (
    <div>
      <Navbar />
      <div className='complete-box'>
        <div className='serachbar-box'>
        <select id="" onChange={changeProduct}>
                  <option value="face">Make up</option>
                  <option value="skin">Skin</option>
                </select>
          <Searchbar queryHandler={queryHandler} optionHandler={optionHandler} suggest={suggest} /></div>
        <div className='admin-products'>
          <div className='adding-product'>
            <div>
              <form onSubmit={handleSubmit}>
                <label >You Have JSON File !!!</label>
                <Textarea className='txt-area'
                  placeholder='You Have JSON File ! Paste or Drop Here !!!'
                  size='sm'
                  h={[50, 100, 200, 300]}
                  name='jsonfile'
                  onChange={(e) => setJsdata((e.target.value))}
                />
                <input className='submit-json-prods' type="submit" />
              </form>
            </div>

          </div>
          <div className='all-products'>
            {
              suggest.length > 0 ?
                suggest.map((el) => {
                  return (<div key={Date.now() + Math.random()}>
                    <SingleProd {...el} />
                  </div>)
                }) :
                data.map((el) => {
                  return (<div key={Date.now() + Math.random()}>
                    <SingleProd {...el} />
                  </div>)
                })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products