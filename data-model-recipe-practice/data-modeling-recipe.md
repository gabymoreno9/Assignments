# Data Model Recipe Practice

Practicing how data models work. By Gabby Moreno and Amy Ung.

## Getting Started

**Database:** made up of 1 or more tbales
**Tables:** has one or more columns
**Columns:** (also called Attributes) Details about entity
**Entities:** Usually represents a person, thing, or event

### Exercise 1.

Imagine you are creating a website to organize your personal recipe collection. You want to be able to:

- See the recipe name and description
    - Recipe Name (Data Type: Text)
    - Recibe Description/About (Data Type: Text)
- Filter by vegetarian or non-vegetarian recipes
    - Vegitarian (Data Type: Boolean)
- Sort by date added to your collection
    - Date Added (Data Type: Date/Datetime)
- Filter by which meal of the day the recipe is for
    - Meal Type (Data Type: Text)
- Track how many times you've made each recipe
    - Times Cooked (Data Type: Integer)
- Find out which friend gave you this recipe (if any)
    - Recommended By (Data Type: Text)


Make a data model for this app, and answer the following questions:

-What is the entity?
- Recipe Info is the name of the table/entity

- What are the attributes of the entity?
- The attributes are details about the entity and are also columns. In
    this case, our attributes are 
    - Recipe Name
    - About
    - Vegitarian
    - Date Affef
    - Meal Type
    - Times Cooked
    - Recommended

- What is the primary key of the entity?
    - the unique identifyer we have for this entity is 

- What are the data types of the attributes?
    - Recipe Name (Data Type: Text)
    - Recibe Description/About (Data Type: Text)
    - Vegitarian (Data Type: Boolean)
    - Date Added (Data Type: Date/Datetime)
    - Meal Type (Data Type: Text)
    - Times Cooked (Data Type: Integer)
    - Recommended By (Data Type: Text)

-Are there other ways you might model this data?
    - We were thinking about making another entity for the 
    the filter by which meal of the day the recipe is for. So making
    a separate table for just meals


### Exercise 2

-   In your own words, define the following terms:  
    - Entity
        - entity is a table and that represents a person, thing or event
    - Attribute
        - columns in the table
    - Data type
        - consists of text, boolean, integers, float, text, varchar, date/datetime
        - help give more contex to each attribute
    - Primary key
        - identifies or ID to locate the instances/information
    - Schema
        - the system of tables columns in the database




## Pictures

* [Part 1](https://i.ibb.co/nw4wwFg/database1.jpg) - Defining database and sketching it
* [Part 2](https://i.ibb.co/ys5qgbB/database2.jpg) - Example and the Exercise Breakdown
* ![Part1][1]
⋮
[1]: https://i.ibb.co/nw4wwFg/database1.jpg
* ![Part2][2]
⋮
[2]: https://i.ibb.co/ys5qgbB/database2.jpg


## Acknowledgments

* color coding helps

