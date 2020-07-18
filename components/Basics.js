import React from 'react';
import TextBody from "./TextBody";
import RulesHeader from "./RulesHeader";
import BackButton from "./BackButton";

const Basics = ({ activePage, setActivePage }) => activePage === 'Basics' && (
  <>
    <RulesHeader>Basics</RulesHeader>
    <TextBody>Reloading</TextBody>
    <TextBody>
      The only two ways to find ammo in the “wasteland” or to buy ammo
      from the NPCs. Prices may be different for each vendor and the
      weight they sell for Nuka Caps.
    </TextBody>
    <TextBody>In Game Currency</TextBody>
    <TextBody>
      The Currency used in this game are marked “Nuka Caps.” You can
      earn these caps by performing roles, quests, jobs, looting other
      players/ NPC’s, selling items, and/or looting loot boxes. Red caps
      are worth one, blue are worth five and yellow are worth ten.
      Before the game begins you, the player, will be given ten caps to
      start off with.{' '}
    </TextBody>
    <TextBody>Grenade Count</TextBody>
    <TextBody>
      Players are allowed to begin the game with a limited number of
      grenade-type weapons. The number of “grenade points” is six. Mini
      nukes count as two points, elemental smoke/frag grenades of any
      kind count as one. White smoke grenades do not count towards this
      number, and are deemed personal items.{' '}
    </TextBody>
    <TextBody>Friendly fire counts</TextBody>
    <TextBody>
      If you get hit by a friendly faction or team member you will still
      fall under the effects of whatever was used to hit you.
    </TextBody>
    <TextBody>Field items</TextBody>
    <TextBody>
      Field items will be marked by orange tape, you may use these items
      in game and loot these items off of "bleeding out people.”
    </TextBody>
    <TextBody>Purple taped items</TextBody>
    <TextBody>
      These are not to be touched or messed with, as they may be
      personal player or NPC items. You can not use them, take them, or
      move them.
    </TextBody>
    <BackButton setActive={setActivePage} />
  </>
);

export default Basics;
