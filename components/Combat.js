import React from 'react';
import TextBody from "./TextBody";
import RulesHeader from "./RulesHeader";
import BackButton from "./BackButton";

const Combat = ({ activePage, setActivePage }) => activePage === 'Combat' && (
  <>
    <RulesHeader>COMBAT</RulesHeader>
    <TextBody>Airsoft</TextBody>
    <TextBody>
      When shot, you then have a two minute bleed out. You must use the
      full two minute bleed out before you go back to spawn, though
      anyone can be revived by anyone else with a stimpak during this
      bleed out time.
    </TextBody>
    <TextBody>Melee</TextBody>
    <TextBody>
      If you melee someone, that is an instant kill and that player has
      no bleed out and must go to their respawn point, but before they
      leave you may loot the player. You may melee someone that is
      “bleeding out.” To melee, tap or lightly swipe your melee weapon
      on to your target and say “melee.” You may use a two hand touch to
      melee your victims, again say “melee” when doing so.
    </TextBody>
    <TextBody>Energy (Foam Dart guns)</TextBody>
    <TextBody>
      Energy weapons are designated by Nerf darts or foam balls. Laser
      gun rounds go through armor and kill power armor users. When hit
      by a laser weapon, you will start to “bleed out”. Laser ammo can
      only be bought at a trader or found in loot. This will look like a
      ready to use mag with darts in it. You MAY NOT unload/load a nerf
      magazine no matter where you got it. Only traders and refs are
      authorized to do this. Players are not allowed to pick up used
      darts after they have been fired, unless authorized to do so by an
      NPC or ref.
    </TextBody>
    <TextBody>Explosives</TextBody>
    <TextBody>
      Frag Grenades (Enola Gaye, launched grenades, sound grenades and
      tornado/twister grenades) There is a 20ft kill zone from the
      grenade (20ft radius) . Frag grenades stun power armor users for
      30 seconds.
    </TextBody>
    <TextBody>
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
    </TextBody>
    <TextBody>Smoke Grenades</TextBody>
    <TextBody>
      Certain smoke grenades fill a role at this event and are listed
      below, if you do not see a color listed it is just a regular smoke
      grenade and only serves as cover. There is a 10ft zone of affect
      from each grenade (10ft radius) and the smoke itself counts as an
      area of affect. Gas Grenades (Yellow)
    </TextBody>
    <TextBody>
      Gas grenades are designated by yellow smoke, players wearing a
      proper gas apparatus are immune to gas. Proper gas apparatus will
      be designated as a real gas mask, respirator, or full face eye
      protection with attached hoses and tanks. PA users are immune to
      gas. Any unprotected player caught in this area of effect is now
      bleeding out. Fire Grenades (Red)
    </TextBody>
    <TextBody>
      Fire grenades are designated by red smoke. PA users are immune to
      the effects of fire. Any unprotected player caught in this area of
      effect is now bleeding out. Radiation Grenades (Green)
    </TextBody>
    <TextBody>
      Radiation grenades are designated by green smoke. When affected
      the victim may use a “rad-away stick” immediately and leave the
      area, otherwise they are now bleeding out. PA users are immune to
      radiation. Any unprotected player caught in this area of effect is
      now bleeding out. EMP grenades (Blue)
    </TextBody>
    <TextBody>
      Stun PA users for the duration that smoke is billowing from the
      grenade and is surrounded by thick smoke. (Power armor users are
      trained to know how long this is)
    </TextBody>
    <TextBody>Traps</TextBody>
    <TextBody>
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
    </TextBody>
    <BackButton setActive={setActivePage} />
  </>
);

export default Combat;
