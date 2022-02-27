//CRUD actions
const db = require("./db");
const employee = require("./models/employee");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const findAll = async () => {
  const All = await employee.find({});
  console.log(All);
};

const createOne = async () => {
  const newEmployee = new employee({
    _id: "5e417175c82e0bd7af0f2f04",
    first_name: "Goby",
    last_name: "Lam",
    email: "newone12@gmail.com",
    job_title: "Graphic Designer",
    address: {
      street: "343th Ave",
      city: "New York",
      state: "NY",
      zip: "10003",
    },
  });
  await newEmployee.save();
  console.log("Created Employee:", newEmployee);
};

const createMany = async () => {
  const newMany = await employee.insertMany([
    {
      _id: "3e417175c82e0bd7af0f2f04",
      first_name: "Yo",
      last_name: "Honda",
      email: "hondahonda2@gmail.com",
      job_title: "Influencer",
      address: {
        street: "34th Ave",
        city: "New York",
        state: "NY",
        zip: "45636",
      },
    },
    {
      _id: "1e417175c82e0bd7af0f2f04",
      first_name: "Little",
      last_name: "Pammy",
      email: "pam334@gmail.com",
      job_title: "Sales Manager",
      address: {
        street: "111th Ave",
        city: "New York",
        state: "NY",
        zip: "10003",
      },
    },
    {
      _id: "0e417175c82e0bd7af0f2f04",
      first_name: "Warby",
      last_name: "Parker",
      email: "warby12@gmail.com",
      job_title: "Rapper",
      address: {
        street: "506th Ave",
        city: "New York",
        state: "NY",
        zip: "10003",
      },
    },
  ]);
  console.log(newMany);
};

const updateEmployee = async () => {
  const updated = await employee.updateOne(
    { first_name: "Warby" },
    { first_name: "Travis", last_name: "Scott" }
  );
  console.log(updated);
};

const deleteEmployee = async () => {
  const deleted = await employee.deleteOne({ first_name: "Little" });
  console.log(deleted);
};

//it prints id also, I want to fix it
const listNames = async () => {
  const fullNames = await employee.find({}, "first_name last_name");
  console.log(fullNames);
};
const run = async () => {
  //   await findAll();
  //   await createOne();
  //   await createMany();
  //   await updateEmployee();
  //   await deleteEmployee();
  await listNames();
  db.close();
};

run();
