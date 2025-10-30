'use client';

import { EditorContent, EditorContext } from '@tiptap/react';
import { Editor } from '@tiptap/core';
import { TaskList, TaskItem } from '@tiptap/extension-list';
import StarterKit from '@tiptap/starter-kit';
import { Save } from 'lucide-react';
import { db } from '../backend/db';

const editor = new Editor({
  extensions: [StarterKit, TaskItem.configure({ nested: false }), TaskList],
  content: '<h1></h1>',
  autofocus: true,
  editorProps: {
    attributes: {
      class:
        'prose dark:prose-invert py-12 px-8 outline-none bg-gradient-to-br dark:from-zinc-800 from-zinc-100 rounded-xl inset-shadow-sm inset-shadow-zinc-50/50 shadow-xl focus:transition-all duration-300 ease-out selection:bg-blue-200 dark:selection:bg-blue-600 backdrop-blur-lg',
    },
  },
});

function CustomToolbar() {
  if (!editor) return null;

  return (
    <>
      {editor && (
        <div
          className="sticky top-0 z-1 flex bg-gradient-to-br dark:from-zinc-800
            from-zinc-100 rounded-2xl px-6 py-4 space-x-4 overflow-x-auto
            justify-center custom-scrollbar shadow-md inset-shadow-zinc-50/30
            inset-shadow-xs select-none h-[4.6rem] backdrop-blur-sm
            no-scrollbar"
        >
          <button
            className="custom-bttn btn-small"
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 1 }).run();
            }}
          >
            H1
          </button>
          <button
            className="custom-bttn btn-small"
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 2 }).run();
            }}
          >
            H2
          </button>
          <button
            className="custom-bttn btn-small"
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 3 }).run();
            }}
          >
            H3
          </button>
          <button
            className="custom-bttn btn-small"
            onClick={() => {
              editor.chain().focus().toggleBold().run();
            }}
          >
            <b>B</b>
          </button>
          <button
            className="custom-bttn btn-small"
            onClick={() => {
              editor.chain().focus().toggleItalic().run();
            }}
          >
            <i>I</i>
          </button>
          <button
            className="custom-bttn btn-small"
            onClick={() => {
              editor.chain().focus().toggleUnderline().run();
            }}
          >
            <u>U</u>
          </button>
          <button
            className="custom-bttn btn-small"
            onClick={() => {
              editor.chain().focus().toggleTaskList().run();
            }}
          >
            ✓
          </button>
          <button
            className="custom-bttn btn-small"
            onClick={() => {
              editor.chain().focus().toggleCodeBlock().run();
            }}
          >
            &lt;&gt;
          </button>
          <button
            className="custom-bttn btn-small"
            onClick={() => {
              editor.chain().focus().toggleBlockquote().run();
            }}
          >
            &quot;
          </button>
          <button
            className="custom-bttn btn-small"
            onClick={() => {
              editor.chain().focus().toggleStrike().run();
            }}
          >
            <s>S</s>
          </button>
          <button
            className="custom-bttn btn-small"
            onClick={() => {
              editor.chain().focus().toggleOrderedList().run();
            }}
          >
            1.
          </button>
          <button
            className="custom-bttn btn-small"
            onClick={() => {
              editor.chain().focus().toggleBulletList().run();
            }}
          >
            &bull;
          </button>
        </div>
      )}
    </>
  );
}

function CustomEditor() {
  if (!editor) return null;

  return (
    <>
      {editor && (
        <EditorContext.Provider value={{ editor }}>
          <EditorContent editor={editor} />
          {/*<DragHandle
            editor={editor}
            className="dark:bg-white/25 ring-1 dark:ring-white ring-black
              bg-black/25 rounded-md cursor-grab"
          >
            <GripHorizontal className="text-black dark:text-white" />
          </DragHandle>*/}
        </EditorContext.Provider>
      )}
      <button className="custom-bttn btn-medium" onClick={saveNote}>
        <Save />
      </button>
    </>
  );
}

async function saveNote() {
  try {
    const id = await db.notes.add({
      title: extractTitleFromHTML(editor.getHTML()),
      noteText: editor.getHTML(),
    });
    console.log(`Note saved with id:${id}`);
  } catch (error) {
    console.log('ERROR: ', error);
  }
}

function extractTitleFromHTML(htmlString: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  const h1 = doc.querySelector('h1');

  return h1 ? h1.textContent.trim() : 'Untitled';
}

export { CustomEditor, CustomToolbar };
