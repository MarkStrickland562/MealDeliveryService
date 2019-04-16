## **Mark Strickland**

| [<img src="https://avatars1.githubusercontent.com/u/39330458?s=400&v=4" width=100 alt="GitHub avatar for author sjullieb">](http://github.com/sjullieb) |
| [<img src="https://avatars1.githubusercontent.com/u/20866010?s=400&v=4" width=100 alt="GitHub avatar for author dsarbora">](http://github.com/dsarbora) |
| [<img src="https://avatars1.githubusercontent.com/u/46273227?s=400&v=4" width=100 alt="GitHub avatar for author owysocky">](http://github.com/owysocky) |
| [<img src="https://avatars0.githubusercontent.com/u/46360355?s=400&v=4" width=100 alt="GitHub avatar for author samstoia">](http://github.com/samstoia) |
| [<img src="https://avatars0.githubusercontent.com/u/46360355?s=400&v=4" width=100 alt="GitHub avatar for author samstoia">](http://github.com/samstoia) |
| [<img src="https://avatars1.githubusercontent.com/u/46455727?s=400&v=4" width=100 alt="GitHub avatar for author MarkStrickland562">](https://github.com/MarkStrickland562) |
|:-----:|:-----:|:-----:|:-----:|:-----:|
| [**]
| [**sjullieb**](https://github.com/sjullieb) | [**dsarbora**](https://github.com/dsarbora) | [**owysocky**](https://github.com/owysocky) | [**samstoia**](https://github.com/samstoia) | [**MarkStrickland562**](https://github.com/MarkStrickland562) |
| Julia Shidlovskaya | Dave Sarbora | Olya Wysocky | Sam Stoia | Mark Strickland |

## **Meal Delivery Service (Angular & Firebase)**

###### Created April 15, 2019. Finalized April 18, 2019.

----------

## Description
This project is the team project for the javascript/Angular class at Epicodus coding bootcamp. The project is a Meal Delivery Service application.

The application can be accessed through this URL: TBD

## Technical Features
* Angular 5
* Typescript
* Bootstrap
* jQuery
* Numerous external styling resources
* xx model classes
* xx child components
* xx pipes
* xx routes
* xx services
* xx API

## Known Bugs
No known bugs.

## Project Plan

###### 1) Develop technical architecture.
###### 2) Set up the project.
<details>
<summary>Click Here for Details</summary>
This assumes that node is already installed, but verify with "node -v".
<br><br>
1) Install the required projects by executing the following commands at the bash prompt:
<br><br>
    $ npm install typescript -g
<br>
    $ npm install bootstrap --save
<br>
    $ apm install atom-typescript
<br>
    $ npm install -g @angular/cli@1.6.5
<br>
    $ cd desktop
<br>
    $ ng new MealDeliveryService
<br>
    $ npm install bootstrap --save
<br><br>
2) Populate .gitignore with:
<br><br>
    node_modules/
<br>
    .DS_Store
<br>
    dist/
<br>
    .env
<br><br>
3) Point Angular to the installed Bootstrap node module by adding the following to .angular-cli.json in the styles array so that it looks like this:
<br><br>
  "styles": [
<br>
  "../node_modules/bootstrap/dist/css/bootstrap.min.css",
  <br>
  "styles.css"
  <br>
  ],
<br><br>
4) Add the Forms Module to app.module.ts. In the top section of imports add "import { FormsModule } from '@angular/forms'". In the @ngModule section in the imports array, add ", FormsModule" after "BrowserModule".
</details>

###### 3) Create model classes for the data.
<details>
<summary>Click Here for Details</summary>
Create and populate the following scripts for the model classes:
<table>
  <tr>
    <th>Class Name</th>
    <th>File Name</th>
    <th>Class Code</th>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>    
</table>
</details>

###### 4) Develop mock data for each class.

###### 5) Create component templates for showing, adding, editing, deleting and searching for model-related objects.
<details>
<summary>Click Here for Details</summary>
<table>
<tr>
<th>Component Area</th>
<th>Commands</th>
</tr>
<tr>
<td>Welcome, About and Main</td>
<td>
$ ng generate component welcome<br>
$ ng generate component main<br>
$ ng generate component about
</td>
</tr>
<tr>
<td></td>
<td>
$ ng generate component show-<br>
$ ng generate component new-<br>
$ ng generate component edit-<br>
$ ng generate component delete-<br>
$ ng generate component search-
</td>
</tr>
</table>
</details>

###### 6) Develop functional CRUD and Search views for all classes.
###### 7) Create pipes for use by the Search components.
###### 9) Add routes for the components.
###### 10) Convert the mock data into JSON and load the data into a Firebase database.
###### 11) Add services and dependency-injection for accessing the database.
###### 12) Add an API call.
###### 13) Add user authentication
###### 14) Setup deployment to Firebase.
###### 15) Deploy to firebase
<details>
  <summary>Click Here for Firebase Deployment Steps</summary>
<br>
Install Required Packages:
<br><br>
$ npm install -g firebase-tools
<br><br>
Setup Firebase:
<br><br>
  $ firebase login
<br>
$ firebase init
<br><br>
Deploy to Firebase:
<br><br>
$ ng build --env=prod
<br>
$ firebase deploy
<br><br>
Run the Application:
<br><br>
$ firebase open
</details>

## Technical Architecture

<details>
  <summary>Click Here for an Overview of the Data Model</summary>

  <table>
    <tr>
      <th>Model</th>
      <th>Properties</th>
      <th>Typescript Data Types</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>    
  </table>
</details>

<details>
  <summary>Click Here for an Overview of the Components and Routes</summary>
  <table>
    <tr>
      <th>General Components</th>
    </tr>
    <tr>
      <th>Component</th>
      <th>Selector</th>
      <th>Route URL</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>AppComponent</td>
      <td>app-root</td>
      <td>N/A/</td>
      <td>Default root component</td>
    </tr>
    <tr>
      <td>WelcomeComponent</td>
      <td>app-welcome</td>
      <td>http:/localhost:4200/</td>
      <td>Displays the Welcome page</td>
    </tr>
    <tr>
      <td>MainComponent</td>
      <td>app-main</td>
      <td>http:/localhost:4200/main</td>
      <td>Displays the main navigation page</td>
    </tr>
      <td>AboutComponent</td>
      <td>app-about</td>
      <td>http:/localhost:4200/about</td>
      <td>Displays the About page</td>
    </tr>
  </table>
  <table>
    <tr>
      <th></th>
    </tr>
    <tr>
      <th>Component</th>
      <th>Selector</th>
      <th>Route URL</th>
      <th>Description</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</details>

## Setup and Use

#### Required Packages
<details>
<summary>Click Here for Required Packages</summary>
<ul>
<li>@angular/animations 5.2.0</li>
<li>@angular/common 5.2.0</li>
<li>@angular/compiler 5.2.0</li>
<li>@angular/cli 1.6.5</li>
<li>@angular/core 5.2.0</li>
<li>@angular/forms 5.2.0</li>
<li>@angular/http 5.2.0</li>
<li>@angular/language-service 5.2.0</li>
<li>@angular/platform-browser 5.2.0</li>
<li>@angular/platform-browser-dynamic 5.2.0</li>
<li>@angular/router 5.2.0</li>
<li>angularfire2 4.0.0-rc.0</li>
<li>bootstrap 4.3.1</li>
<li>core-js 2.4.1</li>
<li>firebase 3.9.0</li>
<li>codelyzer 4.0.1</li>
<li>jasmine-core 2.8.0</li>
<li>jasmine-spec-reporter 4.2.1</li>
<li>karma 2.0.0</li>
<li>karma-chrome-launcher 2.2.0</li>
<li>karma-coverage-istanbul-reporter 1.2.1</li>
<li>karma-jasmine 1.1.0</li>
<li>karma-jasmine-html-reporter 0.2.2</li>
<li>protractor 5.1.2</li>
<li>rxjs 5.5.6</li>
<li>ts-node 4.1.0</li>
<li>tslint 5.9.1</li>
<li>@types/jasmine 2.8.3</li>
<li>@types/jasminewd2 2.0.2</li>
<li>@types/node 6.0.60</li>
<li>typescript 2.5.3</li>
<li>zone.js 0.8.19</li>
</ul>
</details>

#### Download the Repository
1. Clone [this repository](https://github.com/MarkStrickland562/MealDeliveryService):

       $ git clone https://github.com/MarkStrickland562/MealDeliveryService.git

#### Install, build and run the application
1. Navigate to the application root directory:

       $ cd MealDeliveryService
2. Install the required packages:

       $ npm install
3. Build the application:

       $ ng build
4. Run the application:

       $ ng serve

#### Test the application
1. Execute the tests with Jasmine and Karma:

       $ ng test

## Built With

* Windows 10.1
* iMac OS X El Capitan 10.11.6
* Atom (IDE)

## Support and contact details

If you have any feedback or concerns, please contact Julia Shidlovskaya, Dave Sarbora, Olya Wysocky, Sam Stoia or Mark Strickland.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (C) 2019 [Julia Shidlovskaya](https://github.com/sjullieb), [Dave Sarbora](https://github.com/dsarbora), [Olya Wysocky](https://github.com/owysocky), [Sam Stoia](https://github.com/samstoia), [Mark Strickland](https://github.com/MarkStrickland562). All Rights Reserved.
```
MIT License

Copyright (c) 2019 Mark Strickland

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
