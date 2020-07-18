import React from 'react';
import TextBody from "./TextBody";
import RulesHeader from "./RulesHeader";
import BackButton from "./BackButton";

const Armor = ({ activePage, setActivePage }) => activePage === 'Armor' && (
  <>
    <RulesHeader>Armor</RulesHeader>
    <TextBody>Ballistic Armor (bb proof)</TextBody>
    <TextBody>
      Metal, tires, hard plastics, hardened leather, or EVA foam may be
      used to make armor. If you are hit in an armor piece by an airsoft
      round you are still in, but MUST yell out “armor hit.”
    </TextBody>
    <TextBody>Power Armor (Juggernaut)</TextBody>
    <TextBody>
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
    </TextBody>
    <TextBody>Shields</TextBody>
    <TextBody>
      Shields may be made of metal, plastic, kevlar, or wood . A few
      examples could be; a stop sign, riot shield, tower shield, etc.
      Shields stop melee attacks, airsoft rounds and laser rounds. For
      safety reasons there is no shield bashing. All Shields must be
      approved before they can be used.
    </TextBody>
    <BackButton setActive={setActivePage} />
  </>
);

export default Armor;
