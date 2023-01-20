import React from "react";
import {marked} from "marked";
import './App.css';

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();



function App() {
  const [text,setText] = React.useState("");

  return (
    <div className="Text-center px-4">
      <h1 className='p-4'>My Markdown Previewer</h1>
      <textarea 
        name='text' 
        id='text' 
        cols={60}
        rows={10} 
        value={text} 
        className="textarea"
        onChange={e => setText(e.target.value)} >
    
      </textarea>
      <h3 className="mt-3">Output</h3>
      <Preview markdown={text} />
    </div>
  );
}

function Preview({markdown}){
  return (
    <div className="box" dangerouslySetInnerHTML={{
      __html: marked(markdown , {renderer: renderer}),
    }} id="preview">
    </div>
  )
}

export default App;
