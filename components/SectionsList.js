import React from 'react';
import SectionButton from './SectionButton';

const SectionsList = ({ list, activePage, setActivePage }) => activePage === null && (
  <>
    {list.map(item => (
      <SectionButton key={item} text={item.toUpperCase()} setActive={() => setActivePage(item.toLowerCase())} />
    ))}
  </>
);

export default SectionsList;
