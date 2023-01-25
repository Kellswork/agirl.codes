---
title: 'Difference Between an Array and a List in C#'
date: 23-01-2023
fullDate: Wednesday, 25 January 2022
tags: C#
image: '/posts-images/array-and-list.jpg'
description: 'I share the difference between an array and a list in c sharp(C#). How to instantiate an array and a list, and when to use an Array vs a List.'
url: '/difference-between-an-array-and-a-list-in-csharp'
---

**Array**

An array stores a fixed amount of variables of the same data type(string, int, char). It is strongly typed and belongs to the `System.Array` Namespace.

There are 3 types of arrays:

- single dimensional
- Multi-dimensional
- Jagged

The most commonly used is the single-dimensional array.

**List**

A List is a dynamic array that increases and decreases according to data size. It stores a generic collection of objects.
It is not strongly typed(strings and numbers can be in a List) and belongs to the `System.Collection` namespace.


### How to instantiate an array and a List

**Array**

To instantiate an array, specify the variable **type**(string, int, char ), followed by the array **name** and then the array **length**.


```csharp
using System.Array; // import array class

int[] numberArray

numberArray = new int[] { 5, 3, 2, 9};

```

 **List**

To instantiate a List, call the **List** **class**, followed by the **type** in an angled bracket, and then the List **name**. 
The `new` keyword instantiates the List Class.


```csharp
using System.Collection; // import List class

List<int> listExample = new List<int>{5, 3, 2, 9};

// shorter version
var listExample = new List<int> {5, 3, 2, 9};

```

### Can I instantiate an empty array or List?

**Array**

You can create an empty array by setting the length to [0]. To instantiate the Array, You must specify the array length.

Use `Array.Empty<int>()` to instantiate an empty array instead of creating an empty Array with length[0].

```csharp
var newArray = new int[0] 

// recommended

var newArray = Array.Empty<int>();

```

**List**

Yes, you can instantiate an empty list. Because of its dynamic nature, the List will automatically increase or decrease in size as needed.

```csharp

var newList = new List<int>();

```

### How to check the length of an Array and a List

**Array**

`Length` returns the total number of elements in an array

```csharp

string[] total = new string[] {"love", "live", "life", "fly", "soar"}

Console.WriteLine(total.Length) // 5
```

**List**

`Count` returns the total number of elements in a list

```csharp
var total = new List<string> {"love", "live", "life", "fly", "soar"}

Console.WriteLine(total.Count()) //5
```

### When to use an Array vs A list

If the data size is fixed and you know the size of the data, or you want to optimise for a specific reason, then an Array can come in handy.
If the operation involves adding and removing data, use a List. It requires no resizing.

### Conclusion

A List is the preferred choice when it comes to choosing to use either an Array or a List, even when no data resizing is needed.
Most operations you want to use an Array for can be done with a List.