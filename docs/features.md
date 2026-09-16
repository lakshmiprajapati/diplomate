# DiploMate — Feature Specification

## 1. Authentication

### 1.1 Registration

**Actor:** Student

**Precondition:** Student is not logged in.

**Input:**
- Name
- Email
- Password

**Expected Result:**
- Account is created.
- Student is directed to onboarding.

**Possible Errors:**
- Email already exists.
- Invalid email.
- Invalid password.
- Missing required fields.

---

### 1.2 Login

**Actor:** Student

**Precondition:** Student has an account.

**Input:**
- Email
- Password

**Expected Result:**
- Credentials are validated.
- Student is authenticated.
- Student can access protected features.

**Possible Errors:**
- Invalid email.
- Incorrect password.
- Missing credentials.

---

# 2. Onboarding

### 2.1 Branch Selection

**Actor:** Student

**Input:**
- CSE / IT
- Electronics

**Expected Result:**
- Selected branch is stored in the student's profile.

---

### 2.2 Year Selection

**Actor:** Student

**Input:**
- 1st Year
- 2nd Year
- 3rd Year

**Expected Result:**
- Selected year is stored in the student's profile.

---

### 2.3 Career Goal Selection

**Actor:** Student

**Input:**
- B.Tech Lateral Entry
- Private Job
- Government Job
- Freelancing
- Not Sure Yet

**Expected Result:**
- Selected goal is stored in the student's profile.
- Goal can be used for dashboard personalization.

---

# 3. Dashboard

### 3.1 Personalized Dashboard

**Actor:** Authenticated Student

**Precondition:** Student has completed onboarding.

**Expected Result:**
- Student sees their name.
- Student sees branch, year and goal.
- Relevant career paths are displayed.
- Relevant next steps are displayed.
- Relevant opportunities/resources are displayed.
- Roadmap progress is displayed where applicable.

---

# 4. Career Paths

### 4.1 View Career Paths

**Actor:** Student

**Expected Result:**
Student can view:

- B.Tech Lateral Entry
- Jobs
- Government Jobs & Exams
- Freelancing

---

### 4.2 View Career Path Details

**Actor:** Student

**Expected Result:**
Student can view structured information about the selected career path.

---

### 4.3 B.Tech Lateral Entry Path

**Expected Result:**

Student can understand:

1. Eligibility
2. Relevant exams
3. Preparation
4. Application
5. Counselling
6. College selection
7. Admission

---

# 5. Engineering Starter Kit

### 5.1 View Starter Kit

**Actor:** Student

**Expected Result:**

Student can explore:

- DSA
- Git & GitHub
- LeetCode
- Unstop
- Hackathons
- Internships
- LinkedIn
- Resume
- Open Source

---

### 5.2 Starter Kit Topic

Each topic should provide:

- What is it?
- Why is it useful?
- When should you start?
- How do you start?
- Useful links/resources

---

# 6. Internships & Training

### 6.1 Browse Internships

**Actor:** Student

**Expected Result:**

Each internship/training listing can show:

- Title
- Organization
- Type
- Eligibility
- Branch
- Mode
- Deadline
- Official link
- Verification status

---

### 6.2 Filter Internships

**Filters:**

- Branch
- Type

---

# 7. Opportunities

### 7.1 Browse Opportunities

**Actor:** Student

**MVP Categories:**

- Hackathons
- Scholarships

---

### 7.2 Opportunity Details

Each opportunity can show:

- Title
- Organization
- Eligibility
- Relevant branch
- Deadline
- Description
- Official website
- Save option
- Last verified date

---

### 7.3 Search

**Actor:** Student

**Input:**
Search text.

**Expected Result:**
Relevant exams, opportunities or resources are returned.

---

### 7.4 Filter Opportunities

**Filters:**

- Branch
- Type
- Deadline

---

# 8. Resources

### 8.1 Browse Resources

**Categories:**

- B.Tech / LE
- DSA / Coding
- Electronics
- Career
- Resume
- Interview

---

### 8.2 Resource Details

Each resource contains:

- Title
- Description
- Who is it for?
- Link

---

# 9. Saved Items

### 9.1 Save Item

**Actor:** Authenticated Student

**Precondition:** Student is logged in.

**Action:** Student selects Save.

**Expected Result:**
- Item is saved to the student's saved items.
- Saved item becomes visible in Saved section.

---

### 9.2 Remove Saved Item

**Actor:** Authenticated Student

**Action:** Student removes bookmark.

**Expected Result:**
- Item is removed from saved items.

---

### 9.3 Saved Content Types

Students can save:

- Opportunities
- Exams
- Colleges
- Resources

---

# 10. Roadmap

### 10.1 View Roadmap

**Actor:** Student

**Expected Result:**
Student can view steps associated with a career path.

---

### 10.2 Complete Roadmap Step

**Actor:** Authenticated Student

**Action:** Student marks a step complete.

**Expected Result:**
- Step becomes completed.
- Progress is stored against the student.

---

# 11. Feedback

### 11.1 Helpful Feedback

Student can select:

- Yes
- No

for:

> Was this helpful?

---

### 11.2 Suggest Information

Student can submit:

> What information would you like us to add?

---

# 12. Admin

### 12.1 Admin Login

**Actor:** Admin

**Precondition:** Valid admin credentials.

**Expected Result:**
Admin accesses protected admin dashboard.

---

### 12.2 Content Management

Admin can manage:

- Career Paths
- Exams
- Opportunities
- Internships / Training
- Scholarships
- Jobs
- Resources

Management includes appropriate:

- Add
- Edit
- Delete
- Verify

---

# 13. Verification

### 13.1 Verify Content

Important external information should contain:

- Source URL
- Last Verified Date
- Verification Status

---

### 13.2 Verification Status

Possible statuses:

- Verified
- Needs Re-verification
- Expired

---

### 13.3 Verification Dashboard

Admin can view items that need verification.

---

# 14. Admin Metrics

Admin dashboard should display:

- Total users
- Active users
- Total opportunities
- Total resources
- Items needing verification