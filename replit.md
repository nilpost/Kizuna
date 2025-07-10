# JapanRealty Pro - Real Estate Business Website

## Overview

This is a modern, responsive website for a real estate business specializing in serving international business students, expats, foreign professionals, and property investors in Japan. The application combines cutting-edge technology with traditional Japanese hospitality to deliver exceptional real estate experiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless)
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **API Design**: RESTful API with typed endpoints

### Development Setup
- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Module Replacement**: Vite development server with custom middleware
- **TypeScript Configuration**: Strict mode with path mapping for clean imports

## Key Components

### Database Schema
- **Inquiries Table**: Stores customer contact forms with fields for name, email, phone, interest type, and message
- **Users Table**: Legacy user authentication system (maintained for compatibility)
- **Schema Validation**: Drizzle-Zod integration for runtime type safety

### API Endpoints
- `POST /api/inquiries` - Create new customer inquiry
- `GET /api/inquiries` - Retrieve all inquiries
- `GET /api/inquiries/:id` - Retrieve specific inquiry by ID

### Frontend Components
- **Navigation**: Sticky header with smooth scroll navigation
- **Hero Section**: Full-screen banner with call-to-action buttons
- **Services**: Comprehensive service offerings including property management, AI visualization, and relocation support
- **Integral Reforms**: Specialized section for modern housing renovations and zero-energy homes
- **Investment Opportunities**: Tokyo and Nagano property investment details
- **University Partnerships**: Student housing and educational services
- **Contact Form**: Validated inquiry submission with toast notifications
- **Virtual Tours**: Interactive property viewing demonstrations

## Data Flow

### Inquiry Submission Flow
1. User fills out contact form with validation
2. Form data validated using Zod schema
3. API request sent to Express server
4. Server validates and stores in PostgreSQL
5. Success notification displayed to user
6. React Query cache invalidated to update inquiry list

### Storage Strategy
- **Development**: In-memory storage for rapid development
- **Production**: PostgreSQL with Drizzle ORM migrations
- **Schema Evolution**: Drizzle migrations for database changes

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Consistent icon library
- **Class Variance Authority**: Type-safe component variants

### Data Management
- **TanStack Query**: Server state synchronization
- **React Hook Form**: Performance-optimized form handling
- **Zod**: Runtime type validation and schema definition

### Database and Backend
- **Drizzle ORM**: Type-safe database queries with PostgreSQL
- **Neon Database**: Serverless PostgreSQL hosting
- **Express.js**: Minimal web framework for API endpoints

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles Express server to `dist/index.js`
3. **Type Checking**: TypeScript compilation verification
4. **Database Setup**: Drizzle migrations applied via `db:push`

### Environment Configuration
- **Development**: Local development server with HMR
- **Production**: Node.js server serving static assets and API
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database recommended)
- Environment variables for database connection
- Static file serving capability

### Performance Optimizations
- Vite code splitting for optimal bundle sizes
- React Query caching for reduced API calls
- Tailwind CSS purging for minimal CSS bundle
- Express middleware for request logging and error handling