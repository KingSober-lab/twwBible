export default function italicizeInsideParentheses(text) {
  return text?.replace(/\((.*?)\)/g, (_, inner) => {
    return `(<i>${inner}</i>)`;
  });
}
