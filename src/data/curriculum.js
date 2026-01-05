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
            title: 'Foundations: HTML5, CSS3 & JavaScript',
            category: 'web-dev',
            icon: '🌐',
            description: 'Master the core technologies of the web (HTML5, CSS3, JS ES6+) with deep focus on modern standards.',
            estimatedTime: '25 hours',
            topics: [
                {
                    id: 'html5-mastery',
                    title: 'HTML5 (Structure & Semantics)',
                    content: `
## HTML5 (Structure & Semantics)

HTML5 is the modern version of HTML that defines the **structure and meaning of a webpage**, so browsers, search engines, and users can understand it clearly.
It focuses on **semantics**, meaning each element on the page has a purpose, not just a visual appearance, which improves accessibility, organization, and SEO.

**Example:** Think of a book: HTML5 is like the way a book has a cover, chapters, headings, and a table of contents, so readers and librarians know what each part represents.

---

## Semantic Tags

Semantic tags are HTML elements that **clearly describe the purpose of content** instead of just grouping it visually.
They make webpages **more readable, organized, and understandable** for humans, search engines, and assistive technologies.

* **header**: Represents the top section of a page or section, usually containing titles or logos.
* **nav**: Contains navigation links that help users move around the website.
* **main**: Holds the primary content of the webpage that is unique and important.
* **section**: Groups related content together under a common theme.
* **article**: Represents independent content that can stand alone, such as a blog post or news article.
* **footer**: Appears at the bottom of a page or section and usually contains extra information like copyright or links.

**Example:** On a news website, the \`<header>\` has the logo, \`<nav>\` has category links, \`<main>\` has the main news story, \`<section>\` groups related articles, \`<article>\` is each individual story, and \`<footer>\` shows contact info.

---

## Forms

Forms are used to **collect information from users** in a structured way and make it easy to send data to a server.
They allow websites to interact with users, accept input, and validate that information is correct before submission.

* **input**: Used to collect short data such as names, emails, or passwords.
* **select**: Allows users to choose one option from a dropdown list.
* **textarea**: Used for longer text input, such as messages or feedback.
* **validation**: Ensures users enter correct and acceptable information before submitting a form.

**Example:** A login page uses a form to get your username and password, while a contact page uses a form to collect your name, email, and message.

---

## Accessibility Basics

Accessibility basics ensure that **everyone can use a website**, including people with disabilities.
By using proper labels, descriptive text, and ARIA roles, developers make pages understandable to screen readers and assistive technologies.

* **labels**: Clearly describe what each form field is for, helping users and screen readers understand inputs.
* **alt**: Provides a text description of images so users who cannot see them still understand their purpose.
* **ARIA roles**: Give additional meaning to elements so screen readers know how to interact with complex page parts.

**Example:** A blind user can know what a form field is for because of a label, and understand an image of a smiling child reading a book because of alt text.

---

## Document Structure

Document structure defines how a webpage is **organized internally** so browsers and search engines can interpret it correctly.
A clear structure improves page performance, SEO, and accessibility by separating visible content from metadata and instructions for the browser.

* **head**: Contains important information about the webpage that users do not see directly, such as the title and settings.
* **meta tags**: Provide extra details about the page, including character encoding, descriptions, and responsiveness.

**Example:** The \`<head>\` section is like the cover of a book showing its title and author, while the \`<body>\` is the pages that readers see.

---

## SEO-Friendly Markup

SEO-friendly markup ensures that a webpage is **written in a clear, meaningful way** so search engines can understand and rank it properly.
It includes proper headings, semantic elements, and descriptive content, helping pages appear higher in search results.

* **Proper headings**: Help search engines understand content hierarchy.
* **Semantic elements**: Improve content clarity for indexing.
* **Descriptive text**: Makes page content easier to interpret and rank.

**Example:** Using \`<h1>\` for the main page title and \`<h2>\` for section titles is like giving chapters clear names in a book so a librarian or reader can quickly understand the structure.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'What is the correct purpose of the <main> tag?',
                            options: ['To hold navigation links', 'To contain the unique content of the page', 'To replace the <body> tag', 'To make text bold'],
                            correct: 1,
                            explanation: 'The <main> tag represents the dominant content of the <body> of a document.'
                        },
                        {
                            question: 'Which attribute connects a <label> to an <input>?',
                            options: ['id', 'class', 'for', 'src'],
                            correct: 2,
                            explanation: 'The "for" attribute on a label must match the "id" of the input.'
                        },
                        {
                            question: 'Why is <meta name="viewport"> important?',
                            options: ['It improves SEO ranking', 'It enables mobile responsiveness', 'It sets the page title', 'It loads CSS'],
                            correct: 1,
                            explanation: 'Without this tag, mobile browsers will render the page as if it were on a desktop and zoom out.'
                        }
                    ]
                },
                {
                    id: 'css3-mastery',
                    title: 'CSS3 (Layout & Styling)',
                    content: `
## CSS3 (Layout & Styling)

CSS3 is a styling language that controls the **appearance, layout, and visual presentation** of webpages.
It transforms plain HTML into visually appealing designs by managing colors, positioning, spacing, animations, and responsive layouts that adapt to different screen sizes.

**Example:** Think of a house: HTML is the structure (walls, rooms), while CSS3 is the decoration (paint colors, furniture arrangement, lighting) that makes it beautiful and livable.

---

## Box Model

The box model is a fundamental concept that treats every HTML element as a **rectangular box** with specific layers.
Understanding the box model allows precise control over spacing, sizing, and layout, preventing unexpected overlaps or gaps in designs.

* **Content**: The actual text or image inside the element.
* **Padding**: Space between the content and the border, creating internal breathing room.
* **Border**: The line surrounding the padding and content.
* **Margin**: Space outside the border that pushes other elements away.

**Example:** Imagine a framed photo: the photo itself is the content, the mat around it is padding, the wooden frame is the border, and the space between it and other wall decorations is margin.

---

## Flexbox

Flexbox is a **one-dimensional layout system** that makes it easy to arrange items** in a row or column**.
It solves common CSS challenges like centering content, distributing space evenly, or creating responsive navigation menus without complex calculations.

* **alignment**: Controls how items are positioned relative to the container's main and cross axes.
* **direction**: Determines whether items flow horizontally (row) or vertically (column).
* **wrapping**: Allows items to move to the next line when they don't fit in one row or column.

**Example:** Flexbox is like organizing books on a shelf: you can arrange them left to right, center them, space them evenly, or let them wrap to a second shelf when the first gets full.

---

## CSS Grid

CSS Grid is a **two-dimensional layout system** that allows precise control over **both rows and columns** simultaneously.
It makes complex page layouts easier by enabling developers to create grid-based designs for dashboards, image galleries, and magazine-style pages.

* **rows**: Defines the horizontal tracks in the grid layout.
* **columns**: Defines the vertical tracks in the grid layout.
* **areas**: Allows naming specific sections of the grid for easier positioning.

**Example:** A newspaper layout uses CSS Grid: the main headline spans multiple columns at the top, while smaller articles fill individual grid cells below, each occupying specific rows and columns.

---

## Positioning

Positioning controls **where an element appears on the page** relative to its normal position or the viewport.
It enables advanced layouts like sticky navigation bars, dropdown menus, tooltips, and layered content that traditional flow cannot achieve.

* **relative**: Positions the element relative to where it would normally be.
* **absolute**: Removes the element from normal flow and positions it relative to the nearest positioned ancestor.
* **fixed**: Keeps the element in the same position even when scrolling.
* **sticky**: Acts as relative until scrolling reaches a threshold, then becomes fixed.

**Example:** A sticky header is like a bookmark that stays visible at the top of a book page as you flip through it, while other content scrolls beneath.

---

## Responsive Design

Responsive design ensures webpages **look good and function well on all devices**, from tiny phones to large desktop monitors.
It uses flexible layouts, media queries, and proportional sizing to adapt content automatically to different screen widths and orientations.

* **media queries**: CSS rules that apply only when specific conditions (like screen width) are met.

**Example:** A responsive website is like water in a container: it adapts its shape to fit whether it's in a tall glass (phone), wide bowl (tablet), or large pitcher (desktop).

---

## Z-index & Stacking Context

Z-index controls the **stacking order of overlapping elements**, determining which elements appear in front or behind others.
Stacking context is a grouping mechanism that creates independent layering environments, preventing conflicts when multiple elements try to control depth.

**Example:** Layers in a design app like Photoshop: higher z-index values are like layers placed on top, while lower values are layers beneath.

---

## Transitions & Transforms

Transitions create **smooth animations** when CSS properties change, while transforms allow elements to rotate, scale, skew, or translate without affecting page layout.
Together they add polish and interactivity to user interfaces, making them feel responsive and modern.

* **transitions**: Animate property changes over time (e.g., color fading from blue to red).
* **transforms**: Apply visual transformations like rotation, scaling, or movement.

**Example:** Hovering over a button that grows slightly larger and changes color smoothly is achieved with transitions and transforms, like a flower blooming when sunlight hits it.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'Which property changes the stacking order of elements?',
                            options: ['display', 'z-index', 'position', 'order'],
                            correct: 1,
                            explanation: 'z-index controls the vertical stacking order of elements that overlap.'
                        },
                        {
                            question: 'What is the difference between specific padding vs border-box?',
                            options: ['No difference', 'border-box includes padding/border in the total width', 'padding-box is default', 'border-box adds to width'],
                            correct: 1,
                            explanation: 'border-box ensures that padding and border are included in the element\'s total width and height.'
                        },
                        {
                            question: 'When should you use Grid over Flexbox?',
                            options: ['Always', 'For 1D layouts', 'For 2D layouts (rows AND columns)', 'Never'],
                            correct: 2,
                            explanation: 'Grid is designed for two-dimensional layouts, while Flexbox is best for one-dimensional layouts.'
                        }
                    ]
                },
                {
                    id: 'js-es6-core',
                    title: 'JavaScript (ES6+ Core Language)',
                    content: `
## JavaScript (ES6+ Core Language)

JavaScript is the **programming language that brings webpages to life** by adding interactivity, logic, and dynamic behavior.
It runs in the browser, responds to user actions, manipulates content, fetches data from servers, and creates engaging experiences that go beyond static HTML and CSS.

**Example:** Think of a vending machine: HTML is the machine structure, CSS is how it looks, and JavaScript is the internal logic that accepts your money, checks inventory, and dispenses your snack.

---

## Variables

Variables are **containers that store data values** so they can be used and changed throughout a program.
Choosing the right variable type (let, const, var) affects where the variable can be accessed and whether its value can be changed.

* **let**: Declares a variable that can be reassigned and is limited to the block where it's defined.
* **const**: Declares a variable that cannot be reassigned, making code more predictable and preventing accidental changes.

**Example:** Using \`const\` for a user's ID is like writing a permanent employee number, while \`let\` for their current task is like a whiteboard note that can be erased and rewritten.

---

## Functions

Functions are **reusable blocks of code** that perform specific tasks when called.
They help organize code, avoid repetition, and make programs easier to understand and maintain.

* **arrow vs normal**: Arrow functions (\`=>\`) have shorter syntax and inherit \`this\` from their surrounding context, while normal functions create their own \`this\`.

**Example:** A recipe is like a function: it contains step-by-step instructions that you can follow whenever you want to make that dish, rather than rewriting the steps each time.

---

## Scope & Closures

Scope determines **where variables can be accessed** in code, while closures allow functions to **remember variables from their creation environment**.
Understanding scope prevents naming conflicts and bugs, while closures enable powerful patterns like private variables and callbacks.

**Example:** Closures are like a backpack: a function carries its original environment (variables) with it wherever it goes, even after leaving the place where it was created.

---

## Arrays & Objects

Arrays and objects are **data structures that organize multiple values** in different ways.
Arrays use numbered positions for ordered lists, while objects use named keys for structured, labeled data.

**Example:** An array is like a numbered list of groceries (1. Milk, 2. Eggs), while an object is like a contact card with labeled fields (name: "John", phone: "555-1234").

---

## Array Methods

Array methods are **built-in functions that transform, filter, and process arrays** without manually writing loops.
They make code cleaner, more readable, and follow functional programming principles.

* **map**: Creates a new array by transforming every element.
* **filter**: Creates a new array with only elements that pass a test.
* **reduce**: Combines all elements into a single value.

**Example:** Using \`.filter()\` on a list of products to show only items under $20 is like using a strainer to separate small pasta from large pasta.

---

## Destructuring

Destructuring is a **syntax that unpacks values from arrays or properties from objects** into separate variables.
It makes code more concise and readable by extracting multiple values in one line instead of accessing them individually.

**Example:** Destructuring an object \`{ name, age }\` is like opening a box and pulling out specific items by name rather than reaching in blindly or opening the whole thing.

---

## Spread/Rest Operators

The spread and rest operators (\`...\`) **expand or gather** values depending on context.
Spread expands arrays/objects into individual elements, while rest collects multiple elements into an array.

**Example:** Spread is like unpacking a suitcase onto a bed (spreading items out), while rest is like packing loose items back into the suitcase (gathering them together).

---

## Promises

Promises represent **eventual completion or failure of an asynchronous operation** and allow chaining actions.
They solve "callback hell" by making asynchronous code more readable and manageable.

**Example:** A promise is like a restaurant buzzer: you're promised your table will be ready eventually, and you can decide what to do when it's ready (resolve) or if there's a problem (reject).

---

## async / await

Async/await is **syntactic sugar for promises** that makes asynchronous code look and behave like synchronous code.
It improves readability by avoiding long promise chains and making error handling simpler with try/catch blocks.

**Example:** Async/await is like waiting in line at a coffee shop: you stand there (\`await\`), get your coffee when it's ready, then continue your day, rather than setting up a complex notification system.

---

## Error Handling

Error handling uses **try/catch blocks to gracefully manage errors** so programs don't crash unexpectedly.
It allows developers to anticipate problems, provide helpful error messages, and maintain application stability.

* **try/catch**: Wraps risky code in \`try\` and handles errors in \`catch\`.

**Example:** Try/catch is like a safety net under a tightrope walker: if something goes wrong, the net catches the fall and prevents disaster.

---

## Event Loop

The event loop is JavaScript's **mechanism for handling asynchronous operations** despite being single-threaded.
It manages the execution order of code, collecting and processing events and callbacks to keep the application responsive.

* **microtasks vs macrotasks**: Microtasks (promises) have higher priority and run before macrotasks (setTimeout, setInterval).

**Example:** The event loop is like a restaurant server: they take orders (tasks), quickly check for urgent table requests (microtasks), then deliver food (macrotasks) in an organized sequence.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'What is a closure?',
                            options: ['A function inside a function', 'A function that remembers its outer scope', 'A way to close a variable', 'An error'],
                            correct: 1,
                            explanation: 'A closure gives you access to an outer function\'s scope from an inner function.'
                        },
                        {
                            question: 'What does .map() return?',
                            options: ['Undefined', 'The same array modified', 'A new array with transformed items', 'A single value'],
                            correct: 2,
                            explanation: '.map() creates a NEW array populated with the results of calling a provided function on every element.'
                        },
                        {
                            question: 'Which has higher priority in the Event Loop?',
                            options: ['Macrotasks (setTimeout)', 'Microtasks (Promises)', 'They are equal', 'DOM Events'],
                            correct: 1,
                            explanation: 'Microtasks are processed immediately after the current script and before any new Macrotask.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'frontend-dev',
            title: 'Frontend Mastery: React 19, TS & Tools',
            category: 'web-dev',
            icon: '⚛️',
            description: 'Master the modern stack: React 19, TypeScript, Tailwind, Frameworks, and State.',
            estimatedTime: '40 hours',
            topics: [
                {
                    id: 'tailwind-mastery',
                    title: 'Tailwind CSS',
                    content: `
## Tailwind CSS

Tailwind CSS is a **utility-first CSS framework** that provides pre-built classes for styling elements directly in HTML.
It eliminates the need for writing custom CSS by offering small, reusable utility classes that handle spacing, colors, typography, and layout.

**Example:** Instead of creating a CSS file with \`.button { background: blue; }\`, you apply \`class="bg-blue-500"\` directly to the HTML element, like using prebuilt LEGO blocks instead of molding custom pieces.

---

## Utility-First Approach

Utility-first means **applying small, single-purpose classes** directly to HTML elements rather than writing semantic CSS classes.
This approach speeds up development, ensures design consistency, and reduces the need to context-switch between HTML and CSS files.

**Example:** Building a button with \`bg-blue-500 px-4 py-2 rounded\` is like assembling a toy from labeled parts rather than building each part from scratch.

---

## Design System

Tailwind includes a **built-in design system** with predefined spacing, colors, typography, and breakpoints.
This ensures consistency across a project and prevents "magic numbers" like \`margin: 13px\` that vary randomly throughout code.

* **Spacing scale**: Standardized values (1, 2, 4, 8, 16px, etc.)
* **Color palette**: Numbered shades (blue-100 to blue-900)
* **Responsive breakpoints**: sm, md, lg, xl, 2xl

**Example:** Using \`p-4\` everywhere for padding is like having a measuring cup set where every chef uses the same "1 cup" size, ensuring consistency.

---

## Responsive Design

Tailwind makes responsive design simple with **prefix modifiers** that apply styles at specific screen sizes.
You can control how elements look on mobile, tablet, and desktop without writing media queries manually.

* **md:flex**: Apply flexbox on medium screens and up
* **lg:grid-cols-3**: Use 3-column grid on large screens

**Example:** \`hidden md:block\` hides an element on mobile but shows it on tablets and larger, like a menu that starts collapsed and expands on bigger screens.

---

## Production Optimization

Tailwind automatically **removes unused CSS** in production builds, keeping file sizes  minimal.
Only the classes actually used in your HTML are included in the final CSS bundle.

**Example:** Like packing for a trip and only bringing clothes you'll actually wear, Tailwind strips out all the "just in case" styles you never used.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'What is the main benefit of Tailwind CSS?',
                            options: ['It\'s faster than normal CSS', 'Utility classes keep styling inline with HTML', 'It requires no configuration', 'It works only with React'],
                            correct: 1,
                            explanation: 'Tailwind provides utility classes that you apply directly in HTML, keeping styles close to the markup.'
                        },
                        {
                            question: 'What does Tailwind do to reduce bundle size?',
                            options: ['Compresses images', 'Removes unused CSS in production', 'Minifies HTML', 'Uses CDN'],
                            correct: 1,
                            explanation: 'Tailwind automatically purges unused CSS classes during the build process, significantly reducing file size.'
                        },
                        {
                            question: 'What does "px-4" do in Tailwind?',
                            options: ['Sets font size', 'Sets horizontal padding', 'Sets margin', 'Sets width'],
                            correct: 1,
                            explanation: 'px-4 applies padding on the left and right (horizontal padding) using Tailwind\'s spacing scale.'
                        }
                    ]
                },
                {
                    id: 'framer-motion',
                    title: 'Framer Motion (Animations)',
                    content: `
## Framer Motion (Animations)

Framer Motion is a **production-ready animation library for React** that makes complex animations simple through declarative syntax.
It provides smooth, performant animations with built-in support for gestures, transitions, and advanced layout animations.

**Example:** Framer Motion is like a choreographer: instead of manually controlling every movement step-by-step, you describe the start and end positions, and it smoothly handles the transition.

---

## Declarative Animations

Declarative animations let you **describe what you want, not how to achieve it** by defining start and end states.
Framer Motion calculates the animation path automatically, making code cleaner and easier to maintain.

* **initial**: The starting state of an element
* **animate**: The target state to animate towards
* **exit**: How the element animates when removed

**Example:** Saying "fade in from invisible to visible" is declarative, like telling a driver "go to Main Street" instead of giving turn-by-turn directions.

---

## Gestures

Gestures are **built-in interactive animations** triggered by user actions like hover, tap, or drag.
They make interfaces feel responsive and polished without complex event handling code.

* **whileHover**: Animation while mouse hovers
* **whileTap**: Animation while being clicked
* **drag**: Enable dragging with physics

**Example:** A button that grows slightly on hover is like a real button that depresses when pressed, providing tactile feedback.

---

## Exit Animations

Exit animations allow elements to **animate smoothly when being removed** from the DOM using AnimatePresence.
This solves a tricky React problem where components disappear instantly without animation.

**Example:** A modal that fades out before disappearing is like a curtain slowly closing rather than being yanked down abruptly.

---

## Variants

Variants are **named animation states** that can be reused across components and orchestrated together.
They enable complex coordinated animations with minimal code.

**Example:** Variants are like presets on a camera: instead of adjusting every setting manually, you select "Portrait" or "Landscape" mode.

---

## Layout Animations

Layout animations **automatically animate position and size changes** without manual calculations.
They handle complex scenarios like reordering lists or responsive layouts smoothly.

**Example:** When items in a list rearrange, layout animations make them smoothly slide rather than jump to new positions, like dancers gracefully changing formation.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'What component must wrap items to animate them when they are REMOVED from the DOM?',
                            options: ['<motion.div>', '<AnimatePresence>', '<LayoutGroup>', '<RemoveAnimation>'],
                            correct: 1,
                            explanation: 'AnimatePresence is required to detect when components are unmounted to play exit animations.'
                        },
                        {
                            question: 'Which prop defines the "starting" state of an animation?',
                            options: ['start', 'from', 'initial', 'first'],
                            correct: 2,
                            explanation: 'The initial prop defines the state of the element before it mounts.'
                        },
                        {
                            question: 'What is a "Variant" in Framer Motion?',
                            options: ['A different version of the library', 'A pre-defined set of animation states you can reuse', 'A type of transition curve', 'A bug'],
                            correct: 1,
                            explanation: 'Variants allow you to define animation states (like "open" or "closed") and reuse them across components.'
                        }
                    ]
                },
                {
                    id: 'react-19-core',
                    title: 'React 19 (Core)',
                    content: `
## React 19 (Core)

React is a **JavaScript library for building user interfaces** by composing reusable components.
It uses a component-based architecture where each piece of UI is isolated, testable, and can manage its own state and lifecycle.

**Example:** React is like building with LEGO: each component is a reusable brick, and you assemble them into complex structures (pages, apps) by snapping them together.

---

## JSX

JSX is **JavaScript XML**, a syntax extension that lets you write HTML-like code inside JavaScript files.
It makes component templates readable and allows you to embed JavaScript expressions directly within markup.

**Example:** JSX is like writing a movie script with stage directions: the dialogue (HTML) and the actions (JavaScript logic) are in the same document for clarity.

---

## Components

Components are **independent, reusable pieces of UI** that accept inputs (props) and return React elements describing what should appear on screen.
They encapsulate structure, styling, and behavior, making code modular and easier to maintain.

*   **Functional components**: JavaScript functions that return JSX
*   **Props**: Data passed from parent to child components

**Example:** A \`Button\` component is like a recipe: you can make many buttons (instances) by following the same recipe with different ingredients (props like color or text).

---

## State

State is **data that component owns and can change over time**, triggering re-renders when updated.
It represents dynamic values like form inputs, toggles, or fetched data that affect what users see.

**Example:** State is like the score in a game: it changes as the game progresses, and the display updates to show the current score.

---

## Props

Props (properties) are **read-only data passed from parent components to children**.
They allow components to be configured and customized without modifying their internal logic.

**Example:** Props are like function arguments: you pass different values to the same function to get different results, just as you pass different props to get different component variations.

---

## Virtual DOM

The Virtual DOM is React's **in-memory representation of the actual DOM** used to optimize updates.
React compares the virtual and real DOM, calculating the minimal set of changes needed for efficient rendering.

**Example:** The Virtual DOM is like a blueprint: instead of rebuilding an entire house for one room change, you compare blueprints to identify and update only what changed.

---

## Hooks

Hooks are **functions that let you use React features** like state and lifecycle in functional components.
They eliminate the need for class components and make stateful logic reusable.

*   **useState**: Adds state to functional components
*   **useEffect**: Runs side effects after render

**Example:** Hooks are like power tools: they let you do complex tasks (managing state, effects) in simple functional components without switching to heavy machinery (class components).

---

## React Compiler

The React Compiler (React 19) **automatically optimizes re-renders** without manual memoization.
It analyzes code and avoids unnecessary re-renders, improving performance transparently.

**Example:** The compiler is like an automatic car transmission: it handles the complex gear-shifting (optimization) automatically, letting you focus on driving (writing code).
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'What allows you to write HTML-like syntax inside JavaScript?',
                            options: ['HTML5', 'JSX', 'TSX', 'DOM'],
                            correct: 1,
                            explanation: 'JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code within JavaScript.'
                        },
                        {
                            question: 'True or False: Props can be modified by the component that receives them.',
                            options: ['True', 'False'],
                            correct: 1,
                            explanation: 'Props are read-only (immutable). To change data, you must use State.'
                        },
                        {
                            question: 'What typically causes a React component to re-render?',
                            options: ['Page refresh', 'State or Props change', 'Clicking anywhere', 'Hovering'],
                            correct: 1,
                            explanation: 'React components re-render whenever their internal State changes or they receive new Props.'
                        }
                    ]
                },
                {
                    id: 'typescript-mastery',
                    title: 'TypeScript',
                    content: `
## TypeScript

TypeScript is **JavaScript with static typing**, a superset that adds type annotations to catch errors during development.
It compiles to plain JavaScript but provides powerful tooling, autocompletion, and error detection before code runs.

**Example:** TypeScript is like a spell-checker for code: it highlights mistakes (wrong data types) before you publish, preventing runtime errors.

---

## Type Annotations

Type annotations **explicitly declare what type of data a variable, function parameter, or return value should be**.
This enables the compiler and IDE to catch type mismatches immediately.

* **Basic types**: string, number, boolean, array
* **Custom types**: interfaces, type aliases

**Example:** Declaring a variable as number is like labeling a box "fragile glassware" so nobody puts heavy tools in it.

---

## Interfaces

Interfaces **define the structure of objects**, specifying required and optional properties with their types.
They act as contracts ensuring objects have the correct shape throughout the application.

**Example:** An interface is like a blueprint: it specifies a User must have name and email, just as a blueprint specifies a house must have a foundation and roof.

---

## Type Safety

Type safety **prevents type-related bugs** by ensuring variables and functions only receive expected data types.
TypeScript catches errors like passing a string to a function expecting a number at compile time, not runtime.

**Example:** Type safety is like airport security: it checks you have the right boarding pass (type) before letting you on the plane (function execution).

---

## Generics

Generics allow **creating reusable components that work with multiple types** while maintaining type safety.
They're like templates that preserve type information while being flexible.

**Example:** Generics are like a universal remote: one remote (generic function) works with any TV brand (type), but still knows which buttons do what.

---

## Type Inference

Type inference means TypeScript **automatically determines types** based on assigned values without explicit annotations.
This reduces verbosity while maintaining type safety.

**Example:** Type inference is like a smart assistant: you say "turn on the lights" without specifying "the ceiling lights," and it figures out what you mean from context.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'What does the ? mean in email?: string?',
                            options: ['Its a question', 'The property is optional', 'The property is unknown', 'Its a typo'],
                            correct: 1,
                            explanation: 'The question mark indicates that a property is optional and can be undefined.'
                        },
                        {
                            question: 'Which type represents a value that can be anything (but disables type checking)?',
                            options: ['void', 'unknown', 'any', 'all'],
                            correct: 2,
                            explanation: 'The any type allows any value and effectively disables TypeScripts type checker for that variable.'
                        },
                        {
                            question: 'What is the main benefit of TypeScript over JavaScript?',
                            options: ['Faster execution', 'Smaller file size', 'Type safety catches errors early', 'Works in more browsers'],
                            correct: 2,
                            explanation: 'TypeScript\'s primary benefit is catching type-related errors during development rather than at runtime.'
                        }
                    ]
                },
                {
                    id: 'vite-mastery',
                    title: 'Vite',
                    content: `
## Vite

Vite is a **modern build tool and development server** that provides instant server startup and lightning-fast Hot Module Replacement.
It leverages native ES modules in the browser during development and bundles with Rollup for optimized production builds.

**Example:** Vite is like a chef who prepares ingredients ahead of time but only cooks dishes when ordered, versus a traditional bundler that cooks everything before opening the restaurant.

---

## Instant Dev Server

Vite starts the development server **instantly** by serving source files on-demand using native ES modules.
It doesn't bundle the entire application before starting, making dev server startup near-instantaneous even for large projects.

**Example:** Instant dev server is like a library that lets you read  any book immediately, versus one that requires cataloging every book before opening.

---

## Hot Module Replacement

HMR allows **updating modules in the browser without full page reload**, preserving application state.
Changes appear instantly, dramatically improving development speed and experience.

**Example:** HMR is like editing a document and seeing changes immediately, versus closing, re-editing, and reopening after every change.

---

## Production Builds

For production, Vite uses **Rollup for highly optimized bundled output** with tree-shaking and code splitting.
It produces minimal, efficient bundles that load quickly in browsers.

**Example:** Production builds are like packing a suitcase efficiently: everything you need in minimal space, versus development's messy closet where everything is easily accessible.

---

## Plugin Ecosystem

Vite has a **rich plugin ecosystem** compatible with Rollup plugins, enabling framework support, asset handling, and optimization.

**Example:** Plugins are like apps on a smartphone: the core device works, but apps add specific functionality you need.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'Vite is primarily a replacement for which tool?',
                            options: ['React', 'Webpack', 'Docker', 'Git'],
                            correct: 1,
                            explanation: 'Vite replaces traditional bundlers like Webpack, offering faster dev server startup.'
                        },
                        {
                            question: 'What does HMR stand for?',
                            options: ['HTML Module Rendering', 'Hot Module Replacement', 'High Memory RAM', 'Human Machine Readiness'],
                            correct: 1,
                            explanation: 'Hot Module Replacement allows modules to be updated in the browser without a full page reload.'
                        },
                        {
                            question: 'Where do you typically store environment variables in a Vite project?',
                            options: ['vite.config.js', '.env file', 'index.html', 'package.json'],
                            correct: 1,
                            explanation: 'Environment variables are stored in .env files and accessed via import.meta.env.'
                        }
                    ]
                },
                {
                    id: 'zustand-mastery',
                    title: 'Zustand (State Management)',
                    content: `
## Zustand (State Management)

Zustand is a **lightweight state management library for React** that provides global state without boilerplate.
It offers a simple API based on hooks, making it easy to share state across components without prop drilling or complex context setups.

**Example:** Zustand is like a community bulletin board: anyone can post messages (update state) and everyone can read them (access state), versus passing notes individually (prop drilling).

---

## Stores

A store is a **central container for state and actions** that components can subscribe to.
Stores are created with the create function and contain both data and functions to modify that data.

**Example:** A store is like a shared notebook: multiple people can read from it and write to it, and everyone sees the same information.

---

## Hooks API

Zustand uses **React hooks** to access and update state, feeling native to React.
Components automatically re-render when subscribed state changes.

**Example:** Hooks are like subscribing to a newsletter: you automatically get updates when new content (state changes) is published.

---

## No Provider Needed

Unlike Context API, Zustand **doesn't require wrapping components in providers**, reducing boilerplate.
The store exists outside React's component tree and components simply import and use it.

**Example:** No Provider is like a water fountain: everyone can access it directly without asking permission or going through gatekeepers.

---

## Selective Subscriptions

Components can **subscribe to specific slices** of state, only re-rendering when those pieces change.
This optimizes performance by avoiding unnecessary renders.

**Example:** Selective subscriptions are like subscribing to specific news topics: you only get alerts for sports scores, not every article the newspaper publishes.

---

## Middleware Support

Zustand supports **middleware for persistence, dev tools, and logging**.
This extends functionality without complicating the core API.

**Example:** Middleware is like plugins for a text editor: the editor works fine alone, but plugins add spell-check, themes, and auto-save as needed.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'Zustand is an alternative to which popular library?',
                            options: ['React Router', 'Redux', 'Axios', 'Tailwind'],
                            correct: 1,
                            explanation: 'Zustand is a state management library often used as a simpler alternative to Redux.'
                        },
                        {
                            question: 'Do you need to wrap your app in a visible <Provider> component to use Zustand?',
                            options: ['Yes', 'No'],
                            correct: 1,
                            explanation: 'Zustand is unopinionated and does NOT require wrapping your app in a Context Provider.'
                        },
                        {
                            question: 'How do you update state in Zustand?',
                            options: ['By mutating the variable directly', 'By using the set function provided in the store creator', 'By using this.setState', 'By magic'],
                            correct: 1,
                            explanation: 'You use the set() function passed to the create store callback to merge updates.'
                        }
                    ]
                },
                {
                    id: 'react-hooks-core',
                    title: 'React Hooks',
                    content: `
## React Hooks

React Hooks are **functions that let you use React features** in functional components without writing classes.
They enable state management, side effects, context, refs, and custom reusable logic in a simpler, more composable way.

**Example:** Hooks are like power tools: instead of building furniture with only manual tools (class components), you get specialized power tools (hooks) that make specific jobs easier and faster.

---

## useState

useState allows **adding state to functional components** by returning current state and an updater function.
State persists between renders and triggers re-renders when updated.

**Example:** useState is like a sticky note: you write information on it (set state), and it stays there (persists) until you write something new.

---

## useEffect

useEffect runs **side effects after render**, handling component lifecycle events like mounting, updating, and unmounting.
It replaces componentDidMount, componentDidUpdate, and componentWillUnmount from class components.

* **Dependency array**: Controls when the effect runs
* **Cleanup function**: Runs when component unmounts or before re-running

**Example:** useEffect is like a maid service: when you check in (mount), maid brings towels; when you call room service (update), maid responds; when you check out (unmount), maid cleans up.

---

## useRef

useRef creates **a mutable reference that persists across renders** without causing re-renders when changed.
Commonly used for accessing DOM elements or storing mutable values.

**Example:** useRef is like a locker: you can put things in and take them out without anyone noticing (no re-render), versus useState which announces changes to everyone.

---

## useContext

useContext accesses **React Context values** without wrapping components in Consumer components.
It simplifies reading values from Context providers.

**Example:** useContext is like checking the weather app: instead of walking outside and looking at a thermometer (Context.Consumer), you directly check your phone.

---

## Custom Hooks

Custom hooks are **reusable functions that use other hooks**, encapsulating logic that can be shared across components.
They follow the "use" naming convention and can manage their own state and effects.

**Example:** Custom hooks are like recipes: you create a reusable set of instructions (useWindowSize, useFetch) that anyone can use rather than rewriting the steps each time.

---

## Rules of Hooks

Hooks must **only be called at the top level** of components and in a consistent order.
They cannot be called inside loops, conditions, or nested functions.

**Example:** Rules of Hooks are like reading a book: you must read pages in order from start to finish, not jumping around randomly based on conditions.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'Which rule must you follow when using hooks?',
                            options: ['Only call them inside loops', 'Only call them at the top level of your component', 'Only call them in class components', 'Only call them on Tuesdays'],
                            correct: 1,
                            explanation: 'Hooks must strictly be called at the top level of a functional component, not inside loops or conditions.'
                        },
                        {
                            question: 'What does the dependency array [] in useEffect mean?',
                            options: ['Run on every render', 'Run only once (on mount)', 'Run whenever state changes', 'Run never'],
                            correct: 1,
                            explanation: 'An empty dependency array means the effect runs once after the initial render, similar to componentDidMount.'
                        },
                        {
                            question: 'What is the purpose of the cleanup function returned from useEffect?',
                            options: ['To delete the component', 'To prevent memory leaks by cleaning up subscriptions/timers', 'To clear state', 'To remove props'],
                            correct: 1,
                            explanation: 'The cleanup function cancels subscriptions, clears timers, and prevents memory leaks when the component unmounts.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'backend-dev',
            title: 'Master Full-Stack: Data, API & Persistence',
            category: 'web-dev',
            icon: '🔧',
            description: 'Build robust, scalable backends (Node, Express, Mongo) and master API design.',
            estimatedTime: '35 hours',
            topics: [
                {
                    id: 'nodejs-mastery',
                    title: 'Node.js Internals',
                    content: `
## Node.js Internals

Node.js is a **JavaScript runtime built on Chrome's V8 engine** that lets JavaScript run outside the browser.
It enables server-side programming, file system access, database connections, and building scalable network applications using JavaScript.

**Example:** Node.js is like taking a race car engine (V8) out of the car and using it to power a boat (server), allowing the same powerful engine to work in different environments.

---

## Event Loop

The event loop is Node.js's **mechanism for handling asynchronous operations** in a single-threaded environment.
It processes callbacks from the callback queue, allowing Node to handle thousands of concurrent connections efficiently.

**Example:** The event loop is like a restaurant waiter: instead of waiting at the kitchen for one order, the waiter takes multiple orders, delivers them as they're ready, and keeps moving efficiently.

---

## Non-Blocking I/O

Non-blocking I/O means **operations don't wait** for slow tasks like file reads or database queries to complete.
Node continues processing other requests while waiting for I/O operations to finish in the background.

**Example:** Non-blocking I/O is like washing laundry: you start the washer, then do other chores instead of sitting and watching the machine until it's done.

---

## Modules

Modules are **reusable units of code** that can be imported and exported using require() or ES6 import/export.
Node's module system promotes code organization and reusability.

* **Built-in modules**: fs, http, path, crypto
* **NPM modules**: Third-party packages from npm registry

**Example:** Modules are like LEGO instruction booklets: each booklet (module) shows how to build a specific thing, and you combine them to create complex projects.

---

## NPM

NPM (Node Package Manager) is the **world's largest software registry** for sharing and using JavaScript packages.
It provides tools for installing, managing, and publishing packages.

**Example:** NPM is like a massive public library: instead of writing every book yourself, you can borrow (install) books (packages) that others have written.

---

## Streams

Streams allow **processing data piece-by-piece** rather than loading everything into memory at once.
They're efficient for handling large files, network communication, and data transformation.

**Example:** Streams are like drinking through a straw: you consume a little at a time as needed, versus trying to swallow an entire glass at once.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'What does "non-blocking" mean in Node.js?',
                            options: ['Code runs in parallel', 'Operations dont wait for I/O to finish', 'It has no bugs', 'It uses multiple threads'],
                            correct: 1,
                            explanation: 'Non-blocking means Node.js doesnt wait for I/O operations (like reading files) to complete before moving on to the next task.'
                        },
                        {
                            question: 'What is the Event Loop responsible for?',
                            options: ['Creating loops', 'Managing memory', 'Handling asynchronous callbacks', 'Compiling code'],
                            correct: 2,
                            explanation: 'The Event Loop processes the callback queue and allows Node to handle async operations.'
                        },
                        {
                            question: 'Which command installs a package from NPM?',
                            options: ['node install package', 'npm get package', 'npm install package', 'npm download package'],
                            correct: 2,
                            explanation: 'npm install package (or npm i package) is the command to install packages from the NPM registry.'
                        }
                    ]
                },
                {
                    id: 'express-mastery',
                    title: 'Express.js Framework',
                    content: `
## Express.js

Express.js is a **minimal and flexible Node.js web application framework** that provides a robust set of features for web and mobile applications.
It simplifies building servers, handling HTTP requests, and managing routes compared to using Node's built-in http module.

**Example:** Express.js is like a pre-built house frame: you don't have to manufacture individual bricks (Node.js raw code), but you still have total control over how you decorate and arrange the rooms.

---

## Routing

Routing determines **how an application responds to a client request to a specific endpoint**, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.).
It allows you to map different URLs to specific functions in your code.

**Example:** Routing is like a department store directory: if you go to the "Shoes" floor (URL), you find shoes; if you go to the "Electronics" floor, you find computers.

---

## Middleware

Middleware functions are **functions that have access to the request object (req), the response object (res), and the next middleware function** in the application’s request-response cycle.
They can execute any code, make changes to the request and response objects, and end the request-response cycle.

*   **Authentication**: Checking if a user is logged in
*   **Logging**: Recording every request that hits the server
*   **Parsing**: Converting incoming data (like JSON) into objects

**Example:** Middleware is like a security checkpoint at an airport: every passenger (request) must pass through it to be scanned and verified before reaching the boarding gate (the final route).

---

## Request & Response

The Request (req) represents the **incoming HTTP request** (query strings, parameters, body, HTTP headers), and Response (res) is the **HTTP response sent back** to the client.
Handling these objects is the core of any server-side logic in Express.

**Example:** Request and Response are like a conversation at a restaurant: you give the waiter your order (Request), and the waiter brings your food (Response).

---

## Template Engines / Static Files

Express can **serve static files** like images, CSS, and JavaScript, or use **template engines** to generate HTML dynamically.
This allows the server to deliver a complete frontend experience to the user's browser.

**Example:** Serving static files is like a vending machine: you press a button and get exactly what's inside. Using a template engine is like a custom pizza shop: they use a base but add your specific toppings before serving.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'What is Middleware in Express?',
                            options: ['Software that sits between the OS and App', 'Functions that execute during the request lifecycle', 'A database', 'A frontend framework'],
                            correct: 1,
                            explanation: 'Middleware functions have access to the request and response objects and can modify them or end the cycle.'
                        },
                        {
                            question: 'How do you send a JSON response in Express?',
                            options: ['res.json({...})', 'res.send("Hi")', 'return {...}', 'console.log'],
                            correct: 0,
                            explanation: 'res.json() sends a JSON response with the correct Content-Type header.'
                        },
                        {
                            question: 'Which method is used to handle GET requests?',
                            options: ['app.post', 'app.get', 'app.fetch', 'app.delete'],
                            correct: 1,
                            explanation: 'app.get() routes HTTP GET requests to the specified callback function.'
                        }
                    ]
                },
                {
                    id: 'mongodb-mastery',
                    title: 'MongoDB (NoSQL)',
                    content: `
## MongoDB

MongoDB is a **source-available cross-platform document-oriented database program**.
Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

**Example:** MongoDB is like a digital filing cabinet where you can throw in any type of folder (document) without having to resize the drawer every time you add a new field.

---

## Documents & Collections

In MongoDB, **Documents are the basic unit of data**, stored as BSON (Binary JSON). **Collections are groups of documents**, analogous to tables in relational databases.
Documents don't require a predefined structure, allowing for high flexibility.

**Example:** A Collection is like a library shelf labeled "Science Fiction," and a Document is a specific book on that shelf.

---

## Scalability (Sharding)

MongoDB is designed for **horizontal scaling**, meaning you can add more servers to handle increased load (Sharding).
This is different from vertical scaling, where you have to buy a bigger, more expensive individual server.

**Example:** Vertical scaling is like trying to make a single chef cook 1000 meals (eventually they break); Horizontal scaling is like hiring 10 more chefs to share the work.

---

## Querying

MongoDB provides a **rich query language** that allows you to search for data based on fields, ranges, and even geographic locations.
It uses a JSON-like syntax for filters, making it intuitive for JavaScript developers.

**Example:** Querying is like using the "Filter" button on a shopping website to show only "Blue" and "Size Large" items.

---

## Indexing

Indexes **improve the speed of data retrieval operations** on a database table at the cost of additional writes and storage space.
Without indexes, MongoDB must scan every document in a collection to find matches.

**Example:** An index is like the index at the back of a textbook: instead of reading all 500 pages to find "Oxygen," you look up the word and go directly to the page.

---

## Schema-less Flexibility

The **lack of a rigid schema** allows you to evolve your data model quickly as requirements change.
You can add new fields to new documents without affecting existing data in the same collection.

**Example:** Schema-less flexibility is like a social media profile: some people fill out their "hometown" and "bio," while others leave them blank. The database doesn't care.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'What format does MongoDB use to store data internally?',
                            options: ['CSV', 'BSON (Binary JSON)', 'XML', 'Plain Text'],
                            correct: 1,
                            explanation: 'While appearing as JSON, MongoDB stores data in BSON (Binary JSON) for efficiency.'
                        },
                        {
                            question: 'What is a "Collection" in MongoDB?',
                            options: ['A single data point', 'A grouping of documents', 'A backup', 'A query'],
                            correct: 1,
                            explanation: 'A collection is a grouping of documents, similar to a table in SQL.'
                        },
                        {
                            question: 'What is the primary benefit of horizontal scaling?',
                            options: ['Saves electricity', 'Easier to backup', 'Adds more servers to share the load', 'Makes code simpler'],
                            correct: 2,
                            explanation: 'Horizontal scaling (sharding) allows you to spread data across many cheap servers instead of one expensive one.'
                        }
                    ]
                },
                {
                    id: 'mongoose-mastery',
                    title: 'Mongoose (ODM)',
                    content: `
## Mongoose

Mongoose is an **Object Data Modeling (ODM) library for MongoDB and Node.js**.
It provides a straight-forward, schema-based solution to model your application data, handling validation, type casting, and query building.

**Example:** Mongoose is like a "Customs Officer" for your database: MongoDB allows anything, but Mongoose checks the bags (data) to make sure they follow the rules before letting them in.

---

## Schemas & Models

A **Schema defines the structure of the document**, default values, and validators. A **Model is a compiled version of the schema** that allows you to interact with the database (create, read, etc.).

**Example:** A Schema is a blueprint for a car; a Model is the factory that can produce thousands of those specific cars.

---

## Validation

Validation is **built-in logic to ensure data is "clean"** before it's saved. You can force fields to be required, check for minimum lengths, or use custom regex.

**Example:** Validation is like a "Required Field" star (*) on a job application: you can't submit the form until you provide your phone number.

---

## Middleware (Pre/Post Hooks)

Mongoose middleware allow you to **run functions before or after specific operations** (like saving or deleting). This is useful for hashing passwords or logging changes.

**Example:** Pre-save middleware is like checking the stove is off before you leave the house; Post-save is like sending a text saying "I've left!" after you close the door.

---

## Population (Relationships)

Population allows you to **reference documents in other collections** and automatically "join" them during a query. This is MongoDB's way of handling data relationships.

**Example:** Population is like a "Cite" in a book: instead of printing an entire encyclopedia entry, the book says "See Page 12" (ID), and Mongoose automatically goes and gets that page for you.

---

## Query Building

Mongoose provides an **elegant, chainable API** for searching, sorting, and updating data. It makes complex MongoDB queries much easier to read and write.

**Example:** Query building is like giving a specific order to a personal shopper: "Find me shoes, size 10, under $50, sorted by newest."
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'What is the difference between a Schema and a Model?',
                            options: ['No difference', 'Schema is the blueprint, Model is the tool to interact with data', 'Model is the blueprint, Schema is the data', 'Schema is for SQL, Model is for NoSQL'],
                            correct: 1,
                            explanation: 'The Schema defines the shape of the data; the Model is the wrapper that gives you methods like .find() or .save().'
                        },
                        {
                            question: 'Which Mongoose feature would you use to hash a password before saving it?',
                            options: ['Validation', 'Pre-hook Middleware', 'Population', 'Indexing'],
                            correct: 1,
                            explanation: 'Pre-save middleware (.pre("save")) is the standard way to hash passwords before they hit the database.'
                        },
                        {
                            question: 'What does .populate() do?',
                            options: ['Adds fake data to the database', 'Replaces an ID with the actual document it points to', 'Deletes all data', 'Increases performance'],
                            correct: 1,
                            explanation: 'Population allows you to reference documents in other collections and automatically join them during a query.'
                        }
                    ]
                },
                {
                    id: 'rest-api-mastery',
                    title: 'REST API Design',
                    content: `
## REST API Design

REST (Representational State Transfer) is an **architectural style for designing networked applications**.
It relies on a stateless, client-server communication protocol, almost always HTTP.

**Example:** A REST API is like a menu at a restaurant: it provides a standardized way for you (the client) to request specific items from the kitchen (the server).

---

## Uniform Interface

REST APIs use a **uniform interface** with standard HTTP verbs (GET, POST, PUT, DELETE) to perform actions on resources.
This makes the API predictable and easy for other developers to understand and use.

**Example:** Standard HTTP verbs are like the controls in a car: "Gas" always means go, and "Brake" always means stop, regardless of the brand.

---

## Resources (Nouns)

In REST, **everything is a resource**, and resources are identified by URIs (Uniform Resource Identifiers).
Resource names should be nouns (e.g., /users, /orders) rather than verbs.

**Example:** A Resource is like a specific book in a library, identified by its unique call number (URI).

---

## Statelessness

Statelessness means that **each request from a client must contain all the information necessary to understand and complete the request**.
The server does not store any session state about the client between requests.

**Example:** Statelessness is like a drive-thru window: the worker doesn't remember who you are from yesterday; you must give your full order every single time.

---

## Status Codes

REST APIs use **HTTP Status Codes** to inform the client about the result of their request.
Common codes include 200 (Success), 404 (Not Found), and 500 (Server Error).

**Example:** Status codes are like the "Order Ready" board at a fast-food place: "Number 42" means success, while a blank board might mean they're still working on it.

---

## Idempotency

Idempotency means that **performing the same operation multiple times has the same effect as performing it once**.
GET, PUT, and DELETE should be idempotent, while POST is typically not.

**Example:** An idempotent operation is like a "Light Switch": if the light is already ON, flipping it to ON again changes nothing.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'Which HTTP method is used to CREATE a new resource?',
                            options: ['GET', 'PUT', 'POST', 'DELETE'],
                            correct: 2,
                            explanation: 'POST is the standard HTTP method used to create new resources.'
                        },
                        {
                            question: 'What status code means "Not Found"?',
                            options: ['200', '404', '500', '301'],
                            correct: 1,
                            explanation: '404 Not Found indicates that the server cannot find the requested resource.'
                        },
                        {
                            question: 'True or False: In REST, the URL should contain verbs like /getUsers.',
                            options: ['True', 'False'],
                            correct: 1,
                            explanation: 'False. RESTful URLs should represent Resources (Nouns) like /users, while the HTTP Method determines the action.'
                        }
                    ]
                },
                {
                    id: 'client-server-arch',
                    title: 'Client-Server Architecture',
                    content: `
## Client-Server Architecture

Client-Server architecture is a **distributed application structure that partitions tasks between providers (servers) and service requesters (clients)**.
The client initiates communication, while the server waits for requests and provides the appropriate response.

**Example:** Client-Server architecture is like a "Customer and a Banker": the customer (client) asks to withdraw money (request), and the banker (server) verifies the ID and hands over the cash (response).

---

## Request-Response Cycle

The **Request-Response cycle** is the fundamental communication pattern where a client sends a message (request) to a server, and the server returns a message (response) in return.
This cycle happens every time you load a webpage, click a button, or submit a form.

**Example:** The Request-Response cycle is like "Ordering Pizza": you call the shop (Request), and they deliver the pizza to your door (Response).

---

## Separation of Concerns

**Separation of Concerns** means that the client handles the presentation and user interface, while the server handles the data storage, business logic, and security.
This allows both parts to be developed, updated, and scaled independently.

**Example:** Separation of Concerns is like a "Stage Play": the actors (client) worry about their performance and costumes, while the stagehands (server) worry about the lighting, sound, and scenery.

---

## Server-Side Validation

**Server-side validation** is the process of checking user input on the server before processing it.
Even though clients might have validation, it is critical on the server for security because client-side code can be bypassed or modified by users.

**Example:** Server-side validation is like a "Passport Control": even if you tell the airline you have a visa (client-side), the border agent checks the actual government database (server-side) to be sure.

---

## Scalability

**Scalability** refers to the ability of the server to handle an increasing number of clients or requests by adding more resources (CPU, RAM, or more servers).
Architectures like microservices allow specific parts of the server to scale independently.

**Example:** Scalability is like a "Grocery Store" opening more checkout lanes when the line gets too long to keep things moving fast.

---

## Security (Authorization)

While Authentication checks "Who are you?", **Authorization** checks "What are you allowed to do?".
The server ensures that a client only accesses data or performs actions that they are permitted to according to their role or permissions.

**Example:** Security is like a "Hotel Key Card": you can use it to enter YOUR room, but it won't let you into the manager's office or someone else's room.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'Where does the database usually live?',
                            options: ['Client side', 'Server side', 'Nowhere', 'In cache'],
                            correct: 1,
                            explanation: 'For security and centralization, the database is accessed via the Server (Backend).'
                        },
                        {
                            question: 'Can a Client trust data sent from the User?',
                            options: ['Yes, always', 'No, never', 'Only on Sundays'],
                            correct: 1,
                            explanation: 'Client-side code can be modified by the user, so the Server must always validate input.'
                        },
                        {
                            question: 'What connects the Client and Server?',
                            options: ['The Database', 'HTTP requests / The Network', 'CSS', 'HTML'],
                            correct: 1,
                            explanation: 'They communicate over the network using protocols like HTTP.'
                        }
                    ]
                },
            ]
        },
        {
            id: 'production-advanced',
            title: 'Mastery: Architecture, Security & Production',
            category: 'web-dev',
            icon: '🚀',
            description: 'Architect for scale, master advanced security, and deploy like a professional engineer.',
            estimatedTime: '30 hours',
            topics: [
                {
                    id: 'local-database-dexie',
                    title: 'Client Storage: IndexedDB & Dexie.js',
                    content: `
## Client-Side Storage: IndexedDB & Dexie.js

IndexedDB is a **transactional, object-oriented database system built into all modern browsers**.
It allows for storing large amounts of structured data, including files and blobs, significantly exceeding the storage limits of LocalStorage.

**Example:** IndexedDB is like having a private library in your basement: you can store thousands of books (data), catalog them by genre (index), and find exactly what you need without leaving home.

---

## Large Volume Storage

Unlike LocalStorage which is limited to ~5MB, IndexedDB can store **hundreds of megabytes or even gigabytes of data**, depending on the available disk space on the user's device.
This makes it ideal for offline-heavy applications and complex data management.

**Example:** Large volume storage is like switching from a single kitchen drawer (LocalStorage) to an entire commercial pantry (IndexedDB).

---

## Object Stores

IndexedDB stores data as **key-value pairs in Object Stores**, which are similar to tables in relational databases.
Each store can contain complex JavaScript objects, and you don't need a rigid schema for every item.

**Example:** An Object Store is like a "Cabinet for Documents": you create a cabinet for "Users" and another for "Messages," and each one holds specific types of folders.

---

## Indexed Searches

You can create **Indexes on specific properties** of your objects to perform fast searches without scanning every record.
This significantly improves performance when querying large datasets.

**Example:** An Index is like the "Search Bar" in your email: instead of reading every email to find "Meeting," you type the word and get results instantly.

---

## Transactions

All operations in IndexedDB happen within **Transactions**, ensuring data integrity.
If an error occurs during a multi-step operation, the transaction is rolled back, preventing partial data writes or corruption.

**Example:** A Transaction is like "Buying a House": you don't give the money until you get the keys, and you don't get the keys until the money is transferred. Both happen together, or not at all.

---

## Dexie.js Wrapper

Dexie.js is a **minimalist wrapper around IndexedDB** that provides a much simpler, promise-based API.
It handles the complexity of the native API while adding features like observables and easier schema management.

**Example:** Dexie.js is like using an "Automatic Transmission" in a car: you get where you're going just as well as manual, but without having to worry about shifting gears (callback hell) yourself.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'What problem does Dexie.js solve?',
                            options: ['It makes the browser faster', 'It simplifies the complex API of IndexedDB', 'It replaces the backend server', 'It cleans the code'],
                            correct: 1,
                            explanation: 'Dexie provides a simple, robust wrapper around the native IndexedDB API, which is known for being verbose and complex.'
                        },
                        {
                            question: 'How do you define a schema in Dexie?',
                            options: ['You write SQL queries', 'You define stores in the version() method', 'You dont need a schema', 'In HTML'],
                            correct: 1,
                            explanation: 'Schemas (stores) are defined in the db.version().stores() method.'
                        },
                        {
                            question: 'Is Dexie.js a database itself?',
                            options: ['Yes', 'No, it\'s a wrapper for IndexedDB', 'It is a cloud service', 'It is an OS'],
                            correct: 1,
                            explanation: 'Dexie is a wrapper library that interacts with the browser\'s built-in IndexedDB.'
                        }
                    ]
                },
                {
                    id: 'offline-first-architecture',
                    title: 'Offline-First Architecture & PWAs',
                    content: `
## Offline-First Architecture & PWAs

Offline-First is a **design philosophy that ensures applications remain usable without a constant network connection**.
A Progressive Web App (PWA) uses modern web capabilities to deliver an app-like experience, including offline support.

**Example:** Offline-first is like having a "Digital Notebook": you can write in it anytime (offline), and it only syncs to the cloud when you happen to be in a WiFi zone.

---

## Service Workers

A Service Worker is a **proxy that sits between the browser and the network**, capable of intercepting requests and serving cached content.
It is the heart of any PWA, enabling offline functionality, background sync, and push notifications.

**Example:** A Service Worker is like a "Personal Assistant": when the network is down, the assistant gives you the copy they saved earlier instead of letting you wait for the original.

---

## Caching Strategies

Caching strategies determine **how to serve content when both cache and network are available**. Common patterns include "Cache First" (for speed) or "Network First" (for fresh data).
Managing these correctly ensures a smooth user experience regardless of signal strength.

**Example:** A caching strategy is like a "Smart TV": it saves the last episode so you can start watching instantly, but checks for updates in the background.

---

## Sync Queue

A Sync Queue is a **list of user actions stored locally while offline**, ready to be replayed to the server once connection is restored.
This ensures that user work (like posting a comment) is never lost due to a spotty connection.

**Example:** A Sync Queue is like a "Mailbox": you can drop letters in day or night, and the mail carrier picks them up and delivers them as soon as they arrive on their shift.

---

## Conflict Resolution

Conflict Resolution handles **what happens when data is edited in two places simultaneously** (e.g., offline on a phone and online on a laptop).
Common strategies include "Last Write Wins" or manual merging of changes.

**Example:** Conflict Resolution is like "Shared Document Editing": if two people change the same sentence, the system must decide which change to keep or ask you to combine them.

---

## App Manifest

The Web App Manifest is a **JSON file that tells the browser how your PWA should look and behave** when installed on a home screen.
It includes the app name, icons, theme colors, and startup behavior.

**Example:** An App Manifest is like a "Business Card": it tells everyone your name, what you look like (icon), and how to reach you (start URL).
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'In an offline-first app, where is data saved first?',
                            options: ['The Cloud Server', 'The Local Device (IndexedDB/LocalStorage)', 'It is discarded', 'In RAM only'],
                            correct: 1,
                            explanation: 'Data is always persisted to local storage first ensuring the user never loses work due to connectivity issues.'
                        },
                        {
                            question: 'What allows an app to detect if it has internet?',
                            options: ['navigator.onLine', 'window.hasWifi', 'Ping command', 'Google it'],
                            correct: 0,
                            explanation: 'navigator.onLine is the browser API that returns a boolean indicating connectivity.'
                        },
                        {
                            question: 'What is a "Sync Queue"?',
                            options: ['A line of people', 'A list of actions stored locally waiting to be sent to the server', 'A slower internet mode', 'A database error'],
                            correct: 1,
                            explanation: 'A sync queue holds mutation requests (creates/updates) that need to be replayed to the server once connection is restored.'
                        }
                    ]
                },
                {
                    id: 'advanced-security-jwt',
                    title: 'Advanced Security: JWT & Resilience',
                    content: `
## Advanced Security: JWT & Resilience

Security is the practice of **protecting information and systems from unauthorized access**.
In modern web dev, this involves identity verification (Authentication) and permission control (Authorization).

**Example:** Security is like a "Bank Vault": it uses multiple layers (ID checks, keys, combinations) to ensure only the right person gets access to the money.

---

## JWT (JSON Web Tokens)

A JWT is a **compact, URL-safe means of representing claims to be transferred between two parties**.
It acts as a digital ID card that the client presents to the server to prove their identity without needing a session database.

*   **Payload**: The data stored in the token (e.g., User ID)
*   **Signature**: A cryptographic verification that the token wasn't tampered with

**Example:** A JWT is like a "Hotel Key Card": it has your room number programmed (Payload) and is signed by the hotel (Signature). It works for your stay without the hotel having to remember your face every time you enter.

---

## Stateless Authentication

Stateless Authentication means the **server does not need to store session information**.
The token itself contains all the evidence needed to verify a user, allowing servers to scale easily and handle millions of users efficiently.

**Example:** Stateless Authentication is like a "Ticket for a Concert": the guard doesn't need to know who you are; they just need to see a valid, authentic ticket.

---

## Hashing (Passwords)

Hashing is the process of **converting a password into a fixed-length string of characters** using a mathematical algorithm (like bcrypt).
It is one-way, meaning you can't "reverse" a hash to get the original password, protecting users if the database is leaked.

**Example:** Hashing is like "Turning a Fruit into a Smoothie": you can't turn the smoothie back into the original pieces of fruit, but you can verify it's the right fruit by the taste.

---

## CSRF & XSS Prevention

**CSRF (Cross-Site Request Forgery)** and **XSS (Cross-Site Scripting)** are common web attacks.
Prevention involves using "Secure Cookies," "Content Security Policies," and "Input Sanitization" to block malicious scripts and fake requests.

**Example:** XSS Prevention is like having a "Guard at the Door": they check that nobody is trying to bring a dangerous "script" (weapon) into the building.

---

## HTTPS (Encryption)

HTTPS ensures that **data transmitted between the client and server is encrypted**.
This prevents "Man-in-the-middle" attacks where hackers try to intercept sensitive info like passwords or credit card numbers.

**Example:** HTTPS is like sending a "Locked Briefcase" through the mail: even if someone steals it, they can't see what's inside without the key.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'What are the two main parts of a JWT that we use to verify it?',
                            options: ['Username and Password', 'Payload and Signature', 'Header and Footer', 'Cookie and Session'],
                            correct: 1,
                            explanation: 'The Payload contains the data, and the Signature proves the token hasn\'t been modified.'
                        },
                        {
                            question: 'Why should you NEVER store plain-text passwords?',
                            options: ['It takes up too much space', 'If the database is hacked, every user\'s password is exposed', 'Passwords are too long', 'Users prefer hashes'],
                            correct: 1,
                            explanation: 'Hashing ensures that even if a hacker gets the database, they don\'t get the actual passwords.'
                        },
                        {
                            question: 'What is the "Stateless" benefit of JWT?',
                            options: ['It makes the app faster', 'The server doesn\'t need to store login sessions in a database', 'It works without internet', 'It deletes the user data'],
                            correct: 1,
                            explanation: 'The server can verify the user just by looking at the token, which saves database lookups and memory.'
                        }
                    ]
                },
                {
                    id: 'mobile-capacitor-native',
                    title: 'Mobile Apps with Capacitor',
                    content: `
## Mobile Apps with Capacitor

Capacitor is an **open-source native runtime for building Web Native apps**.
It allows you to use standard web technologies (HTML, CSS, JavaScript) to build cross-platform apps that run natively on iOS, Android, and the web.

**Example:** Capacitor is like a "Language Translator" for your web app: it takes your JavaScript instructions and translates them into the native languages of iOS and Android so the phone's hardware understands what to do.

---

## Cross-Platform Runtime

Capacitor provides a **consistent set of web-focused APIs** that allow your app to stay as close to web standards as possible while still having access to native device features.
This means you can write your code once and deploy it across multiple platforms without major changes.

**Example:** A cross-platform runtime is like a "Master Key" that fits into different types of locks (iOS, Android, Web); the key is the same, but it opens every door.

---

## Native Bridge

The **Native Bridge** is the communication layer that allows JavaScript code in the WebView to talk to native code in the host OS.
This enables access to hardware like the camera, GPS, and accelerometer through a simple, promise-based API.

**Example:** The Native Bridge is like a "Walkie-Talkie" between two people who speak different languages: it allows the web side and the phone side to send messages back and forth instantly.

---

## Capacitor Plugins

**Plugins** are modular units of code that provide access to specific native features.
Capacitor has a rich ecosystem of official and community plugins, and you can even write your own custom native code if a plugin doesn't exist.

**Example:** Plugins are like "Apps on your Phone": your phone (the bridge) can do basic things, but you install specific apps (plugins) to add new abilities like photo editing or navigation.

---

## WebView Performance

Capacitor apps run inside a **WebView**, which is essentially a browser window without the address bar.
Because it uses the latest system browsers (WKWebView on iOS, Chrome on Android), performance is near-native for most application types.

**Example:** A WebView is like a "Picture Frame" for your web app: the frame (native container) sits on the wall (mobile OS), but what you see inside is the actual painting (web content).

---

## Deployment to Stores

Capacitor simplifies the process of **preparing your app for the Apple App Store and Google Play Store**.
It generates native project files (Xcode and Android Studio) that you can build and sign using standard platform tools.

**Example:** Deployment is like "Graduation Day": after building and testing your app, it finally goes out into the real world (The App Store) for everyone to see and use.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'Capacitor allows you to:',
                            options: ['Run Python on the phone', 'Package a web app as a native iOS/Android app', 'Create a database', 'Hack phones'],
                            correct: 1,
                            explanation: 'Capacitor provides the runtime to wrap web technologies into native apps.'
                        },
                        {
                            question: 'Can Capacitor access native device features like the Camera?',
                            options: ['Yes', 'No', 'Only on Sundays', 'Only with root'],
                            correct: 0,
                            explanation: 'Yes, via Capacitor Plugins.'
                        },
                        {
                            question: 'Is Capacitor used for the Backend or Frontend?',
                            options: ['Backend', 'Frontend (Mobile Runtime)', 'Database', 'None'],
                            correct: 1,
                            explanation: 'It is a frontend tool for deploying web apps to mobile.'
                        }
                    ]
                },
                {
                    id: 'devops-ci-cd-hosting',
                    title: 'Engineering DevOps: CI/CD',
                    content: `
## Engineering DevOps: CI/CD

CI/CD stands for **Continuous Integration and Continuous Deployment**.
It is a method of frequently delivering apps to customers by introducing automation into the stages of app development.

**Example:** CI/CD is like an "Automatic Car Wash": you drive your car (code) in, and it gets scrubbed (tested), dried (built), and polished (deployed) without you having to lift a finger.

---

## Continuous Integration (CI)

Continuous Integration is the practice of **merging all developer working copies to a shared mainline several times a day**.
It involves automated building and testing of the code to catch integration errors early.

**Example:** Continuous Integration is like a "Quality Inspector" at a toy factory: they check every single toy as it comes off the line to make sure it's built correctly before it goes into the box.

---

## Continuous Deployment (CD)

Continuous Deployment is the practice of **automatically releasing code changes to production** after they pass the automated testing phase.
This allows for a fast feedback loop and rapid delivery of new features and bug fixes.

**Example:** Continuous Deployment is like a "Vending Machine": as soon as the factory makes a snack, it's immediately available for you to buy and eat.

---

## Automated Testing

Automated testing involves **running a suite of tests (Unit, Integration, E2E) every time code is pushed**.
This ensures that "regressions" (new bugs in old features) are caught before they ever reach the user.

**Example:** Automated testing is like a "Building Inspector": they check the plumbing, electricity, and foundation of a house every time a new room is added to make sure it won't fall down.

---

## Build Pipelines

A Build Pipeline is a **set of automated steps that code goes through from a repository to production**.
Common tools for pipelines include GitHub Actions, Jenkins, and GitLab CI.

**Example:** A Build Pipeline is like a "Professional Chef's Kitchen": the ingredients (code) go from prepping (install), to cooking (build), to plating (deploy) in a specific, repeatable order.

---

## Version Control (Git)

Version Control is the **foundation of CI/CD**, allowing teams to track changes, collaborate on branches, and trigger automated workflows on specific events (like a push or pull request).

**Example:** Version Control is like "Google Docs for Code": it keeps track of who changed what and when, and lets you go back to an older version if you make a mistake.
`,
                    examples: [],
                    quiz: [
                        {
                            question: 'What does CI stand for?',
                            options: ['Code Insertion', 'Continuous Integration', 'Computer Intelligence', 'Code Inspection'],
                            correct: 1,
                            explanation: 'Continuous Integration is the practice of automating the integration of code changes from multiple contributors.'
                        },
                        {
                            question: 'What is the main goal of a Pipeline?',
                            options: ['To make coding harder', 'To automate the process of testing and deploying code', 'To write code for you', 'To use more RAM'],
                            correct: 1,
                            explanation: 'Pipelines automate the repetitive steps of building, testing, and deploying software.'
                        },
                        {
                            question: 'If a test fails in the pipeline, what usually happens?',
                            options: ['The deployment is blocked/stopped', 'The app deploys anyway', 'The code deletes itself', 'Nothing'],
                            correct: 0,
                            explanation: 'A failed test typically stops the pipeline to prevent broken code from reaching production.'
                        }
                    ]
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
## Operating Systems 101

An Operating System (OS) is the **primary software that manages computer hardware and software resources**.
It provides common services for computer programs, acting as an intermediary between the user and the computer hardware.

**Example:** An Operating System is like a "Manager in a Restaurant": it ensures the kitchen (hardware) has what it needs to cook the food (software) and serves it to the customers (users) efficiently.

---

## The Kernel

The Kernel is the **core of the operating system**, having complete control over everything in the system.
It is the first program loaded on startup and manages hardware interactions and memory allocation.

**Example:** The Kernel is like the "Brain" of the computer: it processes all signals and tells the rest of the body (hardware) exactly how to behave.

---

## Processes vs. Threads

A **Process** is an instance of a computer program that is being executed, while a **Thread** is the smallest unit of execution within a process.
Processes have their own memory space, whereas threads within the same process share that memory.

**Example:** A Process is like a "Construction Project"; a Thread is one "Worker" at that site. Multiple workers (threads) can work together on the same project (process).

---

## Memory Management

Memory management is the process of **controlling and coordinating computer memory**, assigning portions called blocks to various running programs.
The OS ensures that one process doesn't interfere with another's memory space.

**Example:** Memory management is like a "librarian" who decides exactly which shelf each book should go on so they don't get lost or mixed up.

---

## File Systems

A File System is the **method and data structure that an operating system uses to control how data is stored and retrieved**.
Without a file system, information placed in a storage medium would be one large body of data with no way to tell where one piece ends and the next begins.

**Example:** A File System is like a "Filing Cabinet" with labeled folders: it organizes data so you can find "Tax-2023.txt" without looking through every document in the house.

---

## User Interface (CLI/GUI)

The User Interface is the **space where interactions between humans and machines occur**.
Users interact with the OS through either a Graphical User Interface (GUI) like Windows/macOS or a Command Line Interface (CLI) like Terminal.

**Example:** A GUI is like the "Touchscreen" on a soda machine; a CLI is like the "Secret Code" a repairman types in to get to the internal settings.
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
## Networking Basics

Networking is the **practice of connecting computers together** to share resources and information.
It forms the foundation of the modern internet, allowing devices across the globe to communicate instantly.

**Example:** Networking is like a "Global Postal Service": it ensures that when you send a message, it gets addressed correctly and delivered to the right house (computer) anywhere in the world.

---

## IP Addresses

An **IP (Internet Protocol) Address** is a unique numerical label assigned to each device connected to a computer network.
It identifies the device and specifies its location on the network.

**Example:** An IP Address is like your "Physical Home Address": people use it to send you mail, and without it, the delivery person wouldn't know where you live.

---

## DNS (Domain Name System)

DNS is the **phonebook of the internet**, translating human-friendly names (like google.com) into numerical IP addresses.
This allows us to navigate the web without having to memorize long strings of numbers.

**Example:** DNS is like the "Contacts List" on your phone: you click on "Mom" (Domain Name), and the phone automatically dials her number (IP Address).

---

## Protocols (HTTP/TCP/UDP)

Protocols are **sets of rules that determine how data is transmitted** across a network.
Standard protocols like HTTP (web), TCP (reliable), and UDP (fast) ensure that different devices can speak the same language.

**Example:** Protocols are like "Etiquette Rules" at a dinner party: everyone knows they should use a fork and wait their turn to speak so the conversation flows smoothly.

---

## Packet Switching

Packet Switching is the **process of breaking data down into small "packets"** before sending them over a network.
Each packet travels independently and is reassembled at the destination, allowing for efficient use of network capacity.

**Example:** Packet Switching is like "Mailing a LEGO Set": instead of sending the whole built model in one giant box, you take it apart into small bags and mail them separately.

---

## Client-Server Communication

Client-Server communication is the **model where one computer (client) requests a resource** and another computer (server) provides it.
This is the fundamental interaction of the World Wide Web.

**Example:** Client-Server communication is like a "Vending Machine": you press the button (Request), and the machine drops the snack (Response).
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
## Databases 101

A database is an **organized collection of structured information**, or data, typically stored electronically in a computer system.
Databases allow for efficient storage, retrieval, and updating of data at scale.

**Example:** A database is like a "Digital Filing Cabinet": it logically organizes information so you can find exactly what you need in seconds, rather than digging through a pile of papers.

---

## Relational vs. NoSQL

**Relational (SQL)** databases store data in tables with predefined schemas, whereas **NoSQL** databases are more flexible and can store data as documents, graphs, or key-value pairs.
SQL is better for structured data with clear relationships, while NoSQL is better for rapidly changing data.

**Example:** A Relational database is like an "Excel Spreadsheet" with rows and columns; a NoSQL database is like a "Folder full of JSON files."

---

## SQL (Structured Query Language)

SQL is the **standard language for communicating with relational databases**.
It allows you to perform tasks such as updating data on a database, or retrieving data from a database.

**Example:** SQL is like "Talking to a Librarian": you ask "Find me all books by J.K. Rowling," and the librarian (SQL engine) goes and gets them for you.

---

## ACID Properties

ACID is a set of properties (Atomicity, Consistency, Isolation, Durability) that **guarantee that database transactions are processed reliably**.
This is essential for systems where data integrity is critical, such as banking or medical systems.

**Example:** ACID is like "Sending an Email": either the email is sent (Atomicity), or it stays in your outbox; it's never just "half-sent."

---

## Database Indexes

An Index is a **data structure that improves the speed of data retrieval operations** on a database table.
While they make reading data faster, they can make writing data slightly slower because the index must be updated too.

**Example:** A Database Index is like the "Index at the back of a textbook": instead of reading 400 pages, you look up "Photosynthesis" and go straight to page 122.

---

## Data Persistence

Persistence refers to the **characteristic of data that outlives the process that created it**.
Databases provide persistence by saving data to non-volatile storage (like a hard drive) so it isn't lost when the computer is turned off.

**Example:** Data Persistence is like "Writing in Ink": once it's on the paper, it stays there even after you put the pen away.
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
                },
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
## Arrays & Strings (Advanced)

Arrays and Strings are the **most fundamental data structures in computer science**.
They store collections of elements in contiguous memory, allowing for extremely fast access by index.

**Example:** An Array is like a "Row of Lockers": each locker has a number (index), and you can jump straight to locker #42 without checking any others.

---

## Memory Layout

Arrays are stored in **contiguous memory blocks**, meaning all elements are located next to each other in physical RAM.
This layout is what enables O(1) constant-time access, but it also means resizing an array can be expensive as it requires finding a new, larger block of memory.

**Example:** Memory layout is like a "Train": all the cars are connected in a specific order, and to add a new car in the middle, you'd have to disconnect and move everything behind it.

---

## Two Pointers Pattern

The **Two Pointers pattern** involves using two variables to track indices while iterating through an array or string.
This technique is often used to find pairs that sum to a target or to reverse an array in-place with O(N) time and O(1) space.

**Example:** Two Pointers is like "Two people walking towards each other" from opposite ends of a bridge: they meet in the middle, checking every inch of the bridge together.

---

## Sliding Window Pattern

The **Sliding Window pattern** maintain a sub-segment (the window) of an array and moves it across the dataset to solve problems involving contiguous subarrays.
It is highly efficient for finding the maximum sum or the longest substring with specific properties.

**Example:** Sliding Window is like a "Flashlight" shining on a dark wall: you can only see the area the light hits (the window), and you move the light along to see the whole wall bit by bit.

---

## String Builders

In many languages, strings are **immutable**, meaning every concatenation creates a brand-new string.
Using a "String Builder" or an array of characters allows you to build strings more efficiently without wasting memory on temporary objects.

**Example:** A String Builder is like "Building a LEGO Tower": you keep adding bricks to the same tower, rather than building a whole new tower every time you want to make it one brick taller.

---

## Edge Case Handling

Mastering arrays requires identifying **common edge cases** such as empty inputs, single-element arrays, or duplicated values.
Gracefully handling these scenarios prevents runtime errors and ensures your algorithms are robust.

**Example:** Edge case handling is like "Checking the Weather" before a trip: you make sure your car (code) can handle rain, snow, or an empty gas tank before you start driving.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'linked-lists',
                    title: 'Linked Lists',
                    content: `
## Linked Lists

A Linked List is a **linear collection of data elements called nodes**, where each node points to the next.
Unlike arrays, linked lists do not use contiguous memory, allowing for efficient insertions and deletions at any point.

**Example:** A Linked List is like a "Scavenger Hunt": each clue (node) tells you where to find the next one, but you can't jump straight to the final prize without finding all the clues in between.

---

## Nodes & Pointers

Every Linked List is made of **Nodes**, and each node contains two things: the data and a "Pointer" (the address) to the next node in the list.
The list starts with a "Head" pointer and ends when a node points to "null."

**Example:** A Node is like a "Train Car": it holds cargo (data) and has a coupling (pointer) that connects it to the next car.

---

## Insertion & Deletion

Linked Lists excel at **adding or removing nodes** because you only need to update a few pointers, rather than shifting thousands of elements like in an array.
Inserting at the head is a constant-time O(1) operation.

**Example:** Insertion is like "Adding a Link to a Chain": you pull two links apart, hook the new one in, and snap it shut. You don't have to rebuild the whole chain.

---

## Singly vs. Doubly Linked

A **Singly Linked List** only points forward, while a **Doubly Linked List** has pointers to both the next and the previous nodes.
Doubly linked lists allow for easier navigation in both directions at the cost of using slightly more memory.

**Example:** A Singly Linked List is like a "One-Way Street"; a Doubly Linked List is like a "Two-Way Highway" where you can exit and turn around at any time.

---

## Fast & Slow Pointers

The **Fast & Slow Pointers technique** (also known as the Tortoise and Hare) involves two pointers moving through the list at different speeds.
This is a standard way to detect cycles (loops) or to find the exact middle of a list without knowing its length.

**Example:** Fast & Slow pointers are like "A bike and a car" on the same road: if the road is a loop, the car will eventually lap the bike and they will meet again.

---

## Dummy Head Nodes

A **Dummy Head** is a placeholder node placed at the beginning of a list during certain operations.
It simplifies edge cases, such as inserting or deleting the real head of the list, by providing a permanent starting point.

**Example:** A Dummy Head is like the "Starting Line" of a race: it's not part of the race itself, but it gives everyone a clear place to begin so the timing is accurate.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'stacks-queues',
                    title: 'Stacks & Queues',
                    content: `
## Stacks & Queues

Stacks and Queues are **linear data structures that limit how you add and remove data**.
They are used to manage sequences of tasks, history, and search algorithms efficiently.

**Example:** Use a Stack for "Undoing a mistake" and a Queue for "Waiting in line."

---

## Stack (LIFO)

A Stack follows the **LIFO (Last In, First Out)** principle: the last item you add is the first one you take off.
Typical operations are \`push\` (add) and \`pop\` (remove).

**Example:** A Stack is like a "Pile of Plates": you always put new plates on top, and you must take the top one off before you can reach the ones underneath.

---

## Queue (FIFO)

A Queue follows the **FIFO (First In, First Out)** principle: the first item you add is the first one to be removed.
Typical operations are \`enqueue\` (add) and \`dequeue\` (remove).

**Example:** A Queue is like a "Line at a Movie Theater": the person who joined the line first gets their ticket first.

---

## Call Stacks

In programming, the **Call Stack** is a stack data structure that stores information about the active subroutines of a computer program.
When you call a function, it's pushed onto the stack; when it finishes, it's popped off.

**Example:** A Call Stack is like "Interrupted Conversations": you're talking to a friend, your phone rings (push), you answer the phone, then you go back to your friend (pop) where you left off.

---

## Breadth-First Search (BFS)

**BFS** is a graph traversal algorithm that uses a **Queue** to explore nodes layer by layer.
It is the standard way to find the shortest path in an unweighted graph or tree.

**Example:** BFS is like "A Ripple in a Pond": the water spreads out in perfect circles from the center, hitting everything at the same distance at the same time.

---

## Monotonic Stacks

A **Monotonic Stack** is a specialized stack where the elements are always kept in sorted order (either increasing or decreasing).
They are used to solve "next greater element" problems in O(N) linear time.

**Example:** A Monotonic Stack is like a "Line of People grouped by height": as new people join, anyone shorter than them has to leave so the line stays perfectly ordered by height.
`,
                    examples: [],
                    quiz: []
                },
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
## Hash Maps & Sets

Hash Maps (or Dictionaries) are **collections of key-value pairs representing a mapping between unique keys and values**.
They offer near-instantaneous O(1) performance for most operations, making them a "cheat code" for efficiency.

**Example:** A Hash Map is like a "Coat Check": you give them your coat (data), they give you a numbered tag (key), and when you return the tag, they give you your exact coat back instantly.

---

## Hashing Functions

A **Hashing Function** takes a key (like a string or object) and converts it into a specific number (an index).
A good hashing function distributes keys evenly across the available storage to minimize collisions.

**Example:** A Hashing Function is like a "Mail Sorter": it looks at the zip code and instantly knows which bin the letter belongs in.

---

## Collision Handling

A **Collision** occurs when two different keys generate the same hash index.
Databases handle this using techniques like "Chaining" (creating a linked list at that index) or "Open Addressing" (searching for the next empty spot).

**Example:** A Collision is like "Two people arriving at the same reserved seat": the usher has to find a polite way to seat both of them or move one to a nearby empty chair.

---

## Sets

A **Set** is a collection of unique items where no duplicates are allowed.
Sets are internally implemented using hash maps, providing O(1) time complexity for checking if an item exists.

**Example:** A Set is like a "Guest List": you only care if someone is on the list or not; their name doesn't appear twice, and you can check the list very quickly.

