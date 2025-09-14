---
title: "mp_potential_settings"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_potential_settings.htm"
converted: "2025-09-14T04:00:03.509Z"
---

# mp\_potential\_settings

The mp\_potential\_ functions do their work using a number of parameters that can be changed using this function. Globally the method works as follows: it first tries to move straight towards the goal, looking a number of steps ahead which can be set with the parameter "ahead" (default value is 3). Reducing this value means that the instance will start changing direction later as it doesn't "see" as far ahead, and increasing it means it will start changing direction earlier. If this check leads to a collision then it starts looking at directions more to the left and to the right of the ideal, straight-line direction. It does this in steps of size "rotstep" (default value is 10), and reducing this gives the instance more movement possibilities but will be slower as it needs more processing power.

The parameter "maxrot" is a bit more difficult to explain! The instance has a current direction of movement, and maxrot (default value is 30) indicates how much it is allowed to vary its direction either side of that current direction in one step. So even if it can move e.g. straight to the goal it will only do so if it does not violate this maximal change of direction. If you make maxrot a large value then the instance can change direction a lot in each step, and this will make it easier to find a short path but the path will be uglier and less natural. If you make the value smaller then the path will be smoother but it might take longer detours (and sometimes even fail to find the goal). Finally, When no step can be made the behavior depends on the value of the parameter "onspot". If onspot is true (the default value), then the instance will rotate on its spot by the amount indicated with "maxrot" and if it is false it will not move at all. Setting it to false is useful for e.g. cars but reduces the chance of the instance finding a path.

#### Syntax:

mp\_potential\_settings(maxrot, rotstep, ahead, onspot)

| Argument | Type | Description |
| --- | --- | --- |
| maxrot | Real | The number of degrees either side of the current direction that the instance can rotate in a step |
| rotstep | Real | The number of degrees either side of the current direction that the instance can check for a collision |
| ahead | Real | The number of steps ahead that the instance can check for a collision. Larger values are slower than lower ones. |
| onspot | Boolean | Use this to allow the instance to rotate on the spot when no path is found (true) or not (false) |

#### Returns:

N/A

#### Example:

mp\_potential\_settings(45, 5, 5, 0);

The above code will set the mp\_potential\_ functions to use the following settings: the instance can look ahead five steps, change direction 45 degrees each step, look 5 degrees either side of the current direction if there is an obstacle and not rotate on the spot of there is a collision.