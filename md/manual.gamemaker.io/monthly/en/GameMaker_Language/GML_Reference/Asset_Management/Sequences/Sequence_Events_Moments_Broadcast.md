---
title: "Sequence Events, Moments and Broadcast Messages"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sequences/Sequence_Events_Moments_Broadcast.htm"
converted: "2025-09-14T03:59:39.556Z"
---

# Events, Moments and Broadcast Messages

Apart from all the properties listed [here](Sequences.md) for a sequence struct, you also have the possibility of adding in special "action" properties to a sequence. There are three different types of these "action" properties that can be added to a sequence object - **Events,** **Moments** and **Broadcast Messages** - and each of these is explained in more detail in the sections below.

## Sequence Events

Sequence objects can have **events** added to them, and these events are analogous to the events used by object assets. The events you assign to a sequence object will occur in a specific order, either once at a defined moment in the sequence life-cycle, or every frame that the sequence is running. In this section, we discuss how these events are handled using code, but they can also be added using [The Sequence Editor](../../../../The_Asset_Editors/Sequences.md). Note that the order of events listed here is not influenced by the playhead direction, and even if the sequence is playing backwards, the events will still be run in the order given below.

The available events are:

-   **Create**: this is triggered when a sequence instance is created on a layer.
-   **Destroy**: this is triggered when a sequence instance on a layer is destroyed.
-   **Clean-up**: this is triggered when a sequence instance is garbage collected.
-   **Step**: triggered just before the usual object Step event. **Important!** If the sequence is paused then this event will not be triggered until the next step after the sequence starts playing again.
-   **Begin Step**: triggered just before the object Begin Step event. **Important!** If the sequence is paused then this event will not be triggered until the next step after the sequence starts playing again.
-   **End Step**: triggered just before the object End Step event. **Important!** If the sequence is paused then this event will not be triggered until the next step after the sequence starts playing again.
-   **Async System**: triggered the same as any object [Asynchronous System Event](../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md) handlers. _**Important!** If the sequence is paused then this event will not be triggered._
-   **Broadcast Message**: triggered during sequence update as a broadcast message keyframe is encountered.

All events need to be associated with functions that are defined in a script, so to set up an event a [method variable](../../../GML_Overview/Method_Variables.md) must be assigned to a property with the correct name that tells the sequence which event should call the function. The syntax for this is as follows:

<sequence\_struct>.<event\_property> = method(<sequence\_struct>, <function\_name>);

The sequence struct properties for the different events are as follows:

-   event\_create
-   event\_destroy
-   event\_clean\_up
-   event\_step
-   event\_step\_begin
-   event\_step\_end
-   event\_async\_system
-   event\_broadcast\_message

To give an example of use, let's say we want the sequence to reverse direction when a left mouse button click is detected. We would first need to create a script with the function that we want to call, something like this:

/// @function seq\_reverse();

function seq\_reverse()
{
    if (mouse\_check\_button\_pressed(mb\_left))
    {
        if (self.headDirection == seqdir\_right)
        {
            self.headDirection = seqdir\_left;
        }
        else self.headDirection = seqdir\_right;
    }
}

In this function all we're doing is listening for a mouse press and then reversing the playback direction of the sequence that the method has been bound to. You'll notice that currently you are not able to pass any parameters to the functions which are linked to these properties, and in all cases the [self](../../../GML_Overview/Instance_Keywords.md) variable within the scope of the function is assigned to be the [sequence instance struct](Sequence_Structs/The_Sequence_Instance_Struct.md).

**NOTE** It's worth noting that in the above script the self identifier can be omitted and is only used to explicitly show the scope of the method variable being used for this example.

To assign this to a sequence you would then do something like this:

var \_seq = sequence\_get(Sequence1);
\_seq.event\_step = method(\_seq, seq\_reverse);

We have now assigned a step event to the sequence _object_ with a function to detect when a mouse is pressed and then change the playhead direction of the sequence _instance_ after it has been created in a room.

## Moments

A sequence **moment** is a unique code action that is fired on one or more specified frames as the sequence plays. These code moments are - like with events (explained above) - simply predefined [method variables](../../../GML_Overview/Method_Variables.md) that are triggered on the given frame. For example, say you want a sequence to create a "bullet" instance on a specific frame of the animation - first you'd need to create the function that is to be used for this action, something like this:

