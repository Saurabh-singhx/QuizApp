const data = [
  {
    question: "Which data structure uses LIFO (Last In First Out) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: "Stack"
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Question Language",
      "Simple Query Language",
      "Structured Query Language",
      "Server Query Language"
    ],
    answer: "Structured Query Language"
  },
  {
    question: "Which HTTP method is used to update a resource completely?",
    options: ["GET", "POST", "PATCH", "PUT"],
    answer: "PUT"
  },
  {
    question: "In Git, which command is used to create a new branch?",
    options: ["git init", "git branch", "git commit", "git clone"],
    answer: "git branch"
  },
  {
    question: "Which one of the following is a NoSQL database?",
    options: ["PostgreSQL", "MongoDB", "MySQL", "Oracle"],
    answer: "MongoDB"
  }
];

export const setLocalStorage = () => {
  // Check if localStorage already has the data
  localStorage.setItem("data", JSON.stringify(data));
};
export const getlocaldata=()=>{
    return JSON.parse(localStorage.getItem("data"));
}