---

## Frequency Counting

Hash Maps are the most efficient way to **count the occurrences of items** in a dataset.
By using the item as the key and the count as the value, you can process a million records in a single pass.

**Example:** Frequency Counting is like "Sorting Laundry": you have a pile of socks (keys) and you increment a counter for each type (value) as you fold them.

---

## Time Complexity

The power of Hash Maps lies in their **O(1) Average Time Complexity**.
While arrays require O(N) to find an item, a Hash Map finds it in constant time regardless of how much data you have.

**Example:** Constant time is like "Searching for a word in a Digital Dictionary" vs. "Reading a whole book to find the word": one is instant, the other takes forever.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'trees-bst',
                    title: 'Trees & BST',
                    content: `
## Trees & BST

A Tree is a **hierarchical data structure consisting of nodes connected by edges**.
It is used to represent naturally hierarchical data like file systems, organization charts, and HTML documents (the DOM).

**Example:** A Tree is like a "Family Tree": you have a root ancestor at the top, and branches lead down to children, grandchildren, and so on.

---

## Binary Search Tree (BST)

A **Binary Search Tree** is a specialized tree where every node has at most two children, and the values are specifically ordered: Left child < Parent < Right child.
This structure allows for search, insertion, and deletion in O(log N) logarithmic time.

**Example:** A BST is like a "High-Low Guessing Game": every time you make a guess, you're told "Higher" or "Lower," instantly eliminating half of the remaining possibilities.

---

## Tree Traversals

**Traversal** is the process of visiting every node in a tree in a specific order.
Common methods include "In-Order" (Left-Root-Right, which visits nodes in sorted order for a BST), "Pre-Order," and "Post-Order."

**Example:** Traversal is like "Exploring a Cave System": you follow one tunnel to the end (Depth-First), then backtrack and explore the next one until you've seen every chamber.

---

## Recursion in Trees

Trees are **naturally recursive structures** because every branch of a tree is itself a smaller tree.
Most tree algorithms (like finding the height or searching for a value) are implemented using recursive function calls.

**Example:** Recursion in trees is like "Russian Nesting Dolls": you open one doll (node) to find a smaller but identical version of the doll (child node) inside.

---

## Balanced Trees

A tree is **balanced** when the heights of the left and right subtrees of every node differ by at most one.
Keeping a tree balanced (through algorithms like AVL or Red-Black trees) is critical to maintaining the O(log N) performance.

**Example:** A balanced tree is like a "Well-Trained Bonsai": it grows evenly on all sides. If it grows too much on one side, it becomes lopsided and harder to manage.

---

## Path Finding

Many tree problems involve **finding a specific path** from the root to a leaf or between two nodes.
This requires tracking the history of nodes visited during the traversal to reconstruct the journey.

**Example:** Path finding is like "Following Breadcrumbs": you leave a trail (the call stack) as you go deeper into the forest (the tree) so you can find your way back or explain how you got there.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'graphs-intro',
                    title: 'Graphs',
                    content: `
