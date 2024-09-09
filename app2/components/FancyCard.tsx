import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Eiffel Tower</Text>
          <Text style={styles.cardLabel}>Paris, France</Text>
          <Text style={styles.cardDescription}>
            The Eiffel Tower is famous tourist location in the city of Paris,
            built with pure aluminiam. It is one of the best location to travel
            to.
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  card: {
    width: 360,
    height: 360,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {color: 'black', fontSize: 14, marginBottom: 6},
  cardDescription: {
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    color: '#242B2E',
  },
  cardFooter: {color: 'black'},
});
