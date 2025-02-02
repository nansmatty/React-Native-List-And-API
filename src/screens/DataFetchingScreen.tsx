import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

interface Post {
  id: number;
  title: string;
}

const DataFetchingScreen = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchListOfPost = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );

      const data: Post[] = await response.json();

      if (data) {
        setData(data);
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
          {fontSize: 14, color: '#fff', textTransform: 'capitalize'},
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
        Data Fetching Screen
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

export default DataFetchingScreen;
