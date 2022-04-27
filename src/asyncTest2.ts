// import * as AsyncLock from "async-lock";
// const lock = new AsyncLock({timeout: 10000, maxPending: 500});

// function memoize(method) {
//   let cache = {};

//   return async function (...args: any) {
//     let jsonArgs = JSON.stringify(args);
//     cache[jsonArgs] = cache[jsonArgs] || method.apply(this, args);
//     return cache[jsonArgs];
//   };
// }

// function callAsyncOnce<T>(method: (...args: any) => Promise<T>) {
//   let calledPromise: Promise<T>;

//   return async (...args: any): Promise<T> => {
//     calledPromise = calledPromise || method(args);
//     return calledPromise;
//   }
// }

// async function wait(ms: number): Promise<void> {
//   return new Promise<void>((resolve: any) => setTimeout(resolve, ms));
// }

// async function operation(caller: number) {
//   console.log(`Started operation for ${caller}`);
//   await wait(100);
//   if (caller === 3) {
//     console.log(`Rejected operation for ${caller}`);
//     throw new Error(`Rejected operation for ${caller}`);
//   }
//   console.log(`Finished operation for ${caller}`);
// };


// async function safeOperation(caller: number) {
//   return lock.acquire("safeOperation", async () => {
//     console.log(`Lock acquired for operation ${caller}`);
//     return operation(caller);
//   }).then(() => {
//     console.log(`Lock is definitely not held for operation ${caller}`);
//   }).catch((err) => {
//     console.log(`Caught error for operation ${caller}: ${err.message}`);
//   });
// };

// async function safeOperationWithPromise(caller: number) {
//   try {
//     await lock.acquire("safeOperation", async () => {
//       console.log(`Lock acquired for operation ${caller}`);
//       return operation(caller);
//     });
//     console.log(`Lock for old operation is likely released ${caller}`);
//   } catch (err) {
//     console.log(`Caught error for operation ${caller}: ${err.message}`);
//     console.log(`Lock for old operation is likely released ${caller}`);
//     throw err;
//   }
// };

// async function memoizeTest() : Promise<void> {
//   const memoizedOperation = memoize(operation);
//   for (let ii = 0; ii < 5; ii++) {
//     memoizedOperation(3).catch((err) => {return;});
//     memoizedOperation(0);
//   }
// }

// // memoizeTest();

// async function lockTest() : Promise<void> {
//   for (let jj=0; jj < 2; jj++) {
//     for (let ii = 0; ii < 5; ii++) {
//       safeOperationWithPromise(ii).catch((err) => {return;});
//     }
//   }
// }


// async function operation2() {
//   console.log(`Started operation2`);
//   await wait(100);
//   console.log(`Finished operation2`);
// };

// async function callOnceTest(): Promise<void> {
//   const callOnce_1 = callAsyncOnce<void>(operation2);
//   for (let ii = 0; ii < 5; ii++) {
//     callOnce_1();
//   }

//   await callOnce_1();

//   const callOnce_2 = callAsyncOnce<void>(operation2);
//   for (let ii = 0; ii < 5; ii++) {
//     callOnce_2();
//   }
// }

// callOnceTest();
