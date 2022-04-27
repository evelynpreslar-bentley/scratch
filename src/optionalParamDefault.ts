namespace OptionalParamDefault {
    function foo(foo: number | undefined = 0): void {
        console.log(foo);
    }

    export function main(): void {
        foo();
        foo(0);
        foo(undefined);
        foo(1);
    }
}

OptionalParamDefault.main();