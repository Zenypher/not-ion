'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { ListKit } from '@tiptap/extension-list';
import { DragHandle } from '@tiptap/extension-drag-handle-react';
import { GripHorizontalIcon } from 'lucide-react';

const CustomEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, ListKit],
    editorProps: {
      attributes: {
        class:
          'prose prose-sm prose-invert lg:prose-md xl:prose-lg bg-white/5 p-10 rounded-xl shadow-xl ring-1 ring-white/25 overflow-y-auto',
      },
    },
    content: '<h1>This is a test</h1>',
    autofocus: true,
    immediatelyRender: false,
  });

  return (
    <>
      <DragHandle
        editor={editor!}
        className="items-center justify-center cursor-grab text-white"
      >
        <GripHorizontalIcon />
      </DragHandle>
      <EditorContent editor={editor} />
    </>
  );
};

export default CustomEditor;
