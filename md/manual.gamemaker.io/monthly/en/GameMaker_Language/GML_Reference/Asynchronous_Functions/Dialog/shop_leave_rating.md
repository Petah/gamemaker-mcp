---
title: "shop_leave_rating"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asynchronous_Functions/Dialog/shop_leave_rating.htm"
converted: "2025-09-14T03:59:42.864Z"
---

# shop\_leave\_rating

This function opens up an OS dependent dialog where you can ask the user to post a rating or comment to a particular page. You can define the text that is to appear in the dialogue, as well as the text you wish to appear on the two buttons and the URL where the comment has to be posted.

NOTE This function is only for Android and iOS targets.

IMPORTANT On **iOS**, when using TestFlight, in development the prompt will be displayed but you won't be able to actually do anything. Once your app is in the App Store, this button becomes active and the user is given the option to write a review or leave a rating. Note that if you distribute the game through TestFlight, this window may not even be shown.

#### **Syntax:**

shop\_leave\_rating(text, yes\_string, no\_string, url)

| Argument | Type | Description |
| --- | --- | --- |
| text | String | Text that appears on the dialog. |
| yes_string | String | Text that appears on the "yes" button. |
| no_string | String | Text that appears on the "no" button. |
| url | String | The full URL where the comment has to be sent. |

#### Returns:

N/A

#### Example:

if (timer <= 0)
{
    shop\_leave\_rating("Thanks for playing the game! Why not leave a comment?", "Okay!", "Not Today!", "http://MacSweeney/comments");
    timer = 10000000;
}
else
{
    timer -= 1;
}

The above code will ask the user to leave a comment if the variable timer has counted down to 0.