// Type definitions for TestService
// Project: TestService
// Definitions by: name of the author

/*~ If this module is a UMD module that exposes a global variable 'myClassLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace TestService;

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */


/*~ If you want to expose types from your module as well, you can
 *~ place them in this block.
 */
declare namespace TestService {
    export class TestService {
        testProp: number;

        constructor();

        showTest(param: string);
    }

    // export class SecondClassGoesHere {
    //     // if there are more classes, add the bellow
    // }
}

export = TestService;
