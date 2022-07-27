interface Element {
  type: 'file' | 'folder';
  path: string;
  link: string;
  name: string;
  preview?: string;
}
