# 📌 React MongoDB Cloudinary Gallery  

🖼️ A full-stack image gallery built with **React (Vite) + Express + MongoDB + Cloudinary**. Users can **upload images**, which are **stored in Cloudinary**, while only their **URLs are saved in MongoDB**. The frontend fetches these URLs and displays the images in a beautiful, responsive gallery.

---

## 🚀 Features
✅ **Image Upload:** Users can upload images via a simple UI.  
✅ **Cloud Storage (Cloudinary):** Images are **not stored locally** but on **Cloudinary’s CDN**.  
✅ **MongoDB Storage:** Only **image URLs** are stored in MongoDB for efficiency.  
✅ **Express Backend:** A simple REST API for handling uploads and fetching images.  
✅ **React Frontend:** A clean, responsive gallery to display stored images.  

---

## 🛠️ Tech Stack
### Frontend (React + Vite)
- React (Vite)
- Axios (for API requests)
- CSS Modules for styling

### Backend (Node.js + Express)
- Express.js
- Multer (for handling file uploads)
- Cloudinary (for storing images)
- MongoDB & Mongoose (for database storage)
- dotenv (for managing environment variables)

---

## ⚙️ How Image Storage Works (Cloudinary Service)
📌 **Step 1:** A user selects an image and uploads it via the frontend.  
📌 **Step 2:** The image is sent to the Express backend (`/upload` route).  
📌 **Step 3:** The backend uses **Multer** to handle file uploads.  
📌 **Step 4:** The file is **uploaded to Cloudinary**, which returns a **secure URL**.  
📌 **Step 5:** This **URL is stored in MongoDB**, instead of the actual image.  
📌 **Step 6:** The frontend fetches these URLs from the backend (`/images`) and displays them using `<img src={imageUrl} />`.  

📍 **This approach is efficient because:**  
✅ No need to store images in the database.  
✅ Cloudinary optimizes and delivers images via **CDN** for fast loading.  

---

## 📂 Project Structure
```
React_MongoDB_Cloudinary_Gallery/
│── image-backend/
│   ├── models/
│   │   ├── ImageModel.js        # Mongoose schema for storing image URLs
│   ├── config/
│   │   ├── cloudinaryConfig.js  # Cloudinary configuration
│   │   ├── multerConfig.js      # Multer setup for handling uploads
│   ├── server.js                # Express backend setup
|   ├── .env                     # Environment variables (MongoDB & Cloudinary Keys)
│
│── image-frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ImageGallery.jsx 
|   |   |   ├── ImageGallery.css
|   |   |   ├── ImageUpload.jsx
│   │   ├── api/
│   │   │   ├── imageApi.js       # API calls to backend
│   │   ├── App.jsx               # Main app component
│   │   ├── index.css             # Global styles
│   |   ├── .env
│   |                  
│── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Sithum-Bimsara/React_MongoDB_Cloudinary_Gallery.git
cd React_MongoDB_Cloudinary_Gallery
```

### 2️⃣ Set Up the Backend
```sh
cd backend
npm install
```

### 3️⃣ Configure Environment Variables  
Create a `.env` file inside the `image-backend/` directory and add the following:  
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Create a `.env` file inside the `image-frontend/` directory and add the following:  
```env
VITE_API_BASE_URL=http://localhost:5000
```

### 4️⃣ Run the Backend
```sh
nodemon server.js
```
_Backend will run on_ `http://localhost:5000`

---

### 5️⃣ Set Up the Frontend
```sh
cd frontend
npm install
```

### 6️⃣ Run the Frontend
```sh
npm run dev
```
_Frontend will run on_ `http://localhost:5173`

---

## 📌 API Endpoints
### 1️⃣ Upload an Image
```http
POST /upload
```
- **Request:** `multipart/form-data` with `image` field.  
- **Response:** `{ "success": true, "imageUrl": "https://res.cloudinary.com/.../image.jpg" }`  

### 2️⃣ Get All Images
```http
GET /images
```
- **Response:** Returns an array of image objects `{ "_id": "123", "imageUrl": "https://..." }`  

---

## 🛠️ Tools & Services Used
🔹 **Cloudinary** - To store and deliver images via CDN.  
🔹 **MongoDB Atlas** - Cloud-based MongoDB for storing image URLs.  
🔹 **Express.js** - Backend server for handling API requests.  
🔹 **React.js** - Frontend for image upload and display.  

---

## 🎯 Future Improvements
✅ Add user authentication (so each user has their own gallery)  
✅ Implement image categorization or tagging  
✅ Add drag-and-drop image upload  

---

## 📜 License
This project is **MIT Licensed**. Feel free to use and modify it. 🚀  

---

