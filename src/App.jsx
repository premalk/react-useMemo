import React, {useState,useMemo} from 'react';
const App = () => {
  const [name, setName] = useState('');
  const [modifiedName, setModifiedName] = useState('');
  const handleOnChange = (event) => {
    setName(event.target.value);
  }
  const handleSubmit = () => {
    setModifiedName(name);
  }
  const titleName = useMemo(()=>{
    console.log('hola');
    return `${modifiedName} is a Software Engineer`;
  },[modifiedName]);
  return (
    <div>
        <input type="text" value={name} onChange={handleOnChange} />
        <button type="button" onClick={handleSubmit}>Submit</button>
        <Title name={titleName} />
    </div>
  );
};
export default App;

const Title = ({name}) => {
  return <h1>{name}</h1>
}