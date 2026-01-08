export function formatIslamicResponse(text: string): string {
  // Replace Arabic quotes with proper HTML structure
  const arabicQuoteRegex = /\[(Arabic|Quran|Hadith)\](.*?)\[\/\1\]/g;
  text = text.replace(arabicQuoteRegex, (_, type, content) => `
    <div class="arabic">${content.trim()}</div>
  `);

  // Format translations
  const translationRegex = /\[Translation\](.*?)\[\/Translation\]/g;
  text = text.replace(translationRegex, (_, content) => `
    <div class="translation">${content.trim()}</div>
  `);

  // Format references (Quran verses, hadith citations)
  const referenceRegex = /\[Reference\](.*?)\[\/Reference\]/g;
  text = text.replace(referenceRegex, (_, content) => `
    <div class="reference">${content.trim()}</div>
  `);

  // Wrap sections in message-islamic div if they contain Arabic text
  if (text.includes('class="arabic"')) {
    text = `<div class="message-islamic">${text}</div>`;
  }

  return text;
}