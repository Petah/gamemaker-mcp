---
title: "UWP And Xbox Live"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/UWP_And_XBox_Live.htm"
converted: "2025-09-14T04:00:09.011Z"
---

# UWP And Xbox Live OBSOLETE

IMPORTANT UWP functionality is now obsolete as the UWP target no longer exists in GameMaker.

This section outlines the functions specifically for use when targeting the UWP target platform. The initial set of functions are for controlling the general game behaviour when creating a UWP app:

-   [uwp\_suspend](uwp_suspend.md)
-   [uwp\_is\_suspending](uwp_is_suspending.md)
-   [uwp\_is\_constrained](../../../../../../GameMaker_Language/GML_Reference/UWP_And_XBox_Live/uwp_is_constrained.md)
-   [uwp\_was\_terminated](uwp_was_terminated.md)
-   [uwp\_was\_closed\_by\_user](uwp_was_closed_by_user.md)
-   [uwp\_show\_help](uwp_show_help.md)
-   [uwp\_license\_trial\_version](uwp_license_trial_version.md)
-   [uwp\_license\_trial\_user](../../../../../../GameMaker_Language/GML_Reference/UWP_And_XBox_Live/uwp_license_trial_user.md)
-   [uwp\_license\_trial\_time\_remaining](uwp_license_trial_time_remaining.md)
-   [uwp\_check\_privilege](uwp_check_privilege.md)

UWP also permits you to create games for the XBox One platform using the XBox Live API using the following functions. These functions require you to have checked the **Enable XBox Live** option in the UWP Game Options. Some of these functions require the user to be signed-in to XBox Live, which GameMaker will try to do automatically when you run the project. This "silent" sign in will generate a [System Asynchronous Event](../../../The_Asset_Editors/Object_Properties/Async_Events.md) which can the be checked to see if it was successful or not before proceeding. Note that unlike the Xbox One Console export, the UWP export for XBox Live only permits one user to be signed-in at a time.

**IMPORTANT!** The UWP target only has a minimum of support for XBox Live when set up as part of the **Creator Program**, which is limited to some basic user and account functions (see [here](https://help.gamemaker.io/hc/en-us/articles/115002091531-Adding-Xbox-Live-Support-To-Your-UWP-Projects) for more information on setting this up). To be able to use all the functionality listed here you will need to have an [ID@XBox account](https://www.xbox.com/es-ES/developers/id).

You can find all the various Xbox Live functions for use with the UWP export target from the sections listed below:

-   [Users And Accounts](Users_And_Accounts/Users_And_Accounts.md)
-   [Saving Data](Saving_Data/Saving_Data.md)
-   [Stats And Leaderboards](../../../../../../GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/Stats_And_Leaderboards.md)
-   [Match Making](Match_Making/Match_Making.md)