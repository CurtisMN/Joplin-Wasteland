import React from 'react';
import RulesHeader from "./RulesHeader";
import BackButton from "./BackButton";
import TextBody from "./TextBody";

const Quests = ({ activePage, setActivePage }) => activePage === 'Quests' && (
  <>
    <RulesHeader>Quests</RulesHeader>
    <TextBody>
      Quest items will be marked with pink tape and will have the quest
      title on it. You may not move quest item unless you are on that
      quest to get that quest item. If you are to bleed out and die and
      you have a quest item, you must drop that quest item where you
      died. Once you respawn back in you may go back to get the quest
      item. NPC’s that originally had said quest item may take the quest
      item back. Note, a player may only have one side quest at a time.
      If you wish to give up on a side quest, go back to the NPC that
      hired you to do the quest and ask them to cancel the side quest.
    </TextBody>
    <BackButton setActive={setActivePage} />
  </>
);

export default Quests;
