import React from 'react';
import RulesHeader from "./RulesHeader";
import BackButton from "./BackButton";
import TextBody from "./TextBody";

const Perks = ({ activePage, setActivePage }) => activePage === 'Perks' && (
  <>
    <RulesHeader>Perks</RulesHeader>
    <TextBody>
      Every player gets one Starting Perk, SP for short, these SP’s are:
      strength, perception, endurance, charisma, intelligence, agility
      and luck. Your starting perk will be labeled by your arm band that
      you get after you pay.
    </TextBody>
    <TextBody>Strength</TextBody>
    <TextBody>
      Gives you the ability to “pick up” a player but with more options.
      When touching the player, you may use one hand, and you can run
      with your “bleeding out” buddy to a safer area. Note, your buddy
      is still “bleeding out” when moving him. You also may use one hand
      to melee someone, but you must still say “melee.”
    </TextBody>
    <TextBody>Perception</TextBody>
    <TextBody>
      Gives you a map of possible trap areas, possible loot spots.
      Players with this perception can be trained to use in-game mortar
      artillery and howitzer artillery. Note: only players with this
      perk and training to use the artillery, can use or move the
      artillery cannons.
    </TextBody>
    <TextBody>Endurance</TextBody>
    <TextBody>
      Gives you the ability to crawl when ‘Bleeding out,” you must still
      have your dead rag out though.
    </TextBody>
    <TextBody>Charisma</TextBody>
    <TextBody>
      Unlocks better prices, more quests, or special items with NPCs or
      Faction leaders. Can be used to get special treatment or dialogue
      with NPCs and sometimes even beasts can be swayed by your charm.
    </TextBody>
    <TextBody>Intelligence</TextBody>
    <TextBody>
      Unlocks different quests, specials items, and gives out
      intelligence codes for non-quest combo lock boxes.
    </TextBody>
    <TextBody>Agility</TextBody>
    <TextBody>
      Allows you to leave the area of effect of all smoke based attacks.
      Once the smoke lands and you are in the area of effect, which is
      10ft or wherever the smoke moves, you can leave the area without
      being affected by that colored smoke, though you must leave that
      area immediately and must yell out AGILITY! Note: you can not
      enter into that area of effect of the colored smoke or you will
      then be under the effect of that color of smoke
    </TextBody>
    <TextBody>Luck</TextBody>
    <TextBody>
      Gives you ability to potentially get out of trouble with NPCs or
      Faction Leaders, if you are to upset them for one roleplay reason
      or another, but usually only once a day per NPC. You also get one
      dice reroll per session of any NPC gambling game, note you have to
      be playing at an NPC location that has a gambling game for this
      part of the perk to work. NPC’s choose the cool down time after
      you use this part of the Luck perk.
    </TextBody>
    <BackButton setActive={setActivePage} />
  </>
);

export default Perks;
