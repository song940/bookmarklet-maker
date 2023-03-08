import { ready, querySelector as $ } from 'https://lsong.org/scripts/dom.js';

function generateBookmarklet(code) {
  code = `(function(){${code.trim()}})();`;
  return `javascript:` + encodeURIComponent(code);
}

ready(() => {
  const $link = $("#bookmarklet");
  const $name = $("input[name=name]");
  const $code = $("textarea[name=code]");
  const $output = $("input[name=output]");
  const $html = $("input[name=html]");
  $code.addEventListener("input", e => {
    e.preventDefault();
    const name = $name.value;
    const code = $code.value;
    const output = $output.value = generateBookmarklet(code);
    $link.innerHTML = $html.value = `<a href="${output}" >${name}</a>`;

  });
  $name.addEventListener('input', e => {
    $link.textContent = e.target.value || 'Bookmarklet Maker';
  });
});