import { Pipe, PipeTransform } from '@angular/core';
import { CodecampEvent } from '../event';
@Pipe({
    name: 'selectedCodecamp'
})
export class SelectedCodecampPipe implements PipeTransform {
    transform(codecampEvents: CodecampEvent[], ccId: number): any {
        return codecampEvents.filter(p => p.ccId === ccId);
    }
}
