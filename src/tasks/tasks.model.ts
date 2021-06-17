export interface Tasks {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'Open',
  IN_PROGRESS = 'In_Progress',
  DONE = 'Done',
}
