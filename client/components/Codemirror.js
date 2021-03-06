import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

// import context object
// import { CodeContext } from '../state/contexts';

function CodeBox({ codeBoxName }) {
  //   const { codeState } = useContext(CodeContext);

  //   let code;
  //   codeState.showSchema
  //     ? (code = codeState.schema)
  //     : (code = codeState.resolver);

  function handleChange(editor, data, value) {
    console.log(value);
  }

  return (
    <div>
      <div className='codebox-title'>{codeBoxName}</div>
      <div className='codebox'>
        <CodeMirror
          onChange={handleChange}
          className='code-mirror-container'
          value={codeBoxName}
          options={{
            lineWrapping: true,
            // theme: 'dracula',
            lineNumbers: true,
            cursorScrollMargin: 48,
            indentUnit: 2,
            tabSize: 2,
            styleActiveLine: true,
            smartIndent: true,
            lineWrapping: true,
            lint: true,
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true,
          }}
        />
      </div>
    </div>
  );
}

export default CodeBox;
