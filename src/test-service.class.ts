export class TestService {
    testProp: number = 27;
    private privateParam: string = 'private value';

    constructor() {
    }

    showTest(param: string) {
        console.log('This is a public test method. The parameter value is: ', param);
    }

    private privateTest() {
        console.log('this method shouldn\'t be accessible outside of class');
    }
}