---
title: "event_inherited"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/Object_Events/event_inherited.htm"
converted: "2025-09-14T03:59:34.106Z"
---

# event\_inherited

This function calls the [parent](../../../../../The_Asset_Editors/Object_Properties/Parent_Objects.md) object's version of the current event. For example, if you call this in the Step event of obj\_B which is a child of obj\_A, obj\_A's Step event will be called as a result of this function. As such you cannot call this function outside of an object's event as it would be of no use anywhere else.

Normally, when an instance has a parent object, it automatically inherits all the same events as the parent, but if (for example) your parent object has a Create event and you add one to your child object choosing to _override_ the parent's event, all instances of the child object will run the new Create event that you have added and _not_ that which is in the parent object. Should you need to use both the parent event and the child event of the same type, you should use this function as it will run the parent object event before continuing with the rest of the code or actions that the child event contains.

#### Syntax:

event\_inherited();

#### Returns:

N/A

#### Example:

event\_inherited();
switch (sprite\_index)
{
    case spr\_Enemy\_1: dmg += 2; break;
    case spr\_Enemy\_4: dmg -= 1; break;
    case spr\_Enemy\_10: dmg +=10; break;
}

The above code calls the inherited parent event (in which we initialise the variable "dmg") and then goes on to modify the "dmg" variable. If there is no parent specified for the instance running this code, we would get an "unknown variable" error as dmg has not been defined.