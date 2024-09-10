import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://steve555.hashnode.dev/how-tohttps://cdn.hashnode.com/res/hashnode/image/upload/v1725847167274/74552f0c-3b07-487f-92d9-c63e94ab749a.jpeg?auto=compress,format&format=webp-scale-graphrag-with-neo4j-for-efficient-document-querying  ',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Just like every year, javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite(
                'https://steve555.hashnode.dev/how-to-scale-graphrag-with-neo4j-for-efficient-document-querying',
              );
            }}>
            <Text>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://www.linkedin.com/in/gaurav-swami-b2005627a/');
            }}>
            <Text>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  cardImage: {
    height: 100,
  },
  bodyContainer: {},
  footerContainer: {},
});
