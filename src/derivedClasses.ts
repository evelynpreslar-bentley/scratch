
class Base {
  public static staticMember: number = 0;

  private static _staticProperty: number = 0;
  public static get staticProperty(): number {
    return Base._staticProperty;
  }
  public static set staticProperty(val: number) {
    Base._staticProperty = val;
  }

}

class Derived extends Base {

  static dumpValues() {
    console.log(`Base.staticProperty = ${Base.staticProperty}`);
    console.log(`Base.staticMember = ${Base.staticMember}`);
    console.log(`Derived.staticProperty = ${Derived.staticProperty}`);
    console.log(`Derived.staticMember = ${Derived.staticMember}`);
    console.log(`this.staticProperty = ${this.staticProperty}`);
    console.log(`this.staticMember = ${this.staticMember}`);
    console.log("");
  }

  static test1() {
    const value = 1;

    console.log(`Test ${value}:`);
    console.log(`Setting this.staticMember = ${value}`);
    console.log(`Setting this.staticProperty = ${value}`);

    this.staticMember = value;
    this.staticProperty = value;
    Derived.dumpValues();

    /*
    Test 1:
      Setting this.staticMember = 1
      Setting this.staticProperty = 1

      Base.staticProperty = 1
      Base.staticMember = 0
      Derived.staticProperty = 1
      Derived.staticMember = 1
      this.staticProperty = 1
      this.staticMember = 1
     */
  }

  static test2() {
    const value = 2;

    console.log(`Test ${value}:`);
    console.log(`Setting Derived.staticMember = ${value}`);
    console.log(`Setting Derived.staticProperty = ${value}`);

    Derived.staticMember = value;
    Derived.staticProperty = value;
    Derived.dumpValues();

    /*
    Test 2:
      Setting Derived.staticMember = 2
      Setting Derived.staticProperty = 2

      Base.staticProperty = 2
      Base.staticMember = 0
      Derived.staticProperty = 2
      Derived.staticMember = 2
      this.staticProperty = 2
      this.staticMember = 2
    */
  }

  static test3() {
    const value = 3;

    console.log(`Test ${value}:`);
    console.log(`Setting Base.staticMember = ${value}`);
    console.log(`Setting Base.staticProperty = ${value}`);

    Base.staticMember = value;
    Base.staticProperty = value;
    Derived.dumpValues();

    /*
      Test 3:
        Setting Base.staticMember = 3
        Setting Base.staticProperty = 3

        Base.staticProperty = 3
        Base.staticMember = 3
        Derived.staticProperty = 3
        Derived.staticMember = 3
        this.staticProperty = 3
        this.staticMember = 3
    */
  }

  static test4() {
    const value1 = 3;
    const value2 = 4;

    console.log(`Test ${value2}:`);
    console.log(`Setting Base.staticMember = ${value1}`);
    console.log(`Setting Base.staticProperty = ${value1}`);
    console.log(`Setting Derived.staticMember = ${value2}`);
    console.log(`Setting Derived.staticProperty = ${value2}`);

    Derived.staticMember = value2;
    Derived.staticProperty = value2;
    Base.staticMember = value1;
    Base.staticProperty = value1;

    Derived.dumpValues();

    /*
      Test 4:
        Setting Base.staticMember = 3
        Setting Base.staticProperty = 3
        Setting Derived.staticMember = 4
        Setting Derived.staticProperty = 4
        Base.staticProperty = 4
        Base.staticMember = 3
        Derived.staticProperty = 4
        Derived.staticMember = 4
        this.staticProperty = 4
        this.staticMember = 4
    */
  }

}

// Derived.test1();
// Derived.test2();
// Derived.test3();
Derived.test4();