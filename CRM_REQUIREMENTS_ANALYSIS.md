# CRM Requirements Analysis

## Summary
This document translates business requirements into system architecture.

## Core Principles
- Extremely simple
- WhatsApp-first
- Low data entry
- AI assisted
- Built for small teams (1-5 sellers)

## Core Modules

### 1. Contacts
Fields:
- Name
- Company
- WhatsApp
- Email
- Segment
- Location
- Source
- Status
- Notes

### 2. Interactions
Fields:
- Date
- Client
- Seller
- Channel
- Type
- Product
- Result
- Next Step
- Follow up date

### 3. Pipeline
Stages:
- Lead
- Contacted
- Quotation
- Follow up
- Won
- Lost

### 4. Dashboard
Metrics:
- Active opportunities
- Conversion rate
- Seller activity
- Lost reasons
- Follow ups due

### 5. Alerts
- Follow ups today
- Leads inactive
- No seller activity
- Stalled deals

## AI Features
- Auto classify leads
- Detect duplicates
- Suggest next action
- Enrich contacts
- Predict close probability

## WhatsApp First
- Create lead from WhatsApp
- Quick interaction logging
- One-click follow-up

## MVP Scope
Phase 1:
- Contacts
- Interactions
- Pipeline
- Dashboard basic

Phase 2:
- AI scoring
- Alerts
- Reports

Phase 3:
- Integrations
- Automation

## Architecture
- Frontend: HTML + JS
- Storage: Local + Export
- Future: Backend API

## Status
Ready for implementation
