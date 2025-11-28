import { editor } from '@/components/EditorComponent';
import clsx from 'clsx';

function CustomToolbar() {
  const toolbarButtons = [
    {
      content: 'H1',
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: ['heading', { level: 1 }],
    },
    {
      content: 'H2',
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: ['heading', { level: 2 }],
    },
    {
      content: 'H3',
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: ['heading', { level: 3 }],
    },
    {
      content: <b>B</b>,
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: 'bold',
    },
    {
      content: <i>I</i>,
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: 'italic',
    },
    {
      content: <u>U</u>,
      action: () => editor.chain().focus().toggleUnderline().run(),
      isActive: 'underline',
    },
    {
      content: '✓',
      action: () => editor.chain().focus().toggleTaskList().run(),
      isActive: 'tasklist',
    },
    {
      content: '<>',
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: 'codeblock',
    },
    {
      content: '"',
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: 'blockquote',
    },
    {
      content: <s>S</s>,
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: 'strike',
    },
    {
      content: '1.',
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: 'orderedlist',
    },
    {
      content: '•',
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: 'bulletlist',
    },
  ];

  return (
    <>
      {editor && (
        <div
          className="sticky top-0 z-1 flex bg-gradient-to-br dark:from-zinc-800
            from-zinc-100 rounded-3xl px-6 py-4 space-x-4 overflow-x-auto
            custom-scrollbar shadow-md inset-shadow-zinc-50/30 inset-shadow-xs
            select-none backdrop-blur-md no-scrollbar lg:justify-center
            h-[4.6rem]"
        >
          {toolbarButtons.map((btn, index) => (
            <button
              key={index}
              className={clsx(
                'custom-bttn btn-small',
                editor.isActive(btn.isActive) ? 'is-active' : ''
              )}
              onClick={btn.action}
              type="button"
            >
              {btn.content}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default CustomToolbar;
