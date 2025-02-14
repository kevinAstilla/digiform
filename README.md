# 📖 DIGIFORM

> **A digital form builder and response management system** where admins can create forms, and users can submit responses. Built with **React, React Router DOM, Express, TypeScript, and MongoDB**.

---

## 🚀 Features

### ✅ **What I Built & My Contributions**
- **🛠 Full-Stack Development**
  - Built a **React frontend** using **React Router DOM** for routing.
  - Developed a **REST API** with **Express & TypeScript**.
  - Integrated **MongoDB** for user, form ,and submission storage.
  - Implemented **JWT authentication with Passport.js** for secure login.

- **📄 Form Builder & Management**
  - Admins can **create, update, delete, and view forms**.
  - Users can **fill out forms and submit responses**.
  - Used **react-jsonschema-form** for dynamic form generation.

- **🖥️ UI/UX**
  - Created a **collapsible sidebar** with navigation.
  - Designed a **toggleable slide-in menu** for mobile users.
  - Applied **custom theming** using **CSS**.

- **⚡ Performance & Optimization**
  - Implemented **React `useCallback` and `useMemo`** for efficient rendering.
  - Used **lazy loading & code splitting** to improve performance.

- **🔒 Security & Authentication**
  - **Implemented JWT-based authentication** (stored in HttpOnly cookies).
  - Protected routes using **React Router loaders & authentication guards**.

---

## 🛠 Tech Stack

| **Frontend**  | **Backend**  | **Database**  | **Tools & Libraries**  |
|--------------|-------------|--------------|------------------|
| React, TypeScript, React Router DOM | Express.js, Node.js, TypeScript | MongoDB (Forms), MariaDB (Users) | Passport.js (Auth), Mongoose, TypeORM |
| Tailwind CSS, react-jsonschema-form | JWT, REST APIs |                  | Docker (for deployment), Postman (API testing) |

---

## 💻 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/digiform.git
cd digiform
```

### **2️⃣ Backend Setup**
```sh
cd backend
npm install
cp .env.example .env  # Add your environment variables
npm run dev  # Start backend server
```

### **3️⃣ Frontend Setup**
```sh
cd frontend
npm install
npm run dev  # Start frontend
```

### **4️⃣ Database Setup**
- **MongoDB**: Run your MongoDB instance.
- **MariaDB**: Configure your `.env` file with your database credentials.

---

## 📖 How It Works

### 🎯 **User Roles**

| **Role** | **Access** |
|---------|----------|
| **Admin** | Create, edit, and delete forms |
| **User** | Fill out and submit forms |
| **Public** | Can access public surveys (if enabled) |

### 🚀 **App Flow**
1️⃣ **Admin logs in** → Creates a form.  
2️⃣ **Users log in** → View and fill out forms.  
3️⃣ **Form submissions are stored** in MongoDB.  
4️⃣ **Admins can export data** for analysis.

---

## 🔍 API Endpoints

### **Auth Routes**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Logs in a user & returns JWT |
| POST | `/api/auth/register` | Registers a new user |
| GET | `/api/auth/me` | Gets current user info |

### **Form Management**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/forms` | Fetches all forms |
| POST | `/api/forms` | Creates a new form |
| GET | `/api/forms/:id` | Fetches a single form |
| DELETE | `/api/forms/:id` | Deletes a form |

---

## 🛠 Future Improvements

🔹 Implement WYSIWYG component for form creation
🔹 Implement registration or google account login

---

## 📜 License
This project is licensed under the **MIT License**.

---

### 📬 Contact
👨‍💻 **Your Name**  
🔗 GitHub: [kevinAstilla](https://github.com/kevinAstilla)  
🔗 LinkedIn: [Kevin Astilla](https://www.linkedin.com/in/kevinastilla/)
