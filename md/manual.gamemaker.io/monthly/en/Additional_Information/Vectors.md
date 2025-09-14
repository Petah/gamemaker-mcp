---
title: "Vectors"
source: "manual.gamemaker.io/monthly/en/Additional_Information/Vectors.htm"
converted: "2025-09-14T03:59:23.043Z"
---

# Vectors

At some point when creating a game of any complexity you will probably have to deal with **vectors**. They are used in physics, in AI, in trigonometry and many other situations, but what is a vector? Well, to put it simply, a vector is a _directed quantity_. Let's start by looking at a 1 dimensional vector - which is just the same as a single number - by drawing a numbered line with an arrow starting at zero and ending at 5. This is the vector "a" which is equal to 5 and if we draw another arrow starting at the 5 and ending at the 8 we have vector "b" which is equal to 3:

![1D Vector Example](../assets/Images/Scripting_Reference/Additional_Information/Vector_Image_1D.png)You should realise that it doesn't matter where a vector starts, all that matters is how long it is and what direction it goes in. So vector "b" starts at 5, is 3 units long and points to the "right", making it identical to a vector starting at 0 and going to 3. Now, you can also add these vectors together, by putting the two vectors "a" and "b" end to end to get the vector "c" which is equal to 8. What about negative numbers? Well, if, in the above image, a vector that points to the "right" corresponds to a positive number, you can see that a vector pointing to the "left" would correspond to a negative number, making a one-dimensional vector nothing more than a signed (+/-) number. This explains the essential concept of a vector: only _length_ and _direction_ ("left" or "right" in this case) count, not position.

So, what about 2 dimensional vectors? Well, we can think of them as consisting not just of "left" and "right, but "up" and "down" too:

![Various 2D Vectors](../assets/Images/Scripting_Reference/Additional_Information/Vector_Image_Various.png)Now, those are not actually vectors yet as we still have to reduce them down using their start and end coordinates. Looking at vector "a" we can see it has a start coordinate of \[2,2\] and an end coordinate of \[4,3\] and so to get the vector from this we need to reduce it down by subtracting the end coordinates from the start coordinates like this:

a = \[(x2-x1), (y2-y1)\] = \[(4-2), (3-2)\] = \[2,1\]

Let's do the same for vector b now:

b = \[(-1.2 -(-3.2)) ,(2.1 - 1.1)\] = \[2 ,1\]

Notice something? Those two vectors are the same! This is yet another demonstration that a vector has no position, only direction and length, and we can draw those vectors relative to each other around a local \[0,0\] axis:

![2D Vectors aroun [0, 0]](../assets/Images/Scripting_Reference/Additional_Information/Vector_Image_2D.png)This means that a 2D vector is defined by two values, an "x" and a "y" position relative to the local \[0,0\] axis. And what about 3D vectors? Well, they have the added dimension of "depth" to contend with and would be calculated as positions "x", "y" and "z" around a local axis something like this:

![3D Vectors](../assets/Images/Scripting_Reference/Additional_Information/Vector_Image_3D.png)A good example of a vector used in GameMaker is the physics **gravity** property in the room editor. The gravity is calculated as a vector around a \[0,0\] position. So, if you define gravity as \[x0, y10\], the gravity would be _down_ with a force of 10.

Ordinarily, vectors can be used in many situations but sometimes you want to constrain their value (like when dealing with angles) which is why we **normalise** them. This is essentially a mathematical trick that is used to convert a vector of length _n_ to a vector of length 1, meaning that the vector components get _normalised_ to be between 0 and 1. These vectors are also called **unit vectors**:

![Unit Vector example](../assets/Images/Scripting_Reference/Additional_Information/Vector_Image_Normalised_1D.png)To calculate a normalised vector, we must first have the original vector components, then use them to get the length of the vector. We then divide each of the vector components by this length to get the normalised vector components which form the normalised vector in which the **sum of the squares of all coordinates is equal to 1**. Here's how:

![Vector Normalisation](../assets/Images/Scripting_Reference/Additional_Information/Vector_Image_Normalised_1.png)First we take the coordinates of the vector and get the components:

vx = (x2 - x1); // = (7 - 1) = 6
vy = (y2 - y1); // = (4 - 1) = 3

We then use these values to calculate the length of the vector:

len = sqrt(sqr(vx) + sqr(vy)); // = sqrt(36 + 9) = sqrt(45) = 6.708203932499369

Now, that gives us the exact length of the vector "a", so let's use that to normalise the two vector components vx and vy:

vx = (vx/len); // = (6 / 6.708203932499369) = 0.8944271909999159
vy = (vy/len); // = (3 / 6.708203932499369) = 0.4472135954999579

Great! We have now normalised the components of the vector! But of what practical use is that in the context of GameMaker? Okay, let's give you a practical example...

Say you have a game where the player has to shoot at an enemy and you need to know how much the bullet object has to move along the x and y axis each step to hit it:

![Vector Game Example](../assets/Images/Scripting_Reference/Additional_Information/Vector_Image_Normalised_2.png)For this you would use the player and enemy coordinates to get the vector components and the length, then you would normalise them to get a value between 0 and 1 which you would finally multiply by the speed you wish the bullet to travel at each step. These final two values you would then store and add onto the starting x and y coordinates each step. Sounds complicated? It's not, look (values have been rounded to one decimal place for simplicity):

px = 100;
py = 425;
ex = 356;
ey = 83;
bullet\_speed = 5;

vx = (ex - px); // = 256
vy = (ey - py); // = -342

len = sqrt(sqr(vx) + sqr(vy)); // = sqrt(65536 + 116964) = 427.2

vx = vx / len; // = 0.6
vy = vy / len; // = 0.8

speed\_x = vx \* bullet\_speed; // = 3
speed\_y = vy \* bullet\_speed; // = 4

So, to hit the target we need to add 3 to the bullets x coordinate and 4 to its y coordinate every step.