---
title: "Matrix Functions"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/Matrix_Functions.htm"
converted: "2025-09-14T04:00:01.779Z"
---

# Matrix Functions

A matrix is a collection of numbers arranged into a fixed number of rows and columns.

Usually the numbers are real numbers, but that doesn't always have to be the case. The following image shows in general how a matrix is constructed with four rows and four columns:

![Matrix example image](https://manual.gamemaker.io/monthly/en/assets/Images/Scripting_Reference/GML/Reference/Maths/Matrix_Example.png)The top row is row 1, the leftmost column is column 1, and this matrix is a 4x4 matrix because it has four rows and four columns (other sized matrices can be constructed). In describing matrices, the format is always rows / columns, and each number that makes up a matrix is called an _element_ of the matrix. The elements in a matrix have specific locations, described by their row and column position where the upper left corner of the matrix is row 1 column 1. In the above matrix example, the element at row 1 col 1 is the value 1. The element at row 2 column 3 is the value 4.8.

Matrices are very important for many things but are used most in dealing with 3D space, for example they can be used for setting the camera view or for translating or transforming a model.

GameMaker has a number of functions that deal with matrices, including the matrix\_build\* functions which create a matrix of a certain type, functions to perform matrix math and the functions [matrix\_get](matrix_get.md) and [matrix\_set](matrix_set.md) that allow you to get or set the matrix that's currently used for drawing. Finally, there are the matrix stack functions that can be used, for example, when working with hierarchical transformations (e.g. skeletal animation).

### Storage

Matrices do not have their own datatype in GameMaker and are always stored in [Arrays](../../../GML_Overview/Arrays.md).

The array that stores the matrix contains 16 values in total, with the elements stored in **[column-major order](https://en.wikipedia.org/wiki/Row-_and_column-major_order)**, i.e. the initial 4 elements are **column 1**, the next 4 elements are **column 2** and so on, as part of a [4x4 matrix](Matrix_Functions.md). The following image shows the array indices mapped to their corresponding matrix element in this ordering:

![](../../../../assets/Images/Scripting_Reference/GML/Reference/Maths/matrix_array_indices_column_major.png)

Alternatively, you can create a matrix yourself by creating a 16-element array. Note, however, that when splitting the initialisation of the matrix over multiple lines, every line represents a column rather than a row:

the\_matrix =
\[
    1, 0, 0, 0,    // Col 1
    0, 1, 0, 0,    // Col 2
    0, 0, 1, 0,    // Col 3
    x, y, z, 1     // Col 4
\];

## Function Reference

### Modifying Built-in Matrices

-   [matrix\_get](matrix_get.md)
-   [matrix\_set](matrix_set.md)

### Matrix Math

-   [matrix\_multiply](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_multiply.md)
-   [matrix\_inverse](matrix_inverse.md)
-   [matrix\_transform\_vertex](matrix_transform_vertex.md)

### Building Matrices

-   [matrix\_build](matrix_build.md)
-   [matrix\_build\_identity](matrix_build_identity.md)
-   [matrix\_build\_lookat](matrix_build_lookat.md)
-   [matrix\_build\_projection\_ortho](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_build_projection_ortho.md)
-   [matrix\_build\_projection\_perspective](matrix_build_projection_perspective.md)
-   [matrix\_build\_projection\_perspective\_fov](matrix_build_projection_perspective_fov.md)

### Matrix Stack Functions

The following functions are for using a matrix **stack**, which is similar to a [DS Stack](../../Data_Structures/DS_Stacks/ds_stack_create.md), but designed for use only with matrices. This is a handy way to apply multiple matrix operations (like transforms) one after another when creating a 3D scene.

NOTE The matrix stack has a maximum size of 50 items.

-   [matrix\_stack\_is\_empty](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_stack_is_empty.md)
-   [matrix\_stack\_clear](matrix_stack_clear.md)
-   [matrix\_stack\_set](matrix_stack_set.md)
-   [matrix\_stack\_push](matrix_stack_push.md)
-   [matrix\_stack\_pop](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_stack_pop.md)
-   [matrix\_stack\_top](matrix_stack_top.md)