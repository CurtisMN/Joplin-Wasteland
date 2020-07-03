import React, {Component} from 'react';
import {Expo} from 'expo';
import {
  StyleSheet,
  StatusBar,
  Text,
  Linking,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import PinchZoomView from 'react-native-pinch-zoom-view';
import {Audio} from 'expo-av';
let radio1 = new Audio.Sound((mode = {staysActiveInBackground: true}));
//let radio2 = new Audio.Sound((mode = {staysActiveInBackground: true}));
let time = 0;
let radioLength = 0;

export default class App extends Component {
  state = {
    activeTab: 'rules',
    radioFileLoaded: null,
    radioStartTime: null,
    devMode: false,
  };

  componentWillMount() {
    Audio.setAudioModeAsync({staysActiveInBackground: true});
    this.setState(state => {
      state.radioStartTime = new Date('10/11/2019');
    });
    radio1
      .loadAsync(require('./assets/sounds/radio1.mp3'), {}, false)
      .then(() => {
        this.setState(state => {
          state.radioFileLoaded = true;
          return state;
        });
      })
      .catch(error => {
        console.log(error);
      });
    //radio2
    //  .loadAsync(require('./assets/sounds/radio2.mp3'), {}, false)
    //  .then(() => {
    //    this.setState(state => {
    //      state.radioFileLoaded = true;
    //      return state;
    //    });
    //    console.log('done');
    //  })
    //  .catch(error => {
    //    console.log(error);
    //  });
  }

  render() {
    const NavBar = () => {
      return (
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => this.setState({activeTab: 'rules'})}>
            <View
              style={[
                this.state.activeTab === 'rules' && styles.activeNavMenuItem,
                styles.navMenuItem,
              ]}>
              <Text style={[styles.navText]}>RULES</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({activeTab: 'data'})}>
            <View
              style={[
                this.state.activeTab === 'data' && styles.activeNavMenuItem,
                styles.navMenuItem,
              ]}>
              <Text style={[styles.navText]}>DATA</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({activeTab: 'map'})}>
            <View
              style={[
                this.state.activeTab === 'map' && styles.activeNavMenuItem,
                styles.navMenuItem,
              ]}>
              <Text style={[styles.navText]}>MAP</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({activeTab: 'radio'})}>
            <View
              style={[
                this.state.activeTab === 'radio' && styles.activeNavMenuItem,
                styles.navMenuItem,
              ]}>
              <Text style={[styles.navText]}>RADIO</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    };

    const Rules = () => {
      return (
        <View style={[styles.content, styles.rules]}>
          <ScrollView
            contentContainerStyle={{paddingBottom: 80}}
            style={{padding: 30}}>
            <Text
              style={{
                ...styles.textHeader,
                ...{fontSize: 30, paddingBottom: 20, alignSelf: 'center'},
              }}>
              Wasteland Event
            </Text>
            <Text style={styles.textHeader}>BASICS</Text>
            <Text style={styles.text}>Reloading</Text>
            <Text style={styles.text}>
              The only two ways to find ammo in the “wasteland” or to buy ammo
              from the NPCs. Prices may be different for each vendor and the
              weight they sell for Nuka Caps.
            </Text>
            <Text style={styles.text}>In Game Currency</Text>
            <Text style={styles.text}>
              The Currency used in this game are marked “Nuka Caps.” You can
              earn these caps by performing roles, quests, jobs, looting other
              players/ NPC’s, selling items, and/or looting loot boxes. Red caps
              are worth one, blue are worth five and yellow are worth ten.
              Before the game begins you, the player, will be given ten caps to
              start off with.{' '}
            </Text>
            <Text style={styles.text}>Grenade Count</Text>
            <Text style={styles.text}>
              Players are allowed to begin the game with a limited number of
              grenade-type weapons. The number of “grenade points” is six. Mini
              nukes count as two points, elemental smoke/frag grenades of any
              kind count as one. White smoke grenades do not count towards this
              number, and are deemed personal items.{' '}
            </Text>
            <Text style={styles.text}>Friendly fire counts</Text>
            <Text style={styles.text}>
              If you get hit by a friendly faction or team member you will still
              fall under the effects of whatever was used to hit you.
            </Text>
            <Text style={styles.text}>Field items</Text>
            <Text style={styles.text}>
              Field items will be marked by orange tape, you may use these items
              in game and loot these items off of "bleeding out people.”
            </Text>
            <Text style={styles.text}>Purple taped items</Text>
            <Text style={styles.text}>
              These are not to be touched or messed with, as they may be
              personal player or NPC items. You can not use them, take them, or
              move them.
            </Text>
            <Text style={styles.textHeader}>COMBAT</Text>
            <Text style={styles.text}>Airsoft</Text>
            <Text style={styles.text}>
              When shot, you then have a two minute bleed out. You must use the
              full two minute bleed out before you go back to spawn, though
              anyone can be revived by anyone else with a stimpak during this
              bleed out time.
            </Text>
            <Text style={styles.text}>Melee</Text>
            <Text style={styles.text}>
              If you melee someone, that is an instant kill and that player has
              no bleed out and must go to their respawn point, but before they
              leave you may loot the player. You may melee someone that is
              “bleeding out.” To melee, tap or lightly swipe your melee weapon
              on to your target and say “melee.” You may use a two hand touch to
              melee your victims, again say “melee” when doing so.
            </Text>
            <Text style={styles.text}>Energy (Foam Dart guns)</Text>
            <Text style={styles.text}>
              Energy weapons are designated by Nerf darts or foam balls. Laser
              gun rounds go through armor and kill power armor users. When hit
              by a laser weapon, you will start to “bleed out”. Laser ammo can
              only be bought at a trader or found in loot. This will look like a
              ready to use mag with darts in it. You MAY NOT unload/load a nerf
              magazine no matter where you got it. Only traders and refs are
              authorized to do this. Players are not allowed to pick up used
              darts after they have been fired, unless authorized to do so by an
              NPC or ref.
            </Text>
            <Text style={styles.text}>Explosives</Text>
            <Text style={styles.text}>
              Frag Grenades (Enola Gaye, launched grenades, sound grenades and
              tornado/twister grenades) There is a 20ft kill zone from the
              grenade (20ft radius) . Frag grenades stun power armor users for
              30 seconds.
            </Text>
            <Text style={styles.text}>
              Mini Nukes, Mortar Artillery and Howitzer Artillery (rocket
              launcher)- Mini nuke launchers/ rocket launchers and mortar/
              howitzer artillery rounds have the same type of killzone, which is
              30ft from the fired round (30 ft radius) and cause players to
              “bleed out.” If caught 5ft within fired round, players are
              instantly dead and must go back to spawn and cannot be looted.
              Approval is required for these rounds to follow standard. Mini
              nukes are miniature nuclear bombs and must be of an approved
              design. Artillery and artillery/howitzer rounds are simply mini
              Nerf vortex howlers. These must be the ones with whistles to
              count.
            </Text>
            <Text style={styles.text}>Smoke Grenades</Text>
            <Text style={styles.text}>
              Certain smoke grenades fill a role at this event and are listed
              below, if you do not see a color listed it is just a regular smoke
              grenade and only serves as cover. There is a 10ft zone of affect
              from each grenade (10ft radius) and the smoke itself counts as an
              area of affect. Gas Grenades (Yellow)
            </Text>
            <Text style={styles.text}>
              Gas grenades are designated by yellow smoke, players wearing a
              proper gas apparatus are immune to gas. Proper gas apparatus will
              be designated as a real gas mask, respirator, or full face eye
              protection with attached hoses and tanks. PA users are immune to
              gas. Any unprotected player caught in this area of effect is now
              bleeding out. Fire Grenades (Red)
            </Text>
            <Text style={styles.text}>
              Fire grenades are designated by red smoke. PA users are immune to
              the effects of fire. Any unprotected player caught in this area of
              effect is now bleeding out. Radiation Grenades (Green)
            </Text>
            <Text style={styles.text}>
              Radiation grenades are designated by green smoke. When affected
              the victim may use a “rad-away stick” immediately and leave the
              area, otherwise they are now bleeding out. PA users are immune to
              radiation. Any unprotected player caught in this area of effect is
              now bleeding out. EMP grenades (Blue)
            </Text>
            <Text style={styles.text}>
              Stun PA users for the duration that smoke is billowing from the
              grenade and is surrounded by thick smoke. (Power armor users are
              trained to know how long this is)
            </Text>
            <Text style={styles.text}>Traps</Text>
            <Text style={styles.text}>
              Most traps work like a melee attack, if you get hit by a bb or you
              are within 5ft of the trap you are dead, no bleed out, go back to
              spawn. Some traps may be rigged with grenades. For these, follow
              any guidelines for the type of grenade released. Some traps may
              shoot guns, these will act just as a normal gun but without a
              user. For safety and game play do not physically move or mess with
              the trap. Even if you see the trap before it goes off do not move
              or mess with it by hand, however, shooting or throwing items at
              traps is legal. Traps go through armor, shields and power armor
              users are stunned for 30 seconds after being hit by a trap with
              the only exemption being grenade and gun traps.
            </Text>
            <Text style={styles.textHeader}>Armor</Text>
            <Text style={styles.text}>Ballistic Armor (bb proof)</Text>
            <Text style={styles.text}>
              Metal, tires, hard plastics, hardened leather, or EVA foam may be
              used to make armor. If you are hit in an armor piece by an airsoft
              round you are still in, but MUST yell out “armor hit.”
            </Text>
            <Text style={styles.text}>Power Armor (Juggernaut)</Text>
            <Text style={styles.text}>
              Power armor must be approved by admins. Contact admins if you want
              to be eligible for power armor. Power armor can only be “killed”
              by laser weapons, mini nukes, mortar and howitzer artillery-fired
              shells. One shot from a laser weapon kills a power armor user. If
              the Power armor user is within the “instant kill zone” (5ft of a
              mini nuke, mortar or howitzer fired shell) they are dead. If the
              power armor user is within the “bleeding out” zone the user is
              stunned for 30 seconds. Power armor users are fitted with a “stun
              plate” shooting them here with an airsoft gun will stun them for
              10 seconds. When a power armor user is stunned, they can be killed
              with an explosive weapon. Power Armor users can also be killed by
              removing their core from their back. This will look like a yellow
              and red rag hanging from their backside. Power Armor users can not
              pick the agility or the endurance perk as their perk.
            </Text>
            <Text style={styles.text}>Shields</Text>
            <Text style={styles.text}>
              Shields may be made of metal, plastic, kevlar, or wood . A few
              examples could be; a stop sign, riot shield, tower shield, etc.
              Shields stop melee attacks, airsoft rounds and laser rounds. For
              safety reasons there is no shield bashing. All Shields must be
              approved before they can be used.
            </Text>
            <Text style={styles.textHeader}>Medical (Healing) and Looting</Text>
            <Text style={styles.text}>Bleed out</Text>
            <Text style={styles.text}>
              After the two minute bleed out you are dead. If you get looted
              once, then you go back to your spawn, even if your two minutes are
              not up. You cannot be looted on your way back to spawn after bleed
              out even if you were not looted before. From there you wait 1
              minute to spawn back in. Stimpaks
            </Text>
            <Text style={styles.text}>
              To use, rip the paper off the stimpak, then push the stimpak on to
              the “bleeding” player. After that you or the player that as been
              simpaked MUST yell out SIMPAK! The player is then back in the
              game. You can not move or shoot when “bleeding out”, unless
              someone moves you or you have the Endurance Perk. If the simpak
              has exposed plastic or the wrapper is incomplete it can not be
              used. Looting
            </Text>
            <Text style={styles.text}>
              You may loot people, that are "bleeding out." You may only take
              two items of the following, off of the person: up to four Nuka
              Caps, one field gun, one magazine, one piece of field armor, one
              field shield or one field melee weapon. Carrying Bodies
            </Text>
            <Text style={styles.text}>
              You may use a two hand drag if your buddy is down. This means that
              if you put both your hands on your buddy he may get up and WALK to
              a new destination.
            </Text>
            <Text style={styles.textHeader}>Quests</Text>
            <Text style={styles.text}>
              Quest items will be marked with pink tape and will have the quest
              title on it. You may not move quest item unless you are on that
              quest to get that quest item. If you are to bleed out and die and
              you have a quest item, you must drop that quest item where you
              died. Once you respawn back in you may go back to get the quest
              item. NPC’s that originally had said quest item may take the quest
              item back. Note, a player may only have one side quest at a time.
              If you wish to give up on a side quest, go back to the NPC that
              hired you to do the quest and ask them to cancel the side quest.
            </Text>
            <Text style={styles.textHeader}>Chems</Text>
            <Text style={styles.text}>Jet</Text>
            <Text style={styles.text}>
              Jet works as a one time use item. To use Jet, hold the item above
              your head, pull the orange tape and yell, Jet! You then have ten
              seconds of invulnerability, in which each second counts as one
              step. In this time frame you can not use any weapons. Also you are
              to have the Jet held above your head, must be shouting out your
              ten second countdown and must be using your “steps.” You can buy
              and refill Jet from the chem dealer in the game. You may bring out
              your own Jet prop pieces, but you will have to “refill” your jet
              first before using it.
            </Text>
            <Text style={styles.text}>Mentats</Text>
            <Text style={styles.text}>
              Mentats work as a one time charisma buff. To use Mentats you open
              the container, and either eat or give the candy piece to the npc
              you are dealing with. Mentats can only be found in game and are
              sold by the chem dealer. They give a plus one boost your charisma
              level. Note charisma can only be at these levels: Minus One, Zero,
              and Plus One. Mentats have no effect on Super Mutants.
            </Text>
            <Text style={styles.textHeader}>Perks</Text>
            <Text style={styles.text}>
              Every player gets one Starting Perk, SP for short, these SP’s are:
              strength, perception, endurance, charisma, intelligence, agility
              and luck. Your starting perk will be labeled by your arm band that
              you get after you pay.
            </Text>
            <Text style={styles.text}>Strength</Text>
            <Text style={styles.text}>
              Gives you the ability to “pick up” a player but with more options.
              When touching the player, you may use one hand, and you can run
              with your “bleeding out” buddy to a safer area. Note, your buddy
              is still “bleeding out” when moving him. You also may use one hand
              to melee someone, but you must still say “melee.”
            </Text>
            <Text style={styles.text}>Perception</Text>
            <Text style={styles.text}>
              Gives you a map of possible trap areas, possible loot spots.
              Players with this perception can be trained to use in-game mortar
              artillery and howitzer artillery. Note: only players with this
              perk and training to use the artillery, can use or move the
              artillery cannons.
            </Text>
            <Text style={styles.text}>Endurance</Text>
            <Text style={styles.text}>
              Gives you the ability to crawl when ‘Bleeding out,” you must still
              have your dead rag out though.
            </Text>
            <Text style={styles.text}>Charisma</Text>
            <Text style={styles.text}>
              Unlocks better prices, more quests, or special items with NPCs or
              Faction leaders. Can be used to get special treatment or dialogue
              with NPCs and sometimes even beasts can be swayed by your charm.
            </Text>
            <Text style={styles.text}>Intelligence</Text>
            <Text style={styles.text}>
              Unlocks different quests, specials items, and gives out
              intelligence codes for non-quest combo lock boxes.
            </Text>
            <Text style={styles.text}>Agility</Text>
            <Text style={styles.text}>
              Allows you to leave the area of effect of all smoke based attacks.
              Once the smoke lands and you are in the area of effect, which is
              10ft or wherever the smoke moves, you can leave the area without
              being affected by that colored smoke, though you must leave that
              area immediately and must yell out AGILITY! Note: you can not
              enter into that area of effect of the colored smoke or you will
              then be under the effect of that color of smoke
            </Text>
            <Text style={styles.text}>Luck</Text>
            <Text style={styles.text}>
              Gives you ability to potentially get out of trouble with NPCs or
              Faction Leaders, if you are to upset them for one roleplay reason
              or another, but usually only once a day per NPC. You also get one
              dice reroll per session of any NPC gambling game, note you have to
              be playing at an NPC location that has a gambling game for this
              part of the perk to work. NPC’s choose the cool down time after
              you use this part of the Luck perk.
            </Text>
          </ScrollView>
        </View>
      );
    };

    const Data = () => {
      return (
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
      );
    };

    const Map = () => {
      return (
        <View style={[styles.content, styles.map]}>
          <PinchZoomView
            style={{
              flex: 0,
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={styles.mapImage}
              source={require('./src/assets/map.jpg')}></Image>
          </PinchZoomView>
        </View>
      );
    };

    formatMilliseconds = ms => {
      let milliseconds = parseInt(ms % 1000);
      let seconds = parseInt((ms / 1000) % 60);
      let minutes = parseInt((ms / (1000 * 60)) % 60);
      let hours = parseInt((ms / (1000 * 60 * 60)) % 24);

      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      milliseconds = milliseconds < 100 ? '0' + milliseconds : milliseconds;
      milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds;

      return hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
    };

    const Radio = () => {
      return (
        <View style={[styles.content, styles.radio]}>
          <View
            style={{
              width: '100%',
              paddingTop: 30,
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'rgb(117, 250, 76)', fontSize: 30}}>
              Stations
            </Text>
          </View>
          {this.state.radioFileLoaded && (
            <TouchableOpacity
              onPress={() => {
                if (this.state.activeStation !== 'jar1') {
                  var diff = new Date().getTime();

                  // console.log(`\nHH:MM:SS:MlS`)
                  // console.log(formatMilliseconds(diff))

                  radio1.setIsLoopingAsync(true);
                  radio1.getStatusAsync().then(function(result) {
                    let len = result.durationMillis;
                    radioLength = result.durationMillis;
                    time = formatMilliseconds(diff % len);
                    console.log(diff % len);
                    console.log(formatMilliseconds(diff % len));
                    radio1.playFromPositionAsync(diff % len);
                  });
                } else {
                  radio1.stopAsync();
                }

                this.setState(state => {
                  state.activeStation === 'jar1'
                    ? (state.activeStation = '')
                    : (state.activeStation = 'jar1');
                  return state;
                });
              }}>
              <Text
                style={[
                  styles.radioStationText,
                  this.state.activeStation === 'jar1' &&
                    styles.radioStationTextActive,
                ]}>Joplin Atomic Radio - FM</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://drive.google.com/file/d/18N5mt-UG0r-9vybiVJ_mlu5rCUG1h_tt/vie://drive.google.com/file/d/1Gx63VFtjXlBBCeSDaah4O9CJ_u0S0oel/view',
              );
            }}>
            <Text style={[styles.radioStationText]}>
              Joplin Atomic Radio [DOWNLOAD]
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: '100%',
              paddingTop: 30,
              borderBottomWidth: 1,
              borderBottomColor: 'rgb(117, 250, 76)',
            }}
          />
          <View style={{width: '100%', paddingTop: 30, paddingLeft: 15}}>
            <Text style={styles.radioStationTextOutOfRangeLabel}>
              OUT OF RANGE
            </Text>
          </View>
          {!this.state.radioFileLoaded && (
            <Text
              style={[
                styles.radioStationText,
                styles.radioStationTextOutOfRange,
              ]}>
              Joplin Atomic Radio FM - ACQUIRING SIGNAL
            </Text>
          )}
          <Text
            style={[
              styles.radioStationText,
              styles.radioStationTextOutOfRange,
            ]}>
            NOAA Weather
          </Text>
          <Text
            style={[
              styles.radioStationText,
              styles.radioStationTextOutOfRange,
            ]}>
            Kansas City Now
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            onLongPress={() => {
              this.state.devMode
                ? alert('Dev mode deactivated')
                : alert('Dev mode activated');
              this.setState(state => {
                state.devMode = !state.devMode;
                return state;
              });
            }}>
            <Text
              style={[
                styles.radioStationText,
                styles.radioStationTextOutOfRange,
              ]}>
              Branson Classics
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.radioStationText,
              styles.radioStationTextOutOfRange,
            ]}>
            Webb City Tunes
          </Text>
          {this.state.devMode && (
            <Text
              style={[
                styles.radioStationText,
                styles.radioStationTextOutOfRange,
              ]}>
              {'radioFileLoaded: ' +
                this.state.radioFileLoaded +
                '\n' +
                'radioStartTime: ' +
                this.state.radioStartTime +
                '\n' +
                'currentFileTime: ' +
                time +
                '\n' +
                'radioLength: ' +
                radioLength}
            </Text>
          )}
        </View>
      );
    };

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <NavBar />
        {this.state.activeTab === 'rules' && <Rules />}
        {this.state.activeTab === 'data' && <Data />}
        {this.state.activeTab === 'map' && <Map />}
        {this.state.activeTab === 'radio' && <Radio />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(36,43,36)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rules: {
    paddingTop: 100,
  },
  data: {
    paddingTop: 100,
  },
  radio: {
    paddingTop: 100,
  },
  map: {
    width: 2100,
    paddingTop: 100,
  },
  mapImage: {
    zIndex: 1,
    marginTop: 0,
  },
  content: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-evenly',
    zIndex: 10,
    height: 100,
    backgroundColor: 'rgb(36,43,36)',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(117, 250, 76)',
  },
  textHeader: {
    alignSelf: 'center',
    color: 'rgb(200,200,200)',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  radioStationText: {
    color: 'rgb(117, 250, 76)',
    marginTop: 15,
    paddingLeft: 15,
    marginRight: 30,
    padding: 3,
  },
  radioStationTextActive: {
    color: 'rgb(36,43,36)',
    backgroundColor: 'rgb(117, 250, 76)',
  },
  radioStationTextOutOfRangeLabel: {
    fontSize: 20,
    color: 'gray',
  },
  radioStationTextOutOfRange: {
    color: 'gray',
  },
  text: {
    paddingVertical: 5,
    color: 'rgb(200,200,200)',
  },
  navText: {
    paddingRight: 15,
    paddingLeft: 15,
    color: 'rgb(117, 250, 76)',
    fontWeight: '600',
    fontSize: 18,
  },
  navMenuItem: {
    marginTop: 75,
    height: 25,
    // position: 'absolute',
    // bottom: -1,
  },
  activeNavMenuItem: {
    borderColor: 'rgb(117, 250, 76)',
    borderWidth: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(36,43,36)',
    borderRadius: 2,
  },
});