## Graphs

A Graph is a **collection of nodes (vertices) and the connections (edges) between them**.
Graphs are the most versatile data structure, capable of modeling anything from social networks to flight paths and internet routing.

**Example:** A Graph is like a "Map of the Subway": the stations are the nodes, and the tracks connecting them are the edges.

---

## Adjacency Lists vs. Matrices

Graphs are typically represented in code as an **Adjacency List** (an array where each index contains a list of neighbors) or an **Adjacency Matrix** (a 2D grid of 1s and 0s).
Adjacency lists are generally more memory-efficient for most real-world scenarios.

**Example:** An Adjacency List is like a "Phone Contact List" (who you know); an Adjacency Matrix is like a "Seating Chart" for an entire stadium (everyone's relationship to everyone else).

---

## Graph Traversals (DFS & BFS)

**DFS (Depth-First Search)** explores as far as possible along a branch before backtracking, while **BFS (Breadth-First Search)** explores all neighbors at the current depth before moving to the next level.
Selection depends on whether you're looking for the shortest path (BFS) or exploring every possibility (DFS).

**Example:** DFS is like "Finding the exit to a maze"; BFS is like "A fire alarm sounding": the noise reaches every room on the first floor before moving up to the second.

---

## Topological Sort

**Topological Sort** is a linear ordering of nodes in a directed acyclic graph (DAG) such that for every edge U->V, node U comes before V.
It is commonly used for scheduling tasks with dependencies.

**Example:** Topological Sort is like "Following a Recipe": you have to crack the eggs (Task U) before you can bake the cake (Task V).

---

## Cyclic vs. Acyclic

A **Cycle** occurs when a path through the graph leads back to the starting node.
A graph with no cycles is called "Acyclic," and detecting these cycles is a critical task in preventing infinite loops in systems.

**Example:** A Cyclic graph is like a "Roundabout" on a road; an Acyclic graph is like a "One-Way Street" that eventually leads to a dead-end.

---

## Shortest Paths

Finding the **Shortest Path** between two nodes is a classic graph problem solved by algorithms like BFS (unweighted) or Dijkstra's (weighted).
This technology powers everything from Google Maps to network data packets finding the fastest route to your computer.

**Example:** Finding the shortest path is like "Choosing the fastest route home": you check all the side streets (edges) to avoid traffic and get there in the least time possible.
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
## Binary Search

Binary Search is an **efficient algorithm for finding an item from a sorted list of items**.
It works by repeatedly dividing the search interval in half until the target is found or the interval is empty.

**Example:** Binary Search is like "Looking for a name in a physical Phonebook": you open to the middle, see if the name is before or after that page, and throw away the half you don't need.

---

## Sorted Search

Binary Search **requires the data to be sorted** beforehand.
If the data is unsorted, the algorithm will not work, as it relies on the mathematical certainty that all items to the left are smaller and all items to the right are larger.

**Example:** Sorted Search is like "Finding a house on a numbered street": if the house numbers are in order, you can guess exactly where to stop. If they are random, you have to check every single house.

---

## Divide & Conquer

Binary Search is a classic example of a **Divide and Conquer strategy**.
By breaking the problem (the array) into two smaller subproblems and only solving one of them, it achieves extremely high efficiency.

**Example:** Divide & Conquer is like "Cutting a piece of paper in half" repeatedly: even a giant piece of paper becomes tiny very quickly after a few cuts.

---

## Midpoint Calculation

The most critical step in Binary Search is **calculating the Midpoint**.
To avoid "Integer Overflow" in some languages, it is best practice to use \`left + (right - left) / 2\` rather than \`(left + right) / 2\`.

**Example:** Midpoint calculation is like "Finding the center of a seesaw": if you don't find the exact middle, the balance is off and the search won't be symmetrical.

---

## Search Space

The "Search Space" refers to the **range of possible answers** the algorithm is currently considering.
Binary search can be used for more than just arrays; it can search for the "minimum possible speed" or "maximum possible capacity" in a range of numbers.

**Example:** Search Space is like "Playing Hot or Cold": every time you move, the area where the hidden object could be (the search space) gets smaller.

---

## Time Complexity (O(log N))

Binary Search has a **Logarithmic Time Complexity**, meaning it is incredibly fast even for massive datasets.
Searching a billion items takes only 30 steps, compared to the billion steps required for a linear search.

**Example:** Logarithmic time is like "A Superpower": while a normal person checks one thing at a time, you can check half a billion things in a single blink.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'recursion-backtracking',
                    title: 'Recursion & Backtracking',
                    content: `
## Recursion & Backtracking

Recursion is a **programming technique where a function calls itself** to solve smaller versions of the same problem.
Backtracking is a specialized form of recursion used to find all possible solutions by building them step-by-step and abandoning those that fail.

**Example:** Recursion is like "Standing between two mirrors": you see an image, inside an image, inside an image, each one a smaller version of the original.

---

## Base Case vs. Recursive Case

Every recursive function must have two parts: a **Base Case** (the stopping condition) and a **Recursive Case** (where the function calls itself).
Without a base case, the function would call itself forever, resulting in a "Stack Overflow" error.

**Example:** A Base Case is like the "Ground Floor" of an elevator: you can keep going down (recursive case), but once you hit the lobby (base case), you have to stop and get out.

---

## Stack Frames

When a function calls itself, the computer creates a **Stack Frame** in memory to store that function's variables and current state.
The computer keeps track of these frames in a "Call Stack," which grows deeper with every recursive call.

**Example:** A Stack Frame is like a "Bookmark in a book": you stop where you are to look something up (call another function), and the bookmark lets you come back and finish exactly where you left off.

---

## State Space Trees

Backtracking problems can be visualized as a **State Space Tree**, where each node represents a decision.
The algorithm explores one branch of the tree, and if it hits a "dead end," it backtracks to the previous node to try a different decision.

**Example:** A State Space Tree is like a "Decision Tree in a Choose-Your-Own-Adventure book": if you pick a path that leads to a "Game Over," you go back to the last page and pick the other option.

---

## Pruning

**Pruning** is the process of cutting off branches of the state space tree that cannot possibly lead to a valid solution.
This significantly speeds up backtracking algorithms by avoiding unnecessary calculations.

**Example:** Pruning is like "Looking at a Map": if you want to go North, you don't even bother looking at the roads leading South. You "prune" those options immediately.

---

## Decision Making (Sudoku/N-Queens)

Backtracking is the primary algorithm for solving **constraint-satisfaction problems** like Sudoku or the N-Queens problem.
It places a piece, checks if the rules are still followed, and moves to the next; if it gets stuck, it un-places the piece and tries something else.

**Example:** Backtracking is like "Solving a Jigsaw Puzzle": you try a piece, and if it doesn't fit, you put it back in the box and try another one.
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
## Dynamic Programming (DP)

Dynamic Programming is an **optimization technique for solving complex problems by breaking them into overlapping subproblems**.
By storing the results of subproblems (Memoization), DP avoids redundant calculations and achieves superior performance.

**Example:** DP is like "Writing out a math problem": once you calculate that 5+5=10, you don't calculate it again; you just remember the answer (10) every time you see 5+5 in the future.

---

## Overlapping Subproblems

DP is applicable when a problem can be broken down into **the exact same subproblems multiple times**.
Calculating the Fibonacci sequence is a classic example: calculating \`fib(5)\` requires \`fib(4)\` and \`fib(3)\`, and calculating \`fib(4)\` also requires \`fib(3)\`.

**Example:** Overlapping Subproblems are like "Cooking a multi-course meal": you need "chopped onions" for the soup, the salad, AND the main course. You chop them once and reuse them.

---

## Optimal Substructure

A problem has an **Optimal Substructure** if the overall optimal solution can be constructed from the optimal solutions of its subproblems.
This is the core requirement for building a DP table or performing memoization.

**Example:** Optimal Substructure is like "Building a House": the best house (overall solution) is built by making the best foundation, the best walls, and the best roof (subproblems).

---

## Memoization (Top-Down)

**Memoization** is a technique where you use recursion but store the result of each function call in a cache (often an object or hash map).
Before calculating a value, you check the cache to see if you've already solved it.

**Example:** Memoization is like "Using a Cheat Sheet": you write down the answers to difficult questions as you find them so you don't have to think through the logic again.

---

## Tabulation (Bottom-Up)

**Tabulation** is the iterative approach to DP, where you fill an array (a "table") from the smallest subproblems up to the final solution.
It is often more memory-efficient than recursion because it doesn't use the call stack.

**Example:** Tabulation is like "Building a Brick Wall": you start with the bottom row of bricks and layer them one by one until you reach the top.

---

## State Transition Equations

The "heart" of a DP problem is the **State Transition Equation**, which mathematically describes how the solution to a larger problem is built from smaller ones.
For example, the Fibonacci equation is \`dp[i] = dp[i-1] + dp[i-2]\`.

**Example:** A State Transition Equation is like a "Recipe": it tells you exactly how to combine the ingredients (subproblems) to get the final dish (solution).
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'graph-algos',
                    title: 'BFS & DFS',
                    content: `
## BFS & DFS

BFS (Breadth-First Search) and DFS (Depth-First Search) are the **two fundamental ways to traverse or search through a graph or tree**.
The choice between them depends on the structure of the data and what you are trying to find.

**Example:** BFS/DFS is like "Looking for your keys in a house": do you check every room on the first floor first (BFS), or pick one hallway and follow it to the very end before switching (DFS)?

---

## Breadth-First Search (BFS)

**BFS** uses a **Queue** and explores nodes "layer by layer," starting from the source and moving outward to all neighbors at the same distance.
It is guaranteed to find the shortest path in an unweighted graph.

**Example:** BFS is like "A Gossip spreading in a school": a student tells 3 friends, those 3 friends tell 3 more friends each, and everyone gets the news at the same relative time.

---

## Depth-First Search (DFS)

**DFS** uses a **Stack** (or recursion) and explores "deep before wide," picking a branch and following it until it hits a leaf or a dead end.
It is ideal for exploring all possible paths or detecting cycles in a network.

**Example:** DFS is like "Exploring a cave with a safety rope": you go as deep into one tunnel as possible, and when you can't go further, you pull the rope to backtrack and try the next tunnel.

---

## Shortest Path (unweighted)

Because BFS visits nodes in order of their **distance from the start**, it is the perfect algorithm for finding the "Shortest Path" (fewest edges) between two points.
Modern GPS systems use advanced versions of this to find routes.

**Example:** Shortest path is like "Finding the exit in a crowded room": you look at the people closest to you, then the people behind them, until you see the door.

---

## Cycle Detection

DFS is frequently used to **detect cycles in a directed graph**.
If you encounter a node that is currently being explored in the recursive stack, you have found a loop (a circular dependency).

**Example:** Cycle detection is like "Following a trail in the woods": if you suddenly see your own footprints from an hour ago, you know you are walking in a circle.

---

## Visited Sets

Both BFS and DFS require a **"Visited" tracker** (usually a Hash Set) to prevent the algorithm from entering an infinite loop by visiting the same node twice.
Without it, the algorithm would bounce back and forth between two connected nodes forever.

**Example:** A Visited Set is like "Checking off a list": you mark each house on a map after you've delivered a package there, so you don't accidentally knock on the same door twice.
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
## Scalability & Load Balancing

Scalability is the **ability of a system to handle a growing amount of work** by adding resources.
Load Balancing is the process of distributing that work evenly across multiple servers to prevent any one from becoming overwhelmed.

**Example:** Scalability is like a "Fast Food Restaurant": as more customers arrive, you can either buy a faster stove (Vertical) or hire more cooks and open more stations (Horizontal).

---

## Vertical vs. Horizontal Scaling

**Vertical Scaling (Scale Up)** means adding more power (CPU, RAM) to an existing server, while **Horizontal Scaling (Scale Out)** means adding more servers to the system.
Horizontal scaling is the modern standard because it allows for virtually infinite growth and better reliability.

**Example:** Vertical Scaling is "Buying a bigger truck"; Horizontal Scaling is "Hiring a whole fleet of smaller vans."

---

## Single Point of Failure (SPOF)

A **Single Point of Failure** is a part of a system that, if it fails, will stop the entire system from working.
Good system design involves using "Redundancy" to eliminate these points, ensuring the app stays online even if a server crashes.

**Example:** A SPOF is like "A single engine on a plane": if it dies, the plane falls. Modern planes have multiple engines so they can keep flying even if one fails.

---

## Load Balancing Algorithms

Load Balancers use **Algorithms** to decide which server should handle the next request.
Common methods include "Round Robin" (rotation), "Least Connections" (giving it to the least busy server), and "IP Hashing" (sticky sessions).

**Example:** A Load Balancing algorithm is like a "Hostess at a Busy Restaurant": she looks at the waitstaff and decides which waiter (server) should take the next group of customers.

---

## Health Checks

Load balancers perform **Health Checks** to ensure that servers are still online and responding correctly.
If a server stops responding, the load balancer automatically stops sending traffic to it until it recovers.

**Example:** A Health Check is like a "Pilot's Pre-flight Checklist": you check the systems before take-off to make sure the plane (server) is safe to carry passengers (data).

---

## Elasticity

**Elasticity** is a system's ability to automatically scale resources up or down based on current demand.
In cloud computing (like AWS), this ensures you have enough power for a "Black Friday" rush without paying for idle servers during quiet periods.

**Example:** Elasticity is like "A rubber band": it stretches when you need it to hold something big and shrinks back down when the job is done.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'caching',
                    title: 'Caching Strategies',
                    content: `
## Caching Strategies

Caching is the process of **storing copies of data in a temporary storage location (a Cache)** so that future requests for that data can be served much faster.
It is the single most effective way to improve the performance of a high-traffic web application.

**Example:** Caching is like "Keeping your most-worn shoes by the front door": you could walk all the way to the closet (the database) every time, but having them right there (the cache) saves you time and effort.

---

## Eviction Policies (LRU/LFU)

Because caches have limited space, they must use an **Eviction Policy** to decide which data to delete when they get full.
Common policies include **LRU (Least Recently Used)**, which deletes the oldest item, and **LFU (Least Frequently Used)**, which deletes the item requested the fewest times.

**Example:** LRU is like "cleaning out your fridge": you throw away the leftovers that have been sitting there the longest (least recently accessed) to make room for fresh groceries.

---

## Cache Invalidation

Cache Invalidation is the process of **removing or updating data in the cache** once the original data in the database changes.
"There are only two hard things in Computer Science: cache invalidation and naming things."

**Example:** Cache Invalidation is like "Updating a Menu": if the kitchen runs out of fish, you have to cross it off every menu (the cache) immediately, or customers will try to order something you don't have.

---

## Write-Through vs. Write-Back

**Write-Through** caches update both the cache and the database at the same time, ensuring data is always consistent.
**Write-Back** caches update the cache immediately and update the database later in the background, which is faster but carries a risk of data loss if the cache fails.

**Example:** Write-Through is "Paying with Cash" (instant update); Write-Back is "Using a Credit Card" (the transaction is recorded now, but the actual money moves later).

---

## CDN (Content Delivery Networks)

A **CDN** is a geographically distributed group of servers that work together to provide fast delivery of internet content.
By caching your website's images and videos on servers physically close to the user, you drastically reduce "latency" (lag).

**Example:** A CDN is like "A Chain of Starbucks": rather than flying to Seattle (the origin server) every time you want coffee, you just go to the cafe on your corner ( the CDN edge server).

---

## Distributed Caching (Redis)

A **Distributed Cache** is a cache that is shared across multiple servers, allowing a massive web application to maintain a consistent state.
Redis is the world's most popular distributed cache, offering sub-millisecond response times for millions of users.

**Example:** A Distributed Cache is like "A Public Library": instead of everyone buying their own copy of a book, everyone in the city shares the same centralized collection.
`,
                    examples: [],
                    quiz: []
                },
                {
                    id: 'databases-advanced',
                    title: 'Databases: Scaling',
                    content: `
## Databases: Scaling

Database Scaling involves **growing your data storage capacity while maintaining high performance and availability**.
When a single database server can no longer handle the traffic, you must move to distributed architectures.

**Example:** Database Scaling is like "Upgrading a Local Library": as the town grows, you eventually need to add more shelves, more librarians, and eventually more buildings.

---

## Replication (Master-Slave)

**Replication** involves copying data from one "Master" database to multiple "Slave" (or Read-Replica) databases.
All writes happen on the master, and reads happen on the slaves, allowing the system to handle thousands of users checking their data simultaneously.

**Example:** Replication is like "Newspapers": one person writes the story (The Master), and millions of identical copies (The Slaves) are sent out for everyone to read at the same time.

---

## Sharding (Horizontal Partitioning)

**Sharding** is the process of splitting a single database into several smaller ones, each holding a specific portion of the data (e.g., users A-M on one server, N-Z on another).
This is the ultimate solution for "Big Data" that is too large for any single computer to store.

**Example:** Sharding is like "Using multiple filing cabinets": alphabetical A-L in one, M-Z in the other. If you have too many files for one cabinet, you just buy more and split the files by letter.

---

## CAP Theorem

The **CAP Theorem** states that a distributed system can only provide two out of three guarantees at once: **Consistency** (all see same data), **Availability** (every request gets a response), and **Partition Tolerance** (works despite network errors).
Architects must choose which two are most important for their specific application.

**Example:** CAP is like "The Fast, Cheap, Good Rule": you can have it fast and cheap, but it won't be good. You have to pick your priorities.

---

## Eventual Consistency

In highly distributed systems, data might take a few seconds to update across all servers. This is called **Eventual Consistency**.
The user might see their "old" profile picture for a moment after changing it, but the system will eventually "catch up" and show the right one.

**Example:** Eventual Consistency is like "Mailing a Letter": my friend doesn't know the news yet, but they *eventually* will once the mail is delivered in a few days.

---

## Read vs. Write-Heavy Apps

Applications are often categorized as **Read-Heavy** (like Instagram, where people look at more photos than they post) or **Write-Heavy** (like a Stock Trading platform, where data is constantly changing).
The scaling strategy (Replication vs. Sharding) depends heavily on this balance.

**Example:** Read-Heavy is like "A Bestselling Book" (one person writes, millions read); Write-Heavy is like "A Stock Market ticker" (thousands of trades happening every second).
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
## Software Testing

Software Testing is the **process of verifying that a computer program works as expected and is free of defects**.
A robust testing suite acts as a safety net, allowing developers to change code with confidence that they won't break existing features.

**Example:** Software Testing is like "The Pre-flight Inspection of an Airplane": you check the wings, the engines, and the controls before you take off to ensure a safe journey for the passengers.

---

## Automated Testing Why?

Automated testing replaces **manual, repetitive checks** with code that runs instantly.
This significantly reduces the human error involved in testing and allows for "Continuous Integration," where tests are run every time code is pushed.

**Example:** Automated Testing is like "An Alarm System in a House": it's always running in the background, making sure everything is secure so you don't have to manually check every window every night.

---

## Testing Pyramid

The **Testing Pyramid** is a strategy that suggests having a large number of unit tests at the bottom, a medium number of integration tests in the middle, and a small number of end-to-end (E2E) tests at the top.
This balance ensures that tests are both fast to run and thorough in their coverage.

**Example:** The Testing Pyramid is like "Safety Features in a Car": a thousand small bolts (Unit), the transmission and engine working together (Integration), and a 50mph crash test (E2E).

---

## Unit Testing

**Unit Testing** involves testing the smallest possible "units" of code—typically individual functions or components—completely in isolation.
By "mocking" dependencies, unit tests are extremely fast (milliseconds) and help pinpoint the exact location of a bug.

**Example:** Unit Testing is like "Testing an individual Light Bulb" before you put it into the chandelier: you check it in a simple socket to make sure it glows on its own.

---

## Integration Testing

**Integration Testing** verifies that different parts of your application work correctly when combined.
For example, you might test if your Frontend successfully sends data to your Backend and if the Backend correctly saves it to the Database.

**Example:** Integration Testing is like "Checking the Plumbing in a New House": you turn on the faucet to make sure the water flows from the pipes into the drain without leaking.

---

## End-to-End (E2E) Testing

**E2E Testing** simulates a real user's journey through the entire application, from landing on the homepage to completing a checkout.
Tools like Cypress or Playwright literally open a browser and "click" buttons just like a human would.

**Example:** E2E Testing is like "A Dress Rehearsal for a Play": you run through the entire story from beginning to end, with costumes and lights, to make sure everything is perfect for opening night.
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
## Security Introduction

Software Security is the **practice of protecting applications and user data from malicious attacks and unauthorized access**.
In the modern web, security is not a feature but a fundamental requirement for every developer.

**Example:** Software Security is like "The Vault in a Bank": it doesn't matter how beautiful the lobby is if the money inside isn't safe from thieves.

---

## The CIA Triad

The **CIA Triad** consists of three core principles: **Confidentiality** (only authorized users see data), **Integrity** (data isn't tampered with), and **Availability** (the system stays online).
These principles form the framework for all modern security strategies.

**Example:** The CIA Triad is like "A Sealed Letter": only the recipient should read it (Confidentiality), the stamp shouldn't be broken (Integrity), and the mailman must actually deliver it (Availability).

---

## OWASP Top 10

The **OWASP Top 10** is a standard awareness document for developers, listing the ten most critical web application security risks.
It provides a roadmap for what every developer should protect against, including Injection, Broken Authentication, and Sensitive Data Exposure.

**Example:** The OWASP Top 10 is like "A Neighborhood Watch Bulletin": it tells you which houses are being targeted (vulnerabilities) and which locks are being picked (attacks).

---

## SQL Injection (SQLi)

**SQL Injection** is a vulnerability where an attacker "injects" malicious SQL code into an input field, tricking the database into revealing sensitive information.
Using "Parameterized Queries" (prepared statements) is the primary defense against this common attack.

**Example:** SQL Injection is like "A Thief handing a note to a bank teller" that says, "Give me all the money," but hiding it inside a request to "Open a savings account."

---

## Cross-Site Scripting (XSS)

**XSS** occurs when an attacker injects malicious JavaScript into a website, which then runs in the browser of other users who visit that site.
Sanitizing user input and using modern frameworks that auto-escape data are critical for preventing XSS.

**Example:** XSS is like "Prank Graffiti on a Billboard": someone writes a hidden message on a public sign, and everyone who walks by (the users) sees it and is affected by it.

---

## MFA & Authentication

**Broken Authentication** happens when session management or password systems are weak.
Implementing Multi-Factor Authentication (MFA) and using secure libraries like Passport or Auth0 drastically reduces the risk of account takeovers.

**Example:** MFA is like "A Lockbox that requires both a physical key and a fingerprint": even if someone steals your key (password), they still can't get in without your fingerprint (MFA code).
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
## Software Engineering Roles

The software industry offers a **diverse range of specializations**, each requiring a unique blend of technical skills and creative thinking.
Understanding these roles helps you map out your career path and focus on the technologies that interest you most.

**Example:** Engineering Roles are like "Specialties in Medicine": every doctor knows general anatomy, but a Surgeon (Low-Level C++) does very different work than a Dermatologist (Frontend/UI).

---

## Frontend vs. Backend

**Frontend Engineers** build the part of the app that users see and touch (HTML, CSS, React), while **Backend Engineers** build the "engines" behind the scenes that handle data and servers (Node.js, SQL, APIs).
Most modern apps require both working in perfect harmony.

**Example:** Frontend is "The Dashboard and Seat of a Car"; Backend is "The Engine and Fuel Tank" under the hood.

---

## Full Stack Developer

A **Full Stack Developer** has the skills to work on both the Frontend and the Backend.
They are highly valued in startups because they can build entire features from start to finish without needing assistance from another developer.

**Example:** A Full Stack Developer is like "A Swiss Army Knife": they have a tool for every situation and can handle almost any task on their own.

---

## DevOps & Cloud

**DevOps Engineers** focus on the bridge between software development and IT operations.
They use tools like Docker, Kubernetes, and AWS to automate the "Deployment" process, ensuring that code moves from a developer's computer to the internet safely and quickly.

**Example:** DevOps is like "The Logistics and Shipping Department of a Factory": they don't make the product (the code), but they make sure it gets delivered to the stores (the internet) efficiently.

---

## Interview Preparation

Technical interviews typically involve **Coding Challenges** (LeetCode style) and **System Design Discussions).
Preparing by practicing common patterns like "Two Pointers" or "BFS" is the key to proving your technical competence to hiring managers.

**Example:** Interview Prep is like "Training for a Marathon": you don't just show up on race day; you have to run hundreds of miles (practice problems) over several months to be ready.

---

## The STAR Method (Behavioral)

The **STAR Method** (Situation, Task, Action, Result) is the industry standard for answering "Tell me about a time when..." behavioral questions.
It ensures that your answers are structured, concise, and focused on the positive impact you made.

**Example:** The STAR Method is like "A Legal Brief": it provides clear evidence of what happened, why you were there, what you specifically did, and what the final verdict (the result) was.
`,
                    examples: [],
                    quiz: []
                }
            ]
        }
    ]
};

export default curriculum;
