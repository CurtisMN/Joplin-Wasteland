import React from 'react';
import RulesHeader from "./RulesHeader";
import BackButton from "./BackButton";
import TextBody from "./TextBody";

const Chems = ({ activePage, setActivePage }) => activePage === 'Chems' && (
  <>
    <RulesHeader>Chems</RulesHeader>
    <TextBody>Jet</TextBody>
    <TextBody>
      Jet works as a one time use item. To use Jet, hold the item above
      your head, pull the orange tape and yell, Jet! You then have ten
      seconds of invulnerability, in which each second counts as one
      step. In this time frame you can not use any weapons. Also you are
      to have the Jet held above your head, must be shouting out your
      ten second countdown and must be using your “steps.” You can buy
      and refill Jet from the chem dealer in the game. You may bring out
      your own Jet prop pieces, but you will have to “refill” your jet
      first before using it.
    </TextBody>
    <TextBody>Mentats</TextBody>
    <TextBody>
      Mentats work as a one time charisma buff. To use Mentats you open
      the container, and either eat or give the candy piece to the npc
      you are dealing with. Mentats can only be found in game and are
      sold by the chem dealer. They give a plus one boost your charisma
      level. Note charisma can only be at these levels: Minus One, Zero,
      and Plus One. Mentats have no effect on Super Mutants.
    </TextBody>
    <BackButton setActive={setActivePage} />
  </>
);

export default Chems;
