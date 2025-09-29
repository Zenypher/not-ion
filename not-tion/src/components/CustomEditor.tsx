'use client';

import { useEditor, EditorContent, EditorContext } from '@tiptap/react';
import { TaskList, TaskItem } from '@tiptap/extension-list';
import StarterKit from '@tiptap/starter-kit';
import { BubbleMenu } from '@tiptap/react/menus';
import { clsx } from 'clsx';
import DragHandle from '@tiptap/extension-drag-handle-react';
import { GripHorizontal } from 'lucide-react';

function CustomEditor() {
  const editor = useEditor({
    extensions: [StarterKit, TaskItem.configure({ nested: true }), TaskList],
    content: '<h1></h1>',
    autofocus: true,
    editorProps: {
      attributes: {
        class:
          'prose dark:prose-invert py-4 px-10 outline-none bg-black/25 rounded-xl ring-1 dark:ring-white/25 ring-black/50 selection:bg-blue-200 dark:selection:bg-blue-600',
      },
    },
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <>
      <EditorContext.Provider value={{ editor }}>
        {editor && (
          <BubbleMenu editor={editor} options={{ placement: 'bottom-start' }}>
            <div
              className="dark:bg-black/25 bg-white/25 ring-1 dark:ring-black
                rounded-lg grid grid-cols-3 p-1 gap-2 transition-colors
                duration-300"
            >
              <button
                className={clsx('floating-menu-item', {
                  'is-active': editor.isActive('bold'),
                })}
                onClick={() => {
                  editor.chain().focus().toggleBold().run();
                }}
              >
                <b>B</b>
              </button>
              <button
                className={clsx('floating-menu-item', {
                  'is-active': editor.isActive('italic'),
                })}
                onClick={() => {
                  editor.chain().focus().toggleItalic().run();
                }}
              >
                <i>I</i>
              </button>
              <button
                className={clsx('floating-menu-item', {
                  'is-active': editor.isActive('underline'),
                })}
                onClick={() => {
                  editor.chain().focus().toggleUnderline().run();
                }}
              >
                <u>U</u>
              </button>
              <button
                className={clsx('floating-menu-item', {
                  'is-active': editor.isActive('heading', { level: 1 }),
                })}
                onClick={() => {
                  editor.chain().focus().toggleHeading({ level: 1 }).run();
                }}
              >
                H1
              </button>
              <button
                className={clsx('floating-menu-item', {
                  'is-active': editor.isActive('heading', { level: 2 }),
                })}
                onClick={() => {
                  editor.chain().focus().toggleHeading({ level: 2 }).run();
                }}
              >
                H2
              </button>
              <button
                className={clsx('floating-menu-item', {
                  'is-active': editor.isActive('heading', { level: 3 }),
                })}
                onClick={() => {
                  editor.chain().focus().toggleHeading({ level: 3 }).run();
                }}
              >
                H3
              </button>
              <button
                className={clsx('floating-menu-item', {
                  'is-active': editor.isActive('heading', { level: 3 }),
                })}
                onClick={() => {
                  editor.chain().focus().toggleTaskList().run();
                }}
              >
                Task Item
              </button>
            </div>
          </BubbleMenu>
        )}
        <EditorContent editor={editor} />
        <DragHandle
          editor={editor}
          className="dark:bg-black/25 ring-1 dark:ring-black bg-white/25
            rounded-md cursor-grab"
        >
          <GripHorizontal className="text-black dark:text-white" />
        </DragHandle>
      </EditorContext.Provider>
    </>
  );
}

export default CustomEditor;
