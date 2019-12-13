## JavaScript Design Patterns

> Creational Patterns
1. Prototype Pattern - The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or sample - object.  


2. Singleton Pattern - A Singleton only allows for a single instantiation, but many instances of the same object.
 The Singleton restricts clients from creating multiple objects, after the first object created, it will return instances of itself.  

3. Factory Pattern - Factory pattern is great when you want a mechanism to create other objects.
In Factory pattern, we create object without exposing the creation logic to the client and refer to newly created object using a common interface.
4. Abstract Factory Pattern - The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes or constructors, which makes that pattern, of course, fall under the creational category.

___Factory Vs Abstract Factory___

* Factory Pattern takes care of creating objects from the same family. Abstract Factory Pattern, as mentioned, will provide a constructor for creating families of related objects, without specifying concrete classes or constructors. 

> Structural Patterns
1. Module Pattern - Very commonly used pattern across frameworks like react, angular etc. Importing/exporting components comes under this pattern.
2. Mixin Pattern - Mixin Pattern is a great way to mix functions and instances of a class after they have been created. In other words, you could use Mixins to add interesting functions to the car class we created.

> Behavioral Patterns

