function setIframeMarkup(id, markup) {
  const iframe = document.getElementById(id);

  const parser = new DOMParser();
  const doc = parser.parseFromString(markup, "text/html");

  const links = doc.querySelectorAll('a[href="#"]');
  links.forEach((link) => link.setAttribute("target", "_parent"));

  const htmlAttributes = doc.documentElement.attributes;
  let htmlOpenTag = "<html";
  for (let attr of htmlAttributes) {
    htmlOpenTag += ` ${attr.name}="${attr.value}"`;
  }
  htmlOpenTag += ">";

  const bodyAttributes = doc.body.attributes;
  let bodyOpenTag = "<body";
  for (let attr of bodyAttributes) {
    bodyOpenTag += ` ${attr.name}="${attr.value}"`;
  }
  bodyOpenTag += ">";

  const headContent = doc.head ? doc.head.innerHTML : "";
  const htmlContent = `
    ${doc.doctype ? "<!DOCTYPE html>\n" : ""}
    ${htmlOpenTag}
    <head>${headContent}</head>
    ${bodyOpenTag}
    ${doc.body.innerHTML}
    </body>
    </html>
  `;

  iframe.srcdoc = htmlContent;
}

function removeExclusions(markup) {
  const temp = markup.replace(
    /([ \t]*)<([^\s>]+).*?data-hs-code-exception.*?>[\s\S]*?<\/\2>/g,
    ""
  );

  return temp.replace(/^\s*$(?:\r\n?|\n)/gm, "");
}

function extractMarkup(markup) {
  const regex = /<([^\s>]+)([^>]*)data-hs-code([^>]*)>([\s\S]*?)<\/\1>/;
  const match = markup.match(regex);

  if (match) return match[0].replace(/ data-hs-code/g, "");
  else return markup;
}

function encodeHtml(id, markup, isString = false) {
  const code = document.getElementById(id);
  let stringMarkup = null;

  if (isString) {
    stringMarkup = extractMarkup(removeExclusions(markup));
    if (stringMarkup.includes("<html") && !stringMarkup.includes("<!DOCTYPE"))
      stringMarkup = `<!DOCTYPE html>\n${stringMarkup}`;
  }
  const content = isString && stringMarkup ? stringMarkup : markup;

  code.innerHTML = content
    .replace(/="{/g, "='{")
    .replace(/}"/g, "}'")
    .replace(/="\[/g, "='[")
    .replace(/\]"/g, "]'")
    .replace(/[<>"]/g, function (match) {
      switch (match) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        default:
          return match;
      }
    });
}

function encodeHtmlEdgeCase(id, markup, isString = false) {
  const code = document.getElementById(id);
  let stringMarkup = null;

  if (isString) {
    stringMarkup = extractMarkup(removeExclusions(markup));
    if (stringMarkup.includes("<html") && !stringMarkup.includes("<!DOCTYPE"))
      stringMarkup = `<!DOCTYPE html>\n${stringMarkup}`;
  }
  const content = isString && stringMarkup ? stringMarkup : markup;

  const highlightedMarkup = Prism.highlight(
    content
      .replace(/('[^']+')/g, (match) => match.replace(/'/g, "&apos;"))
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/="{/g, "='{")
      .replace(/}"/g, "}'")
      .replace(/="\[/g, "='[")
      .replace(/\]"/g, "]'"),
    Prism.languages.customMarkup,
    "customMarkup"
  );

  code.innerHTML = highlightedMarkup;
}
