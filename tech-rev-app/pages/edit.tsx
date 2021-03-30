import React, { useEffect, useRef, useState } from 'react'
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css'

const DraftJSEditor = () => {
  const [editorEnable, setEditorEnable] = useState(false)
  const [editorState, setEditorState] = useState(() => 
    EditorState.createEmpty()
  );
  const editorRef = useRef<Editor>(null)

  useEffect(() => {
    setEditorEnable(true)
  }, [])

  const handleBoldClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"))
  }

  return (
    <div>
        <h1 className="text-center text-3xl pt-10">記事を書く</h1>
        <div onClick={() => {editorRef.current?.focus()}}>
        {editorEnable && (
            <div className="p-10">
            <button className="bg-gray-100" onMouseDown={handleBoldClick}>Bold</button>
            <Editor
            ref={editorRef}
            placeholder="文字を入力してください"
            editorKey="test-key"
            editorState={editorState}
            onChange={setEditorState}
            />
            </div>
        )}
        </div>
    </div>
  );
}

export default DraftJSEditor