namespace AsyncExceptionUnhandled {
    async function throwError(foo: number | undefined = 0): Promise<void> {
        throw new Error("BAD TIMES");
    }

    async function delay(ms: number): Promise<void> {
        return new Promise( resolve => setTimeout(resolve, 1000) );
    }

    export async function main(): Promise<void> {
        console.log("Waiting starting");
        await delay(1000);
        console.log("Waiting done")

        throwError().then(() => {
            console.log("This .then will not trigger")
        }).catch((err) => {
            console.log("Caught error from catch clause");
            // console.log(err);
        });

        try { 
            await throwError();
            console.log("This statement following an await will not trigger")
        } catch (err) {
            console.log("Caught error from await with following statement");
        }

        try { 
            await throwError();
        } catch (err) {
            console.log("Caught error from naked await");
        }
        console.log("This statement following the naked await error will trigger")

        console.log("Before uncaught promise.")
        throwError();
        console.log("After uncaught promise.")

        console.log("Waiting starting");
        await delay(1000);
        console.log("Waiting done")
    }
}

AsyncExceptionUnhandled.main()
.then()
.catch((err) => {
    console.log(err);
});