import React, {useState} from 'react'

export default function PasswordSecurityAnalyzer() {
 const [password, setPassword] = useState('')
 const [strenght,setStrenght] = useState(0)
 const[feedback,setFeedback] = useState([])
  const analyzePassword = (password
  ) => {
    let score = 0;
    const feedbackMessages = [];
    if (password.length >= 8) {
      score += 1;
    } else {
      feedbackMessages.push('Пароль должен содержать минимум 8 символов');
    }
     if (/[a-z]/.test(pwd)) {
      score += 1;
    } else {
      feedbackMessages.push('Добавьте строчные буквы (a-z)');
    }
     if (/[A-Z]/.test(pwd)) {
      score += 1;
    } else {
      feedbackMessages.push('Добавьте заглавные буквы (A-Z)');
    }
     if (/[0-9]/.test(pwd)) {
      score += 1;
    } else {
      feedbackMessages.push('Добавьте цифры (0-9)');
    } 
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd)) {
      score += 1;
    } else {
      feedbackMessages.push('Добавьте специальные символы (!@#$% и т.д.)');
    }
    if 
     (setPassword)(password)
    setStrenght(score)
    setFeedback(feedbackMessages)
  }
 return (
    <div><input type="text"onChange={e =>analyzePassword(e.target.value)} value={password} className="elementvalue"  />
    <div>{strenght}</div>
    </div>
  ) 
}