# Installment Management System (IMS)

A React Native application to assist users in managing their installments, allowing them to schedule, view, and keep track of various payments.

<img src="https://github.com/askhan963/installments-management-system/blob/main/ims.jpg" width="200" align="center" alt="Insert IMS Screenshot Here">

## Table of Contents

- [Features](#features)
- [Libraries Used](#libraries-used)
- [Installation](#installation)
- [Usage](#usage)
- [Problems/Errors Faced](#problemserrors-faced)
- [Conclusion](#conclusion)

## Features

- **Home Screen**: Welcomes the user and provides navigation to other parts of the app.
- **Dashboard**: Displays a list of all scheduled installments. Users can view detailed information about each installment in a modal.
- **Installment Scheduling**: Allows users to schedule new installments by capturing various details.

## Libraries Used

1. **React Navigation**: Used for managing the app's navigation stack.
2. **React Native Paper**: Provides a collection of customizable components for designing the app's UI.
3. **React Native Modal**: Allows for displaying modals in the app.

## Installation

1. Clone the repository: git clone https://github.com/askhan963/installments-management-system.git
2. Navigate to the project directory: cd installments-management-system
3. Install the dependencies: npm install
4. Start the app: npm start


## Usage

Once the app is running, users can:

- Navigate to the **Dashboard** to view all scheduled installments.
- Use the **Installment Scheduling** screen to schedule new payments.
- Tap on an installment in the Dashboard to view detailed information.

## Problems/Errors Faced

- **Navigation Errors**: Issues with the "RNGestureHandlerRootView" and "RNSScreen" components. Resolved by properly linking the respective libraries.
- **Styling Overlap with Modal**: The modal's styling conflicted with global styles, which was fixed by refining the modal-specific styling.
- **Data Rendering in Modal**: Addressed the initial absence of data in models by enhancing state management.

## Conclusion

The IMS serves as a valuable tool for users to manage their installments. Challenges encountered during its development offered invaluable learning experiences, resulting in a robust and user-centric application.


