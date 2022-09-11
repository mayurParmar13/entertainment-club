import React, { useEffect, useState } from 'react'
import CardComponent from '../CardComponent/CardComponent'
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';

import Nodata from '../command/Nodata'
import "./Trending.css";
export interface Idata {
  albumId:number;
  id:number;
  title:string;
  url:string;
  thumbnailUrl:string;
}
const Trending = () => {
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState<Idata[]>([])
  const [mainData,setMainData] = useState<Idata[]>([])
  const [printData,setPrintData] = useState<Idata[]>([])
  const [pagination,setPagination] = useState({
    page:1,
    limit:10
  })
  const getData = () => {
    setLoading(true)
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((json:any[]) => {
    setMainData(json)
    setPrintData(json)
    setLoading(false)
    setData(json.splice((pagination.page *10 -10 ),pagination.limit ))
    })
  }
  useEffect(() => {
    getData()
  },[pagination.page])
  const handlePage = (e:any, page:number) =>{
    setPagination({...pagination, page:page})
  }
  return (
    <div>
      <span className='pageTitle'>Trading Page</span>
      <div className='cardMain' >
      {
        data?.length > 0 ? loading ?<CircularProgress size={20}/> :  data?.map((item) => (
          <CardComponent key={item.id} data={item}/> 
          ))
          : <Nodata/>
        }
        </div>
        <Pagination count={10} color="primary" page={pagination.page} onChange={handlePage}/>
    </div>
  )
}

export default Trending