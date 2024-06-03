# Password Generator made by Zachary Canlas
Tech Stack:
React
Vite
Typescript
Material UI
Cypress

## Features
- You can generate a password with a length of 4 until 20
- You can check any of the 4 checkboxes to generate a stronger password and this includes: uppercase letters, lowercase letters, numbers and symbols
- Password strength checker above the generate button. This uses regex to check if the generated password has at least one uppercase letters, lowercase letters, numbers and symbols. 
  Too weak = contains 0 to 1 of the conditions
  Weak = contains 2 of the conditions
  medium = contains 3 of the conditions
  strong = contains 4 of the conditions
- e2e tests made with cypress

## Thought Process
I opted not to use Math.random() since it's not cryptographically secure to be used for password generation. I chose to use crypto.getRandomValues() instead.

## Logic of the application
- If any of the checkboxes are checked then I randomly get one character from that set of characters (i.e. uppercase letters, lowercase letters, numbers or symbols) and append them to the string. This is so that it is guaranteed that one of these characters are included in the generated password to fulfill the requirements of a strong password.
- The remaining length after the 4 characters are taken now from the whole character set of uppercase letters, lowercase letters, numbers and symbols
- After the selection of characters are done for the full requested character length of the user then the generated string is shuffled to avoid having a consistent pattern for the first 4 characters. I used the Fisher–Yates shuffle algorithm for shuffling the generated password.

## Running the app locally
To run the application through docker you can run the command:
npm run docker-dev-up

To run the application without docker you can run:
nvm use
npm install
npm run dev

## Running the cypress tests
1. Make sure the application is running
2. Run this command in the terminal to open the cypress GUI: npm run cy:open
3. Choose and run the passwordGenerator.spec.ts
