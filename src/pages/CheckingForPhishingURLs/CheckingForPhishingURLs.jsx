import React from 'react'

export default function CheckingForPhishingURLs(){
const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Функция для имитации проверки URL
  const checkUrlSafety = async (urlToCheck) => {
    // Имитация запроса к API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Простая логика определения "опасных" URL
    const dangerousPatterns = [
      'hack', 'malware', 'virus', 'phishing', 'trojan',
      'worm', 'ransomware', 'spyware', 'keylogger', 'exploit',
      'fake', 'scam', 'fraud', 'cheat', 'crack'
    ];
    
    const suspiciousDomains = [
      'danger-site.com', 'malicious-domain.net', 'phishing-page.org',
      'untrusted-website.xyz', 'suspicious-link.biz'
    ];
    
    const urlLower = urlToCheck.toLowerCase();
    
    // Проверяем на наличие опасных паттернов
    const hasDangerousPattern = dangerousPatterns.some(pattern => 
      urlLower.includes(pattern)
    );
    
    // Проверяем на подозрительные домены
    const hasSuspiciousDomain = suspiciousDomains.some(domain =>
      urlLower.includes(domain)
    );
    
    // Проверяем длину URL (очень длинные URL могут быть подозрительными)
    const isVeryLongUrl = urlToCheck.length > 150;
    
    // Случайный фактор для демонстрации (10% шанс опасной ссылки)
    const randomFactor = Math.random() < 0.1;
    
    if (hasDangerousPattern || hasSuspiciousDomain || isVeryLongUrl || randomFactor) {
      return 'dangerous';
    } else {
      return 'safe';
    }
  };

  const checkUrl = async () => {
    if (!url) {
      setError('Пожалуйста, введите URL');
      return;
    }

    // Базовая валидация URL
    try {
      new URL(url);
    } catch (e) {
      setError('Пожалуйста, введите корректный URL (например: https://example.com)');
      return;
    }

    setLoading(true);
    setError('');
    setResult('');

    try {
      const safetyResult = await checkUrlSafety(url);
      setResult(safetyResult);
    } catch (err) {
      setError('Произошла ошибка при проверке URL');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUrl();
  };

  const handleExampleCheck = (exampleUrl, type) => {
    setUrl(exampleUrl);
    // Автоматическая проверка через секунду
    setTimeout(() => {
      setResult(type);
    }, 100);
  };

  return (
    <div className="App">
      <div className="container">
        <h1> Проверка безопасности URL</h1>
        <p>Проверьте ссылку на наличие потенциальных угроз</p>
        
        <form onSubmit={handleSubmit} className="url-form">
          <div className="input-group">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Введите URL для проверки (например: https://example.com)"
              className="url-input"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="check-button"
            >
              {loading ? ' Проверка...' : ' Проверить'}
            </button>
          </div>
        </form>

        <div className="examples">
          <h4>Примеры для тестирования:</h4>
          <div className="example-buttons">
            <button 
              onClick={() => handleExampleCheck('https://google.com', 'safe')}
              className="example-btn safe"
            >
              Безопасная ссылка
            </button>
            <button 
              onClick={() => handleExampleCheck('https://malicious-domain.net/phishing-page', 'dangerous')}
              className="example-btn dangerous"
            >
              Опасная ссылка
            </button>
          </div>
        </div>

        {error && (
          <div className="error-message">
             {error}
          </div>
        )}

        {result && (
          <div className={`result ${result}`}>
            {result === 'safe' ? (
              <>
                <div className="result-icon safe"></div>
                <div className="result-text">
                  <h3> Безопасно</h3>
                  <p>Ссылка не содержит известных угроз и выглядит безопасной</p>
                </div>
              </>
            ) : (
              <>
                <div className="result-icon dangerous"></div>
                <div className="result-text">
                  <h3> Опасная ссылка</h3>
                  <p>Обнаружены потенциальные угрозы! Не переходите по этой ссылке.</p>
                </div>
              </>
            )}
          </div>
        )}

        <div className="info">
          <h4> Как работает проверка:</h4>
          <ul>
            <li>Анализ URL на наличие подозрительных ключевых слов</li>
            <li>Проверка домена на известные опасные паттерны</li>
            <li>Анализ структуры URL</li>
            <li>Проверка длины и формата ссылки</li>
          </ul>
          
          <div className="warning">
            <strong>⚠ Внимание:</strong> Это демонстрационная система. 
            Для реальной проверки безопасности используйте профессиональные антивирусные решения.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>CheckingForPhishingURLs
        
    </div>
  )
}
