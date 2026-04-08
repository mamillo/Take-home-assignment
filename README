Full-Stack Intern Assignment: Purchase Order Management System

Overview

You are required to build a simple full-stack application for managing Purchase Orders.

This task evaluates your ability to:

- Design and implement a backend API
- Build a functional frontend interface
- Integrate frontend and backend systems
- Write clean, maintainable code

---

Timeline

You have 1 week to complete and submit this assignment.

---

Objective

Build a system that allows users to:

- Create a purchase order
- View a list of purchase orders
- View details of a specific purchase order
- Update a purchase order
- Delete a purchase order

---

Purchase Order Model

Each purchase order should include the following fields:

Field| Type| Description
id| string| Unique identifier
supplierName| string| Name of the supplier
itemName| string| Name of the item
quantity| number| Number of items
unitPrice| number| Price per item
status| string| pending, approved, or rejected
createdAt| date| Timestamp of creation

Derived Field

- "totalPrice = quantity × unitPrice"

---

Backend Requirements

Build an API that supports the following endpoints:

Required Endpoints

- "POST /purchase-orders" — Create a purchase order
- "GET /purchase-orders" — Get all purchase orders
- "GET /purchase-orders/:id" — Get a specific purchase order
- "PUT /purchase-orders/:id" — Update a purchase order
- "DELETE /purchase-orders/:id" — Delete a purchase order

Expectations

- Use a database or in-memory storage
- Validate incoming data
- Return appropriate HTTP status codes
- Handle errors properly
- Organize code clearly (e.g., routes, controllers, services)

Optional (Bonus)

- Pagination on the list endpoint
- Search (by supplier name or item name)
- Filter by status

---

Frontend Requirements

Build a user interface that interacts with your API.

Features

1. Purchase Order List

- Display all purchase orders
- Show:
  - Supplier Name
  - Item Name
  - Quantity
  - Unit Price
  - Total Price
  - Status
  - Created Date
- Include actions:
  - View
  - Edit
  - Delete

2. Create Purchase Order

- Form with:
  - Supplier Name
  - Item Name
  - Quantity
  - Unit Price
  - Status

3. Edit Purchase Order

- Pre-filled form with existing data
- Allow updating fields

4. View Details

- Display full information of a purchase order

Expectations

- Basic form validation
- Loading and error states
- Clean and usable UI
- Proper API integration

Optional (Bonus)

- Confirmation before delete
- Search and filter UI
- Responsive design

---

Validation Rules

- "supplierName" is required
- "itemName" is required
- "quantity" must be greater than 0
- "unitPrice" must be greater than 0
- "status" must be one of:
  - pending
  - approved
  - rejected

---

Tech Stack

You may use any stack you are comfortable with.

Suggested options:

- Frontend: React, Next.js, or Vue
- Backend: Node.js (Express or NestJS) or any framework
- Database: PostgreSQL, MongoDB, or SQLite

---

Deliverables

Submit the following:

1. Source code
   
   - Frontend
   - Backend

2. README
   
   - Setup instructions
   - How to run the project locally

3. Short explanation
   
   - Your approach
   - Any trade-offs or decisions made

4. Optional
   
   - Screenshots or demo video

---

Evaluation Criteria

Your submission will be evaluated based on:

Functionality

- Correct implementation of CRUD operations
- Proper integration between frontend and backend

Code Quality

- Readability
- Structure and organization
- Naming conventions

Validation and Error Handling

- Proper validation on frontend and backend
- Handling of edge cases

UI/UX

- Clean and intuitive interface
- Usability

Problem Solving

- Application structure
- Implementation decisions

Bonus

- Search, filtering, pagination
- Tests
- Deployment
- Docker setup

---

Submission Instructions

- Push your code to a public GitHub repository
- Share the repository link

---

Notes

- Focus on clarity over complexity
- Keep the implementation simple but well-structured
- Write code as if it will be maintained by others
