"use client";

import { Mascot } from "page-mascot";

/** Cursor-following gearbot that blinks when poked — replaces the old WebGL avatar. */
export default function PageMascot() {
  return (
    <div className="page-mascot">
      <Mascot
        directions="/mascots/gearbot-directions.webp"
        reactions="/mascots/gearbot-reactions.webp"
        size={112}
        label="little gearbot"
      />
    </div>
  );
}
