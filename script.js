replaceslangs(document.body);
function replaceslangs(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach((node) => replaceslangs(node));
  } else if (element.nodeType === Text.TEXT_NODE) {
    element.textContent = element.textContent.replace(
      /fuck|shit|nigga|nigger|gay|faggot/gi,
      "****"
    );
  }
}
