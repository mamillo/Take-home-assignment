Backend Setup Instructions

1. Navigate to the backend folder:
cd fast-orders-backend

2. Install dependencies:
npm install

3. Ensure package.json has the correct scripts:
package.json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

4. Install CORS to connect to frontend:
npm install cors

Running the Backend Locally

1. Start the backend server:
npm run dev

2. The API will be available at:
Code
http://localhost:5000
(ctrl + right click the code to open it to your local browser)

API Endpoints

GET /purchase-orders → List all orders

POST /purchase-orders → Create new order

GET /purchase-orders/:id → Get order by ID

PUT /purchase-orders/:id → Update order

DELETE /purchase-orders/:id → Delete order