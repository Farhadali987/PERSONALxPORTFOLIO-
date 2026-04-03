import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const coursesData = [
  {
    id: 'python-basics',
    title: 'Python Programming Fundamentals',
    description: 'Master Python from scratch. Learn variables, data types, functions, OOP, and file handling with hands-on examples.',
    difficulty: 'beginner',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
    lessons: [
      {
        title: 'Introduction to Python',
        order: 1,
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
        order: 2,
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
`,
      },
      {
        title: 'Operators and Expressions',
        order: 3,
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

## Membership Operators

Check if value exists in a sequence.

\`\`\`python
fruits = ["apple", "banana", "cherry"]

print("apple" in fruits)      # True
print("orange" not in fruits) # True
\`\`\`
`,
      },
      {
        title: 'Control Flow - Conditionals',
        order: 4,
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
`,
      },
      {
        title: 'Loops - for and while',
        order: 5,
        content: `# Loops - for and while

## for Loops

Iterate over sequences.

\`\`\`python
# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
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
\`\`\`

## while Loops

Execute while condition is true.

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`

## break and continue

\`\`\`python
# break - exit loop
for i in range(10):
    if i == 5:
        break
    print(i)

# continue - skip iteration
for i in range(5):
    if i == 2:
        continue
    print(i)
\`\`\`
`,
      },
      {
        title: 'Functions',
        order: 6,
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

## Return Values

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

## Lambda Functions

Anonymous one-line functions.

\`\`\`python
square = lambda x: x * x
print(square(5))  # 25
\`\`\`
`,
      },
      {
        title: 'Lists and Tuples',
        order: 7,
        content: `# Lists and Tuples

## Lists

Ordered, mutable collections.

\`\`\`python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
\`\`\`

## Accessing Elements

\`\`\`python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])    # apple
print(fruits[-1])   # cherry (last)
\`\`\`

## List Methods

\`\`\`python
nums = [3, 1, 4, 1, 5]
nums.append(9)       # Add to end
nums.sort()          # Sort
nums.reverse()       # Reverse
len(nums)            # Length
\`\`\`

## Tuples

Ordered, immutable collections.

\`\`\`python
coordinates = (10, 20)
colors = ("red", "green", "blue")
\`\`\`
`,
      },
      {
        title: 'Dictionaries and Sets',
        order: 8,
        content: `# Dictionaries and Sets

## Dictionaries

Key-value pairs.

\`\`\`python
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

print(person["name"])  # Alice
print(person.get("age"))  # 25
\`\`\`

## Sets

Unordered collection of unique elements.

\`\`\`python
fruits = {"apple", "banana", "cherry"}
numbers = {1, 2, 3, 4, 5}
\`\`\`

## Set Operations

\`\`\`python
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

union = set1 | set2           # All elements
intersection = set1 & set2    # Common elements
difference = set1 - set2      # In set1 but not set2
\`\`\`
`,
      },
      {
        title: 'Object-Oriented Programming',
        order: 9,
        content: `# Object-Oriented Programming

## Classes and Objects

\`\`\`python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} says Woof!"

my_dog = Dog("Buddy", 3)
print(my_dog.name)  # Buddy
print(my_dog.bark())  # Buddy says Woof!
\`\`\`

## Inheritance

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def bark(self):
        return "Woof!"

class Cat(Animal):
    def meow(self):
        return "Meow!"
\`\`\`
`,
      },
      {
        title: 'File Handling and Error Handling',
        order: 10,
        content: `# File Handling and Error Handling

## Reading Files

\`\`\`python
# Read entire file
with open('file.txt', 'r') as f:
    content = f.read()

# Read line by line
with open('file.txt', 'r') as f:
    for line in f:
        print(line)
\`\`\`

## Writing Files

\`\`\`python
# Write to file
with open('file.txt', 'w') as f:
    f.write("Hello, World!")

# Append to file
with open('file.txt', 'a') as f:
    f.write("\\nNew line")
\`\`\`

## Error Handling

\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"Error: {e}")
finally:
    print("Always executes")
\`\`\`
`,
      },
    ],
  },
  {
    id: 'relational-databases',
    title: 'Relational Databases & SQL',
    description: 'Learn database design, queries, and optimization. Master SQL from basics to advanced topics.',
    difficulty: 'beginner',
    thumbnail: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&q=80',
    lessons: [
      {
        title: 'Introduction to Databases',
        order: 1,
        content: `# Introduction to Databases

## What is a Database?

A database is an organized collection of structured information stored electronically.

## Types of Databases

- **Relational (SQL)**: MySQL, PostgreSQL, SQLite
- **NoSQL**: MongoDB, Redis, Cassandra
- **Graph**: Neo4j
- **Time-series**: InfluxDB

## Relational Database Concepts

### Tables
Data is stored in tables with rows and columns.

### Primary Key
A unique identifier for each row.

### Foreign Key
A field that links to another table's primary key.

### Relationships
- One-to-One
- One-to-Many
- Many-to-Many
`,
      },
      {
        title: 'SQL Basics - SELECT',
        order: 2,
        content: `# SQL Basics - SELECT

## Basic SELECT

\`\`\`sql
-- Select all columns
SELECT * FROM users;

-- Select specific columns
SELECT name, email FROM users;

-- Select with alias
SELECT name AS user_name FROM users;
\`\`\`

## WHERE Clause

\`\`\`sql
-- Filter by value
SELECT * FROM users WHERE age = 25;

-- Multiple conditions
SELECT * FROM users WHERE age > 18 AND city = 'NYC';

-- IN operator
SELECT * FROM users WHERE city IN ('NYC', 'LA', 'Chicago');

-- LIKE operator (pattern matching)
SELECT * FROM users WHERE name LIKE 'A%';
\`\`\`

## ORDER BY

\`\`\`sql
-- Ascending (default)
SELECT * FROM users ORDER BY name;

-- Descending
SELECT * FROM users ORDER BY created_at DESC;
\`\`\`

## LIMIT and OFFSET

\`\`\`sql
-- Get first 10 rows
SELECT * FROM users LIMIT 10;

-- Pagination: skip 20, get 10
SELECT * FROM users LIMIT 10 OFFSET 20;
\`\`\`
`,
      },
      {
        title: 'Aggregate Functions',
        order: 3,
        content: `# Aggregate Functions

## COUNT

\`\`\`sql
-- Count all rows
SELECT COUNT(*) FROM users;

-- Count non-null values
SELECT COUNT(email) FROM users;
\`\`\`

## SUM, AVG, MIN, MAX

\`\`\`sql
SELECT 
    COUNT(*) as total_users,
    AVG(age) as average_age,
    MIN(age) as youngest,
    MAX(age) as oldest,
    SUM(salary) as total_salary
FROM users;
\`\`\`

## GROUP BY

\`\`\`sql
-- Count users per city
SELECT city, COUNT(*) as user_count
FROM users
GROUP BY city;

-- Average salary by department
SELECT department, AVG(salary) as avg_salary
FROM employees
GROUP BY department;
\`\`\`

## HAVING Clause

\`\`\`sql
-- Groups with more than 5 users
SELECT city, COUNT(*) as user_count
FROM users
GROUP BY city
HAVING COUNT(*) > 5;
\`\`\`
`,
      },
      {
        title: 'JOINs',
        order: 4,
        content: `# JOINs

## INNER JOIN

Returns matching rows from both tables.

\`\`\`sql
SELECT users.name, orders.order_date
FROM users
INNER JOIN orders ON users.id = orders.user_id;
\`\`\`

## LEFT JOIN

Returns all rows from left table, matching from right.

\`\`\`sql
SELECT users.name, orders.order_date
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
\`\`\`

## RIGHT JOIN

Returns all rows from right table, matching from left.

\`\`\`sql
SELECT users.name, orders.order_date
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;
\`\`\`

## FULL OUTER JOIN

Returns all rows from both tables.

\`\`\`sql
SELECT users.name, orders.order_date
FROM users
FULL OUTER JOIN orders ON users.id = orders.user_id;
\`\`\`

## Multiple JOINs

\`\`\`sql
SELECT 
    users.name,
    orders.order_date,
    products.product_name
FROM users
INNER JOIN orders ON users.id = orders.user_id
INNER JOIN products ON orders.product_id = products.id;
\`\`\`
`,
      },
      {
        title: 'Data Modification',
        order: 5,
        content: `# Data Modification

## INSERT

\`\`\`sql
-- Insert single row
INSERT INTO users (name, email, age)
VALUES ('John', 'john@example.com', 25);

-- Insert multiple rows
INSERT INTO users (name, email, age)
VALUES 
    ('Jane', 'jane@example.com', 30),
    ('Bob', 'bob@example.com', 35);
\`\`\`

## UPDATE

\`\`\`sql
-- Update all rows
UPDATE users SET active = true;

-- Update specific rows
UPDATE users 
SET age = 26, city = 'Boston'
WHERE name = 'John';
\`\`\`

## DELETE

\`\`\`sql
-- Delete specific rows
DELETE FROM users WHERE id = 1;

-- Delete all rows (careful!)
DELETE FROM users;
\`\`\`
`,
      },
      {
        title: 'Database Design',
        order: 6,
        content: `# Database Design

## Normalization

Organizing data to reduce redundancy.

### First Normal Form (1NF)
- Each column contains atomic values
- No repeating groups

### Second Normal Form (2NF)
- Meets 1NF
- All non-key attributes depend on entire primary key

### Third Normal Form (3NF)
- Meets 2NF
- No transitive dependencies

## Indexes

Improve query performance.

\`\`\`sql
-- Create index
CREATE INDEX idx_email ON users(email);

-- Composite index
CREATE INDEX idx_name_city ON users(name, city);
\`\`\`

## Constraints

\`\`\`sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    age INTEGER CHECK (age >= 18),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
\`\`\`
`,
      },
      {
        title: 'Advanced SQL',
        order: 7,
        content: `# Advanced SQL

## Subqueries

\`\`\`sql
-- Subquery in WHERE
SELECT * FROM users
WHERE age > (SELECT AVG(age) FROM users);

-- Subquery in FROM
SELECT dept, avg_salary FROM (
    SELECT department as dept, AVG(salary) as avg_salary
    FROM employees
    GROUP BY department
) WHERE avg_salary > 50000;
\`\`\`

## Common Table Expressions (CTEs)

\`\`\`sql
WITH high_earners AS (
    SELECT * FROM employees WHERE salary > 100000
)
SELECT * FROM high_earners WHERE department = 'Engineering';
\`\`\`

## Window Functions

\`\`\`sql
-- Row number
SELECT name, salary, 
    ROW_NUMBER() OVER (ORDER BY salary DESC) as rank
FROM employees;

-- Running total
SELECT date, amount,
    SUM(amount) OVER (ORDER BY date) as running_total
FROM transactions;
\`\`\`

## Views

\`\`\`sql
-- Create view
CREATE VIEW active_users AS
SELECT * FROM users WHERE active = true;

-- Use view
SELECT * FROM active_users;
\`\`\`
`,
      },
      {
        title: 'Transactions and ACID',
        order: 8,
        content: `# Transactions and ACID

## What is a Transaction?

A sequence of operations performed as a single logical unit of work.

## ACID Properties

- **Atomicity**: All or nothing
- **Consistency**: Database remains valid
- **Isolation**: Concurrent transactions don't interfere
- **Durability**: Committed changes persist

## Transaction Control

\`\`\`sql
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;  -- or ROLLBACK;
\`\`\`

## Savepoints

\`\`\`sql
BEGIN TRANSACTION;

SAVEPOINT sp1;
-- some operations
ROLLBACK TO sp1;

COMMIT;
\`\`\`
`,
      },
    ],
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI & Autonomous Systems',
    description: 'Build AI agents and multi-agent architectures. Learn to create autonomous AI systems that can plan and execute complex tasks.',
    difficulty: 'intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    lessons: [
      {
        title: 'Introduction to AI Agents',
        order: 1,
        content: `# Introduction to AI Agents

## What is an AI Agent?

An AI agent is an autonomous system that can:
- Perceive its environment
- Make decisions
- Take actions to achieve goals
- Learn from feedback

## Types of AI Agents

### Simple Reflex Agents
- React to current percepts
- No memory of past

### Model-Based Agents
- Maintain internal state
- Consider history

### Goal-Based Agents
- Work toward specific objectives
- Plan ahead

### Utility-Based Agents
- Maximize expected utility
- Make optimal decisions

## Agent Architecture

\`\`\`
┌─────────────┐
│  Sensors    │ → Input from environment
└──────┬──────┘
       ↓
┌─────────────┐
│  Agent      │ → Decision making
│  Core       │
└──────┬──────┘
       ↓
┌─────────────┐
│  Actuators  │ → Output actions
└─────────────┘
\`\`\`
`,
      },
      {
        title: 'LLMs and Foundation Models',
        order: 2,
        content: `# LLMs and Foundation Models

## Large Language Models

LLMs are transformer-based models trained on vast text data.

### Key Capabilities
- Text generation
- Question answering
- Code generation
- Reasoning
- Tool use

## Popular LLMs

- **GPT-4**: OpenAI's most capable model
- **Claude**: Anthropic's helpful assistant
- **Llama**: Meta's open-source models
- **Gemini**: Google's multimodal model

## Using LLM APIs

\`\`\`python
from openai import OpenAI

client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)
\`\`\`
`,
      },
      {
        title: 'Prompt Engineering',
        order: 3,
        content: `# Prompt Engineering

## What is Prompt Engineering?

The art of crafting effective prompts to get desired outputs from LLMs.

## Techniques

### Zero-Shot Prompting
\`\`\`
Classify this text as positive or negative:
"This product is amazing!"
\`\`\`

### Few-Shot Prompting
\`\`\`
Positive: "Great movie!"
Negative: "Terrible acting."
Positive: "Loved it!"
Negative: "Waste of time."
Positive: "Excellent service!"
\`\`\`

### Chain of Thought
\`\`\`
Let's think step by step:
1. First, identify the key elements
2. Then, analyze each component
3. Finally, draw a conclusion
\`\`\`

### Role Prompting
\`\`\`
You are an expert Python developer with 10 years of experience.
Explain the concept of decorators.
\`\`\`
`,
      },
      {
        title: 'Building AI Agents',
        order: 4,
        content: `# Building AI Agents

## Agent Components

1. **Planning**: Breaking down tasks
2. **Memory**: Storing context
3. **Tool Use**: Calling external APIs
4. **Reflection**: Learning from mistakes

## Simple Agent Example

\`\`\`python
class SimpleAgent:
    def __init__(self, llm):
        self.llm = llm
        self.memory = []
    
    def think(self, task):
        # Plan the approach
        plan = self.llm.generate(
            f"How would you accomplish: {task}?"
        )
        return plan
    
    def act(self, plan):
        # Execute the plan
        result = self.llm.generate(plan)
        return result
    
    def run(self, task):
        plan = self.think(task)
        result = self.act(plan)
        return result
\`\`\`

## ReAct Pattern

Reason + Act framework:

\`\`\`
Thought: I need to find the weather
Action: Search weather API
Observation: It's sunny
Thought: Now I can answer
Final Answer: The weather is sunny
\`\`\`
`,
      },
      {
        title: 'Multi-Agent Systems',
        order: 5,
        content: `# Multi-Agent Systems

## What are Multi-Agent Systems?

Multiple AI agents working together to solve complex problems.

## Agent Roles

- **Coordinator**: Orchestrates workflow
- **Researcher**: Gathers information
- **Writer**: Creates content
- **Reviewer**: Quality checks
- **Executor**: Takes actions

## Communication Patterns

### Sequential
\`\`\`
Agent 1 → Agent 2 → Agent 3 → Result
\`\`\`

### Hierarchical
\`\`\`
      Manager
     /   |   \\
Agent1 Agent2 Agent3
\`\`\`

### Collaborative
\`\`\`
Agent 1 ↔ Agent 2
   ↓       ↓
Agent 3 ←──┘
\`\`\`
`,
      },
      {
        title: 'Memory Systems',
        order: 6,
        content: `# Memory Systems

## Types of Memory

### Short-term Memory
- Conversation history
- Context window
- Recent interactions

### Long-term Memory
- Vector databases
- Knowledge graphs
- Persistent storage

## Vector Databases

\`\`\`python
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings

embeddings = OpenAIEmbeddings()
vectorstore = Chroma(
    embedding_function=embeddings,
    persist_directory="./chroma_db"
)

# Add documents
vectorstore.add_texts(["Document 1", "Document 2"])

# Search
results = vectorstore.similarity_search("query")
\`\`\`

## Retrieval Augmented Generation (RAG)

1. User asks question
2. Retrieve relevant documents
3. Inject into context
4. LLM generates answer
`,
      },
      {
        title: 'Tool Use and Function Calling',
        order: 7,
        content: `# Tool Use and Function Calling

## What is Function Calling?

LLMs can call external functions/APIs to get real-time data.

## OpenAI Function Calling

\`\`\`python
tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "Get current weather",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City name"
                }
            },
            "required": ["location"]
        }
    }
}]

response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Weather in NYC?"}],
    tools=tools
)
\`\`\`

## Custom Tools

\`\`\`python
def search_web(query):
    """Search the internet"""
    # Implementation
    
def calculate(expression):
    """Perform calculations"""
    # Implementation
    
def read_file(path):
    """Read file contents"""
    # Implementation
\`\`\`
`,
      },
      {
        title: 'Agent Frameworks',
        order: 8,
        content: `# Agent Frameworks

## LangChain

Popular framework for building LLM applications.

\`\`\`python
from langchain.agents import initialize_agent, Tool
from langchain.llms import OpenAI

llm = OpenAI()
tools = [Tool(...)]

agent = initialize_agent(
    tools, 
    llm, 
    agent="zero-shot-react-description"
)

agent.run("Task description")
\`\`\`

## AutoGen

Microsoft's multi-agent framework.

\`\`\`python
from autogen import AssistantAgent, UserProxyAgent

assistant = AssistantAgent("assistant")
user_proxy = UserProxyAgent("user_proxy")

user_proxy.initiate_chat(
    assistant,
    message="Task description"
)
\`\`\`

## CrewAI

Role-based agent orchestration.

\`\`\`python
from crewai import Agent, Task, Crew

researcher = Agent(role='Researcher', ...)
writer = Agent(role='Writer', ...)

task = Task(description='...', agent=researcher)
crew = Crew(agents=[researcher, writer], tasks=[task])
result = crew.kickoff()
\`\`\`
`,
      },
      {
        title: 'Production Considerations',
        order: 9,
        content: `# Production Considerations

## Cost Optimization

- Use smaller models when possible
- Cache responses
- Optimize prompts
- Batch requests

## Latency

- Stream responses
- Use async calls
- Implement timeouts
- Load balance

## Security

- Validate inputs
- Sanitize outputs
- Rate limiting
- API key management

## Monitoring

\`\`\`python
import logging

def log_agent_action(action, result):
    logging.info(f"Agent {action}: {result}")

def track_token_usage(response):
    usage = response.usage
    logging.info(f"Tokens: {usage}")
\`\`\`

## Error Handling

\`\`\`python
try:
    response = llm.generate(prompt)
except RateLimitError:
    # Wait and retry
    time.sleep(60)
except APIError as e:
    # Log and handle
    logging.error(f"API error: {e}")
\`\`\`
`,
      },
      {
        title: 'Building a Complete Agent',
        order: 10,
        content: `# Building a Complete Agent

## Full Example

\`\`\`python
from openai import OpenAI
import json

class ResearchAgent:
    def __init__(self):
        self.client = OpenAI()
        self.memory = []
    
    def search(self, query):
        # Simulated search
        return f"Search results for: {query}"
    
    def analyze(self, content):
        response = self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "Analyze this content"},
                {"role": "user", "content": content}
            ]
        )
        return response.choices[0].message.content
    
    def run(self, task):
        # Plan
        search_results = self.search(task)
        
        # Analyze
        analysis = self.analyze(search_results)
        
        # Report
        return {
            "task": task,
            "findings": search_results,
            "analysis": analysis
        }

# Usage
agent = ResearchAgent()
result = agent.run("Latest AI developments")
print(json.dumps(result, indent=2))
\`\`\`
`,
      },
    ],
  },
]

