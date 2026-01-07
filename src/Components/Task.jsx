
// What it means conceptually:
// * Create a task
// * Task has:
//   * id
//   * title
//   * status (To Do → In Progress → Done → Blocked)
// * You can **change status**

import TaskInput from "./TaskInput";

export default function Task() {
  return (
    <div>
        <TaskInput/>
    </div>
  )
}
