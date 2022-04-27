// namespace InheritanceRequiredProp {
//     class Foo {
//         public readonly foo: string;
//         public bob?: string;

//         public constructor() {
//         }
//     }
    
//     class Bar extends Foo {
//         public bar: string;
//         public hah?: string;

//         protected constructor() {
//             super();
//         }

//         public static create(): Bar {
//             return new Bar();
//         }
//     }

//     export function main(): void {
//         const foo = new Foo();
//         console.log(foo);
//         const bar = Bar.create();
//         console.log(bar);

//         const fah: Foo = {
//             foo: "",
//         };
//         console.log(fah);
//     }
// }

// InheritanceRequiredProp.main();