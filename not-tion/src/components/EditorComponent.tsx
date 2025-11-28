import { Editor } from '@tiptap/core';
import { TaskList, TaskItem } from '@tiptap/extension-list';
import StarterKit from '@tiptap/starter-kit';

export const editor = new Editor({
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
