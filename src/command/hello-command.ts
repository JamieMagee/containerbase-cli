import { Command } from "clipanion";

export class HelloCommand extends Command {
  execute(): Promise<number | void> {
    console.log("Hello, world!");
    return Promise.resolve(undefined);
  }
}
