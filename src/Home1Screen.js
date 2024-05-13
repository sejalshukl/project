
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import Header from './components/Header';
import Card1 from './components/Card1';
import { FontAwesome5 } from '@expo/vector-icons';
import { useDarkMode } from './components/DarkMode'; // Import useDarkMode hook

const Home1Screen = ({ navigation }) => {
  const { isDarkMode } = useDarkMode(); // Access dark mode state
  console.log('Dark Mode:', isDarkMode);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(0);
  // const apiKey = '33fb99b5c52d408798d07e2dceca44e1';
  const apiKey = '6f449b907ee54a008f069bc3b4d8ac0b';

  const categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
    'latest news',
    'top headlines',
  ];

  const getCategoryApiEndpoint = (category) => {
    const baseEndpoint = 'https://newsapi.org/v2/top-headlines?country=in';

    switch (category.toLowerCase()) {
      case 'latest news':
        return `${baseEndpoint}&apiKey=${apiKey}`;
      default:
        return `${baseEndpoint}&category=${category.toLowerCase()}&apiKey=${apiKey}`;
    }
  };

  const getData = async (category) => {
    setLoading(true);
    try {
      if (!apiKey) {
        console.error('API key not provided.');
        return;
      }

      const response = await fetch(getCategoryApiEndpoint(category));

      if (!response.ok) {
        console.error('Error fetching data:', response.status, response.statusText);
        return;
      }

      const responseData = await response.json();
      setData(responseData.articles);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getData2 = async () => {
    setLoading(true);
    try {
      if (!apiKey) {
        console.error('API key not provided.');
        return;
      }

      const response = await fetch(getCategoryApiEndpoint('latest news'));

      if (!response.ok) {
        console.error('Error fetching data:', response.status, response.statusText);
        return;
      }

      const responseData = await response.json();
      setData(responseData.articles);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(categories[selectedCategory]);
  }, [selectedCategory]);

  useEffect(() => {
    getData2();
  }, []);

  const handleReadMore = (url) => {
    navigation.navigate('NewsViewer', { url });
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Header navigation={navigation} />
      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === index && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(index)}
            >
              <Text style={[styles.categoryButtonText, isDarkMode && styles.darkCategoryButtonText]}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <View style={styles.cardContainer}>
                <Card1 item={item} />
                <TouchableOpacity style={styles.readMoreButton} onPress={() => handleReadMore(item.url)}>
                  <Text style={[styles.readMoreText, { color: 'white' }]}>Read More</Text>
                  <FontAwesome5 name="arrow-right" size={16} color="white" style={{ marginLeft: 5 }}/>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            refreshing={false}
            onRefresh={() => getData(categories[selectedCategory])}
            numColumns={1}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: '#121212', // Dark mode background color
  },
  categoryContainer: {
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'red',
  },
  selectedCategory: {
    backgroundColor: '#B62020',
  },
  categoryButtonText: {
    color: 'white',
  },
  darkCategoryButtonText: {
    color: 'lightgrey', // Dark mode text color
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    marginBottom: 10,
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 5,
    borderColor: 'red',
    backgroundColor:'red',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  readMoreText: {
    fontSize: 16,
  },
});

export default Home1Screen;
