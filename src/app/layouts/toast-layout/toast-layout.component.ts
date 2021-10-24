import { Component, Input, OnInit } from '@angular/core';
import { Toast } from 'src/app/interfaces/toast.interface';

@Component({
  selector: 'app-toast-layout',
  templateUrl: './toast-layout.component.html',
  styleUrls: ['./toast-layout.component.scss']
})
export class ToastLayoutComponent implements OnInit {
  @Input() toastProps!: Toast;

  constructor() { }

  ngOnInit(): void {
  }

}
