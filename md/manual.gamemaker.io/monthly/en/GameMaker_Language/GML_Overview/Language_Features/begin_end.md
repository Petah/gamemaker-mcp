---
title: "begin / end"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Language_Features/begin_end.htm"
converted: "2025-09-14T03:59:29.062Z"
---

# begin / end

The GameMaker Language permits you to use the keywords begin and end instead of the more usual curly brackets {} when creating code blocks. The code example below shows how this works:

if (!visible)
    begin
    exit;
    end
while (place\_meeting(x, y))
    begin
    x -= lengthdir\_x(1, direction - 180);
    y -= lengthdir\_y(1, direction - 180);
    end

Note that using these keywords is not typical and is provided as part of the language more for legacy support than for anything else, and at any time in the future they may be deprecated.