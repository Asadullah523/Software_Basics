// Comprehensive Software Engineering Curriculum
// Phase 1: Full content for first 3 sections, structured placeholders for remaining sections

export const curriculum = {
    sections: [
        {
            id: 'software-fundamentals',
            title: 'Software Fundamentals',
            category: 'foundations',
            icon: '💻',
            description: 'Master the core concepts of software and software engineering',
            estimatedTime: '2 hours',
            topics: [
                {
                    id: 'what-is-software',
                    title: 'What is Software?',
                    content: `
# What is Software?

## Introduction

Software is a collection of instructions, data, or programs used to operate computers and execute specific tasks. Unlike hardware, which is the physical component of a computer, software is intangible and consists of code written by programmers.

## Key Concepts

**Software** is a set of instructions that tells a computer what to do. Think of it as the brains of the computer system, while hardware is the body.

### Real-World Analogy
Imagine a music player:
- **Hardware**: The physical device (speakers, buttons, screen)
- **Software**: The music app that plays songs, creates playlists, and adjusts volume

## Characteristics of Software

1. **Intangible**: You cannot touch software
2. **Developed/Engineered**: Software is built, not manufactured
3. **Does not wear out**: Unlike hardware, software doesn't degrade physically
4. **Customizable**: Can be modified to meet different needs
5. **Reusable**: Can be used across multiple systems

## How Software Works

\`\`\`
User Input → Software Processing → Output
    ↓              ↓                ↓
Keyboard      Calculations      Screen Display
Mouse         Data Storage      Printer
Touch         Logic             Speaker
\`\`\`

## Examples in Daily Life

- **Mobile Apps**: Instagram, WhatsApp, Gmail
- **Operating Systems**: Windows, macOS, Android
- **Web Browsers**: Chrome, Firefox, Safari
- **Games**: Fortnite, Minecraft, Among Us
- **Productivity Tools**: Microsoft Word, Google Docs

## Software vs Hardware

| Aspect | Software | Hardware |
|--------|----------|----------|
| Nature | Intangible (logical) | Tangible (physical) |
| Development | Engineered/Programmed | Manufactured |
| Wear | Doesn't wear out | Can wear out |
| Cost | Development & licensing | Manufacturing & parts |
| Update | Easy to update | Hard to upgrade |

## Key Takeaways

✅ Software is a set of instructions that control computer operations
✅ Software is intangible but essential for computer functionality
✅ Without software, hardware is just a collection of electronic parts
✅ Software makes computers useful and user-friendly
          `,
                    examples: [
                        {
                            title: 'Operating System Example',
                            code: `// When you click a file to open it
User clicks "Document.pdf"
    ↓
Operating System receives click event
    ↓
OS finds the associated PDF reader software
    ↓
PDF reader software launches
    ↓
Document opens on screen`,
                            language: 'text'
                        }
                    ],
                    quiz: [
                        {
                            question: 'What is software?',
                            options: [
                                'Physical parts of a computer',
                                'A set of instructions that tells a computer what to do',
                                'The monitor and keyboard',
                                'Computer cables and wires'
                            ],
                            correct: 1,
                            explanation: 'Software is a collection of instructions, data, or programs used to operate computers.'
                        },
                        {
                            question: 'Which of the following is a characteristic of software?',
                            options: [
                                'It wears out over time',
                                'It is tangible',
                                'It can be customized',
                                'It cannot be updated'
                            ],
                            correct: 2,
                            explanation: 'Software can be customized and modified to meet different needs, unlike hardware.'
                        },
                        {
                            question: 'Which is an example of software?',
                            options: [
                                'Computer mouse',
                                'Hard drive',
                                'Microsoft Word',
                                'Monitor'
                            ],
                            correct: 2,
                            explanation: 'Microsoft Word is an application software, while the others are hardware components.'
                        }
                    ]
                },
                {
                    id: 'types-of-software',
                    title: 'Types of Software',
                    content: `
# Types of Software

## Overview

Software can be categorized into different types based on their purpose and functionality. Understanding these categories helps you recognize what kind of software you're using and developing.

## 1. System Software

System software provides core functions for the computer and manages hardware resources.

### Examples:
- **Operating Systems**: Windows, macOS, Linux, Android, iOS
- **Device Drivers**: Graphics card drivers, printer drivers
- **Utilities**: Antivirus, disk cleanup, file managers

### Characteristics:
- Runs in the background
- Essential for computer operation
- Manages hardware resources
- Provides platform for application software

\`\`\`
┌─────────────────────────┐
│   Application Software  │ (User-facing programs)
├─────────────────────────┤
│    System Software      │ (OS, Drivers, Utilities)
├─────────────────────────┤
│      Hardware           │ (Physical components)
└─────────────────────────┘
\`\`\`

## 2. Application Software

Software designed to help users perform specific tasks.

### Categories:

**Productivity Software**
- Microsoft Office (Word, Excel, PowerPoint)
- Google Workspace (Docs, Sheets, Slides)
- Notion, Trello

**Communication Software**
- Email clients (Gmail, Outlook)
- Messaging apps (WhatsApp, Slack)
- Video conferencing (Zoom, Teams)

**Entertainment Software**
- Games (Steam games, mobile games)
- Media players (VLC, Spotify)
- Streaming apps (Netflix, YouTube)

**Creative Software**
- Adobe Photoshop (image editing)
- Adobe Premiere (video editing)
- Figma (design)

## 3. Embedded Software

Software built into hardware devices to perform dedicated functions.

### Examples:
- **Smart TVs**: Software controlling TV features
- **Cars**: Engine control systems, navigation
- **Washing Machines**: Control programs
- **Smart Watches**: Fitness tracking, notifications
- **ATM Machines**: Transaction processing

### Characteristics:
- Specific purpose
- Limited resources
- Real-time operation
- Highly reliable

## 4. Open-Source vs Proprietary Software

### Open-Source Software

Software with source code available to everyone.

**Examples**: Linux, Firefox, WordPress, VLC

**Advantages**:
✅ Free to use and modify
✅ Community-driven development
✅ Transparent and secure
✅ Customizable

**Disadvantages**:
❌ May lack professional support
❌ Can be complex to use
❌ Fragmented development

### Proprietary Software

Software owned by individuals or companies.

**Examples**: Windows, Adobe Photoshop, Microsoft Office

**Advantages**:
✅ Professional support
✅ Polished user interface
✅ Regular updates
✅ Accountability

**Disadvantages**:
❌ Costs money
❌ Cannot modify source code
❌ Vendor lock-in
❌ Limited transparency

## Comparison Table

| Feature | System Software | Application Software | Embedded Software |
|---------|----------------|---------------------|-------------------|
| Purpose | Manage hardware | Perform user tasks | Control devices |
| User Interaction | Minimal | High | None/Minimal |
| Examples | Windows, Linux | Word, Chrome | Car software |
| Installation | Pre-installed | User installs | Built-in |

## Key Takeaways

✅ System software manages computer resources
✅ Application software helps users complete tasks
✅ Embedded software is built into hardware devices
✅ Open-source software is free and modifiable
✅ Proprietary software is owned and controlled by companies
          `,
                    examples: [
                        {
                            title: 'Software Stack in a Smartphone',
                            code: `Layer 4: Applications (Instagram, WhatsApp, Camera)
   ↓
Layer 3: Application Framework (APIs, Services)
   ↓
Layer 2: Operating System (Android, iOS)
   ↓
Layer 1: Hardware (Processor, RAM, Storage)`,
                            language: 'text'
                        }
                    ],
                    quiz: [
                        {
                            question: 'Which of the following is system software?',
                            options: ['Microsoft Word', 'Google Chrome', 'Windows 11', 'Adobe Photoshop'],
                            correct: 2,
                            explanation: 'Windows 11 is an operating system, which is a type of system software.'
                        },
                        {
                            question: 'What is embedded software?',
                            options: [
                                'Software that runs on servers',
                                'Software built into hardware devices',
                                'Software for creating documents',
                                'Software for browsing the internet'
                            ],
                            correct: 1,
                            explanation: 'Embedded software is specialized software built into hardware devices for specific functions.'
                        },
                        {
                            question: 'Which is an advantage of open-source software?',
                            options: [
                                'Always has professional support',
                                'Cannot be modified',
                                'Free and customizable',
                                'Costs money to use'
                            ],
                            correct: 2,
                            explanation: 'Open-source software is free to use and can be modified by anyone who has access to the source code.'
                        }
                    ]
                },
                {
                    id: 'hardware-vs-software',
                    title: 'Hardware vs Software',
                    content: `
# Hardware vs Software

## Introduction

Understanding the distinction between hardware and software is fundamental to grasping how computers work. They are complementary components that work together to create functional computer systems.

## What is Hardware?

**Hardware** refers to the physical components of a computer system that you can touch and see.

### Examples of Hardware:
- **Input Devices**: Keyboard, mouse, touchscreen, microphone
- **Output Devices**: Monitor, printer, speakers
- **Processing Units**: CPU (Central Processing Unit), GPU (Graphics Processing Unit)
- **Storage**: Hard drive, SSD, USB drive
- **Memory**: RAM (Random Access Memory)
- **Networking**: Network card, router, modem

## What is Software?

**Software** refers to the programs and instructions that tell hardware what to do.

### Examples of Software:
- **Operating Systems**: Windows, macOS, Linux
- **Applications**: Chrome, Photoshop, Excel
- **Utilities**: Antivirus, backup tools
- **Games**: Fortnite, Minecraft

## The Hardware-Software Relationship

\`\`\`
       Software Layer
    (Instructions & Logic)
           ↕
    Hardware Layer
  (Physical Execution)

Example: Playing a Video
------------------------
Software: Video player (VLC, YouTube)
    ↓
Decodes video file
    ↓
Sends instructions to hardware
    ↓
Hardware: GPU renders frames → Monitor displays → Speakers play audio
\`\`\`

## Detailed Comparison

| Aspect | Hardware | Software |
|--------|----------|----------|
| **Nature** | Physical, tangible | Logical, intangible |
| **Function** | Executes instructions | Provides instructions |
| **Dependency** | Needs software to function | Needs hardware to run |
| **Development** | Manufactured in factories | Developed by programmers |
| **Modification** | Difficult/expensive | Relatively easy |
| **Lifespan** | Wears out physically | Doesn't wear out |
| **Viruses** | Not affected | Can be infected |
| **Example** | Keyboard, monitor | Microsoft Word, Chrome |

## Why Both Are Essential

### Without Hardware:
❌ Software has no physical medium to run on
❌ No processing capability
❌ No way to interact with users

### Without Software:
❌ Hardware is just inert components
❌ No instructions to execute
❌ Cannot perform useful tasks

## Real-World Analogy

Think of a car:
- **Hardware** = The car itself (engine, wheels, steering wheel)
- **Software** = The driver and driving instructions

The car (hardware) is useless without a driver (software), and the driver can't go anywhere without a car.

## How They Work Together

### Example: Opening a Web Browser

1. **You click** the Chrome icon (hardware: mouse)
2. **Operating system** detects the click (software)
3. **CPU processes** the instruction (hardware)
4. **RAM loads** Chrome into memory (hardware)
5. **Chrome software** starts running (software)
6. **GPU renders** the browser window (hardware)
7. **Monitor displays** the browser (hardware)

## Evolution Over Time

### Hardware Evolution:
- 1940s: Room-sized computers
- 1970s: Desktop computers
- 2000s: Laptops
- 2010s: Smartphones, tablets
- 2020s: Wearables, IoT devices

### Software Evolution:
- 1950s: Machine code
- 1970s: Operating systems (DOS)
- 1990s: Graphical interfaces (Windows, Mac)
- 2000s: Web applications
- 2010s: Mobile apps, cloud software
- 2020s: AI-powered software

## Key Takeaways

✅ Hardware is physical; software is logical
✅ Hardware executes; software instructs
✅ Both are essential for computer functionality
✅ Hardware can outlast software versions
✅ Software can be updated without changing hardware
✅ Modern computers require seamless hardware-software integration
          `,
                    examples: [
                        {
                            title: 'Playing Music Example',
                            code: `User Action: Press "Play" button
         ↓
[SOFTWARE] Music app receives command
         ↓
[SOFTWARE] Decodes MP3/FLAC audio file
         ↓
[SOFTWARE] Sends audio data to audio driver
         ↓
[HARDWARE] Sound card processes signal
         ↓
[HARDWARE] Speakers vibrate
         ↓
Result: You hear music! 🎵`,
                            language: 'text'
                        }
                    ],
                    quiz: [
                        {
                            question: 'Which of the following is hardware?',
                            options: ['Microsoft Windows', 'RAM (Memory)', 'Google Chrome', 'Adobe Reader'],
                            correct: 1,
                            explanation: 'RAM is a physical component (hardware), while the others are software.'
                        },
                        {
                            question: 'What is the main difference between hardware and software?',
                            options: [
                                'Hardware is expensive, software is free',
                                'Hardware is physical, software is logical',
                                'Hardware is new, software is old',
                                'Hardware is complex, software is simple'
                            ],
                            correct: 1,
                            explanation: 'The fundamental difference is that hardware is physical and tangible, while software is logical and intangible.'
                        },
                        {
                            question: 'Can hardware function without software?',
                            options: [
                                'Yes, hardware always works independently',
                                'No, hardware needs software instructions to perform tasks',
                                'Only gaming hardware needs software',
                                'Hardware works better without software'
                            ],
                            correct: 1,
                            explanation: 'Hardware needs software to provide instructions on what to do. Without software, hardware is just inert components.'
                        }
                    ]
                },
                {
                    id: 'role-of-software-engineer',
                    title: 'Role of a Software Engineer',
                    content: `
# Role of a Software Engineer

## Introduction

A **Software Engineer** is a professional who applies engineering principles to design, develop, test, and maintain software systems. They solve real-world problems using code and technology.

## Core Responsibilities

### 1. Design & Architecture
- Plan system structure
- Create technical specifications
- Design databases and APIs
- Make scalability decisions

### 2. Development & Coding
- Write clean, efficient code
- Implement features
- Follow coding standards
- Use version control (Git)

### 3. Testing & Debugging
- Write unit tests
- Debug issues
- Perform code reviews
- Ensure quality

### 4. Maintenance & Updates
- Fix bugs
- Add new features
- Optimize performance
- Update documentation

### 5. Collaboration
- Work with teams
- Communicate with stakeholders
- Participate in meetings
- Mentor junior developers

## Skills Required

### Technical Skills:
✅ Programming languages (Python, Java, JavaScript, etc.)
✅ Data structures and algorithms
✅ Databases (SQL, NoSQL)
✅ Version control (Git, GitHub)
✅ Problem-solving
✅ Software design patterns

### Soft Skills:
✅ Communication
✅ Teamwork
✅ Time management
✅ Adaptability
✅ Critical thinking

## A Day in the Life

\`\`\`
9:00 AM  - Stand-up meeting (team sync)
9:30 AM  - Code review for teammate
10:00 AM - Work on feature development
12:00 PM - Lunch break
1:00 PM  - Debug production issue
2:00 PM  - Design meeting for new feature
3:00 PM  - Continue coding
4:30 PM  - Write documentation
5:00 PM  - Push code, create pull request
\`\`\`

## Types of Software Engineers

1. **Frontend Engineer**: User interfaces (React, Vue, Angular)
2. **Backend Engineer**: Server logic (Node.js, Python, Java)
3. **Full-Stack Engineer**: Both frontend and backend
4. **Mobile Engineer**: iOS/Android apps
5. **DevOps Engineer**: Infrastructure, CI/CD
6. **QA Engineer**: Testing and quality assurance
7. **Data Engineer**: Data pipelines and processing
8. **Security Engineer**: Application security

## Impact on Society

Software engineers create:
- 🌐 Social media platforms (Facebook, Twitter)
- 💰 Financial systems (banking apps, payment gateways)
- 🏥 Healthcare systems (patient records, telemedicine)
- 🚗 Transportation (Uber, Tesla autopilot)
- 🎓 Education platforms (online learning, coding bootcamps)

## Key Takeaways

✅ Software engineers solve problems using code
✅ They design, build, test, and maintain software
✅ Both technical and soft skills are essential
✅ Software engineering impacts every industry
✅ Continuous learning is crucial
          `,
                    examples: [],
                    quiz: [
                        {
                            question: 'What is the main role of a software engineer?',
                            options: [
                                'Only write code',
                                'Design, develop, test, and maintain software',
                                'Only test software',
                                'Manage other engineers'
                            ],
                            correct: 1,
                            explanation: 'Software engineers are responsible for the entire software lifecycle, including design, development, testing, and maintenance.'
                        }
                    ]
                },
                {
                    id: 'software-engineering-vs-cs',
                    title: 'Software Engineering vs Computer Science',
                    content: `
# Software Engineering vs Computer Science

## Overview

While related, Software Engineering and Computer Science are distinct fields with different focus areas.

## Computer Science

**Focus**: Theoretical foundations of computation and information processing.

### Core Topics:
- Algorithms and complexity theory
- Theory of computation
- Programming language theory
- Computer architecture
- Artificial intelligence
- Machine learning theory

### Goal:
Understanding how computers work and developing new computational theories.

## Software Engineering

**Focus**: Practical application of engineering principles to build software systems.

### Core Topics:
- Software design patterns
- System architecture
- Project management
- Testing methodologies
- DevOps practices
- Agile development

### Goal:
Building reliable, efficient, and maintainable software products.

## Comparison

| Aspect | Computer Science | Software Engineering |
|--------|------------------|---------------------|
| Focus | Theory | Practice |
| Approach | Research-oriented | Engineering-oriented |
| Output | Algorithms, papers | Working software |
| Math requirement | High | Moderate |
| Industry focus | Research, AI | Product development |

## Key Takeaways

✅ CS focuses on theory, SE focuses on practice
✅ CS asks "how", SE asks "what works"
✅ Both are valuable in tech industry
✅ Many roles require knowledge of both
          `,
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'programming-basics',
            title: 'Programming Basics',
            category: 'foundations',
            icon: '👨‍💻',
            description: 'Learn fundamental programming concepts',
            estimatedTime: '4 hours',
            topics: [
                {
                    id: 'what-is-program',
                    title: 'What is a Program?',
                    content: `
# What is a Program?

## Introduction

A **program** is a set of instructions that tells a computer how to perform a specific task. It's written in a programming language that humans can understand, which is then translated into machine code for the computer to execute.

## Basic Structure

Every program has three fundamental components:

\`\`\`
Input → Process → Output
  ↓        ↓         ↓
Data   Algorithm   Result
\`\`\`

## Real-World Analogy

Think of a recipe:
- **Instructions**: Steps to make a dish
- **Ingredients**: Input data
- **Cooking process**: Processing/algorithm
- **Final dish**: Output

A computer program works the same way!

## Simple Program Example

\`\`\`python
# A simple Python program
name = input("What's your name? ")  # Input
greeting = "Hello, " + name + "!"    # Process
print(greeting)                       # Output
\`\`\`

**Flow:**
1. Ask user for their name (Input)
2. Create greeting message (Process)
3. Display greeting (Output)

## Types of Programs

### 1. Sequential Programs
Execute instructions one after another
\`\`\`python
print("Step 1")
print("Step 2")
print("Step 3")
\`\`\`

### 2. Conditional Programs
Make decisions based on conditions
\`\`\`python
age = 18
if age >= 18:
    print("You can vote")
else:
    print("You cannot vote yet")
\`\`\`

### 3. Iterative Programs
Repeat instructions multiple times
\`\`\`python
for i in range(5):
    print(f"Count: {i}")
\`\`\`

## How Programs are Created

\`\`\`
1. Problem Understanding
   "I need to calculate grades"
        ↓
2. Algorithm Design
   "If score >= 90: A, elif score >= 80: B..."
        ↓
3. Coding
   Write in programming language
        ↓
4. Testing
   Check if it works correctly
        ↓
5. Debugging
   Fix any errors
        ↓
6. Deployment
   Make it available to users
\`\`\`

## Program Translation

### Source Code → Machine Code

**High-Level Language** (Human-readable)
\`\`\`python
print("Hello World")
\`\`\`

↓ **Compiler/Interpreter**

**Machine Code** (Computer-readable)
\`\`\`
01001000 01100101 01101100 01101100 01101111
\`\`\`

## Programming Languages

### Popular Languages:
- **Python**: Easy to learn, versatile
- **JavaScript**: Web development
- **Java**: Enterprise applications
- **C++**: System programming, games
- **Swift**: iOS apps
- **Kotlin**: Android apps

## Key Components of Programs

### 1. Variables
Store data values
\`\`\`python
age = 25
name = "Alice"
\`\`\`

### 2. Data Types
- Numbers (int, float)
- Strings (text)
- Booleans (True/False)
- Lists/Arrays

### 3. Operators
- Arithmetic: +, -, *, /
- Comparison: ==, !=, <, >
- Logical: and, or, not

### 4. Control Structures
- If/else statements
- Loops (for, while)
- Functions

## Complete Example: Grade Calculator

\`\`\`python
# Input
score = int(input("Enter your score: "))

# Process (Algorithm)
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

# Output
print(f"Your grade is: {grade}")
\`\`\`

## Program Execution

\`\`\`
Source Code (.py, .java, .cpp)
         ↓
Compiler/Interpreter
         ↓
Executable Code
         ↓
Operating System
         ↓
CPU Execution
         ↓
Result/Output
\`\`\`

## Best Practices

✅ Use meaningful variable names
✅ Add comments to explain code
✅ Keep functions small and focused
✅ Handle errors gracefully
✅ Test thoroughly
✅ Write readable code

## Key Takeaways

✅ A program is a set of instructions for a computer
✅ Programs follow Input → Process → Output pattern
✅ Programs are written in programming languages
✅ Programs must be translated to machine code
✅ Good programs are clear, efficient, and maintainable
✅ Every program solves a specific problem
          `,
                    examples: [
                        {
                            title: 'Calculator Program',
                            code: `# Simple Calculator
num1 = float(input("Enter first number: "))
operator = input("Enter operator (+, -, *, /): ")
num2 = float(input("Enter second number: "))

if operator == "+":
    result = num1 + num2
elif operator == "-":
    result = num1 - num2
elif operator == "*":
    result = num1 * num2
elif operator == "/":
    if num2 != 0:
        result = num1 / num2
    else:
        result = "Error: Division by zero"
else:
    result = "Invalid operator"

print(f"Result: {result}")`,
                            language: 'python'
                        }
                    ],
                    quiz: [
                        {
                            question: 'What is a program?',
                            options: [
                                'A physical computer component',
                                'A set of instructions that tells a computer what to do',
                                'A type of hardware',
                                'A computer screen'
                            ],
                            correct: 1,
                            explanation: 'A program is a set of instructions written in a programming language that tells a computer how to perform specific tasks.'
                        },
                        {
                            question: 'What is the basic flow of a program?',
                            options: [
                                'Output → Input → Process',
                                'Process → Output → Input',
                                'Input → Process → Output',
                                'Input → Output → Process'
                            ],
                            correct: 2,
                            explanation: 'The basic flow of a program is Input (receive data) → Process (perform operations) → Output (display results).'
                        },
                        {
                            question: 'Which of the following is a programming language?',
                            options: [
                                'Microsoft Word',
                                'Python',
                                'Google Chrome',
                                'Windows'
                            ],
                            correct: 1,
                            explanation: 'Python is a programming language, while the others are software applications or operating systems.'
                        }
                    ]
                },
                {
                    id: 'algorithms-flowcharts',
                    title: 'Algorithms & Flowcharts',
                    content: `
# Algorithms & Flowcharts

## What is an Algorithm?

An **algorithm** is a step-by-step procedure to solve a problem or perform a task. It's like a recipe for solving problems.

## Algorithm Characteristics

✅ **Well-defined inputs**: Clear starting point
✅ **Clear instructions**: Each step is unambiguous
✅ **Finite steps**: Must end eventually
✅ **Effectiveness**: Each step must be basic enough to execute
✅ **Produces output**: Generates a result

## Algorithm Example: Making Tea

\`\`\`
Algorithm: MakeTea
1. START
2. Boil water
3. Put tea bag in cup
4. Pour hot water into cup
5. Wait 3-5 minutes
6. Remove tea bag
7. Add sugar (optional)
8. Add milk (optional)
9. Stir
10. END
\`\`\`

## Types of Algorithms

### 1. Sequential
Steps executed one after another
\`\`\`
Step 1 → Step 2 → Step 3 → Result
\`\`\`

### 2. Conditional
Includes decision-making
\`\`\`
If condition is true:
    Do A
Else:
    Do B
\`\`\`

### 3. Iterative
Repeats steps
\`\`\`
Repeat 10 times:
    Do something
\`\`\`

## Flowcharts

A **flowchart** is a visual representation of an algorithm using symbols.

### Common Flowchart Symbols

\`\`\`
┌─────────┐
│  START  │  ← Oval: Start/End
└─────────┘

┌─────────┐
│ Process │  ← Rectangle: Process/Action
└─────────┘

    ╱          ╲
   ╱  Decision  ╲  ← Diamond: Decision/Condition
  ╱              ╲

 ┌──────────┐
╱│  Input/  │╲  ← Parallelogram: Input/Output
  │  Output │
 └──────────┘

    ↓           ← Arrow: Flow direction
\`\`\`

## Example Algorithm: Find Maximum of Two Numbers

**Algorithm:**
\`\`\`
Algorithm: FindMax
Input: num1, num2
Output: maximum

1. START
2. Read num1
3. Read num2
4. IF num1 > num2 THEN
      max = num1
   ELSE
      max = num2
5. Display max
6. END
\`\`\`

**Pseudocode:**
\`\`\`
function findMax(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2
\`\`\`

**Python Code:**
\`\`\`python
def find_max(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2

# Test
result = find_max(10, 25)
print(f"Maximum is: {result}")
\`\`\`

**Flowchart:**
\`\`\`
    ┌─────────┐
    │  START  │
    └────┬────┘
         ↓
  ┌─────────────┐
  │ Read num1,  │ (Input)
  │    num2     │
  └──────┬──────┘
         ↓
    ╱          ╲
   ╱ num1 > num2╲ (Decision)
  ╱              ╲
  ╲      Yes     ╱
   ╲          ╱
    ╲       ╱
     ├─────┤
    Yes    No
     ↓      ↓
┌─────────┐ ┌─────────┐
│max=num1 │ │max=num2 │ (Process)
└────┬────┘ └────┬────┘
     └──────┬────┘
            ↓
     ┌─────────┐
     │Print max│ (Output)
     └────┬────┘
          ↓
     ┌─────────┐
     │   END   │
     └─────────┘
\`\`\`

## Common Algorithms

### 1. Sum of N Numbers
\`\`\`
sum = 0
for i from 1 to n:
    sum = sum + i
return sum
\`\`\`

### 2. Factorial
\`\`\`
factorial = 1
for i from 1 to n:
    factorial = factorial * i
return factorial
\`\`\`

### 3. Even/Odd Check
\`\`\`
if number % 2 == 0:
    return "Even"
else:
    return "Odd"
\`\`\`

## Algorithm Efficiency

Algorithms can solve the same problem with different efficiency:

**Example: Sum of 1 to N**

**Method 1 (Loop):**
\`\`\`python
sum = 0
for i in range(1, n+1):
    sum += i
# Time: O(n)
\`\`\`

**Method 2 (Formula):**
\`\`\`python
sum = n * (n + 1) // 2
# Time: O(1) - Much faster!
\`\`\`

## Writing Good Algorithms

✅ Clear and precise
✅ Efficient (fast execution)
✅ Easy to understand
✅ Handles edge cases
✅ Well-documented

## Key Takeaways

✅ Algorithm = step-by-step problem-solving procedure
✅ Flowcharts visualize algorithms
✅ Algorithms must be finite and effective
✅ The same problem can have multiple algorithms
✅ Efficiency matters for large-scale problems
✅ Flowcharts help communicate solutions clearly
          `,
                    examples: [],
                    quiz: [
                        {
                            question: 'What is an algorithm?',
                            options: [
                                'A programming language',
                                'A step-by-step procedure to solve a problem',
                                'A type of computer',
                                'A flowchart symbol'
                            ],
                            correct: 1,
                            explanation: 'An algorithm is a step-by-step procedure or set of rules designed to solve a specific problem or perform a task.'
                        },
                        {
                            question: 'Which flowchart symbol is used for decision-making?',
                            options: [
                                'Rectangle',
                                'Oval',
                                'Diamond',
                                'Circle'
                            ],
                            correct: 2,
                            explanation: 'A diamond shape is used in flowcharts to represent decisions or conditions that have Yes/No or True/False outcomes.'
                        }
                    ]
                },
                {
                    id: 'variables-data-types',
                    title: 'Variables & Data Types',
                    content: `
# Variables & Data Types

## What is a Variable?

A <b>variable</b> is a named container that stores data values in a program. Think of it as a labeled box where you can put information and retrieve it later.

## Variable Analogy

Imagine a locker in school:
- <b>Variable Name</b>: Locker number (e.g., "Locker 42")
- <b>Variable Value</b>: What's inside the locker (books, clothes, etc.)
- You can put things in, take them out, or replace them

## Declaring Variables

Different programming languages have different syntax:

### Python:
\`\`\`python
name = "Alice"
age = 25
price = 19.99
is_student = True
\`\`\`

### JavaScript:
\`\`\`javascript
let name = "Alice";
const age = 25;
var price = 19.99;
let isStudent = true;
\`\`\`

### Java:
\`\`\`java
String name = "Alice";
int age = 25;
double price = 19.99;
boolean isStudent = true;
\`\`\`

## Variable Naming Rules

✅ <b>Valid Names:</b>
- \`userName\`
- \`total_price\`
- \`count1\`
- \`is_valid\`

❌ <b>Invalid Names:</b>
- \`2ndPlace\` (can't start with number)
- \`user-name\` (no hyphens)
- \`class\` (reserved keyword)
- \`user name\` (no spaces)

### Best Practices:
1. Use descriptive names: \`studentAge\` instead of \`x\`
2. Use camelCase or snake_case
3. Avoid abbreviations: \`numberOfStudents\` instead of \`numStud\`
4. Be consistent throughout your code

## Data Types

Data types define what kind of value a variable can hold.

### 1. Numbers

<b>Integer (whole numbers)</b>
\`\`\`python
age = 25
count = 100
temperature = -5
\`\`\`

<b>Float/Double (decimal numbers)</b>
\`\`\`python
price = 19.99
temperature = 98.6
pi = 3.14159
\`\`\`

### 2. Strings (Text)

\`\`\`python
name = "Alice"
greeting = 'Hello, World!'
address = """123 Main Street
            Apt 4B"""
\`\`\`

<b>String Operations:</b>
\`\`\`python
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name  # "John Doe"
message = f"Hello, {first_name}!"  # "Hello, John!"
\`\`\`

### 3. Boolean (True/False)

\`\`\`python
is_student = True
has_license = False
is_adult = age >= 18
\`\`\`

Used for:
- Conditional logic
- Flags and switches
- Validation checks

### 4. Lists/Arrays (Collections)

\`\`\`python
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "orange"]
mixed = [1, "hello", True, 3.14]
\`\`\`

<b>List Operations:</b>
\`\`\`python
fruits.append("grape")      # Add item
first_fruit = fruits[0]     # Access item (apple)
fruits_count = len(fruits)  # Get length
\`\`\`

### 5. Dictionaries/Objects (Key-Value Pairs)

\`\`\`python
student = {
    "name": "Alice",
    "age": 20,
    "grade": "A",
    "is_enrolled": True
}

# Access values
student_name = student["name"]  # "Alice"
student_age = student["age"]    # 20
\`\`\`

## Type Conversion

Converting between data types:

\`\`\`python
# String to Integer
age_str = "25"
age_int = int(age_str)  # 25

# Integer to String
count = 100
count_str = str(count)  # "100"

# String to Float
price_str = "19.99"
price_float = float(price_str)  # 19.99

# Anything to Boolean
bool(1)      # True
bool(0)      # False
bool("")     # False
bool("text") # True
\`\`\`

## Variable Scope

### Local Variables
Defined inside a function, only accessible within that function:
\`\`\`python
def greet():
    message = "Hello"  # Local variable
    print(message)

greet()  # Prints "Hello"
# print(message)  # Error: message not defined
\`\`\`

### Global Variables
Defined outside functions, accessible everywhere:
\`\`\`python
total_users = 1000  # Global variable

def add_user():
    global total_users
    total_users += 1
\`\`\`

## Constants

Values that shouldn't change:
\`\`\`python
PI = 3.14159
MAX_USERS = 1000
SPEED_OF_LIGHT = 299792458  # meters per second
\`\`\`

Convention: Use UPPERCASE names for constants

## Common Data Type Operations

### Arithmetic (Numbers):
\`\`\`python
a = 10
b = 3

sum = a + b      # 13
difference = a - b  # 7
product = a * b     # 30
quotient = a / b    # 3.333...
remainder = a % b   # 1
power = a ** b      # 1000
\`\`\`

### String Manipulation:
\`\`\`python
text = "Hello, World!"
uppercase = text.upper()     # "HELLO, WORLD!"
lowercase = text.lower()     # "hello, world!"
length = len(text)           # 13
contains = "World" in text   # True
replaced = text.replace("Hello", "Hi")  # "Hi, World!"
\`\`\`

## Type Checking

\`\`\`python
age = 25
name = "Alice"

type(age)   # <class 'int'>
type(name)  # <class 'str'>

isinstance(age, int)    # True
isinstance(name, str)   # True
\`\`\`

## Real-World Example: User Profile

\`\`\`python
# User profile using different data types
username = "alice_2025"          # String
age = 25                         # Integer
height = 5.6                     # Float
is_premium = True                # Boolean
hobbies = ["reading", "gaming"]  # List
profile = {                      # Dictionary
    "username": username,
    "age": age,
    "location": "New York"
}

# Using the variables
if is_premium:
    print(f"{username} is a premium member")
    print(f"Age: {age} years old")
    print(f"Hobbies: {', '.join(hobbies)}")
\`\`\`

## Common Mistakes to Avoid

❌ <b>Using a variable before declaring it:</b>
\`\`\`python
print(name)  # Error if name not defined yet
name = "Alice"
\`\`\`

❌ <b>Type mismatch:</b>
\`\`\`python
age = "25"  # String
result = age + 5  # Error: can't add string and int
\`\`\`

✅ <b>Correct:</b>
\`\`\`python
age = 25  # Integer
result = age + 5  # 30
\`\`\`

## Memory Management

Variables store references to data in memory:
\`\`\`
Variable: age
   ↓
Memory Location: 0x1A2B3C
   ↓
Value: 25
\`\`\`

When you assign a variable to another:
\`\`\`python
x = 10
y = x  # y now also holds value 10
\`\`\`

## Key Takeaways

✅ Variables store data values with descriptive names
✅ Data types determine what kind of data can be stored
✅ Choose appropriate data types for your needs
✅ Use meaningful variable names
✅ Understand type conversion and type checking
✅ Be aware of variable scope (local vs global)
✅ Different programming languages have different syntax but similar concepts
          `,
                    examples: [
                        {
                            title: 'Complete Variable Example',
                            code: `# Demonstrating all data types
# Integers
student_count = 30
year = 2025

# Floats
average_grade = 85.5
pi = 3.14159

# Strings
student_name = "Emma Johnson"
course = "Computer Science"

# Booleans
is_enrolled = True
has_scholarship = False

# Lists
grades = [90, 85, 92, 78, 88]
subjects = ["Math", "Science", "English"]

# Dictionary
student = {
    "name": student_name,
    "age": 20,
    "gpa": average_grade / 20,  # Convert to 4.0 scale
    "courses": subjects
}

# Using variables
print(f"Student: {student_name}")
print(f"Total courses: {len(subjects)}")
print(f"Average grade: {average_grade}")
print(f"Is enrolled: {is_enrolled}")

# Calculations
total_students = student_count + 5
average_grade_updated = sum(grades) / len(grades)
print(f"New average: {average_grade_updated:.2f}")`,
                            language: 'python'
                        }
                    ],
                    quiz: [
                        {
                            question: 'What is a variable in programming?',
                            options: [
                                'A type of computer',
                                'A named container that stores data values',
                                'A programming language',
                                'A physical storage device'
                            ],
                            correct: 1,
                            explanation: 'A variable is a named container in memory that stores data values which can be used and modified throughout the program.'
                        },
                        {
                            question: 'Which of the following is a valid variable name?',
                            options: [
                                '2ndplace',
                                'user-name',
                                'user_name',
                                'for'
                            ],
                            correct: 2,
                            explanation: 'user_name is valid. Variable names cannot start with numbers (2ndplace), cannot contain hyphens (user-name), and cannot use reserved keywords (for).'
                        },
                        {
                            question: 'What data type is the value True?',
                            options: [
                                'String',
                                'Integer',
                                'Boolean',
                                'Float'
                            ],
                            correct: 2,
                            explanation: 'True and False are Boolean data types, used to represent logical values in programming.'
                        }
                    ]
                },
                {
                    id: 'conditions-loops',
                    title: 'Conditions & Loops',
                    content: `
# Conditions & Loops

## Control Flow

Control flow determines the order in which instructions are executed. Without it, code runs sequentially from top to bottom. Conditions and loops allow us to make decisions and repeat actions.

## 1. Conditions (If/Else)

Conditions allow the program to make decisions based on whether something is true or false.

### Basic Syntax (Python)

\`\`\`python
if condition:
    # Do something
elif another_condition:
    # Do something else
else:
    # Do this if nothing else matched
\`\`\`

### Example: Voting Eligibility

\`\`\`python
age = 17

if age >= 18:
    print("You can vote! 🗳️")
else:
    print("You are too young to vote. 🚫")
\`\`\`

### Comparison Operators

- \`==\` : Equal to
- \`!=\` : Not equal to
- \`>\` : Greater than
- \`<\` : Less than
- \`>=\` : Greater than or equal to
- \`<=\` : Less than or equal to

### Logical Operators

- \`and\` : Both conditions must be true
- \`or\` : At least one condition must be true
- \`not\` : Inverts the condition (True becomes False)

\`\`\`python
has_id = True
is_registered = False

if has_id and is_registered:
    print("Allowed to enter")
else:
    print("Access denied")
\`\`\`

## 2. Loops (Iteration)

Loops allow you to repeat a block of code multiple times.

### For Loops

Used when you know how many times you want to repeat something, or when iterating over a collection.

\`\`\`python
# Repeat 5 times
for i in range(5):
    print(f"Count: {i}")

# Iterate over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")
\`\`\`

### While Loops

Used when you want to repeat something *while* a condition is true. Be careful of infinite loops!

\`\`\`python
count = 0
while count < 5:
    print(f"Count is {count}")
    count += 1  # Important: update the condition variable
\`\`\`

## Loop Control Statements

### Break
Exits the loop immediately.

\`\`\`python
for i in range(10):
    if i == 5:
        break  # Stop when i reaches 5
    print(i)
\`\`\`

### Continue
Skips the rest of the current iteration and moves to the next one.

\`\`\`python
for i in range(5):
    if i == 2:
        continue  # Skip printing 2
    print(i)
\`\`\`

## Real-World Examples

### 1. Login System (Condition)

\`\`\`python
stored_password = "secret123"
input_password = "password"

if input_password == stored_password:
    print("Access Granted")
else:
    print("Access Denied")
\`\`\`

### 2. Shopping Cart Total (Loop)

\`\`\`python
prices = [10.99, 5.50, 2.99, 8.00]
total = 0

for price in prices:
    total += price

print(f"Total Bill: \${total}")
\`\`\`

## Nested Loops

Loops inside loops. Common for working with grids or matrices.

\`\`\`python
# Multiplication Table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i*j}")
\`\`\`

## Common Mistakes

❌ <b>Infinite Loop:</b>
\`\`\`python
while True:
    print("This never ends!")
# Missing break statement
\`\`\`

❌ <b>Off-by-one Error:</b>
\`\`\`python
# range(5) goes from 0 to 4, not 1 to 5
for i in range(5):
    print(i)
\`\`\`

## Key Takeaways

✅ <b>Conditions</b> allow programs to make decisions
✅ <b>Loops</b> allow programs to repeat tasks efficiently
✅ <b>For loops</b> are for definite iteration (known count)
✅ <b>While loops</b> are for indefinite iteration (until condition changes)
✅ <b>Break</b> and <b>Continue</b> control loop execution
          `,
                    examples: [
                        {
                            title: 'Guess the Number Game',
                            code: `import random

target_number = random.randint(1, 10)
attempts = 0
max_attempts = 3

print("Guess the number between 1 and 10!")

while attempts < max_attempts:
    guess = int(input("Enter your guess: "))
    attempts += 1
    
    if guess == target_number:
        print(f"🎉 Correct! You won in {attempts} attempts!")
        break
    elif guess < target_number:
        print("Too low! Try again.")
    else:
        print("Too high! Try again.")

if guess != target_number:
    print(f"Game Over! The number was {target_number}")`,
                            language: 'python'
                        }
                    ],
                    quiz: [
                        {
                            question: 'Which keyword is used to make a decision in Python?',
                            options: ['loop', 'if', 'for', 'decision'],
                            correct: 1,
                            explanation: 'The "if" keyword is used to create conditional statements that execute code only if a specific condition is true.'
                        },
                        {
                            question: 'What does a "while" loop do?',
                            options: [
                                'Runs code exactly once',
                                'Repeats code while a condition is true',
                                'Repeats code a specific number of times',
                                'Stops the program'
                            ],
                            correct: 1,
                            explanation: 'A while loop continues to execute a block of code as long as its condition remains true.'
                        },
                        {
                            question: 'What does the "break" statement do?',
                            options: [
                                'Restarts the loop',
                                'Pauses the program',
                                'Exits the loop immediately',
                                'Skips the current iteration'
                            ],
                            correct: 2,
                            explanation: 'The break statement immediately terminates the loop and resumes execution at the next statement after the loop.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'software-development-models',
            title: 'Software Development Models',
            category: 'foundations',
            icon: '🔄',
            description: 'Learn different approaches to building software projects',
            estimatedTime: '3 hours',
            topics: [
                {
                    id: 'waterfall-model',
                    title: 'Waterfall Model',
                    content: `
# Waterfall Model

## Introduction

The **Waterfall Model** is a sequential software development process where progress flows steadily downward (like a waterfall) through distinct phases.

## Phases

\`\`\`
1. Requirements Analysis
        ↓
2. System Design
        ↓
3. Implementation (Coding)
        ↓
4. Testing
        ↓
5. Deployment
        ↓
6. Maintenance
\`\`\`

### 1. Requirements Analysis
- Gather all requirements
- Document specifications
- Get stakeholder approval

### 2. System Design
- **Design architecture**: Define the high-level structure of the system (e.g., Client-Server, Microservices).
  - *Example*: Deciding to use a React frontend and a Node.js backend.
- **Create diagrams**: Visual representations of how components interact (UML, Flowcharts).
  - *Example*: Drawing a flowchart showing how a user logs in.
- **Plan database structure**: Designing tables and relationships.
  - *Example*: Designing a 'Users' table with columns for ID, name, and email.

### 3. Implementation
- **Write code**: The actual programming phase where ideas turn into software.
  - *Example*: Writing the JavaScript function to validate a password.
- **Follow design specs**: Building exactly what was planned in the design phase.
  - *Example*: Styling a button to be exactly 20px padding as per the design mockup.
- **Build features**: Creating the functional parts of the app.
  - *Example*: Coding the "Add to Cart" functionality.

### 4. Testing
- **Test functionality**: Checking if features work as expected.
  - *Example*: Clicking "Login" to see if it actually logs you in.
- **Find and fix bugs**: Identifying errors and resolving them.
  - *Example*: Fixing a crash that happens when a user uploads a large image.
- **Verify against requirements**: Ensuring the product meets the initial goals.
  - *Example*: Checking if the app loads in under 2 seconds as required.

### 5. Deployment
- Release to production
- Train users
- Monitor performance

### 6. Maintenance
- Fix issues
- Add updates
- Provide support

## Advantages

✅ Simple and easy to understand
✅ Well-documented process
✅ Easy to manage (clear milestones)
✅ Works well for small projects
✅ Clear deliverables

## Disadvantages

❌ Inflexible to changes
❌ Testing happens late
❌ Not suitable for complex projects
❌ Customer sees product only at the end
❌ High risk and uncertainty

## Best Used For

- Small projects with clear requirements
- Projects with stable requirements
- Government/regulated projects
- Projects with ample documentation needs

## Real-World Example

**Building a Calculator App:**
1. ✅ Requirements: Add, subtract, multiply, divide
2. ✅ Design: UI mockups, button layouts
3. ✅ Implementation: Code the functions
4. ✅ Testing: Test all operations
5. ✅ Deployment: Publish to app store
6. ✅ Maintenance: Fix bugs, add scientific functions

## Key Takeaways

✅ Sequential, phase-by-phase approach
✅ Each phase must be completed before the next
✅ Good for projects with clear requirements
✅ Not suitable when requirements change frequently
          `,
                    examples: [],
                    quiz: [
                        {
                            question: 'What is a key characteristic of the Waterfall model?',
                            options: [
                                'Iterative development',
                                'Sequential phases that must be completed one after another',
                                'Continuous customer feedback',
                                'No documentation required'
                            ],
                            correct: 1,
                            explanation: 'The Waterfall model follows a sequential approach where each phase must be completed before moving to the next.'
                        },
                        {
                            question: 'Which is a disadvantage of the Waterfall model?',
                            options: [
                                'Easy to understand',
                                'Well-documented',
                                'Inflexible to changes',
                                'Clear milestones'
                            ],
                            correct: 2,
                            explanation: 'The Waterfall model is inflexible to changes because going back to a previous phase is difficult and expensive.'
                        }
                    ]
                },
                {
                    id: 'agile-model',
                    title: 'Agile Model',
                    content: `
# Agile Model

## Introduction

**Agile** is an iterative and incremental approach to software development that emphasizes flexibility, collaboration, and customer satisfaction.

## Core Principles (Agile Manifesto)

1. **Individuals and interactions** over processes and tools
2. **Working software** over comprehensive documentation
3. **Customer collaboration** over contract negotiation
4. **Responding to change** over following a plan

## How Agile Works

\`\`\`
Sprint 1 (2-4 weeks)
  → Plan → Design → Code → Test → Review → Demo
                                            ↓
Sprint 2 (2-4 weeks)                    Feedback
  → Plan → Design → Code → Test → Review → Demo
                                            ↓
Sprint 3 (2-4 weeks)                    Feedback
  → Plan → Design → Code → Test → Review → Demo
\`\`\`

## Key Practices

### 1. Sprints
- Fixed time periods (1-4 weeks)
- Deliver working software increment
- Review and adapt

### 2. Daily Stand-ups
- 15-minute team meetings
- What did you do yesterday?
- What will you do today?
- Any blockers?

### 3. User Stories
- Format: "As a [user], I want [feature] so that [benefit]"
- Example: "As a user, I want to reset my password so that I can regain access if I forget it"

### 4. Continuous Feedback
- Regular customer demos
- Adapt based on feedback
- Continuous improvement

## Advantages

✅ Flexible and adaptive
✅ Customer involvement throughout
✅ Early and frequent delivery
✅ Better quality through continuous testing
✅ Team collaboration
✅ Risk mitigation

## Disadvantages

❌ Less predictability
❌ Requires experienced team
❌ Needs active customer involvement
❌ Can be challenging for large teams
❌ Less documentation

## Agile vs Waterfall

| Aspect | Waterfall | Agile |
|--------|-----------|-------|
| Approach | Sequential | Iterative |
| Flexibility | Rigid | Flexible |
| Customer involvement | End only | Continuous |
| Testing | After development | Continuous |
| Documentation | Heavy | Light |
| Best for | Fixed requirements | Changing requirements |

## Real-World Example

**Building a Social Media App:**

**Sprint 1**: User registration & login
**Sprint 2**: Create and view posts
**Sprint 3**: Like and comment features
**Sprint 4**: Follow/unfollow users
**Sprint 5**: Notifications
**Sprint 6**: Messages

Each sprint delivers working features that users can test!

## Popular Agile Frameworks

1. **Scrum**: Most popular, uses sprints
2. **Kanban**: Visual workflow management
3. **XP (Extreme Programming)**: Engineering practices focus
4. **Lean**: Eliminate waste, continuous improvement

## Key Takeaways

✅ Agile is iterative and flexible
✅ Focuses on customer collaboration
✅ Delivers working software frequently
✅ Embraces change
✅ Promotes team collaboration
✅ Most popular in modern software development
          `,
                    examples: [],
                    quiz: [
                        {
                            question: 'What is a sprint in Agile?',
                            options: [
                                'A final testing phase',
                                'A fixed time period to deliver working software',
                                'A documentation phase',
                                'A deployment process'
                            ],
                            correct: 1,
                            explanation: 'A sprint is a fixed time period (usually 1-4 weeks) during which a team works to complete a set of tasks and deliver a working software increment.'
                        },
                        {
                            question: 'Which is a core principle of Agile?',
                            options: [
                                'Comprehensive documentation over working software',
                                'Following a plan over responding to change',
                                'Customer collaboration over contract negotiation',
                                'Processes over individuals'
                            ],
                            correct: 2,
                            explanation: 'Agile values customer collaboration over contract negotiation, emphasizing working together to achieve the best outcome.'
                        }
                    ]
                },
                {
                    id: 'scrum-framework',
                    title: 'Scrum Framework',
                    content: `
# Scrum Framework

## Introduction

Scrum is the most widely used Agile framework for managing software development projects. It provides a structured approach to iterative development.

## Scrum Roles

### 1. Product Owner
- Represents stakeholders
- Manages product backlog
- Prioritizes features
- Defines acceptance criteria

### 2. Scrum Master
- Facilitates Scrum process
- Removes obstacles
- Protects team from distractions
- Ensures Scrum rules are followed

### 3. Development Team
- 3-9 people
- Self-organizing
- Cross-functional
- Builds the product

## Scrum Artifacts

### 1. Product Backlog
- List of all desired features
- Prioritized by Product Owner
- Constantly updated

### 2. Sprint Backlog
- Tasks selected for current sprint
- Owned by Development Team
- Updated daily

### 3. Increment
- Sum of all completed items
- Must be in usable condition
- "Done" means releasable

## Scrum Events

### 1. Sprint Planning (Start of Sprint)
- Duration: 2-4 hours
- Team selects items from backlog
- Creates sprint goal

### 2. Daily Scrum (Every day)
- Duration: 15 minutes
- Stand-up meeting
- Synchronize activities

### 3. Sprint Review (End of Sprint)
- Duration: 1-2 hours
- Demo completed work
- Get feedback

### 4. Sprint Retrospective
- Duration: 1 hour
- Discuss what went well
- Identify improvements

## Scrum Flow

\`\`\`
Product Backlog
      ↓
Sprint Planning
      ↓
Sprint Backlog → Daily Scrum (15 min)
      ↓                ↓
Development Work ←────┘
      ↓
Sprint Review
      ↓
Sprint Retrospective
      ↓
Increment → Release (if ready)
      ↓
Next Sprint ←─┘
\`\`\`

## Sprint Timeline Example (2 weeks)

**Week 1**
- Monday: Sprint Planning
- Tues-Fri: Daily Scrums + Development

**Week 2**
- Mon-Thurs: Daily Scrums + Development
- Friday: Sprint Review + Retrospective

## Benefits of Scrum

✅ Clear roles and responsibilities
✅ Regular feedback loops
✅ Transparency and visibility
✅ Continuous improvement
✅ Faster time to market
✅ Better team morale

## Common Challenges

❌ Requires discipline
❌ Needs buy-in from everyone
❌ Can be misunderstood/misapplied
❌ Requires skilled Scrum Master

## Real-World Example

**Building an E-commerce Website:**

**Sprint 1 Goal**: User browsing
- Product listing page
- Search functionality
- Product details

**Sprint 2 Goal**: Shopping cart
- Add to cart
- Update quantities
- View cart

**Sprint 3 Goal**: Checkout
- Payment integration
- Order confirmation
- Email notifications

## Key Metrics

- **Velocity**: Work completed per sprint
- **Burndown Chart**: Work remaining vs time
- **Sprint Goal Achievement**: % of goals met

## Key Takeaways

✅ Scrum provides structure to Agile
✅ Defines specific roles, events, and artifacts
✅ Works in time-boxed sprints
✅ Emphasizes collaboration and transparency
✅ Delivers value incrementally
✅ Most popular Agile framework
          `,
                    examples: [],
                    quiz: [
                        {
                            question: 'Who is responsible for managing the product backlog in Scrum?',
                            options: ['Scrum Master', 'Product Owner', 'Development Team', 'Stakeholders'],
                            correct: 1,
                            explanation: 'The Product Owner is responsible for managing and prioritizing the product backlog.'
                        },
                        {
                            question: 'How long should a Daily Scrum meeting last?',
                            options: ['5 minutes', '15 minutes', '30 minutes', '1 hour'],
                            correct: 1,
                            explanation: 'Daily Scrum is time-boxed to 15 minutes to keep it focused and efficient.'
                        }
                    ]
                },
                {
                    id: 'spiral-model',
                    title: 'Spiral Model',
                    content: 'Content for Spiral Model will be added in Phase 2...',
                    examples: [],
                    quiz: []
                },
                {
                    id: 'devops-model',
                    title: 'DevOps Model',
                    content: 'Content for DevOps Model will be added in Phase 2...',
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'cs-core-concepts',
            title: 'Computer Science Core',
            category: 'core-skills',
            icon: '🧮',
            description: 'Data structures, algorithms, and OS fundamentals',
            estimatedTime: '6 hours',
            topics: [
                {
                    id: 'data-structures',
                    title: 'Data Structures',
                    content: `
# Data Structures

## Overview
Data structures are specialized formats for organizing, processing, and storing data.

## Key Structures

### 1. Arrays & Lists
- **Definition**: Ordered collection of elements
- **Use Case**: Storing lists of items (e.g., todo list)
- **Operations**: Access, Insert, Delete

### 2. Stacks (LIFO)
- **Concept**: Last In, First Out
- **Analogy**: Stack of plates
- **Operations**: Push (add), Pop (remove)

### 3. Queues (FIFO)
- **Concept**: First In, First Out
- **Analogy**: Line at a store
- **Operations**: Enqueue (add), Dequeue (remove)

### 4. Hash Maps / Dictionaries
- **Definition**: Key-Value pairs
- **Use Case**: Fast lookups (e.g., phone book)
- **Performance**: Very fast access (O(1))

## Why They Matter
Choosing the right data structure affects the efficiency of your software.
                    `,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'algorithms',
                    title: 'Algorithms',
                    content: `
# Algorithms

## What is an Algorithm?
A set of instructions to solve a specific problem.

## Common Algorithms

### 1. Sorting
- **Bubble Sort**: Simple but slow
- **Quick Sort**: Fast and efficient
- **Merge Sort**: Stable and reliable

### 2. Searching
- **Linear Search**: Check one by one
- **Binary Search**: Divide and conquer (requires sorted list)

## Algorithm Analysis
We measure algorithms by how their runtime grows as input size grows.
                    `,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'big-o',
                    title: 'Big-O Notation',
                    content: `
# Big-O Notation

## Understanding Performance
Big-O notation describes the performance or complexity of an algorithm.

## Common Complexities

### O(1) - Constant Time
- Instant access
- Example: Accessing array index

### O(n) - Linear Time
- Time grows with input
- Example: Looping through a list

### O(n²) - Quadratic Time
- Slow for large inputs
- Example: Nested loops

## Optimization
The goal is to write code that scales well (closer to O(1) or O(log n)).
                    `,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'os-basics',
                    title: 'Operating Systems Basics',
                    content: `
# Operating Systems Basics

## Core Functions
The OS manages hardware and software resources.

## Key Concepts

### 1. Process Management
- **Processes**: Running programs
- **Threads**: Lightweight sub-processes
- **Scheduling**: Deciding what runs when

### 2. Memory Management
- **RAM**: Fast, temporary storage
- **Virtual Memory**: Using disk as extra RAM

### 3. File Systems
- Organizing data on storage (NTFS, APFS, EXT4)
- Files and Directories

## Popular OS Families
- **Windows**: Dominant on desktop
- **Unix/Linux**: Dominant on servers
- **macOS**: Unix-based, user-friendly
                    `,
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'databases',
            title: 'Databases & Data',
            category: 'core-skills',
            icon: '💾',
            description: 'Learn how to store and manage data',
            estimatedTime: '5 hours',
            topics: [
                {
                    id: 'sql-basics',
                    title: 'SQL Basics',
                    content: `
# SQL Basics

## Structured Query Language
SQL is the standard language for relational databases.

## Core Commands

### SELECT
Retrieves data from a database.
\`\`\`sql
SELECT * FROM users;
\`\`\`

### INSERT
Adds new data.
\`\`\`sql
INSERT INTO users (name, age) VALUES ('Alice', 25);
\`\`\`

### UPDATE
Modifies existing data.
\`\`\`sql
UPDATE users SET age = 26 WHERE name = 'Alice';
\`\`\`

### DELETE
Removes data.
\`\`\`sql
DELETE FROM users WHERE id = 1;
\`\`\`
                    `,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'nosql',
                    title: 'NoSQL Databases',
                    content: `
# NoSQL Databases

## Beyond Tables
NoSQL databases store data in formats other than tables (like documents or graphs).

## Types

### 1. Document Stores (MongoDB)
- Stores JSON-like documents
- Flexible schema

### 2. Key-Value Stores (Redis)
- Simple and fast
- Great for caching

### 3. Graph Databases (Neo4j)
- Focus on relationships
- Social networks

## When to Use
- **SQL**: Structured data, complex queries
- **NoSQL**: Unstructured data, high scalability
                    `,
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'version-control',
            title: 'Version Control & Git',
            category: 'core-skills',
            icon: '🔀',
            description: 'Master Git and collaborative development',
            estimatedTime: '3 hours',
            topics: [
                {
                    id: 'git-basics',
                    title: 'Git Fundamentals',
                    content: `
# Git Fundamentals

## What is Version Control?
Version control systems record changes to a file or set of files over time so that you can recall specific versions later.

## Core Commands

### 1. git init
Initialize a new Git repository.
\`\`\`bash
git init
\`\`\`

### 2. git add
Add file contents to the index (staging area).
\`\`\`bash
git add .
\`\`\`

### 3. git commit
Record changes to the repository.
\`\`\`bash
git commit -m "Initial commit"
\`\`\`

### 4. git status
Show the working tree status.
\`\`\`bash
git status
\`\`\`

## Why Use Git?
- **History**: Undo mistakes easily.
- **Collaboration**: Work with others without overwriting code.
- **Backup**: Keep your code safe in the cloud.
                    `,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'github',
                    title: 'GitHub Essentials',
                    content: `
# GitHub Essentials

## Remote Repositories
GitHub is a cloud platform for hosting Git repositories.

## Key Concepts

### 1. Cloning
Downloading a repository from the cloud to your local machine.
\`\`\`bash
git clone https://github.com/user/repo.git
\`\`\`

### 2. Pushing & Pulling
- **Push**: Send local commits to GitHub.
- **Pull**: Fetch and merge changes from GitHub.

### 3. Branches
Isolate your work from the main codebase.
\`\`\`bash
git checkout -b feature-login
\`\`\`

### 4. Pull Requests (PRs)
Propose changes to a repository. This is where code review happens.
                    `,
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'web-foundations',
            title: 'Web Foundations',
            category: 'web-dev',
            icon: '🌐',
            description: 'Build static, beautiful websites from scratch',
            estimatedTime: '8 hours',
            topics: [
                {
                    id: 'how-web-works',
                    title: 'How the Web Works',
                    content: `
# How the Web Works

## The Client-Server Model

When you visit a website like \`google.com\`, here's what happens behind the scenes:

### Step-by-Step Flow
1. **You type a URL**: Browser needs to find where Google's servers are located.
2. **DNS Lookup**: The Domain Name System (DNS) translates \`google.com\` into an IP address like \`142.250.185.46\`.
3. **HTTP Request**: Your browser sends an HTTP request to that IP address saying "Give me the homepage".
4. **Server Response**: Google's server sends back HTML, CSS, and JavaScript files.
5. **Rendering**: Your browser reads these files and displays the page.

## HTTP: The Language of the Web

**HTTP (HyperText Transfer Protocol)** is how browsers and servers communicate.

### HTTP Methods
- **GET**: Retrieve data (e.g., loading a page)
- **POST**: Send data (e.g., submitting a form)
- **PUT**: Update data
- **DELETE**: Remove data

### Status Codes
- **200 OK**: Success!
- **404 Not Found**: Page doesn't exist
- **500 Internal Server Error**: Server crashed

## Real-World Example (Haya Tracking)
When you log into Haya Tracking:
1. You type your credentials and click "Login"
2. Browser sends a \`POST\` request to \`/api/auth/login\`
3. Server validates and responds with a JWT token
4. Browser stores the token and redirects you to the dashboard

## Key Takeaways
✅ The web is a conversation between Client (browser) and Server.
✅ DNS is the phonebook that translates names to IP addresses.
✅ HTTP is the protocol that defines how data is sent and received.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'What does DNS do?',
                            options: [
                                'Translates domain names to IP addresses',
                                'Encrypts your data',
                                'Stores website files',
                                'Manages user sessions'
                            ],
                            correct: 0,
                            explanation: 'DNS (Domain Name System) translates human-readable domain names like google.com into IP addresses that computers can understand.'
                        }
                    ]
                },
                {
                    id: 'html5-semantic',
                    title: 'HTML5 & Semantic Structure',
                    content: `
# HTML5 & Semantic Structure

## What is HTML?

**HTML (HyperText Markup Language)** is the skeleton of every website. It defines the structure and content.

## Semantic HTML

Use tags that describe meaning, not just appearance:

\`\`\`html
<!-- Bad: Non-semantic -->
<div class="header">
  <div class="nav">...</div>
</div>

<!-- Good: Semantic -->
<header>
  <nav>...</nav>
</header>
\`\`\`

### Key Semantic Tags
- \`<header>\`: Top of the page (logo, nav)
- \`<nav>\`: Navigation links
- \`<main>\`: Main content area
- \`<section>\`: Thematic grouping
- \`<article>\`: Self-contained content (blog post)
- \`<footer>\`: Bottom of the page

## Forms: Collecting User Input

\`\`\`html
<form action="/api/login" method="POST">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>
  
  <label for="password">Password</label>
  <input type="password" id="password" name="password" required>
  
  <button type="submit">Login</button>
</form>
\`\`\`

## Real-World Example (Haya Tracking)
Our login form uses semantic HTML. The \`<form>\` tag with proper \`type="email"\` ensures mobile keyboards show the @ symbol automatically!

## Key Takeaways
✅ HTML provides structure, not style.
✅ Use semantic tags for better SEO and accessibility.
✅ Forms are how users interact with your backend.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'Which tag should wrap the main navigation of a website?',
                            options: ['<div>', '<nav>', '<menu>', '<header>'],
                            correct: 1,
                            explanation: '<nav> is the semantic HTML5 tag specifically designed for navigation links.'
                        }
                    ]
                },
                {
                    id: 'css3-layouts',
                    title: 'CSS3: Flexbox & Grid',
                    content: `
# CSS3: Modern Layouts

## Flexbox: One-Dimensional Layouts

**Flexbox** is perfect for arranging items in a row or column.

\`\`\`css
.container {
  display: flex;
  justify-content: space-between; /* Horizontal alignment */
  align-items: center; /* Vertical alignment */
  gap: 1rem; /* Space between items */
}
\`\`\`

### Common Use Cases
- Navigation bars
- Centering content
- Equal-height cards

## Grid: Two-Dimensional Layouts

**CSS Grid** is ideal for complex page layouts.

\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr; /* Sidebar + Main */
  grid-template-rows: 60px 1fr; /* Header + Content */
  gap: 1rem;
}
\`\`\`

## Responsive Design

Make your site look good on all devices:

\`\`\`css
/* Mobile First */
.grid {
  grid-template-columns: 1fr; /* Single column on mobile */
}

/* Tablet and up */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
  }
}
\`\`\`

## Real-World Example (Haya Tracking)
Our dashboard uses CSS Grid for the layout:
- Sidebar (fixed width)
- Main content (flexible)
- Subject cards (responsive grid)

## Key Takeaways
✅ Use Flexbox for 1D layouts (rows or columns).
✅ Use Grid for 2D layouts (rows AND columns).
✅ Always design mobile-first, then scale up.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'javascript-es6',
                    title: 'JavaScript ES6+ Essentials',
                    content: `
# JavaScript ES6+ Essentials

## Variables: let & const

\`\`\`javascript
// Bad: var (outdated)
var name = "Ali";

// Good: let (can change) and const (cannot change)
let score = 0;
const MAX_SCORE = 100;
\`\`\`

## Arrow Functions

\`\`\`javascript
// Old way
function add(a, b) {
  return a + b;
}

// Modern way (Arrow Function)
const add = (a, b) => a + b;
\`\`\`

## Array Methods (Critical!)

### .map() - Transform each item
\`\`\`javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
// [2, 4, 6]
\`\`\`

### .filter() - Keep only matching items
\`\`\`javascript
const subjects = ['Math', 'Physics', 'Biology'];
const long = subjects.filter(s => s.length > 5);
// ['Physics', 'Biology']
\`\`\`

### .reduce() - Combine into a single value
\`\`\`javascript
const scores = [10, 20, 30];
const total = scores.reduce((sum, score) => sum + score, 0);
// 60
\`\`\`

## Destructuring

\`\`\`javascript
// Extract from objects
const user = { name: 'Ali', age: 25 };
const { name, age } = user;

// Extract from arrays
const [first, second] = [10, 20];
\`\`\`

## Promises & Async/Await

\`\`\`javascript
// Fetch data from server
const fetchUser = async () => {
  const response = await fetch('/api/user');
  const data = await response.json();
  return data;
};
\`\`\`

## Real-World Example (Haya Tracking)
We use \`.map()\` everywhere to render lists:
\`\`\`javascript
subjects.map(subject => (
  <SubjectCard key={subject.id} subject={subject} />
))
\`\`\`

## Key Takeaways
✅ Use \`const\` by default, \`let\` only when you need to reassign.
✅ Master \`.map()\`, \`.filter()\`, and \`.reduce()\` - you'll use them daily.
✅ Async/Await makes working with APIs much cleaner than callbacks.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'Which array method transforms each item in an array?',
                            options: ['.filter()', '.map()', '.reduce()', '.forEach()'],
                            correct: 1,
                            explanation: '.map() transforms each element and returns a new array with the transformed values.'
                        }
                    ]
                },
                {
                    id: 'tailwind-css',
                    title: 'Tailwind CSS Quick Start',
                    content: `
# Tailwind CSS: Utility-First Styling

## What is Tailwind?

Instead of writing CSS files, you apply utility classes directly in your HTML:

\`\`\`html
<!-- Traditional CSS -->
<div class="card"></div>
<style>
  .card {
    background: white;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
</style>

<!-- Tailwind CSS -->
<div class="bg-white p-4 rounded-lg shadow-md"></div>
\`\`\`

## Common Utilities

### Spacing
- \`p-4\`: Padding (1rem)
- \`m-2\`: Margin (0.5rem)
- \`gap-4\`: Gap between flex/grid items

### Colors
- \`bg-blue-500\`: Background color
- \`text-gray-700\`: Text color

### Layout
- \`flex\`: Display flex
- \`grid\`: Display grid
- \`items-center\`: Align items center

### Typography
- \`text-xl\`: Font size
- \`font-bold\`: Font weight

## Responsive Design

\`\`\`html
<!-- Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  ...
</div>
\`\`\`

## Real-World Example (Haya Tracking)
Our subject cards:
\`\`\`html
<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
  <h3 class="text-lg font-bold text-gray-900 dark:text-white">Biology</h3>
  <p class="text-sm text-gray-600">45 hours studied</p>
</div>
\`\`\`

## Key Takeaways
✅ Tailwind speeds up development by avoiding context switching between HTML and CSS files.
✅ The \`dark:\` prefix automatically handles dark mode.
✅ Responsive prefixes (\`md:\`, \`lg:\`) make mobile-first design easy.
`,
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'frontend-dev',
            title: 'Frontend Development',
            category: 'web-dev',
            icon: '⚛️',
            description: 'Build interactive UIs with React & TypeScript',
            estimatedTime: '12 hours',
            topics: [
                {
                    id: 'react-fundamentals',
                    title: 'React Fundamentals',
                    content: `
# React Fundamentals

React is a library for building UIs using reusable Components.

\`\`\`jsx
const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);
\`\`\`

## Key Takeaways
✅ Components are reusable UI blocks.
✅ Props pass data down.
✅ State triggers re-renders.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'react-hooks',
                    title: 'React Hooks (useState, useEffect)',
                    content: `
# React Hooks

\`\`\`jsx
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);
  
  return <p>{seconds}s</p>;
};
\`\`\`

## Key Takeaways
✅ useState for component state.
✅ useEffect for side effects (APIs, timers).
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'typescript-react',
                    title: 'TypeScript with React',
                    content: `
# TypeScript with React

\`\`\`typescript
interface Props {
  name: string;
  hours: number;
}

const SubjectCard = ({ name, hours }: Props) => (
  <div>{name}: {hours}h</div>
);
\`\`\`

## Key Takeaways
✅ TypeScript catches errors before runtime.
✅ Interface for props.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'state-management',
                    title: 'Global State (Zustand)',
                    content: `
# State Management with Zustand

\`\`\`typescript
const useAuthStore = create((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
\`\`\`

Used in Haya Tracking for auth, timer, and subjects!

## Key Takeaways
✅ Solves prop drilling.
✅ Simple global state.
`,
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'backend-dev',
            title: 'Backend Development',
            category: 'web-dev',
            icon: '🔧',
            description: 'Build APIs with Node.js, Express, MongoDB',
            estimatedTime: '10 hours',
            topics: [
                {
                    id: 'nodejs-express',
                    title: 'Node.js & Express APIs',
                    content: `
# Node.js & Express

\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/subjects', async (req, res) => {
  const subjects = await Subject.find();
  res.json(subjects);
});

app.listen(5000);
\`\`\`

## Key Takeaways
✅ Express handles routing.
✅ REST: GET, POST, PUT, DELETE.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'mongodb-mongoose',
                    title: 'MongoDB & Mongoose',
                    content: `
# MongoDB & Mongoose

\`\`\`javascript
const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hoursStudied: { type: Number, default: 0 },
});

const Subject = mongoose.model('Subject', subjectSchema);

// Create
await Subject.create({ name: 'Biology' });

// Read
const subjects = await Subject.find();
\`\`\`

## Key Takeaways
✅ Mongoose adds structure to MongoDB.
✅ Schema defines validation.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'jwt-authentication',
                    title: 'JWT Authentication',
                    content: `
# JWT Authentication

\`\`\`javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Login
app.post('/api/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const valid = await bcrypt.compare(req.body.password, user.password);
  
  if (valid) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  }
});
\`\`\`

## Key Takeaways
✅ bcrypt hashes passwords.
✅ JWT for stateless auth.
`,
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'production-advanced',
            title: 'Production & Deployment',
            category: 'web-dev',
            icon: '🚀',
            description: 'PWAs, deployment, and mobile apps',
            estimatedTime: '8 hours',
            topics: [
                {
                    id: 'pwa-basics',
                    title: 'Progressive Web Apps (PWA)',
                    content: `
# Progressive Web Apps

PWAs work offline, are installable, and feel native.

\`\`\`json
// manifest.json
{
  "name": "Haya Tracking",
  "display": "standalone",
  "icons": [{ "src": "/icon-512.png", "sizes": "512x512" }]
}
\`\`\`

Service Workers cache assets for offline use.

## Key Takeaways
✅ PWAs are installable web apps.
✅ Manifest defines app metadata.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'deployment',
                    title: 'Deployment (Vercel & Railway)',
                    content: `
# Deploying Your App

**Frontend (Vercel)**:
1. Push to GitHub
2. Import repo to Vercel
3. Auto-deploy on push!

**Backend (Railway)**:
1. Connect GitHub
2. Add env vars (MONGODB_URI, JWT_SECRET)
3. Deploy!

## Key Takeaways
✅ Vercel for frontend.
✅ Railway/Render for backend.
✅ Use environment variables.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'mobile-capacitor',
                    title: 'Mobile with Capacitor',
                    content: `
# Mobile Apps with Capacitor

\`\`\`bash
npm install @capacitor/core @capacitor/cli
npx cap add android
npm run build
npx cap sync
npx cap open android
\`\`\`

Haya Tracking uses Capacitor for Android app!

## Key Takeaways
✅ One codebase for web, Android, iOS.
✅ Access native features via plugins.
`,
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'cs-fundamentals',
            title: 'CS Fundamentals',
            category: 'cs-fundamentals-deep',
            icon: '⚙️',
            description: 'Essential computer science concepts every engineer should know',
            estimatedTime: '4 hours',
            topics: [
                {
                    id: 'operating-systems',
                    title: 'Operating Systems 101',
                    content: `
# Operating Systems Basics

## Introduction

An **Operating System (OS)** is the software that manages computer hardware and software resources and provides common services for computer programs.

## Key Concepts

### 1. The Kernel
The **Kernel** is the core of the operating system. It has complete control over everything in the system.
- It is the first program loaded on startup.
- It handles memory management, process management, and hardware interactions.

### 2. Processes vs. Threads
- **Process**: A program in execution. It has its own memory space.
- **Thread**: The smallest unit of execution within a process. Threads share the same memory space of their parent process.

### 3. Memory Management
The OS manages the computer's primary memory (RAM).
- **Virtual Memory**: A technique that allows the execution of processes that are not completely in memory. It maps memory addresses used by a program, called virtual addresses, into physical addresses in computer memory.

## Common Operating Systems
- **Windows**: Dominant in desktop computing.
- **macOS**: Unix-based, known for UI/UX.
- **Linux**: Open-source, dominant in servers and cloud infrastructure.
- **Android/iOS**: Mobile operating systems.

## Key Takeaways
✅ The Kernel is the heart of the OS.
✅ Processes are running programs; threads are units of execution within them.
✅ The OS manages hardware resources so applications don't have to.
                  `,
                    examples: [],
                    quiz: [
                        {
                            question: 'What is the core component of an Operating System?',
                            options: ['The Shell', 'The Kernel', 'The GUI', 'The Browser'],
                            correct: 1,
                            explanation: 'The Kernel is the core component that has complete control over everything in the system.'
                        }
                    ]
                },
                {
                    id: 'networking-basics',
                    title: 'Networking Basics',
                    content: `
# Networking Basics

## Introduction

Computer networking is the practice of connecting computers together to share resources and information.

## How the Internet Works

### IP Address
An **IP (Internet Protocol) Address** is a numerical label assigned to each device connected to a computer network.
- Like a home address for your computer.
- Example: \`192.168.1.1\`

### DNS (Domain Name System)
**DNS** translates human-readable domain names (like \`google.com\`) to IP addresses.
- It's the "phonebook" of the Internet.

### Protocols
- **HTTP/HTTPS**: Hypertext Transfer Protocol (Secure). Used for transferring web pages.
- **TCP (Transmission Control Protocol)**: Reliable, ordered delivery of data.
- **UDP (User Datagram Protocol)**: Faster but unreliable (used for streaming, gaming).

## Packet Switching
Data sent over the internet is broken down into small **packets**. Each packet travels independently to the destination and is reassembled there.

## Key Takeaways
✅ IP addresses identify devices.
✅ DNS translates names to IPs.
✅ HTTP is the foundation of data communication for the World Wide Web.
                  `,
                    examples: [],
                    quiz: [
                        {
                            question: 'What does DNS do?',
                            options: [
                                'Protects against viruses',
                                'Translates domain names to IP addresses',
                                'Speeds up internet connection',
                                'Manages passwords'
                            ],
                            correct: 1,
                            explanation: 'DNS acts as the phonebook of the internet, translating domain names like google.com into IP addresses.'
                        }
                    ]
                },
                {
                    id: 'databases-101',
                    title: 'Databases 101',
                    content: `
# Databases 101

## Introduction

A **database** is an organized collection of data, generally stored and accessed electronically from a computer system.

## Types of Databases

### 1. Relational Databases (SQL)
- Data is stored in **tables** with rows and columns.
- Uses **Structured Query Language (SQL)**.
- Strictly structured (Schema-based).
- **Examples**: PostgreSQL, MySQL, SQLite, Oracle.

### 2. NoSQL Databases
- Flexible schemas.
- Can store data as documents, key-value pairs, or graphs.
- **Examples**: MongoDB (Document), Redis (Key-Value), Cassandra.

## Key Concepts

### ACID Properties (for SQL)
- **A**tomicity: All or nothing transactions.
- **C**onsistency: Data remains valid.
- **I**solation: Transactions don't interfere.
- **D**urability: Saved data stays saved.

### CAP Theorem (for Distributed Systems)
It is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees:
- **C**onsistency
- **A**vailability
- **P**artition tolerance

## Key Takeaways
✅ SQL databases use tables; NoSQL databases are flexible.
✅ ACID guarantees data integrity in traditional databases.
✅ Databases are essential for persisting application data.
                  `,
                    examples: [],
                    quiz: [
                        {
                            question: 'Which of the following is an example of a SQL database?',
                            options: ['MongoDB', 'PostgreSQL', 'Redis', 'Cassandra'],
                            correct: 1,
                            explanation: 'PostgreSQL is a relational database management system that uses SQL.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'ds-linear',
            title: 'Data Structures I: Linear',
            category: 'dsa',
            icon: '📏',
            description: 'Master arrays, strings, lists, stacks, and queues',
            estimatedTime: '8 hours',
            topics: [
                {
                    id: 'arrays-strings-advanced',
                    title: 'Arrays & Strings (Advanced)',
                    content: `
# Arrays & Strings: Deep Dive

## Introduction
Arrays and Strings are the most common data structures in interviews.

## Critical Patterns

### 1. Two Pointers
Used for searching pairs in a sorted array or reversing.
- **Time**: O(N)
- **Space**: O(1)

### 2. Sliding Window
Used for finding subarrays with specific properties (e.g., max sum, longest substring).
- **Time**: O(N)
- **Space**: O(1)

## Job Interview Tips 💡
- **String Builders**: In languages like Java or C#, string concatenation is O(N). Use StringBuilder for O(1) appends.
- **Edge Cases**: Always check for empty arrays/strings or null inputs.

## Key Takeaways
✅ Mastering sliding window and two pointers solves 80% of array problems.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'linked-lists',
                    title: 'Linked Lists',
                    content: `
# Linked Lists

## Introduction
A Linked List is a sequence of nodes where each node points to the next.

## Types
- **Singly Linked List**: A -> B -> C
- **Doubly Linked List**: A <-> B <-> C
- **Circular Linked List**: Last node points back to first.

## Common Operations
- **Insert at Head**: O(1)
- **Delete Node**: O(1) if you have the pointer.
- **Search**: O(N)

## Interview Pattern: Fast & Slow Pointers (Floyd's Cycle Finding)
Used to detect cycles or find the middle of the list. Move one pointer by 1 step, another by 2 steps.

## Job Interview Tips 💡
- **Dummy Head**: Use a dummy head node to simplify edge cases (inserting/deleting at head).
- **Reverse a List**: Be comfortable writing this iteratively and recursively in your sleep.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'stacks-queues',
                    title: 'Stacks & Queues',
                    content: `
# Stacks & Queues

## Stack (LIFO: Last In, First Out)
- **Operations**: Push O(1), Pop O(1), Peek O(1).
- **Use Cases**: Browser history, Function call stack, Undo mechanisms.

## Queue (FIFO: First In, First Out)
- **Operations**: Enqueue O(1), Dequeue O(1).
- **Use Cases**: Printer jobs, Breadth-First Search (BFS).

## Specialized: Monotonic Stack
Used to find the "next greater element" or "next smaller element" in O(N).

## Job Interview Tips 💡
- **Stack for DFS**: Use a stack to implement DFS iteratively.
- **Queue for BFS**: Use a queue to implement BFS.
`,
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'ds-nonlinear',
            title: 'Data Structures II: Non-Linear',
            category: 'dsa',
            icon: '🌳',
            description: 'Trees, Graphs, heaps, and hashmaps',
            estimatedTime: '10 hours',
            topics: [
                {
                    id: 'hash-maps',
                    title: 'Hash Maps & Sets',
                    content: `
# Hash Maps (Dictionaries)

## Introduction
Key-value storage offering O(1) average time complexity for lookups, insertions, and deletions.

## How it Works
- **Hashing Function**: Converts a key into an index.
- **Collisions**: When two keys map to the same index. Handled via Chaining (Linked Lists) or Open Addressing.

## Job Interview Tips 💡
- **Count Frequency**: Hash Maps are the go-to structure for counting element frequencies.
- **Check Existence**: Use a Hash Set to check if an element exists in O(1).
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'trees-bst',
                    title: 'Trees & BST',
                    content: `
# Trees

## Key Terminology
- **Root**: Top node.
- **Leaf**: Node with no children.
- **Height**: Number of edges from root to furthest leaf.

## Binary Search Tree (BST)
A binary tree where:
- Left child < Parent
- Right child > Parent

## Traversals
1. **In-Order**: Left -> Root -> Right (Sorted order for BST).
2. **Pre-Order**: Root -> Left -> Right.
3. **Post-Order**: Left -> Right -> Root.

## Job Interview Tips 💡
- **Recursion**: Trees are naturally recursive. Most tree problems are solved with recursion.
- **Balance**: Validating if a BST is balanced is a common question (AVL/Red-Black concepts).
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'graphs-intro',
                    title: 'Graphs',
                    content: `
# Graphs

## Representations
1. **Adjacency Matrix**: 2D array. Good for dense graphs. Space: O(V^2).
2. **Adjacency List**: Array of lists. Good for sparse graphs. Space: O(V + E).

## Directed vs Undirected
- **Directed**: A -> B (One way).
- **Undirected**: A -- B (Two way).

## Job Interview Tips 💡
- **Islands Problem**: A classic graph problem (Number of Islands) solved with DFS/BFS.
- **Dependencies**: Course Schedule problems are solved with Topological Sort.
`,
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'algos-core',
            title: 'Algorithms I: Core Patterns',
            category: 'dsa',
            icon: '⚡',
            description: 'Sorting, Searching, and Recursion',
            estimatedTime: '8 hours',
            topics: [
                {
                    id: 'binary-search',
                    title: 'Binary Search',
                    content: `
# Binary Search

## Concept
Search a **sorted** array by repeatedly dividing the search interval in half.
- **Time**: O(log N)
- **Space**: O(1) (Iterative)

## Template
\`\`\`javascript
let left = 0;
let right = arr.length - 1;
while (left <= right) {
  let mid = Math.floor(left + (right - left) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) left = mid + 1;
  else right = mid - 1;
}
return -1;
\`\`\`

## Job Interview Tips 💡
- **Sorted?**: If the array is sorted, immediately think Binary Search.
- **Answer Space**: Sometimes you binary search on the *answer* (e.g., "Minimum capacity to ship packages").
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'recursion-backtracking',
                    title: 'Recursion & Backtracking',
                    content: `
# Recursion & Backtracking

## Recursion
A function calling itself. Must have a **Base Case** to stop.

## Backtracking
Brute-force approach to find all solutions by building candidates and abandoning ("backtracking") them if they fail specific conditions.

## Classic Problems
- **Permutations/Subsets**: Generate all possible combinations.
- **N-Queens**: Place N queens on a board.
- **Sudoku Solver**.

## Job Interview Tips 💡
- **State**: Keep track of current state carefully.
- **Pruning**: optimize by returning early if a path is invalid.
`,
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'algos-advanced',
            title: 'Algorithms II: Advanced',
            category: 'dsa',
            icon: '🚀',
            description: 'Dynamic Programming and Graph traversal',
            estimatedTime: '10 hours',
            topics: [
                {
                    id: 'dynamic-programming',
                    title: 'Dynamic Programming (DP)',
                    content: `
# Dynamic Programming

## Concept
Solving a complex problem by breaking it down into simpler subproblems and storing their solutions (Memoization) to avoid re-computing.

## Top-Down vs Bottom-Up
- **Top-Down**: Recursion + Memoization.
- **Bottom-Up**: Iterative table filling.

## Common Patterns
1. **Knapsack Problem**: Items with weights and values.
2. **Longest Common Subsequence (LCS)**: Comparing two strings.
3. **Climbing Stairs**: Fibonacci variation.

## Job Interview Tips 💡
- **Overlapping Subproblems**: If you see this, think DP.
- **Optimal Substructure**: If the optimal solution can be constructed from optimal solutions of subproblems.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'graph-algos',
                    title: 'BFS & DFS',
                    content: `
# Graph Algorithms: BFS & DFS

## Breadth-First Search (BFS)
Explores neighbors layer by layer.
- **Data Structure**: Queue.
- **Use Case**: Shortest path in an unweighted graph.

## Depth-First Search (DFS)
Explores as far as possible along each branch before backtracking.
- **Data Structure**: Stack (or Recursion).
- **Use Case**: Path finding, Topo sort, Cycle detection.

## Job Interview Tips 💡
- **Visited Set**: Always keep a 'visited' set to avoid infinite loops in cyclic graphs.
- **Level Order**: BFS is perfect for level-order traversal of trees.
`,
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'system-design',
            title: 'System Design Basics',
            category: 'system-design',
            icon: '🏗️',
            description: 'Designing scalable distributed systems',
            estimatedTime: '5 hours',
            topics: [
                {
                    id: 'scalability',
                    title: 'Scalability & Load Balancing',
                    content: `
# Scalability

## Vertical vs Horizontal
- **Vertical (Scale Up)**: Add more RAM/CPU to a single server. Limited ceiling.
- **Horizontal (Scale Out)**: Add more servers. Infinite theoretical ceiling.

## Load Balancing
Distributes incoming network traffic across multiple servers.
- **Algorithms**: Round Robin, Least Connections, IP Hash.
- **Types**: Hardware (F5) vs Software (Nginx, HAProxy).

## Job Interview Tips 💡
- **Trade-offs**: Everything in system design is a trade-off. Mention them (e.g., "Consistency vs Availability").
- **Single Point of Failure**: Identify and eliminate them.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'caching',
                    title: 'Caching Strategies',
                    content: `
# Caching

## Concept
Storing copies of data in a temporary storage location (Cache) for faster access.

## Levels of Caching
- **Client Side**: Browser cache.
- **CDN**: Content Delivery Network (edges).
- **Server Side**: Redis / Memcached.
- **Database**: Buffer pool.

## Eviction Policies
- **LRU (Least Recently Used)**: Discard the least recently used items first.
- **LFU (Least Frequently Used)**.

## Job Interview Tips 💡
- **Cache Invalidation**: "There are only two hard things in Computer Science: cache invalidation and naming things."
- **Write-Through vs Write-Back**: Know the difference for data consistency.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'databases-advanced',
                    title: 'Databases: Scaling',
                    content: `
# Databases: Advanced Scaling

## Replication
Copying data from one database node to another.
- **Master-Slave**: Master handles writes, Slaves handle reads. Increases read throughput.

## Sharding (Partitioning)
Splitting a large database into smaller, faster, more easily managed parts (shards) across different servers.
- **Horizontal Sharding**: Rows are distributed.

## CAP Theorem Revisited
In a distributed system, you can only choose 2:
- **Consistency**: All nodes see the same data at the same time.
- **Availability**: Every request gets a response (success/failure).
- **Partition Tolerance**: System continues to work despite message loss.

## Job Interview Tips 💡
- **NoSQL**: Use when data is unstructured or super high write throughput is needed.
- **SQL**: Use for complex queries and transaction integrity (Banking).
`,
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'testing',
            title: 'Software Testing',
            category: 'advanced',
            icon: '🧪',
            description: 'Testing methodologies and best practices',
            estimatedTime: '3 hours',
            topics: [
                {
                    id: 'testing-intro',
                    title: 'Testing Introduction',
                    content: `
# Software Testing

## Why Test?
Testing ensures your software works as expected and prevents bugs from reaching users.

## Types of Testing

### 1. Unit Testing
- Testing individual components or functions in isolation.
- **Tools**: Jest, Mocha, JUnit.

### 2. Integration Testing
- Testing how different modules work together.
- Example: Testing API endpoints with a database.

### 3. End-to-End (E2E) Testing
- Testing the full user flow from start to finish.
- **Tools**: Cypress, Selenium, Playwright.

## Test Driven Development (TDD)
1. Write a failing test.
2. Write code to pass the test.
3. Refactor.
                    `,
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'security',
            title: 'Security Basics',
            category: 'advanced',
            icon: '🔒',
            description: 'Essential security concepts',
            estimatedTime: '2 hours',
            topics: [
                {
                    id: 'security-intro',
                    title: 'Security Introduction',
                    content: `
# Security Basics

## The CIA Triad
- **Confidentiality**: Only authorized users can access data.
- **Integrity**: Data is accurate and trustworthy.
- **Availability**: Data is accessible when needed.

## Common Vulnerabilities (OWASP Top 10)

### 1. Injection (SQLi)
Attacker sends hostile data to an interpreter.
- **Fix**: Use parameterized queries.

### 2. Broken Authentication
Weak passwords or session management.
- **Fix**: Multi-factor authentication (MFA).

### 3. Cross-Site Scripting (XSS)
Injecting malicious scripts into web pages.
- **Fix**: Sanitize user input.

## Best Practices
- Never commit secrets (API keys) to Git.
- Keep dependencies updated.
- Use HTTPS everywhere.
                    `,
                    examples: [],
                    quiz: []
                }
            ]
        },
        {
            id: 'career',
            title: 'Career & Industry',
            category: 'professional',
            icon: '💼',
            description: 'Navigate your software engineering career',
            estimatedTime: '2 hours',
            topics: [
                {
                    id: 'roles',
                    title: 'Software Engineering Roles',
                    content: `
# Software Engineering Roles

## Specializations

### 1. Frontend Engineer
- Focus: User Interface (UI) and User Experience (UX).
- Tech: HTML, CSS, JavaScript, React.

### 2. Backend Engineer
- Focus: Server-side logic, databases, APIs.
- Tech: Node.js, Python, Java, SQL.

### 3. Full Stack Engineer
- Can work on both frontend and backend.

### 4. DevOps Engineer
- Focus: Infrastructure, CI/CD, Cloud (AWS/Azure).

### 5. Mobile Engineer
- Focus: iOS (Swift) or Android (Kotlin).
                    `,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'interviews',
                    title: 'Interview Preparation',
                    content: `
# Interview Preparation

## The Process
1. **Recruiter Screen**: High-level fit check.
2. **Technical Screen**: Coding challenge (LeetCode style).
3. **Onsite/Final Loop**: System design, behavioral, and more coding.

## Behavioral Interviews (STAR Method)
- **S**ituation: Set the scene.
- **T**ask: What was your responsibility?
- **A**ction: What steps did you take?
- **R**esult: What was the outcome?

## Technical Tips
- Communicate your thought process out loud.
- Ask clarifying questions before coding.
- Test your code with edge cases.
                    `,
                    examples: [],
                    quiz: []
                }
            ]
        }
    
    ]
};

export default curriculum;
