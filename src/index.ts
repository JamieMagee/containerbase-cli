import { Cli } from "clipanion";
import { HelloCommand } from "./command/hello-command";

const [node, app, ...args] = process.argv;

const cli = new Cli({
  binaryLabel: `containerbase-cli`,
  binaryName: `${node} ${app}`,
  binaryVersion: `1.0.0`,
});

cli.register(HelloCommand);
cli.runExit(args);
