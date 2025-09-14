---
title: "Clipping Masks"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Sequence_Properties/Clipping_Masks.htm"
converted: "2025-09-14T04:00:16.524Z"
---

# Clipping Masks

As mentioned in the [Track Panel](The_Track_Panel.md) page, there is an action to create what is called a **clipping mask group** in the track editor. This is accessed by clicking on the ![Clip Mask Icon](../../assets/Images/Icons/Icon_AddClipMask.png) button at the bottom of the Track Panel:

![Clip Mask Button in the Track Panel](../../assets/Images/Asset_Editors/Track_Panel_ClipMask_Button.png)Clicking this will create a clipping mask group that is comprised of two sub-sets of assets that can be used as either the **subject** or the **mask** of the group. Basically the subject is the asset that is going to be masked, and the mask is the asset that is going to do the masking:

![Basic Clipping Mask](../../assets/Images/Asset_Editors/Track_Clipping_Mask.png)The idea behind using a clipping mask is that you add a subject sprite, and then a mask sprite, and the mask sprite will "hide" (mask) the subject. You can then use the mask sprite animation, or move or scale the mask sprite to change the visibility of the subject (or parts of the subject). Each group (mask and subject) can contain multiple assets, and each of the assets can have multiple parameter tracks.

To add a subject and mask, simply drag the sprite, object, sequence or particle system from the Asset Browser over the folder that you want to add it to:

![Add A Clipping Mask](../../assets/Images/Asset_Editors/Track_Add_Clipping_Mask.gif)

The mask sprite _alpha_ will be used to "hide" whatever subject is underneath it, where a value of 100% alpha (opaque) will mask completely and a value of 0% alpha (transparent) will show it. For example, we have this sprite for masking:

![Clipping Mask Example Sprite](../../assets/Images/Asset_Editors/Clipping_Mask_Sprite.png)We can then apply this as a clipping mask to icons to create a "cooldown" effect, like this:

![Animated Clipping Mask Example](../../assets/Images/Asset_Editors/Clipping_Mask_Example.gif)In the above example "Sprite\_2" is simply a static sprite asset that is the base icon, and then over that we've created a clipping mask group with a greyscale version of the sprite, as well as a mask (using the example sprite shown above). When combined and the sequence is played, the clipping mask group reveals the base sprite underneath, creating our cooldown effect.

Note that clipping mask groups can be treated as a single item in the track list and dope sheet, and you can add rotation and position parameter tracks to the group _as a whole_. You can also apply clipping mask groups to group folders of assets or even to _other_ clipping mask groups, making them a very powerful tool.

NOTE Clipping Masks will not work at runtime if the [application surface is disabled](../../GameMaker_Language/GML_Reference/Drawing/Surfaces/application_surface_enable.md) or [stencil buffers are disabled](../../GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_depth_disable.md).