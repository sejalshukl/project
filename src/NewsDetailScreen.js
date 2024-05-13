import React from 'react';
import { View, Text } from 'react-native';

const NewsDetailScreen = ({ route }) => {
  const { newsItem } = route.params;

  return (
    <View>
      <Text>Title: {newsItem.title}</Text>
      <Text>Description: {newsItem.description}</Text>
      {/* Add other details as needed */}
    </View>
  );
};

export default NewsDetailScreen;
