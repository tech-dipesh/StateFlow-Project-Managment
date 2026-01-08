
export default function TaskTable({tasks}) {
  return (
    <div className="h-3/4 flex flex-col items-center overflow-auto p-8">
      <h1 className="text-3xl">Task Table</h1>
      <table className="border-2">
        <thead className="px-4 py-">
          <tr className="px-4 py-4 gap-5 p-5">
          <th className="p-5">Title</th>
          <th className="p-5">Status</th>
          </tr>
        </thead>
          <tbody>
              {tasks.map(task=>(
            <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.status}</td>
            </tr>
              ))}
          </tbody>
      </table>
    </div>
  )
}
