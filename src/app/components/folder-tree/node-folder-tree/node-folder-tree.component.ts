import { FolderService } from './../services/folder.service';
import { Component, Input, OnInit } from '@angular/core';
import { Folder } from './../models/folder.interface';

@Component({
  selector: 'app-node-folder-tree',
  templateUrl: './node-folder-tree.component.html',
  styleUrls: ['./node-folder-tree.component.scss'],
})
export class NodeFolderTreeComponent implements OnInit {
  @Input() nodeFolder?: Folder;
  flag = true;

  constructor(private folderService: FolderService) {}

  ngOnInit(): void {}

  getFolderToggleSVG(): string {
    return this.flag && this.nodeFolder?.children
      ? 'folder-open.svg'
      : 'folder-close.svg';
  }

  selectedFolder(): void {
    const currentSelectedFolder = this.folderService.getFolderSelected();
    if (currentSelectedFolder) {
      currentSelectedFolder.selected = false;
    }
    if (this.nodeFolder) {
      this.nodeFolder.selected = true;
      this.folderService.saveFolderSelected(this.nodeFolder);
    }
  }
}
