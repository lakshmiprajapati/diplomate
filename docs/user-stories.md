# DiploMate — User Stories

## 1. Student Authentication

### US-01 — Student Registration

**As a** diploma student,

**I want to** create an account,

**so that** I can access personalized features such as my dashboard, saved items, profile, and roadmap progress.

### Acceptance Criteria

- Student can enter name, email, and password.
- Email must be unique.
- Password must satisfy the application's password requirements.
- Successful registration creates a student account.
- Student is taken to onboarding after registration.
- Invalid input shows an appropriate error message.


### US-02 — Student Login

**As a** registered student,

**I want to** log in,

**so that** I can access my personalized dashboard and saved items.

### Acceptance Criteria

- Student can enter email and password.
- Valid credentials allow login.
- Invalid credentials show an error.
- Unauthenticated users cannot access protected student features.

---

## 2. Student Onboarding

### US-03 — Select Branch

**As a** diploma student,

**I want to** select my diploma branch,

**so that** DiploMate can provide relevant information.

### Acceptance Criteria

- Student can select CSE / IT or Electronics.
- Selected branch is stored in the student profile.


### US-04 — Select Year

**As a** diploma student,

**I want to** select my current year,

**so that** the platform can understand my academic stage.

### Acceptance Criteria

- Student can select 1st, 2nd, or 3rd year.
- Selected year is stored in the student profile.


### US-05 — Select Career Goal

**As a** diploma student,

**I want to** select my current career goal,

**so that** DiploMate can personalize my dashboard.

### Career Goals

- B.Tech Lateral Entry
- Private Job
- Government Job
- Freelancing
- Not Sure Yet

### Acceptance Criteria

- Student can select one career goal.
- Selected goal is stored in the student profile.
- Goal is used for dashboard personalization.

---

# 3. Dashboard

### US-06 — Personalized Dashboard

**As a** logged-in student,

**I want to** see a personalized dashboard,

**so that** I know what career options and actions are relevant to me.

### Acceptance Criteria

- Dashboard displays student's name.
- Dashboard displays branch, year, and career goal.
- Dashboard displays relevant career options.
- Dashboard displays recommended next steps.
- Dashboard displays relevant opportunities/resources where applicable.
- Dashboard displays roadmap progress where applicable.

---

# 4. Career Paths

### US-07 — Explore Career Paths

**As a** diploma student,

**I want to** explore different career paths,

**so that** I can understand what I can do after or during my diploma.

### Career Paths

- B.Tech Lateral Entry
- Jobs
- Government Jobs & Exams
- Freelancing

### Acceptance Criteria

- Student can view all available career paths.
- Student can open an individual career path.
- Career path information is structured and easy to understand.


### US-08 — Explore B.Tech Lateral Entry

**As a** diploma student,

**I want to** understand the B.Tech lateral-entry pathway,

**so that** I know the steps required to pursue it.

### Acceptance Criteria

The platform explains:

- Eligibility
- Relevant exams
- Preparation
- Application
- Counselling
- College selection
- Admission

Where applicable, exam information includes:

- Eligibility
- Important dates
- Exam pattern
- Syllabus
- Application process
- Preparation resources
- Official website
- Last verified date


### US-09 — Explore Job Career Path

**As a** diploma student,

**I want to** understand possible job roles,

**so that** I know what career options are available to me.

### Acceptance Criteria

Job career-path information can include:

- Possible roles
- Eligibility
- Required skills
- Expected salary range
- Where to apply
- Useful resources


### US-10 — Explore Government Jobs

**As a** diploma student,

**I want to** explore relevant government jobs and exams,

**so that** I can understand their eligibility and preparation requirements.

### Acceptance Criteria

Information can include:

- Exam/job name
- Eligibility
- Syllabus
- Exam pattern
- Important dates
- Preparation resources
- Official source
- Last verified date


### US-11 — Explore Freelancing

**As a** diploma student,

**I want to** understand how to start freelancing,

**so that** I can explore freelancing as a career option.

### Freelancing Roadmap

Choose Skill
→ Learn
→ Build Portfolio
→ Create Profile
→ Find First Client

### Example Skills

- Web Development
- Graphic Design
- Video Editing

---

# 5. Engineering Starter Kit

### US-12 — Explore Engineering Starter Kit

**As a** diploma student,

**I want to** learn about important tools and platforms in the engineering ecosystem,

**so that** I know what I should start using.

### MVP Topics

- DSA
- Git & GitHub
- LeetCode
- Unstop
- Hackathons
- Internships
- LinkedIn
- Resume
- Open Source

### Each Topic Should Explain

- What is it?
- Why is it useful?
- When should I start?
- How do I start?
- Useful links/resources

---

# 6. Internship / Training

### US-13 — Browse Internships

**As a** diploma student,

**I want to** browse internships and training opportunities,

**so that** I can find opportunities relevant to my branch.

