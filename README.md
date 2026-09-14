# Dev Stack 

Dev Stack is a small React project where you can see a list of web technologies (like React, PostgreSQL, Tailwind, etc.) and add the ones you like to your own stack. It's like a simple list-builder app for tech.
This was made as an assignment to practice React. The technology data comes from a JSON file, not written directly inside the code. The data is shown as cards. When you click "Add to Stack" on a card, it goes into a sidebar. You can remove one item, or remove all items at once. Toast messages show up when you add, remove, or try to add the same thing twice.

## Technologies Used

- React.js
- TypeScript 
- Tailwind CSS and DaisyUI
- React-Toastify
- Vite
- JSON (for the data)

## Features

1. **Technology cards from JSON** — 10-15 technologies loaded from a JSON file and shown in a grid. 3 columns on desktop, 2 on tablet, 1 on mobile. Each card shows icon, badge, category, difficulty, and rating.
2. **Add to stack** — Clicking "Add to Stack" adds the item to the sidebar right away. If you try to add the same one again, it shows a warning instead. After adding, the button becomes "✓ Added to Stack" and gets disabled.
3. **Responsive design** — Navbar stays on top while scrolling and has a hamburger menu on mobile. There is a gradient hero section and a footer. The gradient color is set in one place, so it can be changed easily for the whole site.


## React Questions

**1. What is JSX, and why is it used in React?**

JSX lets us write HTML-like code inside JavaScript. It is used because it is easier to write and read UI code this way, instead of using React.createElement() for everything.

**2. What is the difference between props and state?**

Props are data sent to a component from its parent, and the component cannot change them. State is data that a component keeps for itself and can change using useState.

**3. What does the useState hook do, and where did you use it in this project?**

useState lets a component store a value and update the UI when that value changes. I used it to store the technology list, the items added to the stack, and the loading state.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**

useEffect runs some code after the component renders, like fetching data. I used it to load the JSON data once when the page loads, by giving it an empty dependency array [].

**5. Why does every item in a .map() list need a unique key prop?**

The key helps React know which item is which in a list. This helps React update only the changed item instead of the whole list, and avoids bugs when items are added or removed.

**6. What is conditional rendering? Show one place you used it.**

Conditional rendering means showing different content based on a condition. I used this in the "Your Stack" section — if the stack is empty, it shows a message saying no technology is selected, otherwise it shows the list of added items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

The parent sends data to the child using props, like <TechCard tech={tech} />. To send data back, the parent passes a function as a prop, like onAddToStack, and the child calls that function when needed, for example on a button click.