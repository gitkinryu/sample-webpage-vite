import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  return (
    <div>
      <div>{count} 回押しました</div>
      <button onClick={() => setCount((state) => state + 1)}>ボタン</button>

      <h2>タスク一覧</h2>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          let task = inputRef.current.value;
          setTasks((state) => [...state, {
            todo: task,
            finished: false,
          }]);
          inputRef.current.value ="";
        }}
      >
        登録
      </button>
      <div
        style={{
          marginTop: "8px",
        }}
      >
        {tasks.map((task, index) => (
          <div
            style={{
              border: "1px solid #000",
              marginBottom: "4px",
              background: task.finished ? "#ccc" : "#fff",
            }}
            key={`task-${index}`}
          >
            <button onClick={() => {
              setTasks((state) => state.map((t, i) => {
                if (i === index) {
                  return {
                    ...t,
                    finished: true,
                  };
                }
                return t;
              }))
            }}>完了</button>
            <button onClick={() => {
              setTasks((state) => state.filter((_, i) => i !== index));
            }}>削除</button>
            {task.todo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
