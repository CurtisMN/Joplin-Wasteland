import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Data = ({ activeTab }) => activeTab === 'data' && (
  <View style={[styles.content, styles.data]}>
    <ScrollView
      style={{padding: 30, zIndex: 1}}
      contentContainerStyle={{paddingBottom: 70}}>
      <Text
        style={{
          ...styles.textHeader,
          ...{fontSize: 30, paddingBottom: 20, alignSelf: 'center'},
        }}>
        Current Game Info
      </Text>
      <Text style={styles.textHeader}>The Bear and the Bull</Text>
      <Text style={styles.text}>
        Joplin Wasteland is proud to present our next event, The Bear and
        The Bull. In our last event we saw the rise and fall of a group of
        crazy cultists that worshiped monsters. With that threat gone the
        town of Wata-Pa could now grow into a hub of trade and power. This
        would draw in the eyes of the expanding NCR and the eyes of a
        weakened Legion. With both scouting groups ready to strike against
        each other for control of the trade routes of the town, what will
        you do? Will you side with Eastern Bear Scouts? Will you join the
        Sons of Caesar? Will you take up the call to become a town guard?
        Or will you try to go your own way? How much does the trade guide
        hire for caravan guards? What jobs are available in town? And just
        what is the Mob planing? Find out in the next game, The Bear and
        the Bull!
      </Text>
      <Text style={styles.text}>
        Tickets Prices- 30$ Game charge fee for two day ticket at gate.
        25$ for one day ticket at gate, if you pay for a one day ticket
        then are able to come out for day two, a day two ticket will be
        10$.
      </Text>
      <Text style={styles.text}>
        {'\n'}
        Time events- September 19-20
        {'\n'}
        Saturday 9am-5pm
        {'\n'}
        Sunday 9am-3pm
        {'\n'}
        Please read the rules as it outlines the
        safely guild lines as this is an airsoft and larp event.
      </Text>
      <Text style={styles.text}>
        In this event all player ammo will be proved at the event, giving
        you the player the choice to buy your ammo in game from any ammo
        vendor.
      </Text>
      <Text style={styles.text}>
        All players start out as wanderers and can choose to join/ quit
        Npc groups as they see fit. The three groups in this game are the
        Town Guards, The Eastern Bear Scouts and The Sons of Caesar. The
        Town Guards are made up of the Wate-Pa Guards, detectives and
        court officials who help keep the peace and enforce the law. Their
        tape color will be bright light blue. The Eastern Bear Scouts are
        made up of NRC scouts, rangers and troopers. Weak on funds they
        plan on taxing the area they control to pay their men. They
        promise a safer and better way of life for the wastelanders of
        Wata-Pa, but something feels off about them. Their tape color will
        be bright green. Lastly is are The Sons of Caesar, made up of
        raider slaves, legionnaires, and followers of the Cult of Mars.
        They plan on claiming the trade routes as their own and are
        hostile anyone that opposes them. These trade routes will be vital
        for their slave trade, but one would ask who is selling them their
        slaves? Their tape color will be bright yellow.
      </Text>
      <Text style={styles.text}>
        When a player joins a said group they will be marked with their
        colors and will now spawn at said group's spawn, until they quit
        that group. Note if a player is apart of a Npc group they can not
        use the Wanderer spawn. Players do not have to join a Npc group
        and may wander about as they wish and will share the wanderer
        spawn with other wanderers.
      </Text>
    </ScrollView>
  </View>
)

export default Data;

const styles = StyleSheet.create({
  data: {
    paddingTop: 100,
  },
  content: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
  },
  textHeader: {
    alignSelf: 'center',
    color: 'rgb(200,200,200)',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  text: {
    paddingVertical: 5,
    color: 'rgb(200,200,200)',
  },
});
