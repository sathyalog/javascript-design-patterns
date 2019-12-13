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
3. MVC Pattern - The Model-View-Controller pattern consists of the names of its actors: Model - stores an application data; View - renders Model for a client; and Controller - updates Model by reacting on client's actions. 
**Eg:** Angular framework
4. MVP Pattern - Model-View-Presenter is a design pattern which separates the code for a specific widget/functionality to three sections:
Model - In which the data model for the widget is defined.
View - In which the logic behind the UI is handled, with UI events, data visualization and other UI centric logic.
Presenter - Where the logic behind the functionality of the widgets rests, such as data manipulation, data storing and loading, application events, etc… 
**Eg:** Android, Backbone frameworks


    ___MVC vs MVP___
    In MVC, the views have access to both models and controllers in an MVC model. Where MVP differs is the view doesn't have access to the model. It has to get it from the presenter. And the presenter serves as the logic and supplier of data. 
    ![MVC vs MVP](/assets/images/images.png)

5. MVVM Pattern - Model-View-ViewModel (MVVM) is a structural design pattern that separates objects into three distinct groups:

    Models hold application data. They’re usually structs or simple classes.
    Views display visual elements and controls on the screen. They’re typically subclasses of UIView.(REACT- stateless components)
    View models transform model information into values that can be displayed on a view. They’re usually classes, so they can be passed around as references.(React - stateful components)

6. Decorator Pattern - The Decorator Pattern attaches additional responsibilities to an object dynamically.
Angular2 Uses decorators(@Component) and also react Link uses decorators.
**Eg:** https://medium.com/jsguru/javascript-decorators-dac7d4b6bba3

> Behavioral Patterns

