import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Folder } from './models/folder.interface';

@Component({
  selector: 'app-folder-tree',
  templateUrl: './folder-tree.component.html',
  styleUrls: ['./folder-tree.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FolderTreeComponent implements OnInit {
  @Input()
  data: Folder[] = [];

  constructor() {}

  ngOnInit(): void {}
}
