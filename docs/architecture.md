# DiploMate — System Architecture

## 1. Overview

DiploMate follows a client-server architecture.

The application consists of:

- React frontend
- Node.js / Express backend
- MongoDB database

High-level flow:

```text
User
 ↓
React Frontend
 ↓
REST API
 ↓
Express Backend
 ↓
Mongoose
 ↓
MongoDB Atlas