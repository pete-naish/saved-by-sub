import { replace } from 'lodash';

export const htmlDecode = (input) => {
  const e = document.createElement('div');
  const lazyInput = replace(input, 'iframe', 'iframe loading="lazy"');
  e.innerHTML = lazyInput;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}
