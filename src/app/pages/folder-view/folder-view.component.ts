import { Folder } from './../../components/folder-tree/models/folder.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder-view',
  templateUrl: './folder-view.component.html',
  styleUrls: ['./folder-view.component.scss'],
})
export class FolderViewComponent implements OnInit {
  listFolders: Folder[] = [
    {
      name: 'Folder 1',
      children: [{ name: 'Folder 1.1' }, { name: 'Folder 1.2' }],
    },
    { name: 'Folder 2' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
