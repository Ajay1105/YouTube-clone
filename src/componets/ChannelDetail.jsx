import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./index";
import { fetchFromApi } from "../utils/fetchFromApi";

function ChannelDetail() {

  const { id } = useParams();
  
  // let a = [];
  // fetchFromApi(`channels?part=snippet&id=${id}`).then(
  //   (data) => (a = data?.items[0])
  // );

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  //console.log(channelDetail,videos);

  return (
    <>
      <ChannelCard channelDetail={channelDetail} />
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        {videos.map((item) => (
          <Videos videos={videos} />
        ))}
      </Box>
    </>
  );
}

export default ChannelDetail;
