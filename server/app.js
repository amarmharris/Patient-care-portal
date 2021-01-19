const userRoutes = require("./src/routes/userRoute"); //bring in our user routes
app.use("/user", userRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  console.log(`http://localhost:${PORT}`)
});