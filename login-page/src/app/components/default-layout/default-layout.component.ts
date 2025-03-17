import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  imports: [],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {
    @Input() title: string = "";
    @Input() primarybt: string = "";
    @Input() secondbt: string = "";
}