const booksData = [
  {
    courseId: 'python-basics',
    title: 'The Python Programming Handbook',
    description: 'A comprehensive guide to Python programming from fundamentals to advanced concepts, with hands-on examples and best practices.',
    chapters: [
      {
        title: 'Chapter 1: Introduction to Python',
        order: 1,
        content: `# Chapter 1: Introduction to Python

## What is Python?

Python is a high-level, general-purpose programming language created by Guido van Rossum and first released in 1991. It emphasizes code readability with its use of significant indentation and supports multiple programming paradigms including procedural, object-oriented, and functional programming.

## Why Python Matters

Python has become the most widely-used programming language in the world due to its versatility. It powers web applications (Django, Flask), data science pipelines (pandas, NumPy), machine learning models (TensorFlow, PyTorch), and automation scripts across every industry.

## Setting Up Your Environment

\`\`\`python
# Verify your Python installation
import sys
print(f"Python version: {sys.version}")

# Your first program
print("Hello, World!")

# Python as a calculator
result = (10 + 5) * 3
print(f"Calculation result: {result}")
\`\`\`

## The Python Interpreter

Python is an interpreted language, meaning code is executed line by line. You can use the interactive REPL (Read-Eval-Print Loop) by typing \`python\` in your terminal, or save code in \`.py\` files and run them with \`python filename.py\`.

## Key Takeaways

- Python is beginner-friendly yet powerful enough for production systems
- Indentation defines code blocks (no curly braces needed)
- The interactive interpreter is great for experimentation
- Python 3 is the current standard; avoid Python 2`,
      },
      {
        title: 'Chapter 2: Variables & Data Types',
        order: 2,
        content: `# Chapter 2: Variables & Data Types

## Understanding Variables

Variables in Python are names that reference objects in memory. Python uses dynamic typing, so you never declare a type explicitly. The type is inferred from the assigned value.

## Core Data Types

Python has several built-in data types that form the foundation of all programs.

\`\`\`python
# Strings - textual data
name = "Alice"
greeting = f"Hello, {name}!"  # f-string formatting

# Integers - whole numbers
age = 30
hex_val = 0xFF  # 255 in hexadecimal

# Floats - decimal numbers
temperature = 98.6
scientific = 1.5e10  # 15000000000.0

# Booleans - logical values
is_active = True
is_deleted = False

# NoneType - absence of value
result = None
\`\`\`

## Type Checking and Conversion

\`\`\`python
# Check types
print(type(42))        # <class 'int'>
print(isinstance(42, int))  # True

# Convert between types
num_str = "42"
num_int = int(num_str)       # String to int
num_float = float(num_str)   # String to float
back_to_str = str(num_int)   # Int to string
\`\`\`

## String Operations

\`\`\`python
text = "Python Programming"
print(text.lower())      # python programming
print(text.split())      # ['Python', 'Programming']
print(len(text))         # 18
print(text[0:6])         # Python
\`\`\`

## Key Takeaways

- Python is dynamically typed; variables can change type
- Use f-strings for readable string formatting
- \`type()\` and \`isinstance()\` help inspect data types
- Type conversion functions: \`int()\`, \`float()\`, \`str()\`, \`bool()\``,
      },
      {
        title: 'Chapter 3: Control Flow',
        order: 3,
        content: `# Chapter 3: Control Flow

## Conditional Statements

Control flow determines the order in which statements are executed. Python uses \`if\`, \`elif\`, and \`else\` keywords to create branching logic.

\`\`\`python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Your grade: {grade}")  # Your grade: B
\`\`\`

## Loops

### For Loops

\`\`\`python
# Iterate over a sequence
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")

# Using range for numeric iteration
for i in range(1, 6):
    print(f"Count: {i}")

# Enumerate for index + value
for idx, fruit in enumerate(fruits):
    print(f"{idx}: {fruit}")
\`\`\`

### While Loops

\`\`\`python
countdown = 5
while countdown > 0:
    print(f"T-minus {countdown}")
    countdown -= 1
print("Liftoff!")
\`\`\`

## Loop Control

\`\`\`python
# break exits the loop entirely
for num in range(100):
    if num > 5:
        break
    print(num)  # Prints 0-5

# continue skips to the next iteration
for num in range(10):
    if num % 2 == 0:
        continue
    print(num)  # Prints odd numbers only
\`\`\`

## Key Takeaways

- Indentation is mandatory and defines code blocks
- \`for\` loops iterate over sequences; \`while\` loops check conditions
- \`break\` and \`continue\` provide fine-grained loop control
- \`enumerate()\` gives both index and value in loops`,
      },
      {
        title: 'Chapter 4: Functions & Modules',
        order: 4,
        content: `# Chapter 4: Functions & Modules

## Defining Functions

Functions are reusable blocks of code that perform a specific task. They promote DRY (Don't Repeat Yourself) principles and make code modular.

\`\`\`python
def calculate_area(length, width):
    """Calculate the area of a rectangle."""
    return length * width

area = calculate_area(10, 5)
print(f"Area: {area}")  # Area: 50
\`\`\`

## Parameters and Arguments

\`\`\`python
# Default parameters
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))              # Hello, Alice!
print(greet("Bob", "Good morning")) # Good morning, Bob!

# *args and **kwargs
def flexible(*args, **kwargs):
    print(f"Positional: {args}")
    print(f"Keyword: {kwargs}")

flexible(1, 2, 3, name="Alice", age=30)
\`\`\`

## Lambda Functions

\`\`\`python
square = lambda x: x ** 2
numbers = [1, 2, 3, 4, 5]
squared = list(map(square, numbers))
print(squared)  # [1, 4, 9, 16, 25]
\`\`\`

## Modules and Imports

\`\`\`python
# Import entire module
import math
print(math.sqrt(16))  # 4.0

# Import specific functions
from datetime import datetime
now = datetime.now()
print(now.strftime("%Y-%m-%d"))

# Import with alias
import numpy as np
\`\`\`

## Key Takeaways

- Functions accept parameters and return values with \`return\`
- Docstrings document function purpose and usage
- \`*args\` and \`**kwargs\` enable flexible argument passing
- Modules organize code; use \`import\` to access them`,
      },
      {
        title: 'Chapter 5: Data Structures',
        order: 5,
        content: `# Chapter 5: Data Structures

## Lists

Lists are ordered, mutable sequences that can hold mixed types.

\`\`\`python
numbers = [1, 2, 3, 4, 5]
numbers.append(6)          # Add to end
numbers.insert(0, 0)       # Insert at index
numbers.pop()              # Remove last
numbers.sort(reverse=True) # Sort descending

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
\`\`\`

## Dictionaries

Dictionaries store key-value pairs with O(1) average lookup time.

\`\`\`python
student = {
    "name": "Alice",
    "age": 20,
    "grades": [90, 85, 92]
}

# Access and modify
print(student["name"])           # Alice
student["gpa"] = 3.8             # Add new key
print(student.get("email", "N/A"))  # N/A (default)

# Dictionary comprehension
squared = {x: x**2 for x in range(5)}
\`\`\`

## Tuples and Sets

\`\`\`python
# Tuples - immutable sequences
point = (10, 20)
x, y = point  # Unpacking

# Sets - unique unordered elements
unique = {1, 2, 3, 3, 4}  # {1, 2, 3, 4}
a = {1, 2, 3}
b = {3, 4, 5}
print(a & b)  # Intersection: {3}
print(a | b)  # Union: {1, 2, 3, 4, 5}
\`\`\`

## Key Takeaways

- Lists for ordered mutable collections; tuples for immutable
- Dictionaries for key-value mappings with fast lookups
- Sets for unique elements and mathematical set operations
- Comprehensions provide concise ways to create collections`,
      },
      {
        title: 'Chapter 6: Object-Oriented Programming',
        order: 6,
        content: `# Chapter 6: Object-Oriented Programming

## Classes and Objects

OOP models real-world entities as objects with attributes (data) and methods (behavior).

\`\`\`python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self._balance = balance  # Convention: protected

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            return f"Deposited \${amount}"
        raise ValueError("Amount must be positive")

    def get_balance(self):
        return self._balance

account = BankAccount("Alice", 1000)
account.deposit(500)
print(account.get_balance())  # 1500
\`\`\`

## Inheritance

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

pets = [Dog("Rex"), Cat("Whiskers")]
for pet in pets:
    print(pet.speak())  # Polymorphism in action
\`\`\`

## Special Methods

\`\`\`python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1 + v2)  # Vector(4, 6)
\`\`\`

## Key Takeaways

- Classes encapsulate data and behavior together
- Inheritance enables code reuse; polymorphism enables flexibility
- Special (dunder) methods customize object behavior
- Use \`_prefix\` convention for protected attributes`,
      },
      {
        title: 'Chapter 7: File Handling',
        order: 7,
        content: `# Chapter 7: File Handling

## Reading and Writing Files

File I/O is essential for persisting data. Python's \`with\` statement ensures files are properly closed after operations.

\`\`\`python
# Writing to a file
with open("output.txt", "w") as f:
    f.write("Line 1\\n")
    f.write("Line 2\\n")

# Reading entire file
with open("output.txt", "r") as f:
    content = f.read()
    print(content)

# Reading line by line (memory efficient)
with open("output.txt", "r") as f:
    for line in f:
        print(line.strip())
\`\`\`

## Working with CSV Files

\`\`\`python
import csv

# Writing CSV
data = [["Name", "Age"], ["Alice", 30], ["Bob", 25]]
with open("people.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(data)

# Reading CSV
with open("people.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(f"{row['Name']} is {row['Age']}")
\`\`\`

## Working with JSON

\`\`\`python
import json

# Write JSON
data = {"name": "Alice", "scores": [90, 85, 92]}
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

# Read JSON
with open("data.json", "r") as f:
    loaded = json.load(f)
    print(loaded["name"])  # Alice
\`\`\`

## Key Takeaways

- Always use \`with\` statements for automatic resource cleanup
- Choose the right mode: \`r\` (read), \`w\` (write), \`a\` (append)
- Use \`csv\` module for tabular data and \`json\` for structured data
- Read large files line-by-line to conserve memory`,
      },
      {
        title: 'Chapter 8: Error Handling & Best Practices',
        order: 8,
        content: `# Chapter 8: Error Handling & Best Practices

## Exception Handling

Robust programs anticipate and handle errors gracefully using try/except blocks.

\`\`\`python
def safe_divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        return "Error: Cannot divide by zero"
    except TypeError as e:
        return f"Error: Invalid types - {e}"
    else:
        return result  # Runs only if no exception
    finally:
        print("Division attempted")  # Always runs

print(safe_divide(10, 3))   # 3.333...
print(safe_divide(10, 0))   # Error: Cannot divide by zero
\`\`\`

## Custom Exceptions

\`\`\`python
class ValidationError(Exception):
    def __init__(self, field, message):
        self.field = field
        self.message = message
        super().__init__(f"{field}: {message}")

def validate_age(age):
    if not isinstance(age, int):
        raise ValidationError("age", "Must be an integer")
    if age < 0 or age > 150:
        raise ValidationError("age", "Must be between 0 and 150")
    return True

try:
    validate_age(-5)
except ValidationError as e:
    print(f"Validation failed - {e}")
\`\`\`

## Python Best Practices

\`\`\`python
# Use type hints for clarity
def greet(name: str, times: int = 1) -> str:
    return (f"Hello, {name}! " * times).strip()

# Use list comprehensions over map/filter
numbers = [1, 2, 3, 4, 5]
doubled = [n * 2 for n in numbers]  # Preferred

# Use pathlib for file paths
from pathlib import Path
config = Path.home() / ".config" / "app.json"
\`\`\`

## Key Takeaways

- Always catch specific exceptions, not bare \`except\`
- Use \`else\` for code that runs only on success
- \`finally\` ensures cleanup regardless of exceptions
- Type hints improve code readability and IDE support`,
      },
    ],
  },
  {
    courseId: 'relational-databases',
    title: 'Mastering Relational Databases & SQL',
    description: 'A complete guide to relational database design, SQL querying, and performance optimization for modern applications.',
    chapters: [
      {
        title: 'Chapter 1: Introduction to Databases',
        order: 1,
        content: `# Chapter 1: Introduction to Databases

## What is a Database?

A database is an organized collection of structured data stored and accessed electronically. Databases are managed by Database Management Systems (DBMS) that provide tools for defining, querying, updating, and administering data.

## Relational vs Non-Relational

Relational databases organize data into tables with predefined schemas and use SQL for querying. They enforce data integrity through constraints and relationships.

\`\`\`sql
-- A simple relational table
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

## Key Concepts

- **Tables**: Structured collections of rows and columns
- **Rows (Records)**: Individual entries in a table
- **Columns (Fields)**: Attributes that define the data type
- **Schema**: The blueprint that defines table structure

## Popular RDBMS

- **PostgreSQL**: Advanced open-source, extensible
- **MySQL**: Widely-used open-source database
- **SQLite**: Lightweight, file-based database
- **SQL Server**: Microsoft's enterprise database

## Key Takeaways

- Relational databases model data as interconnected tables
- SQL is the standard language for relational database operations
- Schemas enforce structure and data integrity
- Choose your RDBMS based on project requirements`,
      },
      {
        title: 'Chapter 2: SQL Fundamentals',
        order: 2,
        content: `# Chapter 2: SQL Fundamentals

## The SELECT Statement

SELECT is the most frequently used SQL command. It retrieves data from one or more tables.

\`\`\`sql
-- Select specific columns
SELECT name, email FROM users;

-- Select all columns
SELECT * FROM users;

-- Filter with WHERE
SELECT * FROM users WHERE age >= 18;

-- Combine conditions
SELECT * FROM products
WHERE price > 10 AND category = 'Electronics'
ORDER BY price DESC;
\`\`\`

## Filtering and Sorting

\`\`\`sql
-- Pattern matching with LIKE
SELECT * FROM users WHERE name LIKE 'A%';  -- Starts with A

-- Range queries
SELECT * FROM orders
WHERE total BETWEEN 100 AND 500;

-- NULL checks
SELECT * FROM users WHERE phone IS NOT NULL;

-- Sorting results
SELECT * FROM products
ORDER BY price ASC, name DESC;

-- Limiting results
SELECT * FROM logs ORDER BY created_at DESC LIMIT 100;
\`\`\`

## Aliases and Expressions

\`\`\`sql
-- Column aliases
SELECT
    first_name AS "First Name",
    price * quantity AS total_cost
FROM order_items;

-- DISTINCT values
SELECT DISTINCT category FROM products;

-- CASE expressions
SELECT name,
    CASE
        WHEN score >= 90 THEN 'A'
        WHEN score >= 80 THEN 'B'
        ELSE 'C'
    END AS grade
FROM students;
\`\`\`

## Key Takeaways

- SELECT retrieves data; WHERE filters rows
- ORDER BY sorts results; LIMIT constrains row count
- Use aliases for readability and computed columns
- CASE provides conditional logic within queries`,
      },
      {
        title: 'Chapter 3: Data Manipulation',
        order: 3,
        content: `# Chapter 3: Data Manipulation

## INSERT - Adding Data

The INSERT statement adds new rows to a table.

\`\`\`sql
-- Insert a single row
INSERT INTO users (name, email, age)
VALUES ('Alice Johnson', 'alice@example.com', 28);

-- Insert multiple rows
INSERT INTO users (name, email, age) VALUES
    ('Bob Smith', 'bob@example.com', 32),
    ('Carol White', 'carol@example.com', 25),
    ('Dave Brown', 'dave@example.com', 41);

-- Insert from a query
INSERT INTO archived_users
SELECT * FROM users WHERE last_login < '2024-01-01';
\`\`\`

## UPDATE - Modifying Data

\`\`\`sql
-- Update specific rows
UPDATE products
SET price = price * 0.9
WHERE category = 'Clearance';

-- Update with subquery
UPDATE orders
SET status = 'shipped'
WHERE id IN (
    SELECT order_id FROM shipments
    WHERE shipped_at IS NOT NULL
);
\`\`\`

## DELETE - Removing Data

\`\`\`sql
-- Delete specific rows
DELETE FROM sessions WHERE expires_at < NOW();

-- Delete with JOIN (PostgreSQL)
DELETE FROM order_items
USING orders
WHERE order_items.order_id = orders.id
AND orders.status = 'cancelled';

-- TRUNCATE removes all rows (faster than DELETE)
TRUNCATE TABLE temp_data;
\`\`\`

## Key Takeaways

- INSERT adds rows; always specify column names explicitly
- UPDATE modifies existing rows; always include a WHERE clause
- DELETE removes rows; TRUNCATE is faster for clearing entire tables
- Always test modification queries with SELECT first`,
      },
      {
        title: 'Chapter 4: JOINs & Relationships',
        order: 4,
        content: `# Chapter 4: JOINs & Relationships

## Understanding JOINs

JOINs combine rows from two or more tables based on a related column. They are fundamental to working with relational data.

\`\`\`sql
-- INNER JOIN: only matching rows from both tables
SELECT u.name, o.total, o.created_at
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN: all rows from left, matches from right
SELECT u.name, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.name;
\`\`\`

## Types of Relationships

\`\`\`sql
-- One-to-Many: One user has many orders
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    total DECIMAL(10, 2)
);

-- Many-to-Many: Students and Courses
CREATE TABLE enrollments (
    student_id INTEGER REFERENCES students(id),
    course_id INTEGER REFERENCES courses(id),
    enrolled_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (student_id, course_id)
);
\`\`\`

## Multi-Table JOINs

\`\`\`sql
-- Three-table JOIN
SELECT
    s.name AS student,
    c.title AS course,
    e.enrolled_at
FROM students s
JOIN enrollments e ON s.id = e.student_id
JOIN courses c ON c.id = e.course_id
WHERE c.difficulty = 'beginner';
\`\`\`

## Key Takeaways

- INNER JOIN returns only matching rows from both tables
- LEFT JOIN preserves all rows from the left table
- Foreign keys enforce referential integrity between tables
- Junction tables model many-to-many relationships`,
      },
      {
        title: 'Chapter 5: Database Design & Normalization',
        order: 5,
        content: `# Chapter 5: Database Design & Normalization

## Why Normalize?

Normalization eliminates data redundancy and ensures data integrity by organizing tables according to dependency rules.

## Normal Forms

### First Normal Form (1NF)
Each column holds atomic (indivisible) values. No repeating groups.

\`\`\`sql
-- Bad: violates 1NF (multiple values in one column)
-- | name  | phones              |
-- | Alice | 555-1234, 555-5678  |

-- Good: 1NF compliant
CREATE TABLE user_phones (
    user_id INTEGER REFERENCES users(id),
    phone VARCHAR(20),
    PRIMARY KEY (user_id, phone)
);
\`\`\`

### Second Normal Form (2NF)
Meets 1NF and every non-key column depends on the entire primary key.

### Third Normal Form (3NF)
Meets 2NF and no transitive dependencies exist. Every non-key column depends only on the primary key.

## Practical Schema Design

\`\`\`sql
-- Well-normalized e-commerce schema
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    price DECIMAL(10,2) NOT NULL CHECK (price > 0),
    category_id INTEGER REFERENCES categories(id)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    user_id INTEGER REFERENCES users(id),
    rating INTEGER CHECK (rating BETWEEN 1 AND 5),
    comment TEXT
);
\`\`\`

## Key Takeaways

- Normalization reduces redundancy and prevents update anomalies
- 3NF is sufficient for most applications
- Sometimes denormalization improves read performance
- Use constraints (CHECK, UNIQUE, NOT NULL) to enforce rules`,
      },
      {
        title: 'Chapter 6: Indexing & Performance',
        order: 6,
        content: `# Chapter 6: Indexing & Performance

## What Are Indexes?

Indexes are data structures (typically B-trees) that speed up data retrieval at the cost of additional storage and slower writes.

\`\`\`sql
-- Create an index on frequently queried columns
CREATE INDEX idx_users_email ON users(email);

-- Composite index for multi-column queries
CREATE INDEX idx_orders_user_date
ON orders(user_id, created_at DESC);

-- Unique index (also enforces uniqueness)
CREATE UNIQUE INDEX idx_users_username ON users(username);
\`\`\`

## EXPLAIN and Query Analysis

\`\`\`sql
-- Analyze query execution plan
EXPLAIN ANALYZE
SELECT * FROM orders
WHERE user_id = 42 AND created_at > '2024-01-01';

-- Look for: Seq Scan (bad for large tables)
-- Prefer: Index Scan or Index Only Scan
\`\`\`

## Optimization Strategies

\`\`\`sql
-- Use specific columns instead of SELECT *
SELECT name, email FROM users WHERE id = 1;

-- Avoid functions on indexed columns in WHERE
-- Bad:  WHERE YEAR(created_at) = 2024
-- Good: WHERE created_at >= '2024-01-01'

-- Use EXISTS instead of IN for subqueries
SELECT * FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);
\`\`\`

## When to Index

- Columns used in WHERE, JOIN, and ORDER BY clauses
- Foreign key columns
- Columns with high cardinality (many distinct values)

## Key Takeaways

- Indexes dramatically speed up reads but slow down writes
- Use EXPLAIN ANALYZE to understand query performance
- Composite indexes should match your query patterns
- Avoid over-indexing; each index has maintenance cost`,
      },
      {
        title: 'Chapter 7: Transactions & ACID',
        order: 7,
        content: `# Chapter 7: Transactions & ACID

## What is a Transaction?

A transaction is a sequence of SQL operations executed as a single unit of work. Either all operations succeed (commit) or none take effect (rollback).

## ACID Properties

- **Atomicity**: All operations complete or none do
- **Consistency**: Database moves from one valid state to another
- **Isolation**: Concurrent transactions don't interfere
- **Durability**: Committed data survives system failures

## Transaction Control

\`\`\`sql
BEGIN;

-- Transfer $500 from account 1 to account 2
UPDATE accounts SET balance = balance - 500
WHERE id = 1 AND balance >= 500;

UPDATE accounts SET balance = balance + 500
WHERE id = 2;

-- Check if debit succeeded
-- If balance was insufficient, rollback
COMMIT;  -- or ROLLBACK;
\`\`\`

## Isolation Levels

\`\`\`sql
-- Set isolation level
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Levels from least to most strict:
-- READ UNCOMMITTED: can see uncommitted changes
-- READ COMMITTED: only sees committed changes (default in PostgreSQL)
-- REPEATABLE READ: consistent snapshot for duration
-- SERIALIZABLE: full isolation, as if sequential
\`\`\`

## Savepoints

\`\`\`sql
BEGIN;
INSERT INTO orders (user_id, total) VALUES (1, 99.99);
SAVEPOINT order_created;

INSERT INTO order_items (order_id, product_id) VALUES (1, 999);
-- If this fails:
ROLLBACK TO order_created;
-- Order still exists, just no items
COMMIT;
\`\`\`

## Key Takeaways

- Transactions ensure data integrity during multi-step operations
- ACID properties guarantee reliable database behavior
- Choose isolation levels based on consistency vs performance needs
- Savepoints allow partial rollbacks within a transaction`,
      },
      {
        title: 'Chapter 8: Advanced SQL',
        order: 8,
        content: `# Chapter 8: Advanced SQL

## Common Table Expressions (CTEs)

CTEs create named temporary result sets that improve query readability and enable recursion.

\`\`\`sql
-- Basic CTE
WITH monthly_revenue AS (
    SELECT
        DATE_TRUNC('month', created_at) AS month,
        SUM(total) AS revenue
    FROM orders
    GROUP BY month
)
SELECT month, revenue,
    LAG(revenue) OVER (ORDER BY month) AS prev_month
FROM monthly_revenue;
\`\`\`

## Window Functions

Window functions perform calculations across sets of rows related to the current row.

\`\`\`sql
SELECT
    name, department, salary,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank,
    AVG(salary) OVER (PARTITION BY department) AS dept_avg,
    salary - AVG(salary) OVER (PARTITION BY department) AS diff_from_avg
FROM employees;
\`\`\`

## Recursive CTEs

\`\`\`sql
-- Organizational hierarchy
WITH RECURSIVE org_tree AS (
    SELECT id, name, manager_id, 1 AS level
    FROM employees WHERE manager_id IS NULL
    UNION ALL
    SELECT e.id, e.name, e.manager_id, t.level + 1
    FROM employees e
    JOIN org_tree t ON e.manager_id = t.id
)
SELECT * FROM org_tree ORDER BY level, name;
\`\`\`

## Views and Materialized Views

\`\`\`sql
-- Standard view (computed on each query)
CREATE VIEW active_subscriptions AS
SELECT u.name, s.plan, s.expires_at
FROM users u JOIN subscriptions s ON u.id = s.user_id
WHERE s.expires_at > NOW();

-- Materialized view (cached, must refresh)
CREATE MATERIALIZED VIEW sales_summary AS
SELECT product_id, SUM(quantity) AS total_sold
FROM order_items GROUP BY product_id;

REFRESH MATERIALIZED VIEW sales_summary;
\`\`\`

## Key Takeaways

- CTEs improve readability; recursive CTEs handle hierarchical data
- Window functions enable ranking, running totals, and comparisons
- Views abstract complex queries; materialized views cache results
- Master these features to write production-grade SQL`,
      },
    ],
  },
  {
    courseId: 'agentic-ai',
    title: 'Building Agentic AI Systems',
    description: 'A practical guide to designing and building autonomous AI agents, from LLM fundamentals to production multi-agent architectures.',
    chapters: [
      {
        title: 'Chapter 1: Introduction to AI Agents',
        order: 1,
        content: `# Chapter 1: Introduction to AI Agents

## What is an AI Agent?

An AI agent is a software system that perceives its environment, makes decisions, and takes autonomous actions to achieve specified goals. Unlike simple chatbots that respond to prompts, agents can plan multi-step strategies, use tools, and adapt based on feedback.

## The Agent Loop

Every AI agent follows a fundamental cycle: Observe, Think, Act, and Learn.

\`\`\`python
class AgentLoop:
    def __init__(self, llm, tools):
        self.llm = llm
        self.tools = tools
        self.memory = []

    def run(self, goal):
        while not self.is_goal_met(goal):
            observation = self.observe()
            thought = self.think(observation, goal)
            action = self.decide(thought)
            result = self.act(action)
            self.memory.append({
                "thought": thought,
                "action": action,
                "result": result
            })
        return self.summarize()
\`\`\`

## Types of AI Agents

- **Reactive Agents**: Respond to current input without memory
- **Deliberative Agents**: Plan ahead using internal models
- **Hybrid Agents**: Combine reactive speed with deliberative planning
- **Learning Agents**: Improve performance over time through experience

## Real-World Applications

AI agents power autonomous coding assistants, customer support systems, research tools, and workflow automation platforms used by millions daily.

## Key Takeaways

- Agents go beyond Q&A to autonomous task completion
- The Observe-Think-Act loop is the core agent pattern
- Different agent types suit different problem domains
- Modern agents are powered by LLMs as their reasoning engine`,
      },
      {
        title: 'Chapter 2: Large Language Models',
        order: 2,
        content: `# Chapter 2: Large Language Models

## How LLMs Work

Large Language Models are neural networks trained on massive text datasets using the transformer architecture. They predict the next token in a sequence, enabling them to generate coherent text, reason about problems, and follow instructions.

## Using LLM APIs

\`\`\`python
from openai import OpenAI

client = OpenAI()

def chat(messages, model="gpt-4"):
    response = client.chat.completions.create(
        model=model,
        messages=messages,
        temperature=0.7,
        max_tokens=1000
    )
    return response.choices[0].message.content

# Structured conversation
result = chat([
    {"role": "system", "content": "You are a helpful coding assistant."},
    {"role": "user", "content": "Write a Python function to find prime numbers."}
])
print(result)
\`\`\`

## Key Parameters

- **Temperature** (0-2): Controls randomness. Low = deterministic, High = creative
- **Max Tokens**: Limits response length
- **Top-p**: Nucleus sampling threshold
- **Stop Sequences**: Tokens that halt generation

## Choosing the Right Model

| Use Case | Recommended |
|----------|------------|
| Complex reasoning | GPT-4 / Claude 3.5 |
| Fast responses | GPT-4o-mini / Claude Haiku |
| Code generation | Specialized code models |
| Open source | Llama 3 / Mistral |

## Key Takeaways

- LLMs are statistical next-token predictors with emergent reasoning
- Temperature controls the creativity-accuracy tradeoff
- Choose models based on task complexity and latency needs
- Always use system messages to set context and behavior`,
      },
      {
        title: 'Chapter 3: Prompt Engineering',
        order: 3,
        content: `# Chapter 3: Prompt Engineering

## The Art of Effective Prompts

Prompt engineering is the practice of designing inputs that reliably produce desired outputs from language models. It is the primary interface for controlling agent behavior.

## Core Techniques

### Zero-Shot Prompting
\`\`\`python
prompt = """Classify the following customer review as
POSITIVE, NEGATIVE, or NEUTRAL.

Review: "The product arrived on time and works perfectly."
Classification:"""
\`\`\`

### Few-Shot Prompting
\`\`\`python
prompt = """Classify customer reviews:

Review: "Absolutely love it!" -> POSITIVE
Review: "Broke after one day." -> NEGATIVE
Review: "It's okay, nothing special." -> NEUTRAL
Review: "Best purchase I've ever made!" ->"""
\`\`\`

### Chain-of-Thought
\`\`\`python
prompt = """Solve this step by step:
A store sells apples at $2 each. If you buy 5 or more,
you get a 20% discount. How much do 7 apples cost?

Step 1: Calculate base price: 7 x $2 = $14
Step 2: Check discount: 7 >= 5, so 20% discount applies
Step 3: Calculate discount: $14 x 0.20 = $2.80
Step 4: Final price: $14 - $2.80 = $11.20"""
\`\`\`

## System Prompts for Agents

\`\`\`python
system_prompt = """You are a data analysis agent.
You have access to these tools: [query_database, plot_chart, export_csv]
Always: 1) Clarify the question 2) Query data 3) Analyze 4) Visualize
Never: Execute destructive database operations."""
\`\`\`

## Key Takeaways

- Clear, specific prompts produce better results than vague ones
- Few-shot examples guide the model toward desired output format
- Chain-of-thought improves reasoning on complex problems
- System prompts define agent identity, capabilities, and constraints`,
      },
      {
        title: 'Chapter 4: Building AI Agents',
        order: 4,
        content: `# Chapter 4: Building AI Agents

## Agent Architecture

A production AI agent consists of a reasoning core (LLM), memory system, tool registry, and an orchestration loop that coordinates these components.

\`\`\`python
class Agent:
    def __init__(self, model, system_prompt, tools=None):
        self.client = OpenAI()
        self.model = model
        self.system_prompt = system_prompt
        self.tools = tools or []
        self.messages = [
            {"role": "system", "content": system_prompt}
        ]

    def add_tool(self, name, description, func):
        self.tools.append({
            "name": name,
            "description": description,
            "execute": func
        })

    def run(self, user_input):
        self.messages.append({"role": "user", "content": user_input})

        while True:
            response = self.client.chat.completions.create(
                model=self.model,
                messages=self.messages,
                tools=self._format_tools()
            )
            msg = response.choices[0].message

            if msg.tool_calls:
                for call in msg.tool_calls:
                    result = self._execute_tool(call)
                    self.messages.append({
                        "role": "tool",
                        "content": str(result),
                        "tool_call_id": call.id
                    })
            else:
                self.messages.append(msg)
                return msg.content
\`\`\`

## The ReAct Pattern

ReAct (Reasoning + Acting) alternates between thinking and tool use.

\`\`\`
Thought: I need to find current stock prices
Action: search_api("AAPL stock price")
Observation: AAPL is trading at $185.50
Thought: Now I can answer the user's question
Answer: Apple stock is currently at $185.50
\`\`\`

## Key Takeaways

- Agents combine LLMs, tools, and memory in an orchestration loop
- The tool-call cycle continues until the LLM produces a final answer
- ReAct provides a structured reasoning-and-acting framework
- Start simple and add complexity incrementally`,
      },
      {
        title: 'Chapter 5: Tool Use & Function Calling',
        order: 5,
        content: `# Chapter 5: Tool Use & Function Calling

## Why Tools Matter

LLMs are limited to their training data. Tools extend agent capabilities to interact with live systems: databases, APIs, file systems, and external services.

## Defining Tools

\`\`\`python
tools = [
    {
        "type": "function",
        "function": {
            "name": "search_database",
            "description": "Search the product database by query",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Search terms"},
                    "limit": {"type": "integer", "description": "Max results", "default": 10}
                },
                "required": ["query"]
            }
        }
    }
]
\`\`\`

## Implementing Tool Execution

\`\`\`python
import json

def execute_tool(tool_call, available_tools):
    name = tool_call.function.name
    args = json.loads(tool_call.function.arguments)

    tool_map = {t["name"]: t["func"] for t in available_tools}

    if name not in tool_map:
        return {"error": f"Unknown tool: {name}"}

    try:
        result = tool_map[name](**args)
        return {"success": True, "data": result}
    except Exception as e:
        return {"error": str(e)}
\`\`\`

## Tool Design Best Practices

- Write clear, specific descriptions so the LLM knows when to use each tool
- Validate all inputs before execution
- Return structured results the LLM can interpret
- Implement timeouts and error handling for external calls

## Key Takeaways

- Tools transform LLMs from text generators into action-taking agents
- JSON Schema defines tool parameters for the model
- Always validate inputs and handle errors gracefully
- Good tool descriptions are as important as good prompts`,
      },
      {
        title: 'Chapter 6: Memory Systems',
        order: 6,
        content: `# Chapter 6: Memory Systems

## Why Agents Need Memory

Without memory, agents cannot maintain context across interactions, learn from past actions, or reference previous conversations. Memory is what separates a stateless chatbot from an intelligent agent.

## Types of Memory

### Short-Term (Working) Memory
The conversation context window. Limited by token count.

\`\`\`python
class ConversationMemory:
    def __init__(self, max_messages=50):
        self.messages = []
        self.max_messages = max_messages

    def add(self, role, content):
        self.messages.append({"role": role, "content": content})
        if len(self.messages) > self.max_messages:
            # Keep system message + recent messages
            self.messages = [self.messages[0]] + self.messages[-self.max_messages:]

    def get_context(self):
        return self.messages
\`\`\`

### Long-Term Memory with Vector Databases

\`\`\`python
from openai import OpenAI
import chromadb

client = OpenAI()
chroma = chromadb.Client()
collection = chroma.create_collection("agent_memory")

def store_memory(text, metadata=None):
    embedding = client.embeddings.create(
        model="text-embedding-3-small", input=text
    ).data[0].embedding
    collection.add(
        documents=[text],
        embeddings=[embedding],
        metadatas=[metadata or {}],
        ids=[str(hash(text))]
    )

def recall(query, n_results=5):
    embedding = client.embeddings.create(
        model="text-embedding-3-small", input=query
    ).data[0].embedding
    return collection.query(query_embeddings=[embedding], n_results=n_results)
\`\`\`

## Key Takeaways

- Short-term memory holds conversation context within token limits
- Long-term memory uses vector databases for semantic retrieval
- Embeddings convert text into numerical vectors for similarity search
- Effective memory management is critical for agent performance`,
      },
      {
        title: 'Chapter 7: Multi-Agent Systems',
        order: 7,
        content: `# Chapter 7: Multi-Agent Systems

## Why Multiple Agents?

Complex tasks often exceed what a single agent can handle effectively. Multi-agent systems divide work among specialized agents that collaborate to achieve goals.

## Architecture Patterns

### Orchestrator Pattern
\`\`\`python
class Orchestrator:
    def __init__(self):
        self.agents = {}

    def register(self, name, agent):
        self.agents[name] = agent

    def run(self, task):
        plan = self.agents["planner"].run(
            f"Break this task into subtasks: {task}"
        )
        results = {}
        for subtask in plan["subtasks"]:
            agent_name = subtask["assigned_to"]
            results[subtask["id"]] = self.agents[agent_name].run(
                subtask["description"]
            )
        return self.agents["synthesizer"].run(
            f"Combine these results: {json.dumps(results)}"
        )
\`\`\`

### Pipeline Pattern
\`\`\`python
class Pipeline:
    def __init__(self, stages):
        self.stages = stages  # List of agents

    def run(self, input_data):
        result = input_data
        for agent in self.stages:
            result = agent.run(result)
        return result

# Usage: Research -> Draft -> Review -> Polish
pipeline = Pipeline([researcher, writer, reviewer, editor])
final = pipeline.run("Write an article about quantum computing")
\`\`\`

## Communication Strategies

- **Message Passing**: Agents send structured messages directly
- **Shared Blackboard**: Agents read/write to a shared state
- **Event-Driven**: Agents react to published events

## Key Takeaways

- Multi-agent systems excel at complex, multi-domain tasks
- The orchestrator pattern provides centralized task coordination
- Pipelines work well for sequential processing workflows
- Choose communication patterns based on coordination needs`,
      },
      {
        title: 'Chapter 8: RAG & Production Deployment',
        order: 8,
        content: `# Chapter 8: RAG & Production Deployment

## Retrieval-Augmented Generation

RAG grounds LLM responses in factual, up-to-date information by retrieving relevant documents before generating answers.

\`\`\`python
class RAGAgent:
    def __init__(self, vectorstore, llm_client):
        self.vectorstore = vectorstore
        self.llm = llm_client

    def answer(self, question):
        # Step 1: Retrieve relevant documents
        docs = self.vectorstore.similarity_search(question, k=5)
        context = "\\n\\n".join([doc.page_content for doc in docs])

        # Step 2: Generate answer with context
        response = self.llm.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": f"""Answer based on this context:
{context}

If the context doesn't contain the answer, say so."""},
                {"role": "user", "content": question}
            ]
        )
        return response.choices[0].message.content
\`\`\`

## Production Checklist

\`\`\`python
# Rate limiting
from ratelimit import limits

@limits(calls=100, period=60)
def agent_endpoint(request):
    return agent.run(request.query)

# Structured logging
import structlog
logger = structlog.get_logger()

def run_with_logging(agent, task):
    logger.info("agent_start", task=task)
    try:
        result = agent.run(task)
        logger.info("agent_success", tokens=result.usage)
        return result
    except Exception as e:
        logger.error("agent_failure", error=str(e))
        raise
\`\`\`

## Deployment Strategies

- Use async endpoints for long-running agent tasks
- Implement circuit breakers for external API calls
- Cache frequent queries to reduce cost and latency
- Monitor token usage, latency, and error rates

## Key Takeaways

- RAG combines retrieval with generation for factual responses
- Always validate and sanitize agent inputs and outputs
- Rate limiting, logging, and monitoring are production essentials
- Design for failure: implement retries, fallbacks, and circuit breakers`,
      },
    ],
  },
]

