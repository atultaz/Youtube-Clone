import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import { DataStore } from 'aws-amplify';
import { API, graphqlOperation, Auth } from 'aws-amplify';

import { Video } from '../src/models';

import VideoListItem from '../components/VideoListItem';

const HomeScreen = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    // fetch videos
    const fetchVideos = async () => {
      const response = await DataStore.query(Video);
      console.log(response);
      setVideos(response);
    };
    fetchVideos();
    console.log(videos);
  }, []);

  return (
    <View>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
