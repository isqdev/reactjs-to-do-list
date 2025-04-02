export function Stats() {
  return (
    <div className="stats-container">
      <div className="stats">
        <div className="created">
          <p>
            Tarefas criadas<span className="counter">{0}</span>
          </p>
        </div> 
        <div className="completed">
          <p>
            Concluídas<span className="counter">{0}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
