# DiploMate — Non-Functional Requirements

## 1. Performance

- Pages should load efficiently.
- API responses should be reasonably fast.
- Search and filtering should provide results without unnecessary delay.

## 2. Security

- Passwords must never be stored in plain text.
- Authentication must be implemented securely.
- Protected routes must verify authentication.
- Admin functionality must require authorization.
- Sensitive credentials must be stored in environment variables.
- Secrets must not be committed to Git.

## 3. Reliability

- Invalid requests should return meaningful errors.
- The application should handle unavailable or expired content appropriately.
- Important external information should contain verification metadata.

## 4. Usability

- The interface should be understandable to diploma students.
- Navigation should be simple.
- Important actions should be easy to discover.
- Public information should not require authentication unnecessarily.

## 5. Responsiveness

- The application should work on desktop, tablet, and mobile screen sizes.

## 6. Maintainability

- Frontend and backend should have clear separation.
- Code should follow a consistent structure.
- Reusable components should be created where appropriate.
- Environment-specific configuration should use environment variables.
- Documentation should be maintained alongside development.

## 7. Scalability

The initial MVP targets BTEUP students from CSE/IT and Electronics.

The architecture should allow future expansion to:

- Additional opportunity types
- Additional BTEUP branches
- Other diploma boards
- Additional platform features

## 8. Data Freshness

Important external information should maintain:

- Source URL
- Last verified date
- Verification status

Possible statuses:

- Verified
- Needs Re-verification
- Expired