const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();
const userRoutes = require ('./routes/users');
const categoryRoutes = require("./routes/categories");
const certificationRoutes = require("./routes/certifications");
const contactRoutes = require("./routes/contacts");
const curriculumRoutes = require("./routes/curriculums");
const imageRoutes = require("./routes/images");
const skillRoutes = require("./routes/skills");
const stackRoutes = require("./routes/stacks");
const workRoutes = require("./routes/works");
const workStackRoutes = require("./routes/worksStacks");


const app = express();
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());


app.use('/api/auth', userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/certifications", certificationRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/curriculums", curriculumRoutes);
app.use("/api/stacks", stackRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/works", workRoutes);
app.use("/api/worksStacks", workStackRoutes);

module.exports = app;