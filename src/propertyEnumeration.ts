class Foo {
  bar?: string;
  wee?: number;

  doStuff(): string {
    return "";
  }

  doStuffVar = (): string => {
    return "";
  }
}

class PropertyEnumeration {
  public static test = async (): Promise<void> => {
    const foo = new Foo();
    console.log(foo);
    for (const prop in foo) {
      console.log(prop);
    }
    
    const bar = new Foo();
    bar.bar = "bar";
    bar.wee = 100;
    console.log(bar);
    for (const prop in bar) {
      console.log(prop);
    }
  };
}

PropertyEnumeration.test();