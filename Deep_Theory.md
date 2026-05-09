# Day 38 – Full Capstone Architecture Planning

## 1. Full Capstone Architecture Planning

A capstone project is designed using a **layered architecture** to separate concerns and improve scalability.

### Architecture Overview:
- **Frontend Layer (Web + Mobile)**
  - React (Web)
  - React Native / Expo (Mobile)
- **Backend Layer**
  - Node.js + Express (or any API server)
- **Database Layer**
  - MongoDB / PostgreSQL / Firebase
- **External Services**
  - Authentication (JWT / Firebase Auth)
  - Notifications (FCM / Expo Notifications)
  - File Storage (Cloudinary / AWS S3)

### Flow:
User → UI (Web/Mobile) → API Calls → Backend Server → Database → Response → UI Update

### Key Principles:
- Separation of concerns
- Reusability
- Scalability
- Maintainability

---

## 2. Designing Shared Components for Web + Mobile

Shared components reduce duplication and maintain consistency.

### Examples of Shared Components:
- Button Component
- Input Field
- Card Layout
- Loader / Spinner
- Modal Dialog
- Navbar / Header (adapted)

### Strategy:
- Use **component-based architecture**
- Keep **logic separate from UI**
- Use **props for customization**
- Maintain **theme consistency**

### Folder Structure Example:

/components
/Button
/Input
/Card
/Modal
/shared
styles.js
constants.js


### Benefits:
- Faster development
- Consistent UI/UX
- Easy maintenance

---

## 3. API Requirements Analysis

Before building APIs, we define what the system needs.

### Steps:
1. Identify features (Login, Booking, Profile, etc.)
2. Define data needed for each feature
3. Decide request/response format
4. Define security requirements

### Example API Requirements:

#### Authentication:
- POST /register
- POST /login
- GET /profile

#### App Features (Hospital App Example):
- GET /doctors
- POST /appointments
- GET /appointments/:userId
- POST /upload (images/documents)

### API Design Rules:
- Use REST standards
- Use JSON format
- Secure with JWT tokens
- Validate all inputs

---

## 4. Navigation Structure Planning

Navigation defines how users move in the app.

### Web Navigation:
- Home
- Services
- About
- Dashboard
- Profile

### Mobile Navigation:
- Stack Navigator (Login → Home → Details)
- Tab Navigator (Home | Appointments | Profile)

### Example Flow:

Login Screen
↓
Home Screen (Tabs)
├── Dashboard
├── Doctors List
├── Book Appointment
└── Profile


---

## 5. State and Data-Flow Diagrams

State management helps track data across the app.

### State Management Tools:
- React Context API
- Redux / Redux Toolkit
- Zustand (lightweight alternative)
- React Query (server state)

---

### Data Flow Architecture:


User Action
↓
UI Component
↓
State Update (Redux/Context)
↓
API Call (Axios/Fetch)
↓
Backend Server
↓
Database
↓
Response
↓
State Update
↓
UI Re-render


---

### Example State Flow (Appointment Booking):

1. User selects doctor
2. Form data stored in state
3. Submit button triggers API
4. Backend saves appointment
5. Response updates global state
6. UI shows confirmation

---

### State Types:
- **Local State** → Component level
- **Global State** → App-wide (user login, theme)
- **Server State** → API data (doctors, appointments)

---