/// @function seq\_shoot();

seq\_shoot = function()
{
    instance\_create\_layer(sequence.xorigin, sequence.yorigin, "Instances", obj\_Bullet);
}

You would then add this to a frame in the momentKeyframes property of the sequence struct. This is essentially a "special" track that is only used for this purpose and so can only take keyframe data that is associated with moment actions that you want the sequence to have. This track is created in much the same way as you would create any other track, by creating keyframe structs and filling them with keyframe data, where channel 0 is the only channel that you can use and the track type is seqtracktype\_moment. Below is an example of how this would be created, using the function we defined above to fire on the given moments (frames):

var \_seq = sequence\_get(my\_Seq);
var \_k = array\_create(3);
\_k\[0\] = sequence\_keyframe\_new(seqtracktype\_moment);
\_k\[0\].frame = 60;
\_k\[1\] = sequence\_keyframe\_new(seqtracktype\_moment);
\_k\[1\].frame = 120;
\_k\[2\] = sequence\_keyframe\_new(seqtracktype\_moment);
\_k\[2\].frame = 180;
var \_d = array\_create(1);
\_d\[0\] = sequence\_keyframedata\_new(seqtracktype\_moment);
\_d\[0\].channel = 0;
\_d\[0\].event = method(\_d\[0\], seq\_shoot);
\_k\[0\].channels = \_d;
\_k\[1\].channels = \_d;
\_k\[2\].channels = \_d;
\_seq.momentKeyframes = \_k;

The above code will simply set frames 60, 120, and 180 of the "moment" track to call the method seq\_shoot. You'll notice that currently you are not able to pass any parameters to the functions which are used for each moment, and in all cases the self variable within the scope of the function is assigned to be the sequence instance (you generally don't need to use self but under some special cases it may be useful).

The self scope of a moment function is the [sequence instance struct](Sequence_Structs/The_Sequence_Instance_Struct.md), same as a sequence event.

## Broadcast Messages

Sequences can be made to generate **broadcast messages**, which simple strings that are added to specific frames along the animation timeline, and when that point in the timeline is reached, then the string will be broadcast out to all object instances that listen for it. You can add these messages in the IDE using [The Sequence Editor](../../../../The_Asset_Editors/Sequences.md), but they can also be created and edited using code.

To create a broadcast message on a sequence using GML, you need to add them to a frame in the messageEventKeyframes property of the sequence struct. This is essentially a "special" track that is only used for this purpose and so can only take keyframe data that is associated with the broadcast messages that you want the sequence to have. This track is created in much the same way as you would create any other track, by creating keyframe structs and filling them with keyframe data, where channel 0 is the only channel that you can use and the track type is seqtracktype\_message. Below is an example of how this would be created:

var \_seq = sequence\_get(my\_Seq);
var \_k = array\_create(2);
\_k\[0\] = sequence\_keyframe\_new(seqtracktype\_message);
\_k\[0\].frame = 60;
\_k\[1\] = sequence\_keyframe\_new(seqtracktype\_message);
\_k\[1\].frame = 120;
var \_m1 = array\_create(2);
\_m1\[0\] = "Hello";
\_m1\[1\] = "World";
var \_m2 = array\_create(1);
\_m2\[0\] = "This is a Broadcast Message";
var \_d1 = array\_create(1);
\_d1\[0\] = sequence\_keyframedata\_new(seqtracktype\_message);
\_d1\[0\].channel = 0;
\_d1\[0\].events = \_m1;
var \_d2 = array\_create(1);
\_d2\[0\] = sequence\_keyframedata\_new(seqtracktype\_message);
\_d2\[0\].channel = 0;
\_d2\[0\].events = \_m2;
\_k\[0\].channels = \_d1;
\_k\[1\].channels = \_d2;
\_seq.messageEventKeyframes = \_k;

You'll notice that the message text is passed to the keyframe data channel as an array. This is because you can broadcast multiple messages on the same frame, and have different object instances listen for them and react differently depending on the message they are actually expecting.

Once a broadcast message has been emitted by the sequence, you can parse it using the _Other_ > _Broadcast Message_ event in object instances, which is explained in detail [here](../../../../The_Asset_Editors/Sequence_Properties/Broadcast_Messages.md).