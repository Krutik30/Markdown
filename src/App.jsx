import React from "react";
import {marked} from "marked";
import './App.css';

const defaultMarkdown = `# React Markdown Previewer

## Type your Markdown in the Editor!
<br><br>

### Main functionality

- Preview window updates real time with markdown syntax
- The editor has some predefined input on page load
- BONUS: Use &lt;br&gt; for line breaks

<br>

\`Is the syntax highlighting even working?\`
\`\`\`javascript
let s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
<br>

> “If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.”
― Marcus Aurelius, Meditations 
<br>

![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)
<br>

Coded by **Stahlone**, 2019 for [freeCodeCamp](https://www.freecodecamp.org) Front End Libraries Challenges
`;

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();



function App() {
  const [text,setText] = React.useState(defaultMarkdown);

  return (
    <div className="Text-center px-4">
      <h1 className='p-4'>My Markdown Previewer</h1>
      <textarea 
        name='text' 
        id='editor' 
        cols={60}
        rows={10} 
        value={text} 
        className="textarea"
        onChange={e => setText(e.target.value)} >
    
      </textarea>
      <h3 className="mt-3">Output</h3>
      <Preview id="preview" markdown={text} />
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
