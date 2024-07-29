# FAQ Component

The FAQ component is a simple and interactive way to display a list of frequently asked questions. It allows users to click on a question to reveal the answer, and click again to hide it. This behavior enhances user experience by keeping the UI clean and informative. User can toggle between dark and light mode.

## Features

- Display a list of FAQs with questions and answers.
- Clicking on a question reveals the answer.
- Clicking again hides the answer.
- The first answer is revealed by default.
- Supports light and dark themes with a toggle button.
- Toggle between dark and light mode

## Requirements

The FAQ component is designed to fulfill the following requirements:

1. **Receive List of Questions**: 
   - The FAQ component should receive a list of questions and answers in a JavaScript object format.
   - Each question from the object should be displayed with an adjacent chevron icon.

2. **Toggle Answers**: 
   - Clicking any question should reveal its corresponding answer.
   - Clicking a question again should hide its answer.
   - The first answer should be revealed by default.

## Installation

To set up the project and use the FAQ component, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/nadia-mm/FAQ.git
    cd FAQ
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Run the tests:

    ```bash
    npm run test
    ```

## DEMO

![](https://github.com/nadia-mm/FAQ/blob/master/gif/demo.gif)

## Resources

- [MaterialUI](https://mui.com/)
- [Vite](https://vitejs.dev/)
