import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Folder } from './../models/folder.interface';

@Component({
  selector: 'app-node-folder-tree',
  templateUrl: './node-folder-tree.component.html',
  styleUrls: ['./node-folder-tree.component.scss'],
})
export class NodeFolderTreeComponent implements OnInit {
  @Input() nodeFolder?: Folder;
  flag = true;

  constructor() {}

  ngOnInit(): void {}
}
