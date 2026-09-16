# DiploMate — Route Map

## 1. Public Routes

These routes are accessible without authentication.

| Route | Access | Purpose |
|---|---|---|
| `/` | Public | Landing page |
| `/career-paths` | Public | View all career paths |
| `/career-paths/btech-lateral-entry` | Public | B.Tech lateral-entry hub |
| `/career-paths/btech-lateral-entry/exams` | Public | View entrance exams |
| `/career-paths/btech-lateral-entry/exams/:examId` | Public | View exam details |
| `/career-paths/btech-lateral-entry/colleges` | Public | View colleges offering B.Tech lateral entry |
| `/career-paths/btech-lateral-entry/colleges/:collegeId` | Public | View college details |
| `/career-paths/btech-lateral-entry/counselling` | Public | View counselling information |
| `/career-paths/btech-lateral-entry/preparation` | Public | View preparation guidance |
| `/career-paths/jobs` | Public | Explore private job career path |
| `/career-paths/government-jobs` | Public | Explore government jobs and exams |
| `/career-paths/freelancing` | Public | Explore freelancing career path |
| `/starter-kit` | Public | Engineering Starter Kit |
| `/starter-kit/:topicId` | Public | View Starter Kit topic |
| `/internships` | Public | Browse internships and training |
| `/internships/:internshipId` | Public | View internship details |
| `/opportunities` | Public | Browse hackathons and scholarships |
| `/opportunities/:opportunityId` | Public | View opportunity details |
| `/resources` | Public | Browse resources |
| `/resources/:resourceId` | Public | View resource details |

---

## 2. Authentication Routes

| Route | Access | Purpose |
|---|---|---|
| `/login` | Public | Student login |
| `/signup` | Public | Student registration |
| `/onboarding` | Authenticated Student | Student onboarding |
| `/onboarding/branch` | Authenticated Student | Select diploma branch |
| `/onboarding/year` | Authenticated Student | Select diploma year |
| `/onboarding/goal` | Authenticated Student | Select career goal |

---

## 3. Student Routes

These routes require student authentication.

| Route | Access | Purpose |
|---|---|---|
| `/dashboard` | Student | Personalized student dashboard |
| `/profile` | Student | View and manage profile |
| `/saved` | Student | View saved items |
| `/roadmap` | Student | Track roadmap progress |

---

## 4. Admin Routes

These routes require admin authentication and authorization.

| Route | Access | Purpose |
|---|---|---|
| `/admin/login` | Public | Admin login |
| `/admin` | Admin | Admin root |
| `/admin/dashboard` | Admin | Admin dashboard |
| `/admin/content` | Admin | Content management overview |
| `/admin/career-paths` | Admin | Manage career paths |
| `/admin/exams` | Admin | Manage exams |
| `/admin/exams/:examId` | Admin | Add/edit exam |
| `/admin/colleges` | Admin | Manage colleges |
| `/admin/colleges/:collegeId` | Admin | Add/edit college |
| `/admin/jobs` | Admin | Manage jobs |
| `/admin/internships` | Admin | Manage internships and training |
| `/admin/scholarships` | Admin | Manage scholarships |
| `/admin/opportunities` | Admin | Manage opportunities |
| `/admin/resources` | Admin | Manage resources |
| `/admin/verification` | Admin | Review content verification |
| `/admin/users` | Admin | Manage users |

---

# 5. Route Access Model

## Public Routes

Public users can browse informational content without creating an account.

Public content includes:

- Career Paths
- B.Tech Lateral Entry
- Entrance Exams
- Colleges
- Counselling
- Preparation
- Jobs
- Government Jobs & Exams
- Freelancing
- Engineering Starter Kit
- Internships / Training
- Opportunities
- Resources

---

## Authenticated Student Routes

Login is required for:

- Dashboard
- Profile
- Saved Items
- Roadmap Progress
- Saving items
- Updating personal information
- Updating roadmap progress

---

## Admin Routes

Admin authentication and authorization are required for:

- Admin Dashboard
- Content Management
- College Management
- Verification
- User Management

---

# 6. B.Tech Lateral Entry Route Structure

The B.Tech lateral-entry section is organized as:

```text
/career-paths/btech-lateral-entry
│
├── /exams
│   └── /:examId
│
├── /colleges
│   └── /:collegeId
│
├── /counselling
│
└── /preparation