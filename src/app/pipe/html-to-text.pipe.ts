import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'htmlToText'
})
export class HtmlToTextPipe implements PipeTransform {

    transform(value: string): string {
        const temp = document.createElement('div');
        temp.innerHTML = value;
        return temp.textContent || temp.innerText || '';
    }

}
