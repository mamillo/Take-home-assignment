Fast Orders Management System

This is a full‑stack web application for managing purchase orders.
Built with React (frontend) and Node.js + Express (backend).

Setup instructions

Frontend Setup Instructions

1. Navigate to the frontend folder:
cd Fast-Orders

2. Install dependencies:
npm install
3. Ensure your API calls in api.js point to the backend:
api.js
const API_URL = "http://localhost:5000/purchase-orders";

Running the Frontend Locally

1. Start the React app:

bash
npm run dev

2. The frontend will be available at:

Code
http://localhost:5174/
(ctrl + right click to view the front end on your local host)

- To ensure the frontend and the back end is connected:

1. Backend must be running on http://localhost:5000.
2. Frontend calls backend endpoints via fetch in api.js.
3. CORS is enabled in backend ( app.use(cors()) ).
4. Backend must be running before using the frontend.


Authors
Brandon (Frontend + Backend development)