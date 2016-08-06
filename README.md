# angularjs1-5-ngrepeat-directive
AngularJS 1.5 ngRepeat Directive

Based on 'ng-repeat directive' at https://www.youtube.com/watch?v=MzqkIZLkBsU&index=6&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl

#Use of ng-repeat directive

See official documentation of 'API Reference / ng / directive components in ng / ngRepeat' at https://docs.angularjs.org/api/ng/directive/ngRepeat

The ng-repeat directive is similar to foreach loop in javascript

```javascript
[...]
        <tdbody>
            <tr ng-repeat="employee in employees">
                <td>{{ employee.firstName }}</td>
                <td>{{ employee.lastName }}</td>
                <td>{{ employee.gender }}</td>
                <td>{{ employee.salary }}</td>
            </tr>
        </tdbody>
[...]
```

Results in:

```javascript
First Name	Last Name	Gender	Salary
John	Doe	Male	55000
Sara	Pauls	Female	58000
Mark	Holland	Male	61000
Pam	Macintosh	Female	45000
```

#Nesting ng-repeat with an example

```javascript
[...]
        <ul>
            <li data-ng-repeat="country in countries">
                {{ country.name }} - index = {{ $index }}
                <ul>
                    <li data-ng-repeat="city in country.cities">
                        {{ city.name }} - Parent Index = {{ $parent.$index }}, index = {{ $index }}
                    </li>
                </ul>
            </li>
        </ul>
[...]
```

Notice the use of ```country.cities``` for nested repeats

#Finding the index of an item in the collection

To find the index of an item in the collection use ```$index``` property

To get the index of the ***parent*** element;
- use ```$parent.$index``` or 
- use ```ng-init="parentIndex=$index"```

Results in:

```javascript
UK - index = 0
- London - Parent Index = 0, index = 0
- Manchester - Parent Index = 0, index = 1
- Birmingham - Parent Index = 0, index = 2
USA - index = 1
- Los Angeles - Parent Index = 1, index = 0
- Chicago - Parent Index = 1, index = 1
- Houston - Parent Index = 1, index = 2
India - index = 2
- Hyderabad - Parent Index = 2, index = 0
- Chennai - Parent Index = 2, index = 1
- Mumbai - Parent Index = 2, index = 2
```