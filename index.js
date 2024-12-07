// Predefined shortcuts and their replacements
const shortcuts = {
  '/ad': '1234 Elm Street, Springfield, USA'
};

// Listen for changes in the content of text inputs and replace shortcuts
document.addEventListener('input', (event) => {
  if (event.target.tagName === 'TEXTAREA' || (event.target.tagName === 'INPUT' && event.target.type === 'text')) {
    let text = event.target.value;

    for (const [shortcut, replacement] of Object.entries(shortcuts)) {
      if (text.endsWith(shortcut)) {
        // Replace shortcut with its corresponding replacement
        text = text.replace(new RegExp(`${shortcut}$`), replacement);
        event.target.value = text;
      }
    }
  }
});
