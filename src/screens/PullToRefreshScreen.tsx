import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

const INITIAL_DATA = Array.from({length: 20}, (_, index) => ({
  id: index.toString(),
  title: `Item ${index + 1}`,
}));

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
  const [loading, setLoading] = useState(false);

  const renderItem = ({item}: {item: {id: string; title: string}}) => (
    <View style={styles.listView}>
      <Text style={[styles.sectionTitle, {fontSize: 14, color: '#fff'}]}>
        {item.title}
      </Text>
    </View>
  );

  const loadMoreItems = () => {
    if (!loading) {
      setLoading(prev => !prev);
      setTimeout(() => {
        const newItems = Array.from({length: 10}, (_, index) => ({
          id: (data.length + index).toString(),
          title: `Item ${data.length + index + 1}`,
        }));

        setData([...data, ...newItems]);
        setLoading(prev => !prev);
      }, 1000);
    }
  };

  const handleRefreshMethod = () => {
    setRefreshing(prev => !prev);
    setTimeout(() => {
      setData(INITIAL_DATA);
      setRefreshing(prev => !prev);
    }, 2000);
  };

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {fontSize: 18, marginVertical: 20, color: '#111827'},
        ]}>
        Pull To Refresh & Infinite Scrolling
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefreshMethod}
          />
        }
        ListFooterComponent={
          loading ? (
            <ActivityIndicator size="small" style={styles.loader} />
          ) : null
        }
      />
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

export default PullToRefreshScreen;
