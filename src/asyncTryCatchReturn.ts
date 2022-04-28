const waitResolve = async (ms: number): Promise<void> => {
  return new Promise<void>((resolve: any) => setTimeout(resolve, ms));
};

const waitReject = async (ms: number): Promise<void> => {
  return new Promise<void>((_resolve: any, reject: any) => setTimeout(reject, ms));
}

const testGoodForm = async (callback: (ms: number) => Promise<void>): Promise<void> => {
  try {
    await callback(1000);
    return;
  } catch (err) {
    console.log(`GoodForm caught error: ${err}`);
  }
}

const testBadForm = async (callback: (ms: number) => Promise<void>): Promise<void> => {
  try {
    return callback(1000);
  } catch (err) {
    console.log(`BadForm caught error: ${err}`);
  }
}

const testBadFormVariable = async (callback: (ms: number) => Promise<void>): Promise<void> => {
    let foo;
    try {
      foo = callback(1000);
    } catch (err) {
      console.log(`BadForm caught error: ${err}`);
    }

    console.log(foo);
  }

const test = async (): Promise<void> => {
  console.log("GoodForm  Resolve: before");
  await testGoodForm(waitResolve);
  console.log("GoodForm  Resolve: after");

  console.log("GoodForm  Reject   before");
  await testGoodForm(waitReject);
  console.log("GoodForm  Reject   after");

  console.log("BadForm   Resolve  before");
  try {
    await testBadForm(waitResolve);
    console.log("BadForm   Resolve  after");
  } catch (err) {
    console.log("BadForm   Resolve  uncaught error");
  }

  console.log("BadForm   Reject   before");
  try {
    await testBadForm(waitReject);
    console.log("BadForm   Reject   after");
  } catch (err) {
    console.log("BadForm   Reject   uncaught error");
  }
};

async function main() {
  test();
}

main();
