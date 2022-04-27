namespace InterfaceCasting {
    class A {
        public constructor(public AProp: string) {
        }
    }

    class B extends A {
        public BFunc(): string {
            return this.AProp;
        }
    }

    class C extends B {
        public CFunc(): string {
            return "C";
        }
    }

    interface Foo {
        foo: string;
        doThing(): Promise<A>
    }
    
    class Bar<T extends A> implements Foo {
        public constructor(public foo: string, public instance: T) {
        }

        public async doThing(): Promise<T> {
            return this.instance;
        }
    }

    class BBar extends Bar<B> {
    }

    export function main(): void {
        const abar: Foo = new Bar<A>("foo", new A("APropA"));
        const bbar: Foo = new Bar<B>("foo", new B("APropB"));
        const cbar: Foo = new Bar<C>("foo", new C("APropC"));
        
        const castedA = abar as BBar;
        const castedB = bbar as BBar;
        const castedC = cbar as BBar;

        const aInstance = castedA.instance;
        const aInstanceType = typeof(aInstance);
        const aInstanceIs = aInstance instanceof B;
        const bInstance = castedB.instance;
        const bInstanceType = typeof(bInstance);
        const bInstanceIs = bInstance instanceof B;
        const cInstance = castedC.instance;
        const cInstanceType = typeof(cInstance);
        const cInstanceIs = cInstance instanceof B;

        console.log(castedA);
        console.log(aInstance);
        console.log(aInstanceIs);
        console.log(castedB);
        console.log(bInstance);
        console.log(bInstanceIs);
        console.log(castedC);
        console.log(cInstance);
        console.log(cInstanceIs);
    }
}

InterfaceCasting.main();