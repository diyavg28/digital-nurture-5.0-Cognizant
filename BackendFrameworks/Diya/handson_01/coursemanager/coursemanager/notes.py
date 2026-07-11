"""
===========================================================
Hands-On 1
Task 1 - Understand the Request-Response Cycle
===========================================================

1. REQUEST-RESPONSE CYCLE

When a user sends a request (Example: GET /api/courses/),
Django processes it in the following order:

Browser
   ↓
HTTP Request
   ↓
URL Router (urls.py)
   ↓
Middleware
   ↓
View (views.py)
   ↓
Model (models.py)
   ↓
Database Query
   ↓
View receives data
   ↓
HTTP Response
   ↓
Browser

Explanation:

• Browser:
  The user enters a URL in the browser.

• HTTP Request:
  The browser sends a request to the Django server.

• URL Router:
  Django checks urls.py to determine which view should handle the request.

• Middleware:
  Middleware processes the request before it reaches the view.
  It can perform security checks, authentication, session handling, etc.

• View:
  The view contains the application's business logic.
  It processes the request and communicates with the model.

• Model:
  The model interacts with the database.

• Database:
  The requested data is fetched or updated.

• HTTP Response:
  The processed data is returned to the browser.

-----------------------------------------------------------

2. DJANGO MIDDLEWARE

Middleware is software that sits between the request and the view.
It processes incoming requests before they reach the view and outgoing
responses before they reach the browser.

Two built-in Django middleware classes:

1. SecurityMiddleware
   - Adds security-related HTTP headers.
   - Protects against common web attacks.
   - Enables HTTPS-related security features.

2. AuthenticationMiddleware
   - Associates logged-in users with requests.
   - Makes request.user available.
   - Helps manage user authentication.

-----------------------------------------------------------

3. WSGI vs ASGI

WSGI (Web Server Gateway Interface)

• Supports synchronous applications.
• Processes one request at a time.
• Suitable for traditional web applications.
• Default deployment interface for standard Django applications.

ASGI (Asynchronous Server Gateway Interface)

• Supports asynchronous programming.
• Handles multiple requests efficiently.
• Supports WebSockets.
• Suitable for chat applications, live notifications,
  real-time dashboards, and streaming applications.

Difference:

WSGI
- Synchronous
- One request at a time
- Traditional Django apps

ASGI
- Asynchronous
- Multiple concurrent requests
- Real-time applications

Django supports both WSGI and ASGI.
Use WSGI for normal web applications.
Use ASGI when asynchronous features or WebSockets are required.

-----------------------------------------------------------

4. MVC vs MVT

MVC Pattern

M = Model
V = View
C = Controller

Django follows the MVT architecture.

M = Model
V = View
T = Template

Mapping between MVC and MVT

MVC                Django MVT

Model        --->  Model
View         --->  Template
Controller   --->  View

Explanation:

Model:
Stores data and interacts with the database.

View:
Contains business logic and processes requests.

Template:
Displays data to the user and generates HTML pages.

-----------------------------------------------------------

Task Completed.
"""