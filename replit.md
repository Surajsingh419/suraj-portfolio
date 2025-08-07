# Overview

This is a personal portfolio website for Suraj Singh, a backend developer with 4+ years of experience. The application is built as a full-stack web application showcasing his professional experience, skills, and projects. It features a modern, responsive design with smooth animations and includes a contact form for potential clients or employers to reach out.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Tailwind CSS with a comprehensive design system using CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth page transitions and interactive animations
- **State Management**: TanStack Query for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development Server**: Custom Vite integration for seamless full-stack development
- **Storage**: In-memory storage implementation with interface-based design for easy database migration
- **API Design**: RESTful endpoints with proper error handling and logging middleware

## Data Storage Solutions
- **Current**: In-memory storage using Maps for development and prototyping
- **Database Ready**: Drizzle ORM configured for PostgreSQL with schema definitions and migrations
- **Schema**: Defined in shared TypeScript files with Zod validation for type safety
- **Contact Messages**: Structured storage for portfolio contact form submissions

## Authentication and Authorization
- **Preparation**: User schema defined with username/password fields
- **Validation**: Zod schemas for user input validation and type safety
- **Future Ready**: Storage interface designed to support user authentication features

# External Dependencies

## Development Tools
- **Vite**: Build tool and development server with React plugin
- **TypeScript**: Type checking and modern JavaScript features
- **ESBuild**: Fast bundling for production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Radix UI**: Unstyled, accessible UI primitives for complex components
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variants
- **Framer Motion**: Animation library for smooth interactions

## Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL dialect
- **Drizzle Kit**: Database migrations and schema management
- **Neon Database**: Serverless PostgreSQL (configured but not yet implemented)

## Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration with Zod for validation
- **Zod**: Schema validation for runtime type checking

## Utilities
- **TanStack Query**: Server state management and caching
- **Date-fns**: Modern date utility library
- **clsx**: Conditional className utility
- **Nanoid**: URL-safe unique ID generator

## Replit Integration
- **Development Banner**: Replit-specific development tools
- **Runtime Error Modal**: Enhanced error reporting for development
- **Cartographer**: Replit's code mapping tool for better debugging

## Deployment Configuration
- **Production Build**: Optimized Vite build with proper asset handling
- **Static Serving**: Express static file serving for production
- **Environment Variables**: DATABASE_URL configuration for PostgreSQL connection