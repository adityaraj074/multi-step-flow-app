1. Overview
- This is a React Native Multi-Step Flow Application built as part of an assignment. The app guides users through a structured step-by-step flow where they provide inputs, and the system dynamically adjusts the flow based on their selections.

The application focuses on:
- Clean multi-step navigation
- Conditional rendering of steps
- State persistence (local + backend)
- Resume capability after app restart
- API integration with error handling

2. Features
Multi-Step Form Flow:
- 4–5 structured steps
- Text input
- Button
- Radio buttons

Validation at every step (cannot proceed without required fields)

Navigation System:
- Next / Back navigation between steps
- Prevents skipping required inputs
- Maintains state across steps

Progress Indicator:
- Displays current progress
- Visual progress bar for better UX

Conditional Flow Logic:
- Dynamic step rendering based on user input
Example:
- If user selects a specific goal → additional step appears
- Otherwise step is skipped automatically

Resume Capability:
- User progress is saved automatically

On reopening the app:
- User resumes from last completed step
- No data loss

Backend Integration:
- Simple backend integration for storing progress.

APIs Used:
- POST /progress   → Save user progress
- GET  /progress   → Retrieve saved progress

- Handles API failure gracefully
- Retry mechanism implemented

Local Persistence:
- Uses AsyncStorage for offline data storage
- Ensures progress is not lost on app restart

Final Summary Screen:
- Displays all collected inputs
- Allows user to review answers
- Supports editing previous steps

3. Tech Stack
- React Native (Expo)
- JavaScript (ES6+)
- Context API / State Management (custom logic)
- AsyncStorage (local persistence)
- Axios / Fetch API (backend calls)
- Node.js / Express (backend)

4. Error Handling
- API failure handled gracefully
- Retry button provided for failed requests
- Fallback to local storage if backend is unreachable

5. Data Persistence Strategy
-Local storage: AsyncStorage
-Backend storage: API sync
Priority:
-Load from backend
-Fallback to local storage

6. Key Learnings
- Managing multi-step form state efficiently
- Handling conditional UI flows
- Syncing local and remote data
- Implementing resume functionality
- Improving UX with progress indicators

7. Future Improvements
- Add animations between steps
- Improve UI with design system (e.g., NativeWind / Paper)
- Add authentication layer
- Add analytics tracking









