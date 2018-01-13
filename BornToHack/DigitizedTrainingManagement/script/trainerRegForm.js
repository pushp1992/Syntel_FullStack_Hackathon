
angular.module("trainingMgmtApp", []).controller("trainingMgmtCtrl", function($scope){
     $scope.courses = ["select - -", "Angular JS", "Node JS", "React JS", "HTML", "CSS3", "PHP", "Asp.net", "DevOps", "JQuery"];

     $scope.countries = ["select - -", "India", "Australia", " United States", "China", "Japan", "Germany", "United Kingdom", "France", "Italy", "Brazil", "Spain", "Mexico", "Indonesia", "Turkey", "Netherlands", "Switzerland", "Saudi Arabia", "Argentina", "Taiwan", "Sweden", "Poland", "Belgium", "Thailand", "Nigeria", "Iran" ];

     $scope.qualifications = ["select - -", "BE/B.Tech", "MCA", "M.SC", "M.Tech", "BCA", "BBA", "MBA", "B.SC"];
});