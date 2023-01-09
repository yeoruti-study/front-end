import {useState} from 'react';

const useInput = () => {
  const [input, setInput] = useState('');
  const reset = () => setInput('');

  const onChange = e => setInput(e.target.value);    
  return [input, onChange, reset];
}

export default useInput;