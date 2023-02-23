class LocalConsoleInstance {
  public domain: Array<string> = [];

  public console;

  constructor() {
    if (process.env.NODE_ENV !== "production") {
      this.console = console;
    }

    if (process.env.NODE_ENV === "production") {
      delete this.console;
    }

    return this;
  }
}

const localConsole = new LocalConsoleInstance()?.console;

export default localConsole;
