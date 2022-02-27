const db = require("../db");
const employee = require("../models/employee");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const Employees = [
    {
      first_name: "Joy",
      last_name: "Flarence",
      email: "haohappy@gmail.com",
      job_title: "teacher",
      address: {
        street: "23th Ave",
        city: "New York",
        state: "NY",
        zip: "15012",
      },
    },
    {
      first_name: "Miguel",
      last_name: "Lo",
      email: "MiguelLo@YOLO.com",
      job_title: "Software Engineering Instructor",
      address: {
        street: "5th Ave",
        city: "New York",
        state: "NY",
        zip: "10010",
      },
    },
    {
      first_name: "Andrew",
      last_name: "Brown",
      email: "Andrew102@gmail.com",
      job_title: "Back-End Developer",
      address: {
        street: "44 Jason st",
        city: "Bergenfield",
        state: "NJ",
        zip: "69034",
      },
    },
    {
      first_name: "Candice",
      last_name: "Yang",
      email: "Candylove@gmail.com",
      job_title: "Personal Trainer",
      address: {
        street: "2 Redneck st",
        city: "Fort Lee",
        state: "NJ",
        zip: "39580",
      },
    },
    {
      first_name: "Jay",
      last_name: "Solon",
      email: "JJ234@gmail.com",
      job_title: "Art Director",
      address: {
        street: "34 Ave",
        city: "Passaic",
        state: "NJ",
        zip: "17244",
      },
    },
  ];
  await employee.insertMany(Employees);
  console.log("Created employees!");
};

const run = async () => {
  await main();
  db.close();
};

run();
