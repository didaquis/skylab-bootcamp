# Challenge Prototype & Inheritance [2h]

# Goals

-  Practice Prototype & Inheritance

# Tasks


### Person

a) Write a constructor function called Person and that has the following arguments:

```
first-name          //string
last-name           //string
age                 //number
gender              //string
interests           //array
```

b) Write the following three methods for Person.

```
greeting() //returns: Hi! I'm <first-name>.
farewell() //returns: <first-name> has left the building. Bye for now!
bio()      //returns: <first-name> <last-name> is <age> years old. <He/She> likes <interest-1>, <interest-2>, .... and <interest-n>.
```


### Student

a) Write a constructor function called Student that inherit from Person and that has the following arguments:

```
first-name          //string
last-name           //string
age                 //number
gender              //string
interests           //array
```

b) The Student must inherit all methods from Person and overwrite greeting method to change its behavior to print:

```
greeting() //returns: Yo! I'm  <first-name>.
```


### Teacher

a) Write a constructor function called Teacher that inherit from Person and that has the following arguments:

```
first-name          //string
last-name           //string
age                 //number
gender              //string
interests           //array
subject             //string
```

b) The Teacher must inherit all methods from Person and overwrite greeting method to change its behavior to print:

```
greeting() //returns: Hello. My name is <Mr./Mrs> <last-name> and I teach <subject>.
```