### Acceptance Criteria

Each listing can contain:

- Title
- Organization
- Type
- Eligibility
- Branch
- Mode
- Deadline
- Official link
- Verification status

### MVP Filters

- Branch
- Type

---

# 7. Opportunities

### US-14 — Browse Opportunities

**As a** diploma student,

**I want to** browse relevant opportunities,

**so that** I can discover opportunities I may be eligible for.

### MVP Categories

- Hackathons
- Scholarships

### Opportunity Information

- Title
- Organization
- Eligibility
- Relevant branch
- Deadline
- Description
- Official website
- Save option
- Last verified date


### US-15 — Filter Opportunities

**As a** diploma student,

**I want to** filter opportunities,

**so that** I can find relevant opportunities more quickly.

### MVP Filters

- Branch
- Type
- Deadline


### US-16 — Search Opportunities

**As a** diploma student,

**I want to** search opportunities,

**so that** I can quickly find something specific.

---

# 8. Resources

### US-17 — Browse Resources

**As a** diploma student,

**I want to** browse useful resources,

**so that** I can take action on my career or learning goals.

### Categories

- B.Tech / LE
- DSA / Coding
- Electronics
- Career
- Resume
- Interview

### Resource Information

- Title
- Description
- Who is it for?
- Link


### US-18 — Search Resources

**As a** diploma student,

**I want to** search resources,

**so that** I can quickly find useful learning or career information.

---

# 9. Saved Items

### US-19 — Save an Item

**As a** logged-in student,

**I want to** save useful items,

**so that** I can return to them later.

### Items That Can Be Saved

- Opportunities
- Exams
- Colleges
- Resources

### Acceptance Criteria

- Student can save an item.
- Student can remove a saved item.
- Saved items are associated with the student's account.
- Student can view saved items from the Saved section.

---

# 10. Roadmap Progress

### US-20 — Track Roadmap Progress

**As a** student,

**I want to** mark roadmap steps as completed,

**so that** I can track my progress toward a career goal.

### Example

- Understand LE eligibility
- Find relevant exams
- Start preparation
- Apply
- Counselling

### Acceptance Criteria

- Student can mark a step as complete.
- Student can see completed and incomplete steps.
- Progress is stored against the student.
- Progress remains available when the student returns.

---

# 11. Feedback

### US-21 — Give Feedback

**As a** student,

**I want to** provide feedback,

**so that** DiploMate can improve its information and features.

### Acceptance Criteria

Student can:

- Mark information as helpful or not helpful.
- Suggest information they would like added.

---

# 12. Student Profile

### US-22 — Manage Profile

**As a** student,

**I want to** manage my profile,

**so that** my information remains up to date.

### Profile Information

- Name
- Email
- Branch
- Year
- Career goal

---

# 13. Admin

### US-23 — Admin Login

**As an** admin,

**I want to** securely log in,

**so that** only authorized users can manage platform content.

### Acceptance Criteria

- Admin has a protected account.
- Admin authentication is separate from normal student permissions.
- Unauthorized users cannot access admin features.


### US-24 — Manage Career Paths

**As an** admin,

**I want to** add, edit, and delete career-path content,

**so that** students receive useful and updated information.


### US-25 — Manage Exams

**As an** admin,

**I want to** add, edit, delete, and verify exam information,

**so that** students can rely on accurate information.


### US-26 — Manage Opportunities

**As an** admin,

**I want to** add, edit, delete, verify, and mark opportunities as expired,

**so that** students see relevant opportunities.


### US-27 — Manage Internships and Training

**As an** admin,

**I want to** add, edit, delete, and verify internship/training information,

**so that** students can discover relevant opportunities.


### US-28 — Manage Scholarships

**As an** admin,

**I want to** add, edit, delete, and verify scholarship information,

**so that** students can discover relevant scholarships.


### US-29 — Manage Jobs

**As an** admin,

**I want to** add, edit, delete, and verify job information,

**so that** students can discover relevant jobs.


### US-30 — Manage Resources

**As an** admin,

**I want to** add, edit, delete, and verify resources,

**so that** students have access to useful and reliable information.

---

# 14. Data Verification

### US-31 — Verify Content

**As an** admin,

**I want to** maintain verification information for external content,

**so that** students can identify whether information has been recently verified.

### Verification Metadata

Each relevant content item should maintain:

- Source URL
- Last Verified Date
- Verification Status

### Verification Status

- Verified
- Needs Re-verification
- Expired


### US-32 — View Items Needing Verification

**As an** admin,

**I want to** see content that needs verification,

**so that** I can review and update outdated information.

---

# 15. Admin Dashboard

### US-33 — View Admin Metrics

**As an** admin,

**I want to** see basic platform metrics,

**so that** I can understand the current state of the platform.

### MVP Metrics

- Total users
- Active users
- Total opportunities
- Total resources
- Items needing verification