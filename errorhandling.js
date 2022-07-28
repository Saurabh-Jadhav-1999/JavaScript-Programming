function basicErrorHandling() {
    try {
        noSuchVariable;
        setTimeout(function () { }, 1000);
        console.log("This won't print!!");
    } catch (err) {
        console.log(err.name); // Returns ReferenceError for 'Undefined Variables'
        console.log(err.message);
        console.log(err.stack);
        console.log(err); // Complete error converted into string as "name: message"
    }
}
// basicErrorHandling()

// Throw Custom Error
function errorJSON() {
    let User = '{"name":"Saurabh"}';
    try {
        let user = JSON.parse(User);
        console.log(user.name);
        if (!user.age) throw new SyntaxError("Age not found in database.");
        console.log(user.age);
    } catch (err) {
        console.log(err.message);
    }
}
// errorJSON();

//JSON Example
function throwError() {
    let User = '{"name Saurabh"}';
    try {
        let user = JSON.parse(User);
        console.log(user.name);
        if (!user.age) throw new SyntaxError("Age not found in database.");
        console.log(user.age);
    } catch (err) {
        console.log(err.message);
    }
}
// throwError()

// Rethrowing Errors
function rethrow() {
    let User = '{"name":"Saurabh"}';
    try {

        let user = JSON.parse(User);

        iAmAnError();

        if (!user.age) {
            throw new SyntaxError("Age not found in database.");
        }

    } catch (err) {
        if (err instanceof SyntaxError) {
            console.log(err.message);
        }
        else {
            throw err;
        }
    }
}

//An error which is rethrown must be "caught"
{
    try {
        // rethrow();
    }
    catch (err) {
        console.log("Error rethrown: " + err.message);
    }
    finally {
        console.log("This {finally} block is going to execute always at the end.");
    }
}

// The global handler - window.onerror
// {
// <!-- Open this page directly without using VSCode -->
// <script>
//     window.onerror = function(message, url, line, col, error){
//         alert(message + "\n At " + line + ":" + col + " of " + url)
//     }
//     function readData(){
//         badFinc();
// }
//     readData();
// </script>
// }

// Errors can be extended, creating a Generic class is always prefferable according to the problem requirements.