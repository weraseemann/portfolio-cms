# Portfolio CMS — Strapi Headless Backend
This repository contains the backend of a personal portfolio website, built with Strapi Headless CMS.
It provides a structured content API consumed by a React (Vite) frontend.
The CMS is responsible for managing all dynamic content such as projects, experience cards, and page sections, while the frontend focuses purely on presentation and performance.
Frontend repository: https://github.com/weraseemann/portfolio-react
Backend repository: https://github.com/weraseemann/portfolio-cms

# Project Context (Assignment)
Working Title
Development of a Personal Portfolio Website Using a Headless CMS to Separate Content and Frontend
Research Question
How can a Headless CMS improve the flexibility and maintainability of modern portfolio websites?
Project Objective
The goal of this project is to implement a Headless CMS backend using Strapi that enables dynamic content management for a portfolio website.
The CMS is designed to be frontend-agnostic and delivers content via a REST API to a React-based frontend application.

# Technology Stack
Strapi – Headless CMS
Node.js – Runtime environment
REST API – Content delivery
SQLite (development) / configurable DB for production
Media Library – Image and asset management

# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

## Development Server
To start the Strapi development server:
npm install
npm run develop

Then open the Strapi Admin Panel:
http://localhost:1337/admin

The server will automatically restart when backend files or content types change.

Environment Variables
Create a .env file in the project root:
OST=0.0.0.0
PORT=1337
APP_KEYS=your_app_keys
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
JWT_SECRET=your_jwt_secret

When connecting a frontend application, make sure the frontend origin is added to CORS / allowed origins in Strapi.

## Content Architecture
The CMS follows a clear and minimal content model, optimized for portfolio use cases.
Collection Types:
- Project
- Experience-Card
Single Types:
- Home
- About
- Footer

Content Type Definitions
Project (Collection Type)
- title
- description
- githubLink
- demoLink
- image
Experience-Card (Collection Type)
- title
- text
Home (Single Type)
- headline
- introText
- portrait
About (Single Type)
- headline
- introText
- portrait
- goalTextHeadline
- goalText

Media files (images) are managed via Strapi Media Library and linked through relations.

## REST API Endpoints
Strapi automatically generates REST endpoints for all content types.
Common examples:
GET /api/projects?populate=*
GET /api/experience-cards?populate=*
GET /api/home?populate=*
GET /api/about?populate=*
GET /api/footer

populate=* is required to include media assets (images)
Responses are consumed by the React frontend via fetch / axios

## Permissions & Security
Public Read Access (Recommended Setup)
To allow public read-only access:
1. Open Strapi Admin Panel
2. Go to Settings → Users & Permissions → Roles
3. Select Public
4. Enable only:
find
findOne
5. Save changes
This ensures:
- Content is publicly readable
- No unauthenticated create, update, or delete access
- Safe default configuration for portfolio websites

When using populate=*, ensure related media fields are accessible; population requires proper permissions for relations.

## Managing Content
Creating or Updating Content
1. Log in to the Strapi Admin Panel
2. Open the desired content type
3. Create or edit entries
4. Upload images via Media Library if needed
5. Save and publish
Changes become available immediately via the API — no frontend rebuild required.

## CMS Usage in the Overall System
- Strapi handles content structure and storage
- The frontend fetches content dynamically
- Clear separation of concerns improves maintainability and scalability

## Deployment
The Strapi backend can be deployed to platforms such as:
- Render
- Railway
- DigitalOcean
- VPS / Cloud server
Deployment checklist:
- Configure production database
- Set environment variables on the server
Define allowed frontend domains (CORS)
- Secure admin panel credentials

## Evaluation & Results
Using Strapi as a Headless CMS resulted in:
- Improved separation of content and presentation
- Easier content updates without code changes
- A scalable architecture suitable for modern JAMstack applications
This backend successfully supports the project’s research goal of improving flexibility and maintainability in portfolio websites.

## Future Improvements
Role-based access for editors
Content versioning
Draft & review workflows
Internationalization (i18n)
GraphQL API support
SEO metadata content types