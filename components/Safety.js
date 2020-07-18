import React from 'react';
import RulesHeader from "./RulesHeader";
import BackButton from "./BackButton";
import TextBody from "./TextBody";

const Safety = ({ activePage, setActivePage }) => activePage === 'Safety' && (
  <>
    <RulesHeader>
      Game safety rules
    </RulesHeader>
    <TextBody>
      1.Safety/ Surrender Kills- Surrender kills are when you are within about 20ft or closer of your opponent. You may yell out surrender, if your opponent doesn’t surrender you may shoot them.
    </TextBody>
    <TextBody>
      2. Engagement Non Fps Rules- No blind fire and no physical fighting, other then with boffer weapons. Ricochet bb’s do not count and gun hits do not count as being hit. At all times you must keep your safety eye pro on. If you are in a safe area you must have your mag out, gun cleared, and on safe. You may have your eye pro off in a safe area.
    </TextBody>
    <TextBody>
      3. Engagement Fps Rules- All guns will be measured using .20G BB’s
    </TextBody>
    <TextBody>
      400Fps and under, no minimum engagement distance. You may use a burst mode up to 3 BB’s per trigger pull or use full-auto up to a 3 second trigger pull burst, semi only indoors.
    </TextBody>
    <TextBody>
      If you are using a MG you may have a 4 second trigger pull burst and you must have a sidearm that shoots under 400Fps and that can use semi fire to use indoors. MG’s that shoot 401 to 450 Fps have a 60ft minimum engagement distance.
    </TextBody>
    <TextBody>
      401-450Fps  Bolt and or semi only. Minimum engagement distance 60ft and you must have a sidearm that shoots under 400Fps and that can use Semi fire to use indoors.
    </TextBody>
    <TextBody>
      451- 500Fps Bolt only.  Minimum engagement distance 90ft. You must have a sidearm that shoots under 400Fps and that can use semi fire to use indoors.
    </TextBody>
    <TextBody>
      4. Eye Pro-  Full seal eye pro is a must that is Z87+ rating. If under the age of 18, then you must have full face protection. Keep eye pro on at all times, unless you are in a safety area. If you are wishing to use mesh, please contact a Joplin Wasteland admin.
    </TextBody>
    <BackButton setActive={setActivePage} />
  </>
);

export default Safety;
