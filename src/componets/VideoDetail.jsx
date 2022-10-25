import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { fetchFromApi } from "../utils/fetchFromApi";
import { Videos } from "./index";

const VideoDetail = () => {
 const { id } = useParams();
 
  let a = [];
  fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
  .then((data) => a= data)
 
 const [videoDetail, setVideoDetail] = useState(a);

 useEffect( async() => {
  await fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
  .then((data) =>{ console.log(data);
    setVideoDetail(data.items[0])});
 }, [id]);

  return(
  <Box minHeight="95vh">
   <Stack direction={{sx:'column',md:'row'}}>
    <Box flex={1}>
     <Box sx={{width:'100%'}}>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
      <Typography color="#fff" variant="h5" fontWeight="bold">
      Title
      </Typography>
     </Box>
    </Box>
   </Stack>
  </Box>
  )
};

export default VideoDetail;
