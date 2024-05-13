import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { WebView } from 'react-native-webview';

const Search = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchNews = async () => {
    console.log('Searching news for:', searchText);

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchText)}&apiKey=33fb99b5c52d408798d07e2dceca44e1`
      );
      const result = await response.json();
      console.log('Search result:', result);
      setData(result.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleSearch = () => {
    setIsSearching(true);
    searchNews();
  };

  useEffect(() => {
    if (searchText === '') {
      setIsSearching(false);
      setData([]);
    }
  }, [searchText]);

  const handleNewsItemPress = (item) => {
    navigation.navigate('NewsViewer', { url: item.url });
  };

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleNewsItemPress(item)}>
      <View style={styles.newsItem}>
        <Text style={styles.newsTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {!isSearching && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftIcon color={'white'} size={18} />
          </TouchableOpacity>
        )}
        <Text style={styles.headerText}>Search</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder='Enter your query'
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        {!isSearching && (
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        )}

        {/* FlatList for displaying news */}
        {isSearching && (
          <FlatList
            data={data}
            keyExtractor={(item) => item.url}
            renderItem={renderNewsItem}
          />
        )}
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 150, 150, 0.5)', // Mixture of white and red
  },
  header: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  newsItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
