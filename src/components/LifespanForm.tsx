import { useState } from 'react';
import Picker from 'react-mobile-picker';
import './LifespanForm.css';

interface LifespanFormProps {
  onSubmit: (age: number, sex: string) => void;
}

const LifespanForm = ({ onSubmit }: LifespanFormProps) => {
  // Generate age values from 1 to 120
  const ageOptions = Array.from({ length: 120 }, (_, i) => String(i + 1));
  
  // Use state object for picker
  const [pickerValue, setPickerValue] = useState({ age: '30' });
  const [sex, setSex] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!sex) {
      setError('Please select your sex');
      return;
    }
    
    setError('');
    onSubmit(Number(pickerValue.age), sex);
  };

  return (
    <div className="lifespan-form-container">
      <form onSubmit={handleSubmit} className="lifespan-form">
        <h2>How long do you have left?</h2>
        
        <div className="form-group">
          <label htmlFor="age-picker">Your Age:</label>
          <div className="age-picker-container">
            <Picker value={pickerValue} onChange={setPickerValue} height={120} wheelMode='natural'>
              <Picker.Column name="age">
                {ageOptions.map(age => (
                  <Picker.Item key={age} value={age}>
                    {age}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
          </div>
        </div>
        
        <div className="form-group">
          <div className="radio-group">
            <div className="radio-option">
              <input
                id="sex-male"
                type="radio"
                name="sex"
                value="male"
                checked={sex === 'male'}
                onChange={() => setSex('male')}
              />
              <label htmlFor="sex-male">Male</label>
            </div>
            <div className="radio-option">
              <input
                id="sex-female"
                type="radio"
                name="sex"
                value="female"
                checked={sex === 'female'}
                onChange={() => setSex('female')}
              />
              <label htmlFor="sex-female">Female</label>
            </div>
          </div>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <button type="submit" className="submit-button">
          Calculate My Remaining Time
        </button>
      </form>
    </div>
  );
};

export default LifespanForm;
