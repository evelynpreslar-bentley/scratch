

// const wait = async (ms: number): Promise<void> => {
//   return new Promise<void>((resolve: any) => setTimeout(resolve, ms));
// };

// const subTest = async (ii: number): Promise<void> => {
//   const thisii = ii;
//   await wait(100);
//   console.log("calling subTest with " + thisii);
// };

// const test = async (num: number): Promise<void> => {
//   console.log("before calling subTest, num is  " + num);
//   return subTest(num).then(() => {
//     console.log("after calling subTest, num is " + num);
//   });
// };

// async function main() {
//   for (let ii = 0; ii < 10; ii++) {
//     test(ii);
//   }
// }

// main();
