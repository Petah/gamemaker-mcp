---
title: "Emitter Properties"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Particle_System_Properties/Emitter_Properties.htm"
converted: "2025-09-14T04:00:16.031Z"
---

# Emitter Properties

The Emitter Properties are shown in [The Inspector](../../IDE_Tools/The_Inspector.md) when an emitter is selected in [The Particle System Editor](../Particle_Systems.md). Here, the properties of the emitter and its associated particle type can be changed.

## Emitter Settings

![](../../assets/Images/Asset_Editors/Editor_ParticleSystem_SettingsEmitter.png)

### Enabled

This setting enables or disables the emitter. It corresponds to the visibility setting ![](../../assets/Images/Icons/Icon_Eye.png) in the emitter list shown next to [The Canvas](../Particle_Systems.htm#h).

When the emitter is disabled, it's paused, meaning that enabling it will continue it from the same state when it was disabled.

### Preview

This setting enables or disables the preview of the emitter's shape on [The Canvas](../Particle_Systems.htm#h).

### Preview Colour

This setting changes the colour used for drawing the emitter preview. The colour's alpha can be changed to draw the preview with transparency.

### Mode

In **Stream** mode the emitter _streams_ the number of particles set under **Particle Count** _continuously_. The emitter creates **Particle Count** particles every step (or frame).

In **Burst** mode the emitter creates the number of particles set under **Particle Count** _exactly once_.

NOTE In **Burst** mode [The Particle System Editor](../Particle_Systems.md) will burst the given number of particles only _once_. You can click the [Restart Animation](../Particle_Systems.htm#restart_animation) button to make the editor play it again.

### Particle Count

In case of a positive value this setting determines the number of particles to be created:

-   _Every step_ when in **Stream** mode, _or_ at a custom _interval_ set under [Interval & Interval units](Emitter_Properties.htm#interval_interval_units)
-   _Once_ when in **Burst** mode

You can also set a negative value. This means that a particle will be created with a chance of 1 out of "**Particle Count**", e.g. with the Particle Count set to \-10, there is a 1 out of 10 chance that a particle will be created.

If this value is set to 0 the emitter will not create any particles.

### Delay & Delay units

These two settings set the delay for an emitter set to **Stream** mode:

-   A random value between **Min** and **Max** is chosen as the delay. The emitter waits this amount of time before it bursts its first **Particle Count** particles.
-   The values for **Min** and **Max** are expressed in **Delay units**: **Seconds** (the default) or **Frames**.

### Interval & Interval units

These two settings set the interval between consecutive bursts of particles for an emitter set to **Stream** mode:

-   A random value ranging from **Min** to **Max** is chosen for every subsequent burst of **Particle Count** particles. The emitter will use the same interval all the time if you set **Min** and **Max** to the same value.
-   The values for **Min** and **Max** are expressed in **Interval units**: **Seconds** (the default) or **Frames**.

### Distribution

This setting determines the distribution of the particles over the shape, i.e. where they are created.

-   Using a **Linear** distribution the particles are created randomly all over the shape with no preference for the centre or the edges. The chance of a particle appearing is the same everywhere.
-   Using a **Gaussian** distribution there is a greater chance of particles being created closer to the centre of the shape.
-   Using an **Inverse Gaussian** distribution there is a greater chance of particles being created near the edges of the shape.

See [Particle Emitter Distribution Constant](../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_region.md).

### Shape

This setting determines the shape of the particle emitter. The emitter creates particles inside this shape.

![](../../assets/Images/Asset_Editors/Editor_ParticleSystems_EmitterPropertiesShape.png)

See [Particle Emitter Shape Constant](../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_region.md).

## Particle Settings

### Library

![](../../assets/Images/Asset_Editors/Editor_ParticleSystems_Library.png)

The library allows you to store the particle emitters that you create as _presets_, and also comes with some built-in presets.

Selecting a preset from the library using "Select Particles" in [The Inspector](../../IDE_Tools/The_Inspector.md) applies this preset to the emitter and links the emitter to it, which is indicated by the highlighted yellow Link/Unlink icon ![](../../assets/Images/Icons/Icon_Link_Unlink_Highlighted.png).

If you link different emitters (which can be in different Particle System assets) to the same preset, then changing the particle properties in any of these emitters will change them in the other emitters as well.

See: [Shared Emitters](../Particle_Systems.htm#h1)

### Textures

![](../../assets/Images/Asset_Editors/Editor_ParticleSystem_SettingsTextures.png)

The texture is the image or sprite that a particle uses. By default GameMaker includes a selection of textures that you can use for a particle (see [Overview of Particle Type Shapes](../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_shape.htm#figure)).

Alternatively, you can also use a custom sprite to be used as the texture for a particle. The **Frame** setting determines the image index of the sprite to be used, if the sprite has multiple sub-images.

### Colour

![](../../assets/Images/Asset_Editors/Editor_ParticleSystems_SettingsColour.png)

This setting determines the colour of a particle over its lifetime. Every particle created by the emitter starts with the colour on the left, then changes to the colour in the middle and ends with the colour on the right. Every colour includes an alpha channel that affects the transparency of the particle.

Enabling **Additive** makes particles created by this emitter drawn using additive blending.

### Life

![](../../assets/Images/Asset_Editors/Editor_ParticleSystems_SettingsLife.png)

This setting determines the lifetime of the particle, expressed in steps. Upon creation, each particle is assigned a random lifetime between the **Minimum** and **Maximum** values, and that is how many steps/frames the particle lasts.

### Scale

![](../../assets/Images/Asset_Editors/Editor_ParticleSystems_SettingsScale.png)

This setting determines the **X** and **Y** scale of the particles. This scale factor is applied to the particle texture first, before **Size**.

### Size

![](../../assets/Images/Asset_Editors/Editor_ParticleSystems_SettingsSize.png)

This setting determines the final size of the particles. The size is applied after the scale.

**Increment** is the value that gets added every step, e.g. if this value is set to 0.01, the size of every particle will increase by 0.01 every step.

Every frame, a random value between 0 and the **Wiggle** value is added to, or subtracted from, the size of the particle. This can be used to add random fluctuations to the particle's size.

### Speed

![](../../assets/Images/Asset_Editors/Editor_ParticleSystems_SettingsSpeed.png)

This setting determines the speed of the particles in the direction they are moving. Every particle is created with a random speed between **Minimum** and **Maximum**.

**Increment** is the value that gets added to the particle's speed every step.

Every frame, a random value between 0 and the **Wiggle** value is added to, or subtracted from, the speed of the particle. This can be used to add random fluctuations to the particle's speed.

### Gravity

![](../../assets/Images/Asset_Editors/Editor_ParticleSystems_SettingsGravity.png)

This setting determines the gravity applied to all particles created by this emitter. You can set the gravity's **Force**, which is applied in the given **Direction**.

### Direction

![](../../assets/Images/Asset_Editors/Editor_ParticleSystems_SettingsDirection.png)

This setting determines the direction in which the particles move.

Every particle is created with a random direction between **Minimum** and **Maximum** (where both are angles expressed in degrees).

**Increment** is the value that gets added to the particle's direction every step.

Every frame, a random value between 0 and the **Wiggle** value is added to, or subtracted from, the direction of the particle. This can be used to add random fluctuations to the particle's direction.

### Orientation

![](../../assets/Images/Asset_Editors/Editor_ParticleSystems_SettingsOrientation.png)

This setting determines the orientation of the particle. As opposed to the direction the particle moves in, the orientation is the rotation of the particle's image (similar to an instance's [image\_angle](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_angle.md)).

Every particle is created with a random direction between **Minimum** and **Maximum** (where both are angles expressed in degrees).

Checking **Relative** will set each particle's orientation to be relative to its direction. With this enabled, the final angle of a particle's image will be its movement direction + its orientation.

**Increment** is the value that gets added to the particle's orientation every step.

Every frame, a random value between 0 and the **Wiggle** value is added to, or subtracted from, the orientation of the particle. This can be used to add random fluctuations to the particle's orientation.

### Subparticles

![](../../assets/Images/Asset_Editors/Editor_ParticleSystems_SettingsSubparticles.png)

Here you can assign a preset to be emitted by each particle. A particle can emit a preset at two defined points in time:

-   **On Death**: You can set the type and count of particles to be created at the end of a particle's lifetime.
-   **On Update**: You can set the type and count of particles to be created on each frame while a particle is alive.