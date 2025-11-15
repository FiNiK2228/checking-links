import React, { useState } from 'react';

export const SecurityChecklist = () => {
  const [checklist, setChecklist] = useState([
    { id: 1, text: <h3>Использовать надежные пароли (минимум 12 символов)</h3>, completed: false },
    { id: 2, text: <h3>Включить двухфакторную аутентификацию</h3>, completed: false },
    { id: 3, text: <h3>Регулярно обновлять программное обеспечение</h3>, completed: false },
    { id: 4, text: <h3>Установить антивирусное ПО</h3>, completed: false },
    { id: 5, text: <h3>Делать резервные копии важных данных</h3>, completed: false },
    { id: 6, text: <h3>Не открывать подозрительные письма и ссылки</h3>, completed: false },
    { id: 7, text: <h3>Использовать VPN в публичных сетях</h3>, completed: false },
    { id: 8, text: <h3>Проверять настройки конфиденциальности в соцсетях</h3>, completed: false },
    { id: 9, text: <h3>Не использовать публичные Wi-Fi для банковских операций</h3>, completed: false },
    { id: 10, text: <h3>Регулярно менять пароли</h3>, completed: false }
  ]);

  const toggleItem = (id) => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const completedCount = checklist.filter(item => item.completed).length;
  const progress = (completedCount / checklist.length) * 100;

  return (
    <div className="cyber-checklist">
      <h2>Чек-лист кибербезопасности</h2>
      
      <div className="progress-section">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p>Выполнено: {completedCount} из {checklist.length}</p>
      </div>

      <div className="checklist-items">
        {checklist.map(item => (
          <div 
            key={item.id} 
            className={`checklist-item ${item.completed ? 'completed' : ''}`}
            onClick={() => toggleItem(item.id)}
          >
            <div className="checkbox">
              {item.completed && '✓'}
            </div>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <div className="checklist-footer">
        <button 
          className="reset-btn"
          onClick={() => setChecklist(checklist.map(item => ({ ...item, completed: false })))}
        >
          Сбросить все
        </button>
      </div>
    </div>
  );
}

