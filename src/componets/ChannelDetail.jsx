import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'

import {Videos, ChannelCard} from './index'
import { fetchFromApi } from '../utils/fetchFromApi'

function ChannelDetail() {
  const {id} = useParams();
  let a= [];
  fetchFromApi(`channels?part="snippet&id=${id}`)
  .then((data)=>a=data?.items[0]);
  const [channelDetail, setChannelDetail] = useState(a)
 
useEffect(()=>{
  fetchFromApi(`channels?part="snippet&id=${id}`)
  .then((data)=>setChannelDetail(data?.items[0]));
},[id])
console.log(channelDetail);

  return (
    <div>{id}</div>
  )
}

export default ChannelDetail