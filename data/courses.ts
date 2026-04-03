export interface Lesson {
  title: string
  content: string
}

export interface Course {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  thumbnail: string
  lessons: Lesson[]
}

export const courses: Course[] = [
  {
    id: 'python-basics',
    title: 'Python Programming Fundamentals',
    description: 'Master Python from scratch. Learn variables, data types, functions, OOP, and file handling with hands-on examples.',
    difficulty: 'beginner',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
    lessons: [
      {
        title: 'Introduction to Python',
        content: `# Introduction to Python

## What is Python?

Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python has become one of the most popular programming languages in the world.

## Why Learn Python?

- **Easy to Learn**: Python's syntax is clean and intuitive
- **Versatile**: Used in web development, data science, AI, automation, and more
- **Large Community**: Extensive libraries and strong community support
- **High Demand**: One of the most sought-after skills in the job market

## Setting Up Python

### Installation

1. Download Python from [python.org](https://www.python.org)
2. Run the installer (check "Add Python to PATH")
3. Verify installation: \`python --version\`

### Your First Python Program

\`\`\`python
print("Hello, World!")
\`\`\`

### Running Python Code

- **Interactive Mode**: Type \`python\` in terminal
- **Script Mode**: Save as \`.py\` file and run \`python filename.py\`

## Python Syntax Basics

Python uses indentation (whitespace) to define code blocks, unlike other languages that use braces.

\`\`\`python
if True:
    print("This is indented")
    print("Same block")
print("New block")
\`\`\`

## Key Takeaways

- Python is beginner-friendly and powerful
- Proper indentation is crucial
- Start coding immediately with print statements
`,
      },
      {
        title: 'Variables and Data Types',
        content: `# Variables and Data Types

## Variables in Python

Variables are containers for storing data values. In Python, you don't need to declare the type explicitly.

\`\`\`python
# Creating variables
name = "Alice"
age = 25
height = 5.7
is_student = True

print(name)  # Output: Alice
\`\`\`

## Basic Data Types

### 1. Strings (str)
Text data enclosed in quotes.

\`\`\`python
name = "John Doe"
message = 'Hello, Python!'
multiline = """This is a
multiline string"""
\`\`\`

### 2. Integers (int)
Whole numbers without decimals.

\`\`\`python
age = 30
count = -5
large_number = 1000000
\`\`\`

### 3. Floats (float)
Numbers with decimal points.

\`\`\`python
price = 19.99
pi = 3.14159
temperature = -2.5
\`\`\`

### 4. Booleans (bool)
True or False values.

\`\`\`python
is_active = True
has_permission = False
\`\`\`

### 5. None Type
Represents absence of value.

\`\`\`python
result = None
\`\`\`

## Type Conversion

\`\`\`python
# String to int
num_str = "42"
num_int = int(num_str)

# Int to string
age = 25
age_str = str(age)

# To float
price = float("19.99")

# To boolean
is_valid = bool(1)  # True
\`\`\`

## Checking Types

\`\`\`python
x = 42
print(type(x))  # <class 'int'>

name = "Python"
print(type(name))  # <class 'str'>
\`\`\`

## Practice Exercise

\`\`\`python
# Create variables for:
# - Your name (string)
# - Your age (integer)
# - Your height (float)
# - Your employment status (boolean)

name = "Your Name"
age = 25
height = 5.9
is_employed = True

print(f"My name is {name}")
print(f"I am {age} years old")
\`\`\`
`,
      },
      {
        title: 'Operators and Expressions',
        content: `# Operators and Expressions

## Arithmetic Operators

Used for mathematical operations.

\`\`\`python
a = 10
b = 3

print(a + b)  # Addition: 13
print(a - b)  # Subtraction: 7
print(a * b)  # Multiplication: 30
print(a / b)  # Division: 3.333...
print(a // b) # Floor Division: 3
print(a % b)  # Modulus: 1
print(a ** b) # Exponentiation: 1000
\`\`\`

## Comparison Operators

Return boolean values based on comparison.

\`\`\`python
x = 5
y = 10

print(x == y)  # Equal: False
print(x != y)  # Not Equal: True
print(x > y)   # Greater than: False
print(x < y)   # Less than: True
print(x >= 5)  # Greater or equal: True
print(x <= 4)  # Less or equal: False
\`\`\`

## Logical Operators

Combine conditional statements.

\`\`\`python
a = True
b = False

print(a and b)  # AND: False
print(a or b)   # OR: True
print(not a)    # NOT: False
\`\`\`

## Assignment Operators

\`\`\`python
x = 10
x += 5  # x = x + 5 → 15
x -= 3  # x = x - 3 → 12
x *= 2  # x = x * 2 → 24
x /= 4  # x = x / 4 → 6.0
x //= 2 # x = x // 2 → 3.0
\`\`\`

## Membership Operators

Check if value exists in a sequence.

\`\`\`python
fruits = ["apple", "banana", "cherry"]

print("apple" in fruits)      # True
print("orange" not in fruits) # True
\`\`\`

## Identity Operators

Compare object identity.

\`\`\`python
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a is b)      # False (different objects)
print(a == b)      # True (same values)
print(a is c)      # True (same object)
print(a is not b)  # True
\`\`\`

## Operator Precedence

Order of operations (highest to lowest):
1. \`**\` (exponentiation)
2. \`*\\`, \`/\\`, \`//\`, \`%\`
3. \`+\`, \`-\`
4. Comparison operators
5. Logical operators

\`\`\`python
result = 2 + 3 * 4  # 14, not 20
result = (2 + 3) * 4  # 20
\`\`\`
`,
      },
      {
        title: 'Control Flow - Conditionals',
        content: `# Control Flow - Conditionals

## if Statements

Execute code based on conditions.

\`\`\`python
age = 18

if age >= 18:
    print("You are an adult")
\`\`\`

## if-else Statements

\`\`\`python
age = 16

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")
\`\`\`

## if-elif-else Statements

Multiple conditions.

\`\`\`python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Grade: {grade}")  # Output: Grade: B
\`\`\`

## Nested Conditionals

\`\`\`python
age = 25
has_license = True

if age >= 18:
    if has_license:
        print("You can drive")
    else:
        print("Get a license first")
else:
    print("Too young to drive")
\`\`\`

## Truthy and Falsy Values

\`\`\`python
# Falsy values
bool(0)      # False
bool("")     # False
bool([])     # False
bool({})     # False
bool(None)   # False

# Truthy values
bool(1)      # True
bool("Hi")   # True
bool([1])    # True
\`\`\`

## Practical Example

\`\`\`python
# Temperature checker
temp = 25

if temp > 30:
    print("It's hot! Stay hydrated.")
elif temp > 20:
    print("Nice weather! Perfect for outdoor activities.")
elif temp > 10:
    print("It's cool. Bring a jacket.")
else:
    print("It's cold! Dress warmly.")
\`\`\`

## Ternary Operator

One-line if-else.

\`\`\`python
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)  # Output: Adult
\`\`\`
`,
      },
      {
        title: 'Loops - for and while',
        content: `# Loops - for and while

## for Loops

Iterate over sequences.

\`\`\`python
# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Output:
# apple
# banana
# cherry
\`\`\`

## range() Function

\`\`\`python
# Basic range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# With start and end
for i in range(2, 6):
    print(i)  # 2, 3, 4, 5

# With step
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8

# Reverse
for i in range(5, 0, -1):
    print(i)  # 5, 4, 3, 2, 1
\`\`\`

## Looping Through Strings

\`\`\`python
for char in "Python":
    print(char)
# P, y, t, h, o, n
\`\`\`

## while Loops

Execute while condition is true.

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1
# 0, 1, 2, 3, 4
\`\`\`

## break Statement

Exit loop prematurely.

\`\`\`python
for i in range(10):
    if i == 5:
        break
    print(i)
# 0, 1, 2, 3, 4
\`\`\`

## continue Statement

Skip current iteration.

\`\`\`python
for i in range(5):
    if i == 2:
        continue
    print(i)
# 0, 1, 3, 4
\`\`\`

## else with Loops

Execute after loop completes (not on break).

\`\`\`python
for i in range(3):
    print(i)
else:
    print("Loop completed!")
# 0, 1, 2, Loop completed!
\`\`\`

## Nested Loops

\`\`\`python
for i in range(3):
    for j in range(3):
        print(f"({i}, {j})", end=" ")
    print()

# Output:
# (0, 0) (0, 1) (0, 2)
# (1, 0) (1, 1) (1, 2)
# (2, 0) (2, 1) (2, 2)
\`\`\`

## Practical Examples

\`\`\`python
# Sum of numbers
total = 0
for num in range(1, 11):
    total += num
print(f"Sum: {total}")  # 55

# Find even numbers
for num in range(1, 21):
    if num % 2 == 0:
        print(num, end=" ")
# 2 4 6 8 10 12 14 16 18 20
\`\`\`
`,
      },
      {
        title: 'Functions',
        content: `# Functions

## Defining Functions

\`\`\`python
def greet():
    print("Hello, World!")

greet()  # Call the function
\`\`\`

## Parameters and Arguments

\`\`\`python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Hello, Alice!
\`\`\`

## Multiple Parameters

\`\`\`python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8
\`\`\`

## Default Parameters

\`\`\`python
def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()        # Hello, Guest!
greet("Bob")   # Hello, Bob!
\`\`\`

## Keyword Arguments

\`\`\`python
def describe_pet(pet_name, animal_type):
    print(f"{pet_name} is a {animal_type}")

describe_pet(animal_type="dog", pet_name="Buddy")
\`\`\`

## Return Values

\`\`\`python
def square(x):
    return x * x

result = square(4)
print(result)  # 16
\`\`\`

## Multiple Return Values

\`\`\`python
def calculate(a, b):
    sum_val = a + b
    diff = a - b
    product = a * b
    return sum_val, diff, product

s, d, p = calculate(10, 5)
print(s, d, p)  # 15 5 50
\`\`\`

## Variable-Length Arguments

\`\`\`python
# *args for positional arguments
def add_all(*args):
    return sum(args)

print(add_all(1, 2, 3, 4))  # 10

# **kwargs for keyword arguments
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="NYC")
\`\`\`

## Lambda Functions

Anonymous one-line functions.

\`\`\`python
square = lambda x: x * x
print(square(5))  # 25

# With map
numbers = [1, 2, 3, 4]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16]
\`\`\`

## Scope

\`\`\`python
global_var = "I'm global"

def my_func():
    local_var = "I'm local"
    print(global_var)  # Accessible
    print(local_var)   # Accessible

print(global_var)  # Accessible
# print(local_var)  # Error!
\`\`\`

## Docstrings

\`\`\`python
def multiply(a, b):
    """
    Multiply two numbers.
    
    Args:
        a: First number
        b: Second number
    
    Returns:
        Product of a and b
    """
    return a * b
\`\`\`
`,
      },
      {
        title: 'Lists and Tuples',
        content: `# Lists and Tuples

## Lists

Ordered, mutable collections.

\`\`\`python
# Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
empty = []
\`\`\`

## Accessing Elements

\`\`\`python
fruits = ["apple", "banana", "cherry"]

print(fruits[0])    # apple
print(fruits[1])    # banana
print(fruits[-1])   # cherry (last)
print(fruits[-2])   # banana (second last)
\`\`\`

## Slicing

\`\`\`python
numbers = [0, 1, 2, 3, 4, 5]

print(numbers[1:4])   # [1, 2, 3]
print(numbers[:3])    # [0, 1, 2]
print(numbers[3:])    # [3, 4, 5]
print(numbers[::2])   # [0, 2, 4]
print(numbers[::-1])  # [5, 4, 3, 2, 1, 0]
\`\`\`

## Modifying Lists

\`\`\`python
fruits = ["apple", "banana", "cherry"]

# Change element
fruits[1] = "blueberry"

# Add elements
fruits.append("orange")      # Add to end
fruits.insert(1, "mango")    # Insert at index

# Remove elements
fruits.remove("apple")       # Remove by value
popped = fruits.pop()        # Remove last, return it
del fruits[0]                # Delete by index

# Clear list
fruits.clear()
\`\`\`

## List Methods

\`\`\`python
nums = [3, 1, 4, 1, 5]

nums.append(9)       # Add to end
nums.extend([2, 6])  # Add multiple
nums.insert(0, 0)    # Insert at index
nums.remove(1)       # Remove first occurrence
nums.index(4)        # Find index
nums.count(1)        # Count occurrences
nums.sort()          # Sort ascending
nums.reverse()       # Reverse
len(nums)            # Length
\`\`\`

## List Comprehensions

\`\`\`python
# Basic comprehension
squares = [x**2 for x in range(5)]
# [0, 1, 4, 9, 16]

# With condition
evens = [x for x in range(10) if x % 2 == 0]
# [0, 2, 4, 6, 8]

# Nested
matrix = [[i*j for j in range(3)] for i in range(3)]
# [[0, 0, 0], [0, 1, 2], [0, 2, 4]]
\`\`\`

## Tuples

Ordered, immutable collections.

\`\`\`python
# Creating tuples
coordinates = (10, 20)
colors = ("red", "green", "blue")
single = (42,)  # Note the comma
empty = ()
\`\`\`

## Tuple Operations

\`\`\`python
point = (10, 20, 30)

print(point[0])     # 10
print(point[-1])    # 30
print(point[1:3])   # (20, 30)

# Unpacking
x, y, z = point
print(x, y, z)  # 10 20 30

# Cannot modify!
# point[0] = 5  # Error!
\`\`\`

## When to Use Lists vs Tuples

- **Lists**: When you need to modify the collection
- **Tuples**: When data shouldn't change, for dictionary keys, or for performance
`,
      },
      {
        title: 'Dictionaries and Sets',
        content: `# Dictionaries and Sets

## Dictionaries

Key-value pairs, unordered (Python 3.7+ maintains insertion order).

\`\`\`python
# Creating dictionaries
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Alternative
person = dict(name="Bob", age=30)

# Empty
empty = {}
\`\`\`

## Accessing Values

\`\`\`python
person = {"name": "Alice", "age": 25}

print(person["name"])     # Alice
print(person.get("age"))  # 25
print(person.get("job"))  # None (no error)
print(person.get("job", "Unknown"))  # Unknown
\`\`\`

## Modifying Dictionaries

\`\`\`python
person = {"name": "Alice", "age": 25}

# Add/Update
person["age"] = 26
person["job"] = "Engineer"

# Remove
person.pop("age")
del person["name"]

# Clear
person.clear()
\`\`\`

## Dictionary Methods

\`\`\`python
person = {"name": "Alice", "age": 25, "city": "NYC"}

# Get all keys
keys = person.keys()      # dict_keys(['name', 'age', 'city'])

# Get all values
values = person.values()  # dict_values(['Alice', 25, 'NYC'])

# Get items (key-value pairs)
items = person.items()    # dict_items([('name', 'Alice'), ...])

# Check existence
"name" in person  # True

# Update
person.update({"age": 26, "country": "USA"})

# Length
len(person)  # 3
\`\`\`

## Iterating Through Dictionaries

\`\`\`python
person = {"name": "Alice", "age": 25, "city": "NYC"}

# Keys
for key in person:
    print(key)

# Values
for value in person.values():
    print(value)

# Items
for key, value in person.items():
    print(f"{key}: {value}")
\`\`\`

## Dictionary Comprehensions

\`\`\`python
# Basic
squares = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# With condition
evens = {x: x**2 for x in range(10) if x % 2 == 0}
# {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}
\`\`\`

## Sets

Unordered collection of unique elements.

\`\`\`python
# Creating sets
fruits = {"apple", "banana", "cherry"}
numbers = set([1, 2, 3, 4, 5])
empty = set()  # Not {} (that's empty dict)
\`\`\`

## Set Operations

\`\`\`python
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Add/Remove
set1.add(6)
set1.remove(3)  # Error if not exists
set1.discard(10)  # No error if not exists

# Union
union = set1 | set2  # {1, 2, 3, 4, 5, 6, 7, 8}

# Intersection
intersection = set1 & set2  # {4, 5}

# Difference
diff = set1 - set2  # {1, 2, 3}

# Symmetric Difference
sym_diff = set1 ^ set2  # {1, 2, 3, 6, 7, 8}
\`\`\`

## Practical Example

\`\`\`python
# Count word frequency
text = "hello world hello"
words = text.split()
word_count = {}

for word in words:
    word_count[word] = word_count.get(word, 0) + 1

print(word_count)  # {'hello': 2, 'world': 1}
\`\`\`
`,
      },
      {
        title: 'Object-Oriented Programming',
        content: `# Object-Oriented Programming

## Classes and Objects

\`\`\`python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} says Woof!"

# Create object
my_dog = Dog("Buddy", 3)
print(my_dog.name)  # Buddy
print(my_dog.bark())  # Buddy says Woof!
\`\`\`

## The __init__ Method

Constructor method, called when object is created.

\`\`\`python
class Person:
    def __init__(self, name, age):
        self.name = name  # Instance attribute
        self.age = age
    
    def greet(self):
        return f"Hi, I'm {self.name}"
\`\`\`

## Class Attributes vs Instance Attributes

\`\`\`python
class Dog:
    species = "Canine"  # Class attribute (shared)
    
    def __init__(self, name):
        self.name = name  # Instance attribute (unique)

dog1 = Dog("Buddy")
dog2 = Dog("Max")

print(dog1.species)  # Canine
print(dog2.species)  # Canine
print(dog1.name)     # Buddy
print(dog2.name)     # Max
\`\`\`

## Methods

\`\`\`python
class Calculator:
    def add(self, a, b):
        return a + b
    
    def subtract(self, a, b):
        return a - b
    
    @staticmethod
    def multiply(a, b):
        return a * b
    
    @classmethod
    def create(cls):
        return cls()

calc = Calculator()
print(calc.add(5, 3))  # 8
print(Calculator.multiply(4, 5))  # 20
\`\`\`

## Inheritance

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "Some sound"

class Dog(Animal):  # Dog inherits from Animal
    def speak(self):  # Override parent method
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.speak())  # Woof!
print(cat.speak())  # Meow!
\`\`\`

## super() Function

Call parent class methods.

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # Call parent constructor
        self.breed = breed
\`\`\`

## Encapsulation

Private attributes (convention with underscore).

\`\`\`python
class BankAccount:
    def __init__(self, balance):
        self._balance = balance  # Protected
    
    def deposit(self, amount):
        self._balance += amount
    
    def get_balance(self):
        return self._balance
\`\`\`

## Polymorphism

Same interface, different implementations.

\`\`\`python
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, w, h):
        self.width = w
        self.height = h
    
    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, r):
        self.radius = r
    
    def area(self):
        return 3.14 * self.radius ** 2
\`\`\`

## Special Methods (Magic Methods)

\`\`\`python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
    
    def __str__(self):
        return f"{self.title} by {self.author}"
    
    def __len__(self):
        return len(self.title)
    
    def __repr__(self):
        return f"Book('{self.title}', '{self.author}')"
\`\`\`
`,
      },
      {
        title: 'File Handling',
        content: `# File Handling

## Opening Files

\`\`\`python
# Basic open
file = open("example.txt", "r")
content = file.read()
file.close()

# Recommended: using context manager
with open("example.txt", "r") as file:
    content = file.read()
# File automatically closed
\`\`\`

## File Modes

- \`r\`: Read (default)
- \`w\`: Write (overwrites)
- \`a\`: Append
- \`r+\`: Read and write
- \`b\`: Binary mode
- \`t\`: Text mode (default)

## Reading Files

\`\`\`python
# Read entire file
with open("file.txt", "r") as f:
    content = f.read()

# Read line by line
with open("file.txt", "r") as f:
    for line in f:
        print(line.strip())

# Read all lines into list
with open("file.txt", "r") as f:
    lines = f.readlines()

# Read specific number of characters
with open("file.txt", "r") as f:
    content = f.read(100)
\`\`\`

## Writing Files

\`\`\`python
# Write (overwrites existing)
with open("file.txt", "w") as f:
    f.write("Hello, World!\\n")
    f.write("Second line\\n")

# Append
with open("file.txt", "a") as f:
    f.write("Appended line\\n")

# Write multiple lines
lines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]
with open("file.txt", "w") as f:
    f.writelines(lines)
\`\`\`

## Working with Paths

\`\`\`python
import os

# Current directory
cwd = os.getcwd()

# Join paths
path = os.path.join("folder", "subfolder", "file.txt")

# Check if exists
os.path.exists("file.txt")

# Check if file
os.path.isfile("file.txt")

# Check if directory
os.path.isdir("folder")

# Get file size
size = os.path.getsize("file.txt")
\`\`\`

## pathlib Module (Modern Approach)

\`\`\`python
from pathlib import Path

# Create path object
path = Path("folder/file.txt")

# Read
content = path.read_text()

# Write
path.write_text("Hello!")

# Check existence
path.exists()

# Parent directory
path.parent

# File name
path.name

# Extension
path.suffix
\`\`\`

## Working with CSV Files

\`\`\`python
import csv

# Reading CSV
with open("data.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)

# Writing CSV
with open("output.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Age", "City"])
    writer.writerow(["Alice", 25, "NYC"])
\`\`\`

## Working with JSON Files

\`\`\`python
import json

# Reading JSON
with open("data.json", "r") as f:
    data = json.load(f)

# Writing JSON
data = {"name": "Alice", "age": 25}
with open("output.json", "w") as f:
    json.dump(data, f, indent=2)
\`\`\`

## Error Handling with Files

\`\`\`python
try:
    with open("file.txt", "r") as f:
        content = f.read()
except FileNotFoundError:
    print("File not found!")
except PermissionError:
    print("Permission denied!")
except Exception as e:
    print(f"Error: {e}")
\`\`\`
`,
      },
      {
        title: 'Exception Handling',
        content: `# Exception Handling

## try-except Blocks

\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
\`\`\`

## Multiple Exceptions

\`\`\`python
try:
    num = int(input("Enter a number: "))
    result = 10 / num
except ValueError:
    print("Invalid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
\`\`\`

## Catching Multiple Exceptions

\`\`\`python
try:
    # Some risky operation
    pass
except (ValueError, TypeError, ZeroDivisionError) as e:
    print(f"Error: {e}")
\`\`\`

## else Clause

Executes if no exception occurs.

\`\`\`python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Division by zero!")
else:
    print(f"Result: {result}")  # Runs if no exception
\`\`\`

## finally Clause

Always executes, regardless of exceptions.

\`\`\`python
try:
    file = open("file.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found!")
finally:
    file.close()  # Always runs
    print("Cleanup complete")
\`\`\`

## Raising Exceptions

\`\`\`python
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative!")
    if age > 150:
        raise ValueError("Age seems invalid!")
    return True

try:
    validate_age(-5)
except ValueError as e:
    print(f"Validation error: {e}")
\`\`\`

## Custom Exceptions

\`\`\`python
class InvalidEmailError(Exception):
    pass

class UserNotFoundError(Exception):
    pass

def send_email(email):
    if "@" not in email:
        raise InvalidEmailError("Invalid email format")
    # Send email logic
\`\`\`

## Best Practices

\`\`\`python
# Good: Specific exceptions
try:
    result = int(user_input)
except ValueError:
    print("Please enter a valid number")

# Bad: Catching all exceptions
try:
    result = int(user_input)
except:
    print("Something went wrong")

# Good: Log the exception
import logging

try:
    risky_operation()
except Exception as e:
    logging.error(f"Operation failed: {e}")
    raise  # Re-raise if needed
\`\`\`

## Common Built-in Exceptions

- \`ValueError\`: Invalid value
- \`TypeError\`: Wrong type
- \`KeyError\`: Missing dictionary key
- \`IndexError\`: List index out of range
- \`FileNotFoundError\`: File doesn't exist
- \`PermissionError\`: No permission
- \`AttributeError\`: Invalid attribute
- \`ImportError\`: Import failed
- \`RuntimeError\`: Generic runtime error
`,
      },
    ],
  },
  {
    id: 'relational-databases',
    title: 'Relational Databases & SQL',
    description: 'Learn SQL from basics to advanced. Master queries, joins, normalization, indexes, and database design principles.',
    difficulty: 'beginner',
    thumbnail: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&q=80',
    lessons: [
      {
        title: 'Introduction to Databases',
        content: `# Introduction to Databases

## What is a Database?

A database is an organized collection of structured information stored electronically. Databases allow for easy access, management, and updating of data.

## Types of Databases

### Relational Databases (RDBMS)
- Data organized in tables with rows and columns
- Examples: PostgreSQL, MySQL, SQLite, SQL Server, Oracle
- Use SQL (Structured Query Language)

### NoSQL Databases
- Document-based: MongoDB
- Key-Value: Redis
- Graph: Neo4j
- Column-family: Cassandra

## Why Relational Databases?

- **Data Integrity**: ACID properties ensure reliability
- **Structured Data**: Clear schema and relationships
- **SQL**: Powerful, standardized query language
- **Mature Technology**: Decades of development and optimization

## Key Concepts

### Table
A collection of related data organized in rows and columns.

\`\`\`
+----+----------+--------+----------+
| id | name     | age    | city     |
+----+----------+--------+----------+
| 1  | Alice    | 25     | NYC      |
| 2  | Bob      | 30     | LA       |
+----+----------+--------+----------+
\`\`\`

### Row (Record)
A single entry in a table representing one entity.

### Column (Field)
A specific attribute of the data (e.g., name, age).

### Primary Key
A unique identifier for each row.

### Foreign Key
A field that links to another table's primary key.

## Installing PostgreSQL

### Windows
1. Download from postgresql.org
2. Run installer
3. Set password for postgres user
4. Remember the port (default: 5432)

### macOS (Homebrew)
\`\`\`bash
brew install postgresql
brew services start postgresql
\`\`\`

### Connecting to Database
\`\`\`bash
psql -U postgres
\`\`\`

## Basic SQL Commands Overview

- **DDL**: CREATE, ALTER, DROP (structure)
- **DML**: SELECT, INSERT, UPDATE, DELETE (data)
- **DCL**: GRANT, REVOKE (permissions)
- **TCL**: COMMIT, ROLLBACK (transactions)
`,
      },
      {
        title: 'SQL Basics - SELECT',
        content: `# SQL Basics - SELECT

## The SELECT Statement

The SELECT statement retrieves data from a database.

\`\`\`sql
-- Select all columns
SELECT * FROM users;

-- Select specific columns
SELECT name, email FROM users;

-- Select with alias
SELECT name AS user_name, email AS user_email 
FROM users;
\`\`\`

## The WHERE Clause

Filter records based on conditions.

\`\`\`sql
-- Exact match
SELECT * FROM users WHERE age = 25;

-- Comparison operators
SELECT * FROM products WHERE price > 100;
SELECT * FROM products WHERE price >= 50;
SELECT * FROM products WHERE price < 30;
SELECT * FROM products WHERE price <= 75;

-- Not equal
SELECT * FROM users WHERE status != 'inactive';
SELECT * FROM users WHERE status <> 'inactive';
\`\`\`

## Logical Operators

\`\`\`sql
-- AND
SELECT * FROM users 
WHERE age > 18 AND city = 'NYC';

-- OR
SELECT * FROM users 
WHERE city = 'NYC' OR city = 'LA';

-- NOT
SELECT * FROM users 
WHERE NOT status = 'inactive';

-- Combined
SELECT * FROM users 
WHERE (age > 18 AND city = 'NYC') 
   OR status = 'vip';
\`\`\`

## LIKE Operator (Pattern Matching)

\`\`\`sql
-- Starts with 'J'
SELECT * FROM users WHERE name LIKE 'J%';

-- Ends with 'son'
SELECT * FROM users WHERE name LIKE '%son';

-- Contains 'oh'
SELECT * FROM users WHERE name LIKE '%oh%';

-- Single character wildcard
SELECT * FROM users WHERE name LIKE 'J_hn';  -- John, John

-- Case insensitive (PostgreSQL)
SELECT * FROM users WHERE name ILIKE 'john%';
\`\`\`

## IN Operator

\`\`\`sql
-- Multiple values
SELECT * FROM users 
WHERE city IN ('NYC', 'LA', 'Chicago');

-- With NOT
SELECT * FROM users 
WHERE city NOT IN ('NYC', 'LA');
\`\`\`

## BETWEEN Operator

\`\`\`sql
-- Range (inclusive)
SELECT * FROM products 
WHERE price BETWEEN 50 AND 100;

-- With dates
SELECT * FROM orders 
WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';
\`\`\`

## NULL Values

\`\`\`sql
-- Check for NULL
SELECT * FROM users WHERE email IS NULL;

-- Check for NOT NULL
SELECT * FROM users WHERE email IS NOT NULL;

-- Note: NULL != NULL, use IS NULL
\`\`\`

## ORDER BY

Sort results.

\`\`\`sql
-- Ascending (default)
SELECT * FROM users ORDER BY name;

-- Descending
SELECT * FROM users ORDER BY age DESC;

-- Multiple columns
SELECT * FROM users 
ORDER BY city ASC, age DESC;
\`\`\`

## LIMIT and OFFSET

\`\`\`sql
-- Limit results
SELECT * FROM users LIMIT 10;

-- Pagination (skip 10, take 10)
SELECT * FROM users LIMIT 10 OFFSET 10;

-- PostgreSQL shorthand
SELECT * FROM users LIMIT 10 OFFSET 10;
\`\`\`
`,
      },
      {
        title: 'INSERT, UPDATE, DELETE',
        content: `# INSERT, UPDATE, DELETE

## INSERT Statement

Add new records to a table.

\`\`\`sql
-- Insert single row
INSERT INTO users (name, email, age, city)
VALUES ('Alice', 'alice@email.com', 25, 'NYC');

-- Insert multiple rows
INSERT INTO users (name, email, age, city)
VALUES 
    ('Bob', 'bob@email.com', 30, 'LA'),
    ('Charlie', 'charlie@email.com', 28, 'Chicago'),
    ('Diana', 'diana@email.com', 22, 'NYC');

-- Insert all columns (when order matches)
INSERT INTO users
VALUES (1, 'Eve', 'eve@email.com', 35, 'Boston', 'active');
\`\`\`

## UPDATE Statement

Modify existing records.

\`\`\`sql
-- Update single column
UPDATE users 
SET age = 26 
WHERE name = 'Alice';

-- Update multiple columns
UPDATE users 
SET age = 31, city = 'San Francisco'
WHERE name = 'Bob';

-- Update with conditions
UPDATE products 
SET price = price * 0.9  -- 10% discount
WHERE category = 'Electronics';

-- IMPORTANT: Always use WHERE!
-- Without WHERE, ALL rows are updated!
\`\`\`

## DELETE Statement

Remove records from a table.

\`\`\`sql
-- Delete specific records
DELETE FROM users 
WHERE status = 'inactive';

-- Delete with multiple conditions
DELETE FROM orders 
WHERE order_date < '2023-01-01' 
  AND status = 'cancelled';

-- DANGER: Deletes ALL rows!
DELETE FROM users;
\`\`\`

## TRUNCATE vs DELETE

\`\`\`sql
-- DELETE: Can use WHERE, slower, logs each row
DELETE FROM users;

-- TRUNCATE: Removes all rows, faster, resets identity
TRUNCATE TABLE users;
\`\`\`

## RETURNING Clause (PostgreSQL)

Get affected rows back.

\`\`\`sql
-- Insert and return
INSERT INTO users (name, email, age)
VALUES ('Frank', 'frank@email.com', 29)
RETURNING id, name, email;

-- Update and return
UPDATE users 
SET age = age + 1
WHERE birthday = CURRENT_DATE
RETURNING name, age;

-- Delete and return
DELETE FROM users 
WHERE last_login < '2023-01-01'
RETURNING id, name;
\`\`\`

## Practical Examples

\`\`\`sql
-- Create a new user
INSERT INTO users (name, email, age, city, status)
VALUES ('Grace', 'grace@email.com', 27, 'Seattle', 'active')
RETURNING *;

-- Update user status after login
UPDATE users 
SET status = 'online', last_login = NOW()
WHERE email = 'alice@email.com';

-- Delete old inactive users
DELETE FROM users 
WHERE status = 'inactive' 
  AND created_at < NOW() - INTERVAL '1 year';

-- Bulk update with CASE
UPDATE products
SET category = CASE
    WHEN price < 20 THEN 'Budget'
    WHEN price < 100 THEN 'Mid-range'
    ELSE 'Premium'
END;
\`\`\`

## Best Practices

1. **Always test SELECT first**: Before UPDATE/DELETE, test your WHERE clause with SELECT
2. **Use transactions**: For critical operations
3. **Backup important data**: Before bulk operations
4. **Use LIMIT**: When testing on large tables
`,
      },
      {
        title: 'Aggregate Functions',
        content: `# Aggregate Functions

## COUNT

Count rows.

\`\`\`sql
-- Count all rows
SELECT COUNT(*) FROM users;

-- Count non-NULL values
SELECT COUNT(email) FROM users;

-- Count distinct values
SELECT COUNT(DISTINCT city) FROM users;

-- With condition
SELECT COUNT(*) FROM users WHERE age > 25;
\`\`\`

## SUM

Add numeric values.

\`\`\`sql
-- Sum a column
SELECT SUM(salary) FROM employees;

-- With condition
SELECT SUM(amount) FROM orders 
WHERE status = 'completed';

-- Sum with expression
SELECT SUM(price * quantity) FROM order_items;
\`\`\`

## AVG

Calculate average.

\`\`\`sql
-- Average
SELECT AVG(age) FROM users;

-- Average with condition
SELECT AVG(price) FROM products 
WHERE category = 'Electronics';

-- Round average
SELECT ROUND(AVG(price), 2) FROM products;
\`\`\`

## MIN and MAX

Find minimum and maximum values.

\`\`\`sql
-- Minimum
SELECT MIN(age) FROM users;

-- Maximum
SELECT MAX(salary) FROM employees;

-- Both together
SELECT MIN(price) AS lowest, MAX(price) AS highest
FROM products;

-- With other columns (subquery needed)
SELECT name, salary
FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees);
\`\`\`

## GROUP BY

Group rows by column values.

\`\`\`sql
-- Count users per city
SELECT city, COUNT(*) AS user_count
FROM users
GROUP BY city;

-- Average salary by department
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;

-- Multiple grouping columns
SELECT city, status, COUNT(*) 
FROM users
GROUP BY city, status;
\`\`\`

## HAVING Clause

Filter grouped results.

\`\`\`sql
-- Cities with more than 10 users
SELECT city, COUNT(*) AS user_count
FROM users
GROUP BY city
HAVING COUNT(*) > 10;

-- Departments with avg salary > 50000
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000
ORDER BY avg_salary DESC;
\`\`\`

## WHERE vs HAVING

\`\`\`sql
-- WHERE filters BEFORE grouping
-- HAVING filters AFTER grouping

SELECT city, COUNT(*) AS user_count
FROM users
WHERE age > 18          -- Filter rows first
GROUP BY city
HAVING COUNT(*) > 5     -- Filter groups after
ORDER BY user_count DESC;
\`\`\`

## Practical Examples

\`\`\`sql
-- Sales report by category
SELECT 
    category,
    COUNT(*) AS product_count,
    SUM(price) AS total_value,
    AVG(price) AS avg_price,
    MIN(price) AS min_price,
    MAX(price) AS max_price
FROM products
GROUP BY category
ORDER BY total_value DESC;

-- Monthly order summary
SELECT 
    DATE_TRUNC('month', order_date) AS month,
    COUNT(*) AS order_count,
    SUM(total_amount) AS revenue,
    AVG(total_amount) AS avg_order_value
FROM orders
WHERE order_date >= '2024-01-01'
GROUP BY DATE_TRUNC('month', order_date)
ORDER BY month;
\`\`\`
`,
      },
      {
        title: 'JOINs - Part 1',
        content: `# JOINs - Part 1

## What are JOINs?

JOINs combine rows from two or more tables based on related columns.

## Sample Tables

\`\`\`
users table:
+----+----------+-----------+
| id | name     | city_id   |
+----+----------+-----------+
| 1  | Alice    | 1         |
| 2  | Bob      | 2         |
| 3  | Charlie  | 1         |
+----+----------+-----------+

cities table:
+----+------------+
| id | city_name  |
+----+------------+
| 1  | NYC        |
| 2  | LA         |
| 3  | Chicago    |
+----+------------+
\`\`\`

## INNER JOIN

Returns matching rows from both tables.

\`\`\`sql
SELECT users.name, cities.city_name
FROM users
INNER JOIN cities ON users.city_id = cities.id;

-- Result:
-- Alice | NYC
-- Bob   | LA
-- Charlie | NYC

-- INNER is optional
SELECT users.name, cities.city_name
FROM users
JOIN cities ON users.city_id = cities.id;
\`\`\`

## LEFT JOIN (LEFT OUTER JOIN)

Returns all rows from left table, matching from right.

\`\`\`sql
SELECT users.name, cities.city_name
FROM users
LEFT JOIN cities ON users.city_id = cities.id;

-- Includes users even if city_id is NULL or invalid
-- Alice    | NYC
-- Bob      | LA
-- Charlie  | NYC
-- David    | NULL  (if city_id is NULL)
\`\`\`

## RIGHT JOIN (RIGHT OUTER JOIN)

Returns all rows from right table, matching from left.

\`\`\`sql
SELECT users.name, cities.city_name
FROM users
RIGHT JOIN cities ON users.city_id = cities.id;

-- Includes all cities, even without users
-- Alice    | NYC
-- Charlie  | NYC
-- Bob      | LA
-- NULL     | Chicago  (city with no users)
\`\`\`

## FULL OUTER JOIN

Returns all rows from both tables.

\`\`\`sql
SELECT users.name, cities.city_name
FROM users
FULL OUTER JOIN cities ON users.city_id = cities.id;

-- All users and all cities
-- Alice    | NYC
-- Charlie  | NYC
-- Bob      | LA
-- David    | NULL
-- NULL     | Chicago
\`\`\`

## JOIN with Multiple Conditions

\`\`\`sql
SELECT u.name, c.city_name
FROM users u
JOIN cities c ON u.city_id = c.id 
             AND c.city_name != 'LA';
\`\`\`

## Table Aliases

\`\`\`sql
-- Shorter, cleaner queries
SELECT u.name, c.city_name, o.order_date
FROM users u
JOIN cities c ON u.city_id = c.id
JOIN orders o ON u.id = o.user_id;
\`\`\`

## Practical Example

\`\`\`sql
-- Get all orders with user and product info
SELECT 
    o.id AS order_id,
    u.name AS customer_name,
    p.name AS product_name,
    o.quantity,
    o.total_amount
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN products p ON o.product_id = p.id
ORDER BY o.order_date DESC;
\`\`\`
`,
      },
      {
        title: 'JOINs - Part 2',
        content: `# JOINs - Part 2

## Multiple JOINs

Combine multiple tables in one query.

\`\`\`sql
SELECT 
    u.name AS customer,
    c.city_name,
    o.id AS order_id,
    p.name AS product,
    o.quantity,
    o.total_amount
FROM users u
JOIN cities c ON u.city_id = c.id
JOIN orders o ON u.id = o.user_id
JOIN products p ON o.product_id = p.id
WHERE o.total_amount > 100
ORDER BY o.total_amount DESC;
\`\`\`

## Self JOIN

Join a table to itself.

\`\`\`sql
-- Find employees and their managers
SELECT 
    e.name AS employee,
    m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;

-- Find users in same city
SELECT 
    u1.name AS user1,
    u2.name AS user2,
    c.city_name
FROM users u1
JOIN users u2 ON u1.city_id = u2.city_id 
             AND u1.id < u2.id
JOIN cities c ON u1.city_id = c.id;
\`\`\`

## CROSS JOIN

Cartesian product (all combinations).

\`\`\`sql
-- Every user with every product
SELECT u.name, p.name AS product
FROM users u
CROSS JOIN products p;

-- 5 users × 10 products = 50 rows
\`\`\`

## JOIN with Aggregation

\`\`\`sql
-- Orders per user with user details
SELECT 
    u.name,
    c.city_name,
    COUNT(o.id) AS order_count,
    SUM(o.total_amount) AS total_spent,
    AVG(o.total_amount) AS avg_order
FROM users u
JOIN cities c ON u.city_id = c.id
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name, c.city_name
HAVING COUNT(o.id) > 0
ORDER BY total_spent DESC;
\`\`\`

## Subqueries in JOINs

\`\`\`sql
-- Join with aggregated subquery
SELECT 
    u.name,
    stats.order_count,
    stats.total_spent
FROM users u
JOIN (
    SELECT 
        user_id,
        COUNT(*) AS order_count,
        SUM(total_amount) AS total_spent
    FROM orders
    GROUP BY user_id
) stats ON u.id = stats.user_id;
\`\`\`

## Common Table Expressions (CTEs)

\`\`\`sql
WITH user_stats AS (
    SELECT 
        user_id,
        COUNT(*) AS order_count,
        SUM(total_amount) AS total_spent
    FROM orders
    GROUP BY user_id
)
SELECT 
    u.name,
    us.order_count,
    us.total_spent
FROM users u
JOIN user_stats us ON u.id = us.user_id
WHERE us.total_spent > 1000;
\`\`\`

## JOIN Performance Tips

1. **Index foreign keys**: Speeds up JOIN operations
2. **Select only needed columns**: Avoid SELECT *
3. **Filter early**: Use WHERE before JOIN when possible
4. **Analyze query plans**: Use EXPLAIN ANALYZE

\`\`\`sql
-- See how PostgreSQL executes your query
EXPLAIN ANALYZE
SELECT u.name, COUNT(o.id)
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id;
\`\`\`

## Practical Business Query

\`\`\`sql
-- Monthly sales report with category breakdown
SELECT 
    DATE_TRUNC('month', o.order_date) AS month,
    p.category,
    COUNT(DISTINCT o.id) AS orders,
    SUM(o.quantity) AS units_sold,
    SUM(o.total_amount) AS revenue
FROM orders o
JOIN products p ON o.product_id = p.id
WHERE o.order_date >= '2024-01-01'
GROUP BY DATE_TRUNC('month', o.order_date), p.category
ORDER BY month, revenue DESC;
\`\`\`
`,
      },
      {
        title: 'Database Design & Normalization',
        content: `# Database Design & Normalization

## Entity-Relationship Diagrams (ERD)

Visual representation of database structure.

### Components:
- **Entities**: Tables (e.g., User, Product, Order)
- **Attributes**: Columns (e.g., name, email, price)
- **Relationships**: Connections between entities

### Relationship Types:
- **One-to-One (1:1)**: User → Profile
- **One-to-Many (1:N)**: User → Orders
- **Many-to-Many (M:N)**: Students ↔ Courses (needs junction table)

## Normalization

Process of organizing data to reduce redundancy.

### First Normal Form (1NF)
- Each column contains atomic values
- No repeating groups
- Each row is unique

\`\`\`
-- Bad (not 1NF)
+----+----------+------------------+
| id | name     | phones           |
+----+----------+------------------+
| 1  | Alice    | 123, 456, 789    |
+----+----------+------------------+

-- Good (1NF)
+----+----------+--------+
| id | name     | phone  |
+----+----------+--------+
| 1  | Alice    | 123    |
| 1  | Alice    | 456    |
| 1  | Alice    | 789    |
+----+----------+--------+
\`\`\`

### Second Normal Form (2NF)
- Must be in 1NF
- All non-key attributes depend on entire primary key

\`\`\`
-- Bad (not 2NF)
+----+----+----------+------------+
| order_id | product_id | product_name | quantity |
+----+----+----------+------------+
| 1  | 10 | Laptop   | 2        |
| 1  | 11 | Mouse    | 5        |
+----+----+----------+------------+

-- Good (2NF) - split into two tables
Orders: order_id, order_date, user_id
Order_Items: order_id, product_id, quantity
Products: product_id, product_name, price
\`\`\`

### Third Normal Form (3NF)
- Must be in 2NF
- No transitive dependencies

\`\`\`
-- Bad (not 3NF)
+----+----------+------------+----------+
| id | name     | city       | state    |
+----+----------+------------+----------+

-- Good (3NF) - city determines state
Users: id, name, city_id
Cities: city_id, city_name, state
\`\`\`

## Primary Keys

Unique identifier for each row.

\`\`\`sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

-- Composite primary key
CREATE TABLE order_items (
    order_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,
    PRIMARY KEY (order_id, product_id)
);
\`\`\`

## Foreign Keys

Reference to another table's primary key.

\`\`\`sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- With cascade
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
\`\`\`

## Indexes

Improve query performance.

\`\`\`sql
-- Create index
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_date ON orders(order_date);

-- Composite index
CREATE INDEX idx_orders_user_date 
ON orders(user_id, order_date);

-- Unique index
CREATE UNIQUE INDEX idx_users_email_unique 
ON users(email);
\`\`\`

## When to Index:
- Columns used in WHERE clauses
- Foreign key columns
- Columns used in JOINs
- Columns used in ORDER BY

## Don't Over-Index:
- Indexes slow down INSERT/UPDATE/DELETE
- Each index uses storage space
`,
      },
      {
        title: 'Advanced SQL Features',
        content: `# Advanced SQL Features

## Window Functions

Perform calculations across rows related to current row.

\`\`\`sql
-- Row number
SELECT 
    name,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) AS rank
FROM employees;

-- Running total
SELECT 
    order_date,
    amount,
    SUM(amount) OVER (ORDER BY order_date) AS running_total
FROM orders;

-- Partition by
SELECT 
    name,
    department,
    salary,
    AVG(salary) OVER (PARTITION BY department) AS dept_avg
FROM employees;

-- Rank with ties
SELECT 
    name,
    score,
    RANK() OVER (ORDER BY score DESC) AS rank,
    DENSE_RANK() OVER (ORDER BY score DESC) AS dense_rank
FROM students;
\`\`\`

## Common Table Expressions (CTEs)

Temporary result sets.

\`\`\`sql
-- Basic CTE
WITH active_users AS (
    SELECT * FROM users WHERE status = 'active'
)
SELECT * FROM active_users WHERE age > 25;

-- Multiple CTEs
WITH 
    user_orders AS (
        SELECT user_id, COUNT(*) AS order_count
        FROM orders
        GROUP BY user_id
    ),
    top_users AS (
        SELECT user_id FROM user_orders WHERE order_count > 5
    )
SELECT u.name, uo.order_count
FROM users u
JOIN top_users tu ON u.id = tu.user_id
JOIN user_orders uo ON u.id = uo.user_id;

-- Recursive CTE (hierarchical data)
WITH RECURSIVE org_chart AS (
    SELECT id, name, manager_id, 1 AS level
    FROM employees
    WHERE manager_id IS NULL
    UNION ALL
    SELECT e.id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart;
\`\`\`

## Views

Virtual tables based on query results.

\`\`\`sql
-- Create view
CREATE VIEW active_user_orders AS
SELECT 
    u.id AS user_id,
    u.name,
    u.email,
    COUNT(o.id) AS order_count,
    SUM(o.total_amount) AS total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active'
GROUP BY u.id, u.name, u.email;

-- Use view
SELECT * FROM active_user_orders 
WHERE total_spent > 1000;

-- Update view (if updatable)
CREATE OR REPLACE VIEW active_user_orders AS
SELECT ...;

-- Drop view
DROP VIEW active_user_orders;
\`\`\`

## Transactions

Group operations as single unit.

\`\`\`sql
BEGIN;

UPDATE accounts 
SET balance = balance - 100 
WHERE account_id = 1;

UPDATE accounts 
SET balance = balance + 100 
WHERE account_id = 2;

COMMIT;  -- Or ROLLBACK to undo

-- With savepoint
BEGIN;
SAVEPOINT before_delete;
DELETE FROM orders WHERE id = 1;
ROLLBACK TO before_delete;
COMMIT;
\`\`\`

## Stored Procedures

Reusable SQL code blocks.

\`\`\`sql
CREATE OR REPLACE FUNCTION transfer_funds(
    from_account INT,
    to_account INT,
    amount DECIMAL
) RETURNS VOID AS $$
BEGIN
    UPDATE accounts 
    SET balance = balance - amount 
    WHERE account_id = from_account;
    
    UPDATE accounts 
    SET balance = balance + amount 
    WHERE account_id = to_account;
END;
$$ LANGUAGE plpgsql;

-- Call function
SELECT transfer_funds(1, 2, 100);
\`\`\`

## Triggers

Automatic actions on events.

\`\`\`sql
-- Create trigger function
CREATE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
CREATE TRIGGER set_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();
\`\`\`
`,
      },
    ],
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI Systems',
    description: 'Build intelligent AI agents with planning, tool use, and multi-agent collaboration. Learn modern AI agent architectures.',
    difficulty: 'intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    lessons: [
      {
        title: 'Introduction to AI Agents',
        content: `# Introduction to AI Agents

## What is an AI Agent?

An AI agent is an autonomous system that perceives its environment, makes decisions, and takes actions to achieve specific goals.

## Key Components of AI Agents

### 1. Perception
- Sensors to gather information
- Input processing (text, images, audio)
- Environment understanding

### 2. Reasoning
- Decision-making logic
- Planning and strategy
- Problem-solving capabilities

### 3. Action
- Effectors to interact with environment
- Tool usage
- Communication

### 4. Learning
- Adaptation from experience
- Performance improvement
- Knowledge accumulation

## Agent Architectures

### Simple Reflex Agents
\`\`\`python
def simple_reflex_agent(percept):
    if percept == "obstacle_ahead":
        return "turn_left"
    elif percept == "goal_visible":
        return "move_forward"
    return "explore"
\`\`\`

### Model-Based Reflex Agents
\`\`\`python
class ModelBasedAgent:
    def __init__(self):
        self.internal_state = {}
    
    def perceive(self, percept):
        self.update_state(percept)
        return self.decide_action()
    
    def update_state(self, percept):
        self.internal_state['last_percept'] = percept
    
    def decide_action(self):
        # Use internal state for decision
        pass
\`\`\`

### Goal-Based Agents
\`\`\`python
class GoalBasedAgent:
    def __init__(self, goal):
        self.goal = goal
        self.current_state = None
    
    def plan(self):
        # Generate plan to achieve goal
        return ["action1", "action2", "action3"]
    
    def execute(self, plan):
        for action in plan:
            self.perform(action)
\`\`\`

### Utility-Based Agents
\`\`\`python
class UtilityBasedAgent:
    def evaluate_action(self, action, state):
        # Calculate expected utility
        return utility_score
    
    def choose_best_action(self, possible_actions):
        return max(possible_actions, key=self.evaluate_action)
\`\`\`

## Modern AI Agents

### LLM-Based Agents
- Use large language models for reasoning
- Natural language understanding and generation
- Flexible task handling

### Key Capabilities
1. **Tool Use**: API calls, code execution, database queries
2. **Memory**: Short-term and long-term context
3. **Planning**: Breaking down complex tasks
4. **Reflection**: Self-evaluation and correction

## Agent Applications

- **Personal Assistants**: Scheduling, reminders, information retrieval
- **Customer Service**: Automated support, ticket resolution
- **Data Analysis**: Automated insights, report generation
- **Software Development**: Code generation, debugging, testing
- **Research**: Literature review, hypothesis generation
`,
      },
      {
        title: 'Agent Architecture & Design',
        content: `# Agent Architecture & Design

## Core Architecture Components

### 1. Perception Module
\`\`\`python
class PerceptionModule:
    def __init__(self):
        self.sensors = []
    
    def add_sensor(self, sensor):
        self.sensors.append(sensor)
    
    def perceive(self, environment):
        percepts = []
        for sensor in self.sensors:
            percepts.append(sensor.sense(environment))
        return self.process_percepts(percepts)
    
    def process_percepts(self, percepts):
        # Filter, combine, and interpret percepts
        return combined_percept
\`\`\`

### 2. Reasoning Engine
\`\`\`python
class ReasoningEngine:
    def __init__(self, llm_client):
        self.llm = llm_client
        self.context = []
    
    def reason(self, goal, current_state):
        prompt = self.build_prompt(goal, current_state)
        response = self.llm.generate(prompt)
        return self.parse_response(response)
    
    def build_prompt(self, goal, state):
        return f"""
        Goal: {goal}
        Current State: {state}
        
        What action should be taken next?
        """
\`\`\`

### 3. Memory System
\`\`\`python
class MemorySystem:
    def __init__(self):
        self.short_term = []
        self.long_term = {}
    
    def add_short_term(self, item):
        self.short_term.append(item)
        if len(self.short_term) > 100:
            self.consolidate()
    
    def consolidate(self):
        # Move important items to long-term memory
        important = self.filter_important(self.short_term)
        self.long_term.update(important)
        self.short_term = self.short_term[-50:]
    
    def retrieve(self, query):
        # Search both short and long-term memory
        results = self.search_long_term(query)
        results.extend(self.short_term[-10:])
        return results
\`\`\`

### 4. Action Executor
\`\`\`python
class ActionExecutor:
    def __init__(self):
        self.tools = {}
    
    def register_tool(self, name, tool):
        self.tools[name] = tool
    
    def execute(self, action):
        tool_name = action['tool']
        params = action['parameters']
        
        if tool_name not in self.tools:
            raise ValueError(f"Unknown tool: {tool_name}")
        
        return self.tools[tool_name].run(**params)
\`\`\`

## Complete Agent Implementation

\`\`\`python
class AIAgent:
    def __init__(self, config):
        self.perception = PerceptionModule()
        self.reasoning = ReasoningEngine(config['llm'])
        self.memory = MemorySystem()
        self.executor = ActionExecutor()
        self.goal = None
    
    def set_goal(self, goal):
        self.goal = goal
        self.memory.add_short_term(f"Goal set: {goal}")
    
    def run(self, environment):
        while not self.goal_achieved():
            # Perceive
            percept = self.perception.perceive(environment)
            self.memory.add_short_term(percept)
            
            # Reason
            action = self.reasoning.reason(
                self.goal,
                self.memory.retrieve("relevant")
            )
            
            # Act
            result = self.executor.execute(action)
            self.memory.add_short_term(f"Action result: {result}")
            
            # Reflect
            self.reflect(action, result)
    
    def reflect(self, action, result):
        # Learn from experience
        if result.success:
            self.memory.add_long_term(action, "successful")
\`\`\`

## Design Patterns

### ReAct Pattern (Reason + Act)
\`\`\`python
def react_agent(question):
    thoughts = []
    
    for _ in range(max_iterations):
        # Think
        thought = llm.generate(f"""
        Question: {question}
        History: {thoughts}
        
        Thought: What should I do next?
        """)
        thoughts.append(thought)
        
        # Act
        if "FINAL ANSWER" in thought:
            return extract_answer(thought)
        
        action = parse_action(thought)
        observation = execute_action(action)
        thoughts.append(f"Observation: {observation}")
    
    return "Could not find answer"
\`\`\`

### Plan-and-Solve
\`\`\`python
def plan_and_solve(problem):
    # First, create a plan
    plan = llm.generate(f"""
    Problem: {problem}
    
    Create a step-by-step plan to solve this.
    """)
    
    # Execute each step
    results = []
    for step in parse_steps(plan):
        result = execute_step(step)
        results.append(result)
    
    # Synthesize final answer
    return llm.generate(f"""
    Original Problem: {problem}
    Plan: {plan}
    Results: {results}
    
    Provide the final answer.
    """)
\`\`\`
`,
      },
      {
        title: 'Tool Use and Function Calling',
        content: `# Tool Use and Function Calling

## What are Tools?

Tools are external capabilities that agents can use to interact with the world:
- API calls
- Database queries
- Code execution
- File operations
- Web searches
- Calculations

## Tool Definition Format

\`\`\`python
from typing import Dict, Any

class Tool:
    def __init__(self, name: str, description: str, parameters: Dict):
        self.name = name
        self.description = description
        self.parameters = parameters
    
    def run(self, **kwargs) -> Any:
        raise NotImplementedError

# Example: Calculator Tool
class CalculatorTool(Tool):
    def __init__(self):
        super().__init__(
            name="calculator",
            description="Perform mathematical calculations",
            parameters={
                "operation": {"type": "string", "enum": ["add", "subtract", "multiply", "divide"]},
                "a": {"type": "number"},
                "b": {"type": "number"}
            }
        )
    
    def run(self, operation: str, a: float, b: float) -> float:
        if operation == "add":
            return a + b
        elif operation == "subtract":
            return a - b
        elif operation == "multiply":
            return a * b
        elif operation == "divide":
            return a / b if b != 0 else float('inf')
\`\`\`

## Tool Registry

\`\`\`python
class ToolRegistry:
    def __init__(self):
        self.tools: Dict[str, Tool] = {}
    
    def register(self, tool: Tool):
        self.tools[tool.name] = tool
    
    def get_tool(self, name: str) -> Tool:
        return self.tools.get(name)
    
    def get_tool_descriptions(self) -> str:
        descriptions = []
        for tool in self.tools.values():
            desc = f"{tool.name}: {tool.description}"
            desc += f"\\nParameters: {tool.parameters}"
            descriptions.append(desc)
        return "\\n\\n".join(descriptions)
    
    def execute(self, tool_name: str, **kwargs) -> Any:
        tool = self.get_tool(tool_name)
        if not tool:
            raise ValueError(f"Tool not found: {tool_name}")
        return tool.run(**kwargs)
\`\`\`

## Function Calling with LLMs

\`\`\`python
import json

class FunctionCallingAgent:
    def __init__(self, llm, tool_registry: ToolRegistry):
        self.llm = llm
        self.tools = tool_registry
    
    def create_system_prompt(self) -> str:
        return f"""You are a helpful assistant with access to these tools:

{self.tools.get_tool_descriptions()}

To use a tool, respond with a JSON object:
{{
    "tool": "tool_name",
    "parameters": {{
        "param1": value1,
        "param2": value2
    }}
}}

When you have the final answer, respond with:
{{
    "final_answer": "your answer here"
}}
"""
    
    def chat(self, user_message: str) -> str:
        messages = [
            {"role": "system", "content": self.create_system_prompt()},
            {"role": "user", "content": user_message}
        ]
        
        for _ in range(5):  # Max iterations
            response = self.llm.generate(messages)
            parsed = json.loads(response)
            
            if "final_answer" in parsed:
                return parsed["final_answer"]
            
            if "tool" in parsed:
                result = self.tools.execute(
                    parsed["tool"],
                    **parsed["parameters"]
                )
                messages.append({"role": "assistant", "content": response})
                messages.append({"role": "tool", "content": str(result)})
        
        return "Could not complete the task"
\`\`\`

## Built-in Tools Examples

\`\`\`python
# Web Search Tool
class WebSearchTool(Tool):
    def __init__(self, search_engine):
        super().__init__(
            name="web_search",
            description="Search the web for information",
            parameters={"query": {"type": "string"}}
        )
        self.search_engine = search_engine
    
    def run(self, query: str) -> list:
        return self.search_engine.search(query)

# Database Tool
class DatabaseTool(Tool):
    def __init__(self, db_connection):
        super().__init__(
            name="database_query",
            description="Query a SQL database",
            parameters={"query": {"type": "string"}}
        )
        self.db = db_connection
    
    def run(self, query: str) -> list:
        # Validate query (SELECT only for safety)
        if not query.strip().upper().startswith("SELECT"):
            raise ValueError("Only SELECT queries allowed")
        return self.db.execute(query)

# Code Execution Tool
class CodeExecutionTool(Tool):
    def __init__(self):
        super().__init__(
            name="execute_code",
            description="Execute Python code in a sandbox",
            parameters={"code": {"type": "string"}}
        )
    
    def run(self, code: str) -> str:
        # In production, use a secure sandbox!
        import io
        import sys
        
        old_stdout = sys.stdout
        sys.stdout = io.StringIO()
        
        try:
            exec(code)
            return sys.stdout.getvalue()
        finally:
            sys.stdout = old_stdout
\`\`\`

## Tool Selection Strategies

### Direct Prompting
Let the LLM choose tools directly.

### ReAct with Tools
\`\`\`python
def react_with_tools(question, tools):
    history = []
    
    for _ in range(10):
        # Generate thought and action
        response = llm.generate(f"""
        Question: {question}
        Tools: {tools.description()}
        History: {history}
        
        Thought: 
        """)
        
        if "I know the final answer" in response:
            return extract_answer(response)
        
        # Parse and execute tool use
        tool_call = parse_tool_call(response)
        if tool_call:
            result = tools.execute(tool_call.name, **tool_call.args)
            history.append(f"Used {tool_call.name}: {result}")
    
    return "Could not answer"
\`\`\`
`,
      },
      {
        title: 'Planning and Reasoning',
        content: `# Planning and Reasoning

## What is Planning?

Planning is the process of determining a sequence of actions to achieve a goal.

## Planning Approaches

### 1. Task Decomposition
Breaking complex tasks into smaller subtasks.

\`\`\`python
def decompose_task(task: str) -> list:
    prompt = f"""
    Break down this task into subtasks:
    
    Task: {task}
    
    Return a numbered list of subtasks.
    """
    response = llm.generate(prompt)
    return parse_subtasks(response)

# Example
task = "Write a blog post about AI"
subtasks = decompose_task(task)
# ["Research AI topics", "Create outline", "Write introduction", ...]
\`\`\`

### 2. Chain of Thought (CoT)
Step-by-step reasoning before answering.

\`\`\`python
def chain_of_thought(question: str) -> str:
    prompt = f"""
    Question: {question}
    
    Let's think step by step:
    1. First, understand what is being asked
    2. Recall relevant information
    3. Apply logical reasoning
    4. Arrive at the answer
    
    Answer:
    """
    return llm.generate(prompt)
\`\`\`

### 3. Tree of Thoughts (ToT)
Explore multiple reasoning paths.

\`\`\`python
def tree_of_thoughts(problem: str, breadth=3, depth=3):
    def generate_thoughts(state: str, n: int) -> list:
        prompt = f"""
        Current state: {state}
        Generate {n} possible next thoughts.
        """
        return llm.generate(prompt).split("\\n")
    
    def evaluate_state(state: str) -> float:
        prompt = f"""
        State: {state}
        Rate progress toward solution (0-1):
        """
        return float(llm.generate(prompt))
    
    # BFS/DFS through thought tree
    thoughts = [(problem, 0)]
    best_solution = None
    best_score = 0
    
    while thoughts:
        current, depth = thoughts.pop(0)
        score = evaluate_state(current)
        
        if score > best_score:
            best_score = score
            best_solution = current
        
        if depth < depth and score > 0.5:
            new_thoughts = generate_thoughts(current, breadth)
            for thought in new_thoughts:
                thoughts.append((thought, depth + 1))
    
    return best_solution
\`\`\`

## Planning with Constraints

\`\`\`python
class ConstrainedPlanner:
    def __init__(self, llm):
        self.llm = llm
    
    def plan(self, goal: str, constraints: list) -> list:
        prompt = f"""
        Goal: {goal}
        
        Constraints:
        {chr(10).join(constraints)}
        
        Create a plan that respects all constraints.
        Format: Step 1: [action]
        """
        response = self.llm.generate(prompt)
        return self.parse_plan(response)
    
    def validate_plan(self, plan: list, constraints: list) -> bool:
        for constraint in constraints:
            if not self.check_constraint(plan, constraint):
                return False
        return True
\`\`\`

## Hierarchical Planning

\`\`\`python
class HierarchicalPlanner:
    def __init__(self, llm):
        self.llm = llm
    
    def plan(self, high_level_goal: str) -> dict:
        # Generate high-level plan
        high_plan = self.generate_high_level_plan(high_level_goal)
        
        # Refine each step
        detailed_plan = {}
        for step_id, step in high_plan.items():
            detailed_plan[step_id] = {
                "description": step,
                "substeps": self.refine_step(step)
            }
        
        return detailed_plan
    
    def generate_high_level_plan(self, goal: str) -> dict:
        prompt = f"""
        Goal: {goal}
        
        Create a high-level plan with 3-5 main steps.
        Format as JSON: {{"step_1": "description", ...}}
        """
        return json.loads(self.llm.generate(prompt))
    
    def refine_step(self, step: str) -> list:
        prompt = f"""
        Step: {step}
        
        Break this into 3-5 detailed substeps.
        """
        response = self.llm.generate(prompt)
        return response.split("\\n")
\`\`\`

## Replanning and Recovery

\`\`\`python
class AdaptivePlanner:
    def __init__(self, llm, executor):
        self.llm = llm
        self.executor = executor
    
    def execute_with_recovery(self, plan: list) -> bool:
        for i, step in enumerate(plan):
            success, result = self.executor.execute(step)
            
            if not success:
                # Replan from current state
                new_plan = self.replan(plan[i:], result)
                if not new_plan:
                    return False
                plan = new_plan
        
        return True
    
    def replan(self, remaining_plan: list, error: str) -> list:
        prompt = f"""
        Original remaining plan: {remaining_plan}
        Error encountered: {error}
        
        Create a revised plan to handle this error.
        """
        response = self.llm.generate(prompt)
        return self.parse_plan(response)
\`\`\`

## Planning Heuristics

1. **Least Commitment**: Delay decisions until necessary
2. **Divide and Conquer**: Split problems into independent subproblems
3. **Means-Ends Analysis**: Reduce difference between current and goal state
4. **Working Backward**: Start from goal and work backward to initial state
`,
      },
      {
        title: 'Multi-Agent Systems',
        content: `# Multi-Agent Systems

## What are Multi-Agent Systems?

Systems where multiple AI agents collaborate, compete, or coordinate to solve complex problems.

## Agent Communication

### Message Passing
\`\`\`python
class Message:
    def __init__(self, sender: str, receiver: str, content: str, msg_type: str):
        self.sender = sender
        self.receiver = receiver
        self.content = content
        self.type = msg_type  # "request", "response", "inform", "query"

class MessageBus:
    def __init__(self):
        self.queues: Dict[str, list] = {}
    
    def send(self, message: Message):
        if message.receiver not in self.queues:
            self.queues[message.receiver] = []
        self.queues[message.receiver].append(message)
    
    def receive(self, agent_id: str) -> list:
        messages = self.queues.get(agent_id, [])
        self.queues[agent_id] = []
        return messages
\`\`\`

### Communication Protocols
\`\`\`python
class AgentCommunication:
    def __init__(self, agent_id: str, message_bus: MessageBus):
        self.id = agent_id
        self.bus = message_bus
    
    def request(self, target: str, request: str) -> str:
        msg = Message(self.id, target, request, "request")
        self.bus.send(msg)
        
        # Wait for response
        responses = self.bus.receive(self.id)
        return responses[0].content if responses else None
    
    def broadcast(self, message: str):
        # Send to all agents
        for agent_id in self.bus.queues.keys():
            if agent_id != self.id:
                msg = Message(self.id, agent_id, message, "inform")
                self.bus.send(msg)
\`\`\`

## Collaboration Patterns

### 1. Supervisor-Worker Pattern
\`\`\`python
class SupervisorAgent:
    def __init__(self, workers: list):
        self.workers = workers
        self.task_queue = []
    
    def assign_task(self, task: str, worker_id: str):
        worker = next(w for w in self.workers if w.id == worker_id)
        worker.receive_task(task)
    
    def coordinate(self, complex_task: str):
        subtasks = self.decompose(complex_task)
        
        for subtask in subtasks:
            worker = self.select_best_worker(subtask)
            self.assign_task(subtask, worker.id)
        
        results = self.collect_results()
        return self.synthesize(results)

class WorkerAgent:
    def __init__(self, agent_id: str, specialty: str):
        self.id = agent_id
        self.specialty = specialty
        self.task_queue = []
    
    def receive_task(self, task: str):
        self.task_queue.append(task)
    
    def process_tasks(self):
        results = []
        for task in self.task_queue:
            result = self.execute(task)
            results.append(result)
        self.task_queue = []
        return results
\`\`\`

### 2. Peer-to-Peer Collaboration
\`\`\`python
class PeerAgent:
    def __init__(self, agent_id: str, peers: list):
        self.id = agent_id
        self.peers = peers
        self.knowledge_base = {}
    
    def collaborate(self, problem: str):
        # Share problem with peers
        self.broadcast(problem)
        
        # Collect suggestions
        suggestions = self.collect_responses()
        
        # Combine with own analysis
        own_analysis = self.analyze(problem)
        
        # Synthesize solution
        return self.synthesize([own_analysis] + suggestions)
    
    def help_request(self, request: str):
        if self.can_help(request):
            return self.provide_help(request)
        return None
\`\`\`

### 3. Debate Pattern
\`\`\`python
class DebateModerator:
    def __init__(self, debaters: list):
        self.debaters = debaters
        self.rounds = 3
    
    def moderate(self, topic: str) -> str:
        arguments = {"pro": [], "con": []}
        
        for round_num in range(self.rounds):
            # Pro side
            pro_arg = self.debaters[0].argue_for(topic, arguments)
            arguments["pro"].append(pro_arg)
            
            # Con side
            con_arg = self.debaters[1].argue_against(topic, arguments)
            arguments["con"].append(con_arg)
        
        # Judge the debate
        winner = self.judge(arguments)
        return self.summarize(arguments, winner)
\`\`\`

## Consensus Mechanisms

\`\`\`python
class ConsensusAgent:
    def __init__(self, agents: list):
        self.agents = agents
    
    def reach_consensus(self, proposal: str) -> bool:
        votes = []
        
        for agent in self.agents:
            vote = agent.vote(proposal)
            votes.append(vote)
        
        # Simple majority
        yes_votes = sum(1 for v in votes if v == "yes")
        return yes_votes > len(votes) / 2
    
    def weighted_consensus(self, proposal: str) -> bool:
        weighted_votes = 0
        total_weight = 0
        
        for agent in self.agents:
            vote, confidence = agent.vote_with_confidence(proposal)
            weight = agent.expertise * confidence
            weighted_votes += weight if vote == "yes" else 0
            total_weight += weight
        
        return weighted_votes > total_weight / 2
\`\`\`

## Multi-Agent Applications

### 1. Research Team
\`\`\`python
class ResearchTeam:
    def __init__(self):
        self.researcher = Agent("Researcher", specialty="search")
        self.analyst = Agent("Analyst", specialty="analysis")
        self.writer = Agent("Writer", specialty="writing")
    
    def produce_report(self, topic: str):
        # Researcher gathers information
        data = self.researcher.search(topic)
        
        # Analyst processes data
        insights = self.analyst.analyze(data)
        
        # Writer creates report
        report = self.writer.compose(insights)
        
        return report
\`\`\`

### 2. Software Development Team
\`\`\`python
class DevTeam:
    def __init__(self):
        self.architect = Agent("Architect")
        self.coder = Agent("Coder")
        self.reviewer = Agent("Reviewer")
        self.tester = Agent("Tester")
    
    def build_feature(self, requirements: str):
        design = self.architect.design(requirements)
        code = self.coder.implement(design)
        review = self.reviewer.review(code)
        
        if review.has_issues:
            code = self.coder.fix(code, review.issues)
        
        tests = self.tester.create_tests(code)
        results = self.tester.run(tests)
        
        return code if results.passed else None
\`\`\`

## Coordination Challenges

1. **Communication Overhead**: Too much messaging slows down the system
2. **Conflicting Goals**: Agents may have different objectives
3. **Resource Contention**: Multiple agents competing for same resources
4. **Trust and Verification**: Ensuring agent outputs are reliable
`,
      },
      {
        title: 'Building Production AI Agents',
        content: `# Building Production AI Agents

## Production Considerations

### 1. Reliability
\`\`\`python
class ReliableAgent:
    def __init__(self, llm, max_retries=3):
        self.llm = llm
        self.max_retries = max_retries
    
    def generate_with_retry(self, prompt: str) -> str:
        for attempt in range(self.max_retries):
            try:
                response = self.llm.generate(prompt)
                if self.validate_response(response):
                    return response
            except Exception as e:
                if attempt == self.max_retries - 1:
                    raise
                time.sleep(2 ** attempt)  # Exponential backoff
        
        return self.get_fallback_response()
    
    def validate_response(self, response: str) -> bool:
        # Check for expected format, content quality
        return len(response) > 0 and "ERROR" not in response
\`\`\`

### 2. Monitoring and Logging
\`\`\`python
import logging
from datetime import datetime

class MonitoredAgent:
    def __init__(self, agent, logger=None):
        self.agent = agent
        self.logger = logger or logging.getLogger(__name__)
        self.metrics = {
            "requests": 0,
            "successes": 0,
            "failures": 0,
            "avg_latency": 0
        }
    
    def execute(self, task: str) -> str:
        start_time = datetime.now()
        self.metrics["requests"] += 1
        
        try:
            result = self.agent.execute(task)
            self.metrics["successes"] += 1
            self.logger.info(f"Task completed: {task[:50]}...")
            return result
        except Exception as e:
            self.metrics["failures"] += 1
            self.logger.error(f"Task failed: {task[:50]}... Error: {e}")
            raise
        finally:
            latency = (datetime.now() - start_time).total_seconds()
            self.update_latency(latency)
    
    def update_latency(self, new_latency: float):
        n = self.metrics["requests"]
        avg = self.metrics["avg_latency"]
        self.metrics["avg_latency"] = ((avg * (n-1)) + new_latency) / n
\`\`\`

### 3. Cost Management
\`\`\`python
class CostAwareAgent:
    def __init__(self, llm, budget_limit: float):
        self.llm = llm
        self.budget_limit = budget_limit
        self.spent = 0.0
    
    def generate(self, prompt: str) -> str:
        estimated_cost = self.estimate_cost(prompt)
        
        if self.spent + estimated_cost > self.budget_limit:
            raise BudgetExceeded("Agent budget exceeded")
        
        response = self.llm.generate(prompt)
        actual_cost = self.calculate_cost(prompt, response)
        self.spent += actual_cost
        
        return response
    
    def estimate_cost(self, prompt: str) -> float:
        tokens = len(prompt) / 4  # Rough estimate
        return tokens * self.llm.price_per_token
\`\`\`

### 4. Security Considerations
\`\`\`python
class SecureAgent:
    def __init__(self, llm):
        self.llm = llm
        self.allowed_tools = set()
        self.blocked_patterns = [
            r"DELETE FROM",
            r"DROP TABLE",
            r"rm -rf",
            r"sudo",
        ]
    
    def validate_input(self, user_input: str) -> bool:
        for pattern in self.blocked_patterns:
            if re.search(pattern, user_input, re.IGNORECASE):
                return False
        return True
    
    def sanitize_output(self, output: str) -> str:
        # Remove sensitive information
        output = re.sub(r"password[=:]\s*\\S+", "password=[REDACTED]", output)
        output = re.sub(r"api_key[=:]\s*\\S+", "api_key=[REDACTED]", output)
        return output
    
    def execute(self, user_input: str) -> str:
        if not self.validate_input(user_input):
            return "Request contains disallowed content"
        
        response = self.llm.generate(user_input)
        return self.sanitize_output(response)
\`\`\`

## Testing AI Agents

\`\`\`python
class AgentTester:
    def __init__(self, agent):
        self.agent = agent
    
    def test_functionality(self):
        test_cases = [
            {"input": "What is 2+2?", "expected_contains": "4"},
            {"input": "List 3 colors", "expected_count": 3},
        ]
        
        results = []
        for test in test_cases:
            response = self.agent.execute(test["input"])
            passed = self.evaluate(response, test)
            results.append({"test": test["input"], "passed": passed})
        
        return results
    
    def test_edge_cases(self):
        edge_cases = [
            "",  # Empty input
            "A" * 10000,  # Very long input
            "你好世界",  # Non-ASCII
            "<script>alert('xss')</script>",  # Potential injection
        ]
        
        for case in edge_cases:
            try:
                self.agent.execute(case)
            except Exception as e:
                print(f"Failed on: {case[:50]}... Error: {e}")
\`\`\`

## Deployment Architecture

\`\`\`python
# FastAPI Agent Service
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class TaskRequest(BaseModel):
    task: str
    parameters: dict = {}

class TaskResponse(BaseModel):
    result: str
    success: bool
    metadata: dict

agent = create_production_agent()

@app.post("/execute")
async def execute_task(request: TaskRequest) -> TaskResponse:
    try:
        result = agent.execute(request.task, **request.parameters)
        return TaskResponse(
            result=result,
            success=True,
            metadata={"tokens_used": agent.last_token_count}
        )
    except Exception as e:
        return TaskResponse(
            result=str(e),
            success=False,
            metadata={"error_type": type(e).__name__}
        )

@app.get("/health")
async def health_check():
    return {"status": "healthy", "metrics": agent.metrics}
\`\`\`

## Best Practices Checklist

- [ ] Implement retry logic with exponential backoff
- [ ] Add comprehensive logging
- [ ] Monitor token usage and costs
- [ ] Validate all inputs and outputs
- [ ] Implement rate limiting
- [ ] Create fallback mechanisms
- [ ] Write unit and integration tests
- [ ] Document agent capabilities and limitations
- [ ] Set up alerting for failures
- [ ] Regular evaluation and improvement
`,
      },
    ],
  },
]

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id)
}

export function getCoursesByDifficulty(difficulty: string): Course[] {
  return courses.filter((c) => c.difficulty === difficulty)
}
