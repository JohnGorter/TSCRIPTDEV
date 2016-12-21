const logClass = function (TargetClass: FunctionConstructor) {
    return class AnnotatedClass extends TargetClass {
        constructor(...args){
            console.log(`constructing a ${TargetClass} using ${JSON.stringify(args)}`)
            super(...args);
        }
    }
} as any;

function logMethod(target: Object, key: string, value: any) {
    console.log(`Registering logMethod for ${target}${key}`);

    return {
        value: function (...args: any[]) {
            // convert list of foo arguments to string
            console.log(`Call: ${key} with ${JSON.stringify(args)}`);

            // invoke foo() and get its return value
            return value.value.apply(this, args);
        }
    };

}

@logClass
class Person {
    constructor(private name: string) {
    }

    @logMethod
    mary(otherPerson: Person) {
        console.log(`${this.name} maries to ${otherPerson.name}`)
    }
}

new Person('harry').mary(new Person('diane'));

