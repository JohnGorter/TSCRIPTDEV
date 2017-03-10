# Lab 7 - Client side bank

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the *labsSolutions* folder.

## Exercise 1 - Quality improvements

1. Enable all quality compiler options as shown in the slides.
1. Fix any compiler error you might have. Make sure your code still works.

## Exercise 2 - Create and serve and index.html file

In this exercise we'll let our webserver also serve static files. We will load an html page in a browser which will function as our banking application.

1. Create a new directory `public` next to the `src` directory
1. Create an index.html file with the following content:
```html
<html>

<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1></h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h2>Bank accounts</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Account</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h2>Add Bank account</h2>
            </div class="col-md-12">
        </div>
        <div class="row">
            <div class="col-md-12">
                <form class="form" name="customer">
                    <div class="form-group">
                        <label for="nameInput">First name</label>
                        <input id="nameInput" name="firstName" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="nameInput">Last name</label>
                        <input id="nameInput" name="lastName" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="nameInput">Preposition</label>
                        <input id="nameInput" name="preposition" type="text" class="form-control">
                    </div>
                    <button type="button" class="btn btn-primary"><i class="glyphicon glyphicon-plus"></i></button>
                </form>
            </div>
        </div>
    </div>
    <template>
        <tr>
            <td class="account"></td>
            <td class="name"></td>
        </tr>
    </template>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.20.9/system.js"></script>
    <script src="client.js"></script>
    <script>
        SystemJS.import('client/client');
    </script>
</body>
</html>
```
1. Alter your `src/BankServer.js` file. Make sure it can serve files from your public folder. Tip: it should only take you 1 line of code.
1. Run your webserver. Open a browser and go to the correct address. For example if your bank serves from 25647, go to http://localhost:25647. The index.html file should be visible in your browser.

## Exercise 3 - Implement client code

In this exercise we'll add a second tsconfig.json file, this time for our client application.

1. Create a directory next to the `src` directory with the name `client`
1. Add a tsconfig.json file to the directory. This tsconfig.json is responsible for compiling our client code.
    * Choose `'system'` as your module syntax.
    * Choose '../public/client.js' as your output file.
    * We want to use the dom inside our client code. Add the libs for `"es5"`, `"dom"` and `"es2015.promise"`.
1. Open a new command prompt. Run tsc with the new tsconfig json file.
    * `./node_modules/.bin/tsc -w -p client`

