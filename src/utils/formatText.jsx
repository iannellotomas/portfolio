export function formatText(text) {
  // Expresión regular para encontrar "**texto**" y reemplazarlo por "<strong>texto</strong>"
  const regex = /\*\*(.*?)\*\*/g;
  return text.replace(regex, "<strong>$1</strong>");
}
