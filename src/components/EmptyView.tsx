export function EmptyView () {
    return (
    <div className="no-tasks-display hidden">
        <div className="line"></div>  
        <img src="src\assets\Clipboard.svg" alt="empty list" />
        <p className="main-message">Você ainda não tem tarefas cadastradas</p>
        <p className="message">Crie tarefas e organize seus itens a fazer</p>
    </div>
    );
}