import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlToPlainText',
})
export class HtmlToPlainTextPipe implements PipeTransform {
  transform(value: string): string {
    const temp = document.createElement('div');
    temp.innerHTML = value;

    return temp.textContent ?? temp.innerText ?? '';
  }
}
