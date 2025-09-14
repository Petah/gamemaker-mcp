---
title: "timeline_max_moment"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Timelines/timeline_max_moment.htm"
converted: "2025-09-14T03:59:42.605Z"
---

# timeline\_max\_moment

This function will return the value of the moment in which the timeline performs its final action. So, if you have a timeline with 8 different actions placed 20 moments apart, this function would return the moment value of the last action in that timeline, which would be 160. This function is a good way to test whether a timeline has passed the last active moment when running, since the timeline position will continue incrementing every step of the game whether there are further actions or not.

#### Syntax:

timeline\_max\_moment(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Timeline Asset | The index of the timeline to get the last moment of. |

#### Returns:

N/A

#### Example:

if (timeline\_position > timeline\_max\_moment(timeline\_index))
{
    timeline\_running = false;
}

The above code will check the current timeline position against the maximum active moment, and if it is greater the timeline will be stopped.