import React from 'react';
import SectionButton from './SectionButton';
const list = ['Basics', 'Combat', 'Armor', 'Medical and Looting', 'Quests', 'Chems', 'Perks', 'Safety']

const SectionsList = ({ activePage, setActivePage }) => activePage === null && (
  <>
    {list.map(item => (
      <SectionButton key={item} text={item} setActive={() => setActivePage(item)} />
    ))}
  </>
);

export default SectionsList;
