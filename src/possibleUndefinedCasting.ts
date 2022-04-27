namespace PossibleUndefinedCasting {
    class Foo {
        public constructor(public readonly foo: number) {
        }
    }

    class Bar extends Foo {
        public constructor(public readonly bar: number) {
            super(1);
        }
    }

    class Clay extends Foo {
        public constructor(public readonly clay: number) {
            super(2);
        }
    }
    
    function getFoo(returnUndefined: boolean): Foo | undefined {
        if (returnUndefined) {
            return undefined;
        }
        return new Foo(0);
    }

    function getBar(returnUndefined: boolean): Foo | undefined {
        if (returnUndefined) {
            return undefined;
        }
        return new Bar(0);
    }

    function getClay(returnUndefined: boolean): Foo | undefined {
        if (returnUndefined) {
            return undefined;
        }
        return new Clay(0);
    }
    
    export function main(): void {
        const foo = getFoo(false);
        const fooUnd = getFoo(true);
        const bar = getBar(false);
        const barUnd = getBar(true);
        const clay = getClay(false);
        const clayUnd = getClay(true);

        console.log(`foo instanceof Bar: ${foo instanceof Bar}`);
        console.log(`fooUnd instanceof Bar: ${fooUnd instanceof Bar}`);
        console.log(`bar instanceof Bar: ${bar instanceof Bar}`);
        console.log(`barUnd instanceof Bar: ${barUnd instanceof Bar}`);
        console.log(`clay instanceof Bar: ${clay instanceof Bar}`);
        console.log(`clayUnd instanceof Bar: ${clayUnd instanceof Bar}`);
        console.log("");
        console.log(`foo as Bar: ${foo as Bar}`);
        console.log(`fooUnd as Bar: ${fooUnd as Bar}`);
        console.log(`bar as Bar: ${bar as Bar}`);
        console.log(`barUnd as Bar: ${barUnd as Bar}`);
        console.log(`clay as Bar: ${clay as Bar}`);
        console.log(`clayUnd as Bar: ${clayUnd as Bar}`);
        console.log("");
        console.log(`foo instanceof Foo: ${foo instanceof Foo}`);
        console.log(`fooUnd instanceof Foo: ${fooUnd instanceof Foo}`);
        console.log(`bar instanceof Foo: ${bar instanceof Foo}`);
        console.log(`barUnd instanceof Foo: ${barUnd instanceof Foo}`);
        console.log(`clay instanceof Foo: ${clay instanceof Foo}`);
        console.log(`clayUnd instanceof Foo: ${clayUnd instanceof Foo}`);;
    }
}

PossibleUndefinedCasting.main();