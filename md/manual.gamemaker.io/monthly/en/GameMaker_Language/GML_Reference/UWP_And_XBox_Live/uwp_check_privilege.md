---
title: "uwp_check_privilege"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/uwp_check_privilege.htm"
converted: "2025-09-14T04:00:09.407Z"
---

# uwp\_check\_privilege OBSOLETE

With this function you can check that a given user has a chosen privilege. The function will return true or false in the System Asynchronous Event depending on whether the privilege is enabled or not, and if you set the attempt\_resolution argument to true and the privilege isn't enabled, it will also open a system dialog (suspending the game) to prompt the user to upgrade the account or whatever is required to get the privilege. If the user then enables the required option, the function will return true.

The function requires that you use one of the following [UWP Privilege Constant](uwp_check_privilege.md)s for the privilege request:

| UWP Privilege Constant |
| --- |
| Constant | Description |
| uwp_privilege_internet_browsing | Check to see if internet browsing is permitted |
| uwp_privilege_social_network_sharing | Check to see if sharing to social networks is permitted |
| uwp_privilege_share_kinect_content | Check whether sharing the Kinect controller is permitted |
| uwp_privilege_video_communications | Check to see if video communication is permitted |
| uwp_privilege_communications | Check to see if internet communication is permitted |
| uwp_privilege_user_created_content | Check if access to user created content is permitted |
| uwp_privilege_multiplayer_sessions | Check to see if online multiplayer sessions are permitted |
| uwp_privilege_sessions | Check to see if online sessions are permitted |
| uwp_privilege_fitness_upload | Check to see if fitness data uploading is permitted |

Once the function has been called, on XBox One it will trigger an [Asynchronous System event](../../../The_Asset_Editors/Object_Properties/Async_Events/System.md) when the callback result has been received, which will have the special DS map [async\_load](../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md). This map should then be parsed for the following key:

-   "**event\_type**" - should hold the value "check\_privilege\_result" if the event was triggered by this function

If the event type relates to this function, then there will also be the following additional keys when the function is called on XBox:

-   "**result**" - Will be one or more of the following [UWP Privilege Result Constant](uwp_check_privilege.md)s (combined values):
    | UWP Privilege Result Constant |
    | --- |
    | Constant | Description | Value |
    | uwp_privilege_result_no_issue | There are no privilege issues with the user | 0 |
    | uwp_privilege_result_purchase_required | The user must purchase something additional, usually a subscription, for access | 1 |
    | uwp_privilege_result_aborted | The check was aborted | 2 |
    | uwp_privilege_result_banned | The user is banned | 4 |
    | uwp_privilege_result_restricted | The user is restricted from access, usually through parental controls | 8 |


-   "**privilege**" - will be one of the constants listed above for use in the function, so you can check which privilege you have requested in the case of multiple checks.

If the project is run on a UWP platform that is not XBox One, then the Async Event will _not_ be triggered, and instead the function will immediately return wither -1, 0, or 1 where:

-   \-1 means -1 the user doesn't have the privilege
-   0 means the function hasn't been able to query the user
-   1 means the user has the privilege.

#### Syntax:

uwp\_check\_privilege(user\_id, privilege, attempt\_resolution);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The User ID pointer to check. |
| privilege | UWP Privilege Constant | The privilege constant to check (see description, above). |
| attempt_resolution | Boolean | Enable attempting a resolution if set to true, or ignore if set to false. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

var user\_one = xboxlive\_get\_user(0);
if (xboxlive\_user\_is\_signed\_in(user\_one))
{
    uwp\_check\_privilege(user\_one, xboxlive\_privilege\_multiplayer\_sessions, true);
}

The above checks to see if the user is signed in and if they are it checks the multiplayer sessions permission.