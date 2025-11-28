'use client';

import { EditorContent, EditorContext } from '@tiptap/react';
import { Save } from 'lucide-react';
import { saveNote } from '@/lib/text-editor-utils';
import { editor } from './EditorComponent';

function EditorView() {
  return (
    <>
      {editor && (
        <EditorContext.Provider value={{ editor }}>
          <EditorContent editor={editor} />
        </EditorContext.Provider>
      )}
      <button
        className="custom-bttn btn-medium"
        onClick={() => {
          saveNote(editor.getHTML());
          editor.commands.clearContent();
        }}
      >
        <Save />
      </button>
    </>
  );
}

export default EditorView;
