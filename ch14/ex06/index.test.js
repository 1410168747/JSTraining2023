import { makeProxy } from './index.js';

describe('makeProxy', () => {
    test('makeProxy', () => {
        const obj = {
            name: 'John',
            age: 23,
            getAge: function () {
                return this.age;
            },
            setAge: function (age) {
                this.age = age;
            },
            sayHi: function (...message) {
                return `Hi, I'm ${this.name}. I'm ${this.getAge()} years old. ${message}!`;
            },
            pii: {
                ssn: '123-45-6789',
                ccn: '1234-5678-9012-3456'
            }

        };
        const { proxy, record } = makeProxy(obj);

        //プロパティにアクセスできること
        expect(proxy.name).toBe('John');
        expect(proxy.age).toBe(23);
        //プロパティにアクセスしても、メソッド呼び出しの呼び出し履歴には記録されないこと
        expect(record.length).toBe(0);

        //メソッド呼び出しできること
        expect(proxy.getAge()).toBe(23);
        //メソッド呼び出しすると、呼び出し履歴が適切に記録されること
        expect(record[0]).toEqual({ calledTime: expect.any(Date), methodName: 'getAge', args: [] });
        //メソッド呼び出しすると、呼び出し履歴の数が正しいこと
        expect(record.length).toBe(1);

        //引数付きのメソッドが呼び出された時、引数が適切に記録されること
        proxy.sayHi(["ei", "ei"])
        expect(record[1]).toEqual({ calledTime: expect.any(Date), methodName: 'sayHi', args: [["ei", "ei"]] });
        //メソッド内部で他のメソッドを呼び出しても、呼び出し履歴が記録されること
        expect(record[2]).toEqual({ calledTime: expect.any(Date), methodName: 'getAge', args: [] });

        proxy.setAge(25)
        expect(record[3]).toEqual({ calledTime: expect.any(Date), methodName: 'setAge', args: [25] });
        expect(proxy.getAge(25)).toBe(25);
        expect(record.length).toBe(5);
        expect(proxy.pii.ssn).toBe('123-45-6789');
        expect(record.length).toBe(5);

    });
});