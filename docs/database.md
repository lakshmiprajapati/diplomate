# DiploMate — Database Design

## 1. Database

Database: MongoDB

ODM: Mongoose

Primary database platform: MongoDB Atlas

---

# 2. Collections

Initial collections:

- Users
- CareerPaths
- Exams
- Colleges
- Jobs
- Internships
- Scholarships
- Opportunities
- Resources
- Roadmaps
- SavedItems
- Feedback

---

# 3. User Collection

The User collection stores both student and admin accounts.

## Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `_id` | ObjectId | Automatic | Unique user identifier |
| `name` | String | Yes | User's name |
| `email` | String | Yes | Unique login email |
| `password` | String | Yes | Hashed password |
| `role` | String | Yes | `student` or `admin` |
| `branch` | String | Student | CSE/IT or Electronics |
| `year` | Number/String | Student | 1st, 2nd or 3rd year |
| `goal` | String | Student | Current career goal |
| `onboardingCompleted` | Boolean | Yes | Indicates whether onboarding is complete |
| `createdAt` | Date | Automatic | Account creation time |
| `updatedAt` | Date | Automatic | Last update time |

## Role Values

- `student`
- `admin`

## Branch Values

- CSE / IT
- Electronics

## Year Values

- 1st Year
- 2nd Year
- 3rd Year

## Goal Values

- B.Tech Lateral Entry
- Private Job
- Government Job
- Freelancing
- Not Sure Yet

---

# 4. Password Security

Passwords must never be stored in plain text.

The application will hash passwords before storing them.

Conceptual flow:

```text
Plain Password
      ↓
Password Hashing
      ↓
Database
# 7. CareerPath Collection

# 8. Exam Collection
The Exam collection stores entrance/admission exams relevant to diploma students, especially for B.Tech lateral-entry admissions.

## Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `_id` | ObjectId | Automatic | Unique exam identifier |
| `name` | String | Yes | Name of the exam |
| `slug` | String | Yes | URL-friendly unique identifier |
| `description` | String | Yes | Short description of the exam |
| `admissionType` | String | Yes | Type of admission, such as B.Tech Lateral Entry |
| `eligibleBranches` | Array of String | Yes | Diploma branches eligible for the exam |
| `eligibility` | String | Yes | Eligibility requirements |
| `examPattern` | String | No | Exam pattern/details |
| `syllabus` | String | No | Syllabus information |
| `applicationStartDate` | Date | No | Application start date |
| `applicationEndDate` | Date | No | Application deadline |
| `examDate` | Date | No | Examination date |
| `preparationResources` | Array of String | No | Links/resources for preparation |
| `officialWebsite` | String | Yes | Official exam website |
| `verificationStatus` | String | Yes | Current verification status |
| `lastVerifiedAt` | Date | Yes | Date when information was last verified |
| `isActive` | Boolean | Yes | Whether the exam is currently visible |
| `createdAt` | Date | Automatic | Creation time |
| `updatedAt` | Date | Automatic | Last update time |

# 9. College Collection

The College collection stores colleges that offer B.Tech lateral-entry admission to eligible diploma students.

## Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `_id` | ObjectId | Automatic | Unique college identifier |
| `name` | String | Yes | College name |
| `slug` | String | Yes | URL-friendly unique identifier |
| `location` | String | Yes | College city/location |
| `state` | String | Yes | State where the college is located |
| `website` | String | Yes | Official college website |
| `lateralEntryAvailable` | Boolean | Yes | Whether lateral-entry admission is available |
| `eligibility` | String | No | Lateral-entry eligibility requirements |
| `admissionRoutes` | Array of String | No | Exams/counselling routes through which admission is possible |
| `branches` | Array of String | No | B.Tech branches available for lateral-entry students |
| `fees` | Object | No | Fee information |
| `placement` | Object | No | Placement/package information |
| `rating` | Object | No | Rating information with source |
| `verificationStatus` | String | Yes | Current verification status |
| `lastVerifiedAt` | Date | Yes | Date when college information was last verified |
| `createdAt` | Date | Automatic | Creation time |
| `updatedAt` | Date | Automatic | Last update time |