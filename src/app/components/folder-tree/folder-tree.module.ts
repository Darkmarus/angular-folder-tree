import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderTreeComponent } from './folder-tree.component';
import { NodeFolderTreeComponent } from './node-folder-tree/node-folder-tree.component';

@NgModule({
  declarations: [FolderTreeComponent, NodeFolderTreeComponent],
  imports: [CommonModule],
  exports: [FolderTreeComponent],
})
export class FolderTreeModule {}
