---
title: "Compatibility Functions"
source: "manual.gamemaker.io/monthly/en/Additional_Information/Compatibility_Functions.htm"
converted: "2025-09-14T03:59:22.009Z"
---

# Compatibility Functions

When you are importing a project from a previous version of GameMaker you may see that the project has [compatibility scripts](Compatibility_Scripts.md) added. In general, these scripts use the updated GameMaker Language (GML) functions to convert obsolete functions into the new way of doing things, and are a great way to learn how things should be done in GameMaker. However, there are a few functions that are used for compatibility _only_ that should not be used anywhere else, and certainly not in your own projects. To help you identify these compatibility functions they are listed here, but we must stress that they should **never be used outside of compatibility scripts**:

-   layer\_tile\_exists
-   layer\_tile\_create
-   layer\_tile\_destroy
-   layer\_tile\_change
-   layer\_tile\_xscale
-   layer\_tile\_yscale
-   layer\_tile\_blend
-   layer\_tile\_alpha
-   layer\_tile\_x
-   layer\_tile\_y
-   layer\_tile\_region
-   layer\_tile\_visible
-   layer\_tile\_get\_sprite
-   layer\_tile\_get\_xscale
-   layer\_tile\_get\_yscale
-   layer\_tile\_get\_blend
-   layer\_tile\_get\_alpha
-   layer\_tile\_get\_x
-   layer\_tile\_get\_y
-   layer\_tile\_get\_region
-   layer\_tile\_get\_visible