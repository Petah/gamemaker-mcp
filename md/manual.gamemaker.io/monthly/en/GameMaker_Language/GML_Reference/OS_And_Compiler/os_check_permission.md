---
title: "os_check_permission"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/os_check_permission.htm"
converted: "2025-09-14T04:00:04.399Z"
---

# os\_check\_permission

With this function you can check to see if a specific permission has been granted to the game by the user. You supply the permission to check as a string using the format "android.permission.<permission>", so to check the RECORD\_AUDIO permission (for example) you would call

os\_check\_permission("android.permission.RECORD\_AUDIO");

The function will return will return one of three constants - shown below - to tell the game how the state of the permission. For more information on app permissions, please see the [Android Documentation](https://developer.android.com/guide/topics/permissions/overview).

**IMPORTANT!** This function is for the **Android** target only.

#### Syntax:

os\_check\_permission(permission)

| Argument | Type | Description |
| --- | --- | --- |
| permission | String | The permission to check (a string) |

#### Returns:

[Permission State Constant](os_check_permission.md)

| Permission State Constant |
| --- |
| Constant | Description |
| os_permission_granted | This indicates that the permission has been granted |
| os_permission_denied | This indicates that the permission has not been granted |
| os_permission_denied_dont_request | This indicates that the permission has either been blocked by the phone settings, or that the user has previously denied the request and selected "Don't ask again". |

#### Example:

if (os\_type == os\_android)
{
    if (os\_check\_permission("android.permission.INTERNET") == os\_permission\_denied)
    {
        os\_request\_permission("android.permission.INTERNET");
    }
}

The above code checks the OS type and if is Android, it performs a check on the permissions and if the "INTERNET" permission has not yet been granted, it requests it.