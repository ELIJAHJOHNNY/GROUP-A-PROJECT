import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
// import { Input, Space } from 'antd';
// import 'antd/dist/antd.css'; THIS WILL AFFECT ALL COMPONENTS
import 'antd/es/input/style/index.css';
import requests from '../Requests';
import axios from 'axios';

const Search = () => {
  const { Search } = Input;
     axios.get(requests.requestPopular)
      .then((res) =>{
        const movieResult = res.data.results
        // console.log(movieResult)
        // setNames(res.data.results)
        // setNames(movieResult)
      })
      const [names, setNames] = useState([]);
      


    const onSearch = (value) => {
     setNames(
      
     )
    };




   

  return (
    <div className='ml-5'>
         <Search placeholder="search" allowClear onChange={(e) => onSearch(e.target.value)} style={{width: 200}} />
          {/* onSearch={onSearch}  */}
 
       <ol>
            {
                names.map((name) => <li>{name.title}</li>)
            }
       </ol>
    </div>
  )
}

export default Search