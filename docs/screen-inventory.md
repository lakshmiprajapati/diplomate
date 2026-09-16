# DiploMate — Screen Inventory

## 1. Public Screens

These screens are accessible without authentication.

| ID | Screen | Purpose | Data Required |
|---|---|---|---|
| PUB-01 | Landing Page | Introduce DiploMate and guide users | Featured career paths, latest opportunities |
| PUB-02 | Career Paths | Show available career paths | Career paths |
| PUB-03 | B.Tech Lateral Entry | Main B.Tech LE hub | Exams, colleges, counselling, preparation |
| PUB-04 | Entrance Exams | List relevant entrance exams | Exams |
| PUB-05 | Exam Details | Show complete exam information | Exam |
| PUB-06 | Colleges | List colleges offering B.Tech lateral entry | Colleges |
| PUB-07 | College Details | Show college information | College |
| PUB-08 | Counselling | Explain counselling process | Counselling content |
| PUB-09 | Preparation | Explain preparation for B.Tech LE | Preparation content, resources |
| PUB-10 | Jobs Career Path | Explain diploma job options | Job career-path content |
| PUB-11 | Government Jobs & Exams | Explain government career options | Government jobs/exams |
| PUB-12 | Freelancing | Explain freelancing pathway | Freelancing content |
| PUB-13 | Engineering Starter Kit | Introduce engineering ecosystem | Starter kit topics |
| PUB-14 | Starter Kit Topic | Explain a specific tool/platform | Topic content |
| PUB-15 | Internship / Training | Browse internships and training | Internship listings |
| PUB-16 | Internship Details | Show internship information | Internship |
| PUB-17 | Opportunities | Browse hackathons and scholarships | Opportunities |
| PUB-18 | Opportunity Details | Show opportunity information | Opportunity |
| PUB-19 | Resources | Browse useful resources | Resources |
| PUB-20 | Resource Details | Show resource information | Resource |

---

# 2. Authentication Screens

| ID | Screen | Purpose | Authentication |
|---|---|---|---|
| AUTH-01 | Login | Allow existing users to log in | Public |
| AUTH-02 | Sign Up | Create a student account | Public |
| AUTH-03 | Onboarding — Branch | Select diploma branch | Authenticated |
| AUTH-04 | Onboarding — Year | Select diploma year | Authenticated |
| AUTH-05 | Onboarding — Goal | Select current career goal | Authenticated |

---

# 3. Student Screens

These screens require authentication.

| ID | Screen | Purpose | Data Required |
|---|---|---|---|
| STU-01 | Dashboard | Personalized student home | User, career paths, recommendations, roadmap |
| STU-02 | Profile | View and manage profile | User |
| STU-03 | Saved Items | View saved content | User saved items |
| STU-04 | Roadmap | Track career-path progress | User roadmap progress |

---

# 4. Admin Screens

These screens require admin authorization.

| ID | Screen | Purpose |
|---|---|---|
| ADM-01 | Admin Login | Authenticate administrator |
| ADM-02 | Admin Dashboard | Show platform metrics |
| ADM-03 | Career Path Management | Manage career paths |
| ADM-04 | Exam Management | Manage exams |
| ADM-05 | Job Management | Manage jobs |
| ADM-06 | Internship Management | Manage internships/training |
| ADM-07 | Scholarship Management | Manage scholarships |
| ADM-08 | Opportunity Management | Manage opportunities |
| ADM-09 | Resource Management | Manage resources |
| ADM-10 | College Management | Manage colleges |
| ADM-11 | Verification | Review content requiring verification |
| ADM-12 | User Management | View/manage users |

---

# 5. Screen Access Model

## Public

The following are publicly accessible:

- Landing Page
- Career Paths
- B.Tech Lateral Entry
- Entrance Exams
- Exam Details
- Colleges
- College Details
- Counselling
- Preparation
- Jobs
- Government Jobs & Exams
- Freelancing
- Engineering Starter Kit
- Starter Kit Topics
- Internship / Training
- Internship Details
- Opportunities
- Opportunity Details
- Resources
- Resource Details
- Login
- Sign Up

---

## Authenticated Student

The following require login:

- Dashboard
- Profile
- Saved Items
- Roadmap Progress
- Saving content
- Updating personal information
- Updating roadmap progress

---

## Admin

The following require admin authorization:

- Admin Dashboard
- Content Management
- College Management
- Verification
- User Management

---

# 6. Important Navigation Relationships

## Main Public Navigation

Home
→ Career Paths
→ Engineering Starter Kit
→ Internship / Training
→ Opportunities
→ Resources

---

## Career Paths

Career Paths
→ B.Tech Lateral Entry
→ Jobs
→ Government Jobs & Exams
→ Freelancing

---

## B.Tech Lateral Entry

B.Tech Lateral Entry
→ Entrance Exams
→ Colleges
→ Counselling
→ Preparation

---

## Opportunities

Opportunities
→ Hackathons
→ Scholarships

---

## Student Navigation

Dashboard
→ Career Paths
→ Starter Kit
→ Internship / Training
→ Opportunities
→ Resources
→ Saved
→ Profile

---

## Admin Navigation

Admin Dashboard
→ Content
→ Verification
→ Users

Content
→ Career Paths
→ Exams
→ Colleges
→ Jobs
→ Internships / Training
→ Scholarships
→ Opportunities
→ Resources