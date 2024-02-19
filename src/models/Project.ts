import type { Task } from "@/models/Task";
import type { Blocker } from "@/models/Blocker";
import type { Message } from "@/models/Message";

interface Project {
  title:string,
  nextAction:string,
  tasks:Task[],
  blockers: Blocker[],
  notes:string,
  communication:Message[],
  completed:boolean
}

export type {Project}
