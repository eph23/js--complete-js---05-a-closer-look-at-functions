# 🧠 JavaScript – A Closer Look at Functions

## 📚 Course: The Complete JavaScript Course (by Jonas Schmedtmann)  
📍 Chapter: A Closer Look at Functions  
🎯 Skill Level: Intermediate → Advanced

---

## 🚀 Chapter Overview

This chapter dives deep into the **inner mechanics and capabilities of JavaScript functions**, revealing why functions in JS are **first-class citizens** and how this unlocks powerful coding patterns such as **callbacks**, **higher-order functions**, **closures**, and **method binding**.

It connects theory with real-world use cases, helping you write more efficient, modular, and maintainable code.

---

## 🧠 Key Concepts Covered

### ✅ Default Parameters
- Set default values for function parameters
- Avoids manual checks for `undefined`

### ✅ Argument Passing: Value vs Reference
- Primitives are passed by value
- Objects/arrays are passed by reference

### ✅ First-Class & Higher-Order Functions
- Functions can be stored in variables, passed as arguments, or returned
- Higher-order functions accept or return other functions

### ✅ Callback Functions
- Passing one function into another
- Enables reuse and abstraction (e.g. in event handling or array methods)

### ✅ Functions Returning Functions
- Creates customizable behavior (e.g. greeting factories)
- Forms the foundation for **function currying**

### ✅ The `call`, `apply`, and `bind` Methods
- Control the `this` context in function execution
- Useful for method borrowing and partial application

### ✅ Immediately Invoked Function Expressions (IIFE)
- Run a function immediately after defining it
- Creates a private scope

### ✅ Closures (🔥 Advanced + Interview Gold)
- Functions remember their **lexical environment**
- Enables data encapsulation and partial application
- Used heavily in asynchronous logic and secure data handling

---

## 🔬 Practice Work & Experiments

### 💡 Code Snippets & Mini Challenges
- Booking system using `call`, `bind`, and `apply`
- Poll app with event listener and closure-based counter
- Tax calculator using function currying and partial application
- Timer and counter using IIFE and closure
- Private variables simulation with closures

---

## 🧷 Key Takeaways

- ✅ Functions in JS are first-class objects
- ✅ Callback functions and HOFs improve flexibility & modularity
- ✅ Closures are everywhere (even when not visible)
- ✅ `bind()` helps preserve `this` in event listeners and delayed functions
- ✅ IIFE and closures enable encapsulation in modern JS

---
