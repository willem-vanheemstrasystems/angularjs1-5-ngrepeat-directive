var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope) {
        // Model without nested fields
        var employees = [
            { firstName: "John", lastName: "Doe", gender: "Male", salary: 55000 },
            { firstName: "Sara", lastName: "Pauls", gender: "Female", salary: 58000 },
            { firstName: "Mark", lastName: "Holland", gender: "Male", salary: 61000 },
            { firstName: "Pam", lastName: "Macintosh", gender: "Female", salary: 45000 }
        ];
        // Attach the model (a complex object) to the scope
        $scope.employees = employees;

        // Model with nested fields
        var countries = [
            { name: "UK", cities: [ { name: "London" }, { name: "Manchester" }, { name: "Birmingham" } ] },
            { name: "USA", cities: [ { name: "Los Angeles" }, { name: "Chicago" }, { name: "Houston" } ] },
            { name: "India", cities: [ { name: "Hyderabad" }, { name: "Chennai" }, { name: "Mumbai" } ] }
        ];
        // Attach the model (a complex object) to the scope
        $scope.countries = countries;
    });
