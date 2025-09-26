import { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { ListKit } from '@tiptap/extension-list';
import StarterKit from '@tiptap/starter-kit';
import { db } from '../ds';

export default function CustomDixieEditor() {
  const [htmlContent, setHtmlContent] = useState<string>('');

  const editor = useEditor({
    extensions: [StarterKit, ListKit],
    content: '',
    onUpdate({ editor }) {
      setHtmlContent(editor.getHTML());
    },
  });

  useEffect(() => {
    const loadNote = async () => {
      const lastNote = await db.documents.orderBy('id').last();
      if (lastNote && editor) {
        editor.commands.setContent(lastNote.content);
        setHtmlContent(lastNote.content);
      }
    };
    loadNote();
  }, [editor]);

  const handleSave = async () => {
    if (!htmlContent) return;
    await db.documents.add({ content: htmlContent });
  };

  return (
    <div className="p-4 flex flex-col">
      <EditorContent
        editor={editor}
        className="border-2 rounded-2xl bg-white/15 p-2 prose prose-invert
          shadow-lg"
      />
      <button
        onClick={handleSave}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded
          hover:bg-blue-200 hover:text-black transition-colors duration-200
          ease-in-out hover:cursor-pointer self-start font-bold"
      >
        Save
      </button>
    </div>
  );
}
