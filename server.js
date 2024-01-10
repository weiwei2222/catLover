// bring in all dependencies
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Import all Routes
// import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/usersRoutes.js";
import postRoutes from "./routes/postsRoutes.js";

// PORT
const PORT = process.env.PORT || 3005;
// configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Connect to the database
import MongoDB from "./config/database.js";
MongoDB();

// File storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// // Routes with files
// app.post("/auth/register", upload.single("picture"), register);
// app.post("/posts", verifyToken, upload.single("picture"), createPost);

// Routes
// app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(PORT, function () {
  console.log(`Express app running on port: ${PORT}`);
});
