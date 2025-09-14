---
title: "io_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/io_clear.htm"
converted: "2025-09-14T03:59:59.260Z"
---

# io\_clear

This function will clear the current keyboard and mouse states. Note that what happens in the next step after calling this function will depend on what is being checked and the platform it is being checked on. With mouse input, the mouse button will have to be released and pressed again for any further input to be detected, but with the keyboard it's not quite that simple. In general, the keyboard will be cleared _only for that step_ but the next step will again detect the key, however this may not be the same across all platforms and keyboards, and in some cases the function may act like it does for the mouse and require the key to be lifted and pressed again.

#### **Syntax:**

io\_clear();

#### **Returns:**

N/A

#### **Example:**

io\_clear();

This will clear all keyboard and mouse states.