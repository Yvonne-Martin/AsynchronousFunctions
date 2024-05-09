//QUESTION 1
async function Message(myMessage, delaytime) {
  await new Promise(resolve => setTimeout(resolve, delaytime));
  console.log(myMessage);
}

Message("I am AkiraChix", 3000); 



//QUESTION 2
const userId = [1, 2, 3, 4, 5];

async function userInfo() {
  for (const id of userId) {
    try {
      const userInfo = await getUserData(id);
      console.log(userInfo);
    } catch (errorMessage) {
      console.log(`There was an error finding the info for user ${id}: ${errorMessage}`);
    }
  }
}

userInfo();
//QUESTION 3
async function taskPerformance() {
  try {
    await taskPerformance();
    console.log("The task is a success");
  } catch (errorMessage) {
    console.log("Task has failed:", errorMessage);
  }
}

taskPerformance();

//QUESTION 4
function task(taskName, failurePossibility) {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > failurePossibility) {
      resolve(`Task '${taskName}'has succeeded!`);
    }
  });
}
async function trialExecution(task, trials, failureProbability) {
  let attempt = 1;
  while (attempt <= trials) {
    try {
      const result = await unstableTask(task, failureProbability);
      console.log(result);
      return result;
    } 
  }
  console.log(`Task '${task}' failed after ${trials} attempts.`);
}

trialExecution("Unstable Task", 9, 0.9);