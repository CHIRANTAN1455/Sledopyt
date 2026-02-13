# Sledopyt AI Website - PRD

## Project Overview
**Name:** Sledopyt AI Corporate Website  
**Date:** February 13, 2026  
**Status:** MVP Complete

## Original Problem Statement
Build a webapp for Sledopyt AI company with:
1. AI solutions company providing AI agents and bots
2. Smart AI-first CRM and Ticket management systems for small businesses
3. Messaging-based server control system
4. Based out of WeWork Abu Dhabi (auto-fill exact address)
5. Team members section with circular images, names, and designations (5 members)
6. Simple contact form (name, email, message)
7. Very classy UI/UX as per current AI company website trends

## User Choices
- Dark theme (modern AI company look)
- 5 team members with placeholder images
- Simple contact form
- No logo/branding yet
- No case studies, pricing, or blog sections

## Target Audience
- Small businesses looking for AI solutions
- Companies needing CRM and ticket management
- Businesses wanting server control systems

## What's Been Implemented

### Frontend (React + Tailwind CSS)
- **Hero Section**: Full-screen with animated background, tagline "Intelligence, Architected."
- **Navigation**: Sticky nav with smooth scroll, mobile responsive
- **Services Section**: Bento grid layout with 4 services (AI Agents, Smart CRM, Server Control, Ticket Management)
- **Team Section**: 5 team members with circular images and roles
- **Contact Section**: Split layout with WeWork Abu Dhabi address and contact form
- **Footer**: Copyright and links

### Backend (FastAPI + MongoDB)
- Contact form API (`POST /api/contact`)
- Contact retrieval (`GET /api/contacts`)
- MongoDB integration for data persistence

### Design System
- Dark theme with Violet (#7c3aed) accent
- Outfit font for headings, DM Sans for body
- Glassmorphism effects, animated hover states
- Framer Motion animations

## Core Requirements (Static)
- [x] Single page landing website
- [x] Dark modern theme
- [x] Responsive design
- [x] Contact form functionality
- [x] WeWork Abu Dhabi address displayed

## Prioritized Backlog

### P0 (MVP - Complete)
- [x] Hero section
- [x] Services section
- [x] Team section
- [x] Contact form
- [x] Footer

### P1 (Enhancement)
- [ ] Admin dashboard for viewing contact submissions
- [ ] Email notification for new contact submissions
- [ ] Add actual team member photos when available
- [ ] Add company logo when available

### P2 (Future)
- [ ] Blog section
- [ ] Case studies/Portfolio
- [ ] Pricing section
- [ ] Multi-language support (Arabic)

## Tech Stack
- Frontend: React, Tailwind CSS, Framer Motion, Lucide Icons
- Backend: FastAPI, Motor (async MongoDB)
- Database: MongoDB

## Next Tasks
1. Upload actual team member photos
2. Create company logo and integrate
3. Add email notifications for contact form
4. Set up admin panel for contact management
