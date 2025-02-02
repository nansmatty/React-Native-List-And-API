import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
}

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Request Interceptor
api.interceptors.request.use(config => {
  console.log('Request Interceptor: ', config);
  return config;
});

// Response Interceptor
api.interceptors.response.use(response => {
  console.log('Response Interceptor: ', response);
  return response;
});

const AxiosScreen = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchListOfPost = async () => {
    try {
      setLoading(true);

      const response = await api.get<Post[]>('/posts');

      if (response) {
        setData(response.data);
        setLoading(false);
      } else {
        setData([]);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchListOfPost();
  }, []);

  const renderItems = ({item}: {item: Post}) => (
    <View style={styles.listView}>
      <Text
        style={[
          styles.sectionTitle,
          {
            fontSize: 14,
            color: '#fff',
            textTransform: 'capitalize',
            paddingHorizontal: 5,
          },
        ]}>
        {item.title}
      </Text>
    </View>
  );

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {fontSize: 18, marginVertical: 20, color: '#111827'},
        ]}>
        Axios Screen
      </Text>
      {loading ? (
        <ActivityIndicator size="small" style={styles.loader} />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItems}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 10,
    height: '100%',
  },
  sectionTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  listView: {
    paddingVertical: 20,
    marginBottom: 10,
    backgroundColor: '#ca8a04',
    borderRadius: 10,
  },

  loader: {
    marginVertical: 20,
  },
});

export default AxiosScreen;