async function main() {
  console.log('🌱 Seeding database...')

  // Delete existing data
  await prisma.chapterCompletion.deleteMany()
  await prisma.chapter.deleteMany()
  await prisma.book.deleteMany()
  await prisma.progress.deleteMany()
  await prisma.enrollment.deleteMany()
  await prisma.lesson.deleteMany()
  await prisma.course.deleteMany()
  await prisma.user.deleteMany()

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: hashedPassword,
      name: 'Admin User',
    },
  })

  console.log('✅ Created admin user (admin@example.com / admin123)')

  // Create courses with lessons
  for (const courseData of coursesData) {
    const { lessons, ...course } = courseData
    
    const createdCourse = await prisma.course.create({
      data: {
        ...course,
        lessons: {
          create: lessons.map((lesson, index) => ({
            title: lesson.title,
            content: lesson.content,
            order: lesson.order,
          })),
        },
      },
    })

    console.log(`✅ Created course: ${createdCourse.title} with ${lessons.length} lessons`)
  }

  // Create books with chapters
  for (const bookData of booksData) {
    const { chapters, courseId, ...book } = bookData
    await prisma.book.create({
      data: {
        ...book,
        courseId,
        chapters: {
          create: chapters,
        },
      },
    })
    console.log(`✅ Created book: ${book.title} with ${chapters.length} chapters`)
  }

  console.log('🎉 Database seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
