import React, { Component } from 'react';
import { Expo } from 'expo'
import { StyleSheet, StatusBar, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import PinchZoomView from 'react-native-pinch-zoom-view';
import { Audio } from 'expo-av'
let soundObject = new Audio.Sound(mode={staysActiveInBackground: true})
let time = 0
let radioLength = 0

export default class App extends Component {
  state = {
    activeTab: 'rules',
    radioFileLoaded: null,
    radioStartTime: null,
    devMode: false,
  }

  componentWillMount() {
    Audio.setAudioModeAsync({ staysActiveInBackground: true })
    this.setState(state => {
      state.radioStartTime = new Date('01/01/2019')
    })
    soundObject.loadAsync(require('./src/assets/sounds/radio.mp3'), {}, false).then(() => {
      this.setState(state => {
        state.radioFileLoaded = true
        return state
      })
      console.log('done')
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    const NavBar = () => {
      return (
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => this.setState({ activeTab: 'rules' })}>
            <View style={[this.state.activeTab === 'rules' && styles.activeNavMenuItem, styles.navMenuItem]}>
              <Text style={[styles.navText]}>
                RULES
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ activeTab: 'data' })}>
            <View style={[this.state.activeTab === 'data' && styles.activeNavMenuItem, styles.navMenuItem]}>
              <Text style={[styles.navText]}>DATA</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ activeTab: 'map' })}>
            <View style={[this.state.activeTab === 'map' && styles.activeNavMenuItem, styles.navMenuItem]}>
              <Text style={[styles.navText]}>MAP</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ activeTab: 'radio' })}>
            <View style={[this.state.activeTab === 'radio' && styles.activeNavMenuItem, styles.navMenuItem]}>
              <Text style={[styles.navText]}>RADIO</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }

    const Rules = () => {
      return (
        <View style={[styles.content, styles.rules]}>
          <ScrollView style={{ padding: 30 }}>
            <Text style={{ ...styles.textHeader, ...{ fontSize: 30, paddingBottom: 20, alignSelf: 'center' } }}>
              Wasteland Event
            </Text>
            <Text style={styles.textHeader}>
              Game safety rules
            </Text>
            <Text style={styles.text}>
              {`Safety/ Surrender Kills - Surrender kills are when you are within about 20ft or closer of your opponent. You may yell out surrender, if your opponent doesn’t surrender you may shoot them.\n\nEngagement Non Fps Rules - No blind fire and no physical fighting, other then with boffer weapons. Ricochet bb’s do not count and gun hits do not count as being hit. At all times you must keep your safety eye pro on. If you are in a safe area you must have your mag out, gun cleared, and on safe. You may have your eye pro off in a safe area.\n\nEngagement Fps Rules- All guns will be measured using .20G BB’s \n\n400Fps and under, no minimum engagement distance. You may use a burst mode up to 3 BB’s per trigger pull or use full-auto up to a 2 second trigger pull burst, semi only indoors.\n\nIf you are using a MG you may have a 3 second trigger pull burst and you must a sidearm that shoots under 400Fps and that can use semi fire to use indoors. MG that shoot under 400Fps- 30ft minimum engagement distance. MG that shoot 401 to 450 Fps 60ft minimum engagement distance.\n\n401-450Fps  Bolt and or semi only. Minimum engagement distance 60ft and you must have a sidearm that shoots under 400Fps and that can use Semi fire to use indoors.\n\n451-500Fps Bolt only.  Minimum engagement distance 90ft. You must have a sidearm that shoots under 400Fps and that can use semi fire to use indoors. \n\nEye Pro - Full seal eye pro is a must. If under the age of 18, then have full face protection. Keep eye pro on at all times, unless you are in a safety area. `}
            </Text>
            <Text style={styles.textHeader}>
              BASICS
            </Text>
            <Text style={styles.text}>
              RELOADING - The only two ways to get ammo is to find ammo in the “wasteland” or to buy ammo from the NPC’s. Prices may be different for each vendor and the weight they sell for Nuka Caps.
              Friendly fire counts - If you get hit by a friendly faction or team member, then you then fall under the bleeding out rules.
              Field items - Field items will be marked by orange tape, you may use these items in game and loot these items off of "bleeding out people."
              Purple taped items - are not to be touched or messed with, as they may be personal player or NPC items. You can not use them, take, or move them.
            </Text>
            <Text style={styles.textHeader}>
              COMBAT
            </Text>
            <Text style={styles.text}>
              {`AIRSOFT - When shot, you then have a two minute bleed out. You must use the full two minute bleed out before you go back to spawn, though anyone can be revived by anyone with a stimpak during this bleed out time.\n\nMELEE - If you melee someone that is an instant kill and that player has no bleed out and must go to their respawn point, but before they leave you may loot the player before he leaves. You may melee someone that is “bleeding out.”  But you can not melee teammates. \n\nENERGY (Foam Dart guns) - Energy weapons are designated by nerf darts or foam balls. Laser gun rounds go through armor and kill power armor users. When hit by a laser weapon, you will start to “bleed out”. Laser ammo can only be bought at a trader or found in loot. This will look like a ready to use mag with darts in it. You MAY NOT unload/load a nerf magazine no matter where you got it. Only traders and refs are authorized to do this. Players are not allowed to pick up used darts after they have been fired, unless authorized to do so by an npc or ref. \n\nEXPLOSIVES - Frag Grenades (enola gaye, launched grenades, sound grenades and tornado/twister) 20ft kill zone. Frag grenades stun power armor users for 30 seconds.\n\nMini Nukes, mortar artillery and howitzer artillery (rocket launcher)- Mini nuke launchers/ rocket launchers and mortar/ howitzer artillery rounds have the same type of killzone, which is 30ft from the fired round and players are “bleeding out”. 5ft within fired round and players are instantly dead and must go back to spawn. \n\nSmoke Grenades - Certain smoke grenades fill a role at this event and are listed below, if you do not see a color listed it is just a regular smoke grenade and only serves as cover.\n\nGas Grenades (yellow) - Gas grenades are designated by yellow and black smoke, and work in the same fashion as other grenades but anyone wearing a proper gas apparatus is immune. Proper gas apparatus will be designated as a real gas mask, respirator, or full face eye protection with attached hoses and tanks. PA users are immune to gas. 10ft zone of affect and the smoke itself counts as an area of affect. Any unprotected player caught in this area of effect is now bleeding out.\n\nFire Grenades (red) - These grenades are designated by red smoke and work like other grenades with no way to escape the flames. PA users are immune to the effects of fire. 10ft zone of affect and the smoke itself counts as an area of affect. Any unprotected player caught in this area of effect is now bleeding out.\n\nRadiation Grenades (Green) - Radiation grenades work like normal grenades except when affected the victim may use a “rad-away stick” immediately and leave the area otherwise they are now bleeding out. PA users are immune to radiation. 10ft zone of affect and the smoke itself counts as an area of affect. Any unprotected player caught in this area of effect is now bleeding out.\n\nEMP grenades (Blue) -  Stun PA users for duration of smoke. 10ft zone of affect and the smoke itself counts as an area of affect.\nTRAPS - Traps work like a melee attack, if you get hit by a bb or you are within the 5ft Kill zone of a trap you are dead, no bleed out, go back to spawn. For safety and game play do not physically move or mess with the trap. Even if you see the trap before it goes off do not move or mess with it. Shooting or throwing items at traps is legal. Traps go through armor, shields and power armor users are stunned for 30 seconds after being hit by a trap.\n\nARMOR - Ballistic Armor (bb proof) - Metal, tires, hard plastics hardened leather or EVA foam may be used to make armor. If you are hit in an armor piece by an airsoft round you are still in, but MUST yell out “armor hit.”\n\nPOWER ARMOR (Juggernaut) - Power armor must be approved by admins. Contact admins if you want to be eligible for power armor. Power armor can only be “killed” by laser weapons, mini nukes, mortar and howitzer artillery fired shells. One shot from a laser weapon kills a power armor user. If the Power armor user is within the “instant kill zone 5ft” of a mini nuke, mortar or howitzer fired shell they are dead. If the power armor user is within the “bleeding out” zone the user is stunned for 30 seconds. Power armor users are fitted with a “stun plate” shooting them here with an airsoft gun will stun them for 10 seconds. When a power armor user is stunned, they can be killed with an explosive weapon. Power Armor users can also be killed by removing their core from their back.  Power Armor users can not pick the agility perk as their perk.\n\nSHIELDS - Shields may be made of metal, plastic, kevlar or wood. A few examples could be say a stop sign, riot shield, tower shield, etc. Shield’s stop melee attacks, airsoft rounds and laser rounds. For safety reasons there is no shield bashing. All Shields must be approved before they can be used.\n\n`}
            </Text>
            <Text style={styles.textHeader}>
              {`MEDICAL (HEALING) and LOOTING`}
            </Text>
            <Text style={styles.text}>
              {`Bleed out - After the two minute bleed out you are dead. If you get looted once, then you go back to your spawn, even if your two minutes are not up.  From there you wait 1 minute to spawn back in.\n\nStimpaks - To use, rip the paper off the stimpak, then push the stimpak on to the “bleeding” player. After that you or the player that as been simpaked MUST yell out SIMPAK! The player is then back in the game. You can not move or shoot when “bleeding out”, unless someone moves you or you have the Endurance perk. If the simpak has exposed plastic or the wrapper is incomplete it can not be used.\n\nLooting - You may loot people, that are "bleeding out." You may only take two items of the following, off of the person: Up to four Nuka Caps, one field gun, one magazine, one piece of field armor, one field shield or one field melee weapon.\n\nCarrying Bodies - You may use a two hand drag if your buddy is down. This means that if you put both your hands on your buddy he may get up and WALK to a new destination. `}
            </Text>
            <Text style={styles.textHeader}>
              QUESTS
            </Text>
            <Text style={styles.text}>
              {`Quest items will be marked with pink tape and will have the quest title on it. You may not move quest items unless you are on that quest to get that quest item. `}
            </Text>
            <Text style={styles.textHeader}>
              PERKS
            </Text>
            <Text style={{ ...styles.text, ...{ paddingBottom: 75 } }}>
              {`Every player gets one Starting Perk, SP for short, these SP’s are, Strength, Perception, Endurance, Charisma, Intelligence, Agility and Luck. Your starting perk will be labeled by your arm band that you get after you pay.\n\nStrength - Gives you the ability to “pick up” a player but with more options. When touching the player, you may use one hand, and you can run with your “bleeding out” buddy to a safer area. Note, your buddy is still “bleeding out”  when moving him.\n\nPerception - Gives you a map of possible trap areas, possible loot spots. Players with this perception can be trained to use in game mortar artillery and howitzer artillery. Note only players with this perk and being trained to use the artillery, can use or move the artillery cannons.\n\nEndurance - Gives you the ability to crawl when ‘Bleeding out” still have your dead rag out though.\n\nCharisma - Unlocks better prices, more quests, or special items with NPCS or Faction leaders.\n\nIntelligence - Unlocks different quests, specials items, and gives out intelligence codes for non-quest combo lock boxes.\n\nAgility - Allows you to leave the area of effect of all smoke based attacks. Once the smoke lands and you are in the area of effect, which is 10ft or wherever the smoke moves, you can leave the area without being affected by that colored smoke, though you must leave that area immediately and must yell out AGILITY! Note you can not enter into that area of effect of the colored smoke or you will then be under the effect of that color of smoke\n\nLuck - Gives you ability to potentially get out of trouble with NPCs or Faction Leaders, if you are to upset them for one roleplay reason or another. You also get one dice reroll per session of any npc gambling game, note you have to be playing at a NPC location that has a gambling game for this part of the perk to work. NPC’s choose the cool down time after you use this part of the Luck perk.`}
            </Text>
          </ScrollView>
        </View>
      )
    }

    const Data = () => {
      return (
        <View style={[styles.content, styles.data]}>
          <ScrollView style={{ padding: 30, zIndex: 1 }} contentContainerStyle={{ paddingBottom: 70 }}>
            <Text style={{ ...styles.textHeader, ...{ fontSize: 30, paddingBottom: 20, alignSelf: 'center' } }}>
              Factions
            </Text>
            <Text style={styles.textHeader}>
              Raider Rampage
            </Text>
            <Text style={styles.text}>
              {`Joplin Wasteland is proud to present our next event, Raider Rampage. In our last event we saw a wave of new wanderers pour into the town, giving life to the once war torn town of Wata-Pa. This would soon bring in a host of new groups. The First is, The Half-Life Horde, a vicious group of raiders hell bent of forming the wasteland into what they deem fit. The second group is the town guards and a company of NCR scouts hot on the tail of a fleeing lost Caesar's legion group and their leader. All clues point to Wate-Pa, but first they have to deal with this horde of raiders and help save the town. Will you help the Raiders burn the heretics? Will you help save the town and bring peace to Wate-Pa? Or will you go on your own adventure in a now more dangerous wasteland?\n\nTickets Prices- 20$ Game charge fee\n\nTime events- 21st of September, 9am sign in, 1030am game briefs, 11am game begins, 7pm game ends.\n\nPlease read the rules as it outlines the safely guild lines as this is an airsoft and larp event.\n\nIn this event all player ammo will be proved at the event, giving you the player the choice to buy your ammo in game from any ammo vendor.\n\nAll players start out as wanderers and can choose to join/ quit Npc groups as they see fit. The two groups in this game are the Town Guards and the The Half-Life Horde. The Town Guards are made up of the Wate-Pa Guards who help keep the peace, a company of NRC Troopers who are the main defenders of the town, and the Town Scouts who keeps an eye on the raiders and leads scouting missions into the wasteland. All of which help defend the town and keep the peace. Their tape color will be bright light blue. The Half-Life Horde are made up of the Ashen Slaves, a group of crazy lightly armored raiders, the Burn Guns, a group of ex gunners that went full on raider and the Atomic Knights, a group of heavy armored raiders calling themselves the holy knights of wasteland. Each raider group works together to burn the heretics and raid the wasteland of Wate-Pa. Their tape color will be bright yellow.\n\nWhen a player joins a said group they will be marked with their colors and will now spawn at said group's spawn, until they quit that group. Note if a player is apart of a Npc group they can not use the Wanderer spawn. Players do not have to join a Npc group and may wander about as they wish and will share the wanderer spawn with other wanderers.  `}
            </Text>
          </ScrollView>
        </View>
      )
    }

    const Map = () => {
      return (
        <View style={[styles.content, styles.map]}>
          <PinchZoomView 
            style={{
              flex: 0, 
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
              }}
            >
            <Image style={styles.mapImage} source={require('./src/assets/map.jpg')}></Image>
          </PinchZoomView>
        </View>
      )
    }

    formatMilliseconds = (ms) => {
      let milliseconds = parseInt((ms % 1000))
      let seconds = parseInt((ms / 1000) % 60)
      let minutes = parseInt((ms / (1000 * 60)) % 60)
      let hours = parseInt((ms / (1000 * 60 * 60)) % 24)

      hours = (hours < 10) ? '0' + hours : hours
      minutes = (minutes < 10) ? '0' + minutes : minutes
      seconds = (seconds < 10) ? '0' + seconds : seconds
      milliseconds = (milliseconds < 100) ? '0' + milliseconds : milliseconds
      milliseconds = (milliseconds < 10) ? '0' + milliseconds : milliseconds

      return hours + ':' + minutes + ':' + seconds + ':' + milliseconds
    }

    const Radio = () => {
      return (
        <View style={[styles.content, styles.radio]}>
          <View style={{ width: '100%', paddingTop: 30, flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ color: 'rgb(117, 250, 76)', fontSize: 30 }}>
              Stations
            </Text>
          </View>
          {this.state.radioFileLoaded &&
            <TouchableOpacity
              onPress={() => {
                if (this.state.activeStation !== 'jar') {
                  var diff = new Date().getTime()
                  
                  // console.log(`\nHH:MM:SS:MlS`)
                  // console.log(formatMilliseconds(diff))
                  
                  soundObject.setIsLoopingAsync(true)
                  soundObject.getStatusAsync()
                  .then(function (result) {
                      let len = result.durationMillis
                      radioLength = result.durationMillis
                      time = formatMilliseconds(diff % len)
                      console.log(diff % len)
                      console.log(formatMilliseconds(diff % len))
                      soundObject.playFromPositionAsync(diff % len)
                    })
                  }
                  else {
                    soundObject.stopAsync()
                }

                this.setState(state => {
                  state.activeStation === 'jar'
                    ? state.activeStation = ''
                    : state.activeStation = 'jar'
                  return state
                })
              }}
            >

              <Text style={[
                styles.radioStationText,
                this.state.activeStation === 'jar' && styles.radioStationTextActive
              ]}>
                Joplin Atomic Radio
            </Text>
            </TouchableOpacity>
          }
          <View style={{ width: '100%', paddingTop: 30, borderBottomWidth: 1, borderBottomColor: 'rgb(117, 250, 76)' }} />
          <View style={{ width: '100%', paddingTop: 30, paddingLeft: 15 }}>
            <Text style={styles.radioStationTextOutOfRangeLabel}>
              OUT OF RANGE
            </Text>
          </View>
          {!this.state.radioFileLoaded &&
            <Text style={[styles.radioStationText, styles.radioStationTextOutOfRange]}>
              Joplin Atomic Radio - ACQUIRING SIGNAL
            </Text>
          }
          <Text style={[styles.radioStationText, styles.radioStationTextOutOfRange]}>
            NOAA Weather
            </Text>
          <Text style={[styles.radioStationText, styles.radioStationTextOutOfRange]}>
            Kansas City Now
            </Text>
          <TouchableOpacity
            activeOpacity={1}
            onLongPress={() => {
              this.state.devMode
                ? alert('Dev mode deactivated')
                : alert('Dev mode activated')
              this.setState(state=>{state.devMode = !state.devMode; return state})
            }}
          >
            <Text style={[styles.radioStationText, styles.radioStationTextOutOfRange]}>
              Branson Classics
            </Text>
          </TouchableOpacity>
          <Text style={[styles.radioStationText, styles.radioStationTextOutOfRange]}>
            Webb City Tunes
            </Text>
          {this.state.devMode && 
          <Text style={[styles.radioStationText, styles.radioStationTextOutOfRange]}>
            {'radioFileLoaded: ' + this.state.radioFileLoaded + '\n' + 'radioStartTime: ' + this.state.radioStartTime + '\n' + 'currentFileTime: ' + time + '\n' + 'radioLength: ' + radioLength}
          </Text>}
        </View>
      )
    }


    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <NavBar />
        {
          this.state.activeTab === 'rules' && <Rules />
        }{
          this.state.activeTab === 'data' && <Data />
        }{
          this.state.activeTab === 'map' && <Map />
        }{
          this.state.activeTab === 'radio' && <Radio />
        }
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
    width: 2000,
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

