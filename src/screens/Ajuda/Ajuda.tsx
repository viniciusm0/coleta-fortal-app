import { useState } from 'react';
import { Image, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';

export default function Sobre() {
  const [page, setPage] = useState(0);
  const { width, height } = useWindowDimensions();

  const imagens = [
    require('../../../assets/telaprincipal.png'),
    require('../../../assets/campobusca.png'),
    require('../../../assets/campofiltro.jpeg'),
    require('../../../assets/telaconfig.png'),
    require('../../../assets/Faleconosco.png'),
  ];

  return (
    <View style={styles.container}>
      
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const scrollX = e.nativeEvent.contentOffset.x;
          setPage(Math.round(scrollX / width));
        }}
        scrollEventThrottle={16}
        style={{ flexGrow: 0 }}
      >
        {imagens.map((img, index) => (
          <View key={index} style={[styles.page, { width }]}>
            <Image style={styles.img} source={img} />
          </View>
        ))}
      </ScrollView>

    
      <View style={styles.dotsContainer}>
        {imagens.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              { backgroundColor: page === i ? '#fff' : '#555' }
            ]}
          />
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 300,
    height: undefined,
    aspectRatio: 4 / 6,
    borderRadius: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
});