import type { Editor } from '@tiptap/core';
import { db } from '../backend/db';

function extractTitleFromHTML(htmlString: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  const h1 = doc.querySelector('h1');
  if (h1 && h1.textContent && h1.textContent.trim() !== '') {
    return h1.textContent.trim();
  }

  return 'Untitled';
}

async function saveNote(editorContent: string) {
  try {
    const id = await db.notes.add({
      title: extractTitleFromHTML(editorContent),
      noteText: editorContent,
    });
    console.log(`Note saved with id:${id}`);
  } catch (error) {
    console.log('ERROR: ', error);
  }
}

function setEditorContent(content: string, editor: Editor) {
  try {
    editor.commands.setContent(content);
    console.log('INFO: Content set successfully.');
  } catch (error) {
    console.error('ERROR: ', error);
  }
}

export { extractTitleFromHTML, saveNote, setEditorContent };
