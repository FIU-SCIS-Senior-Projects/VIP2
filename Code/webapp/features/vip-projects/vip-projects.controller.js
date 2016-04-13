(function () {
    'use strict';

    angular
        .module('vip-projects')
        .controller('VIPProjectsCtrl', VIPProjectsCtrl);

    VIPProjectsCtrl.$inject = ['$state', '$scope', 'ProjectService'];
    /* @ngInject */
    function VIPProjectsCtrl($state, $scope, ProjectService) {
        //Variable Declarations
        var vm = this;
        vm.projects;
        vm.disciplines;
        vm.backupProjects;
        vm.backupDisciplines;
        vm.temProj = new Set();
        
        //Function Declarations
        vm.filterByDiscipline = filterByDiscipline;
        vm.viewDetails = viewDetails;
        
        
        init();
        function init(){
            loadData();
        }
        
        function loadData(){
            ProjectService.getProjects().then(function(data){
                bubbleSort(data, 'title');
                vm.disciplines = getDisciplines(data);
                vm.projects = data;
                vm.backupProjects = vm.projects;
                vm.backupDisciplines = vm.disciplines;
            });
        }
        
        function filterByDiscipline (discipline) {
            vm.temProj.clear();
            if(discipline != null){
                angular.forEach(vm.projects, function(item){
                    angular.forEach(item.disciplines, function(itemDiscipline){
                        if(itemDiscipline === discipline)
                        {
                            vm.temProj.add(item);
                        }    
                    })
                })
                vm.projects = [];
                vm.temProj.forEach(function (proj) {
                    vm.projects.push(proj);
                });
                bubbleSort(vm.projects, 'title');
                vm.disciplines = getDisciplines(vm.projects);
            }
            else {
                vm.projects = vm.backupProjects;
                vm.disciplines = getDisciplines(vm.backupProjects);
            }
        } 
        
        function viewDetails (data) {
            $state.go('projectsDetailed',{id: data._id});
        }
        
        function bubbleSort(a, par)
        {
            var swapped;
            do {
                swapped = false;
                if(par != null && par != ''){
                    for (var i = 0; i < a.length - 1; i++) {
                        if (a[i][par] > a[i + 1][par]) {
                            var temp = a[i];
                            a[i] = a[i + 1];
                            a[i + 1] = temp;
                            swapped = true;
                        }
                    }
                }
                else {
                    for (var i = 0; i < a.length - 1; i++) {
                        if (a[i] > a[i + 1]) {
                            var temp = a[i];
                            a[i] = a[i + 1];
                            a[i + 1] = temp;
                            swapped = true;
                        }
                    }
                }
            } while (swapped);
        }
        
        function getDisciplines(projects) {
            var disciplines = new Set();
            var tempArray = [];
            angular.forEach(projects, function(value){
                angular.forEach(value.disciplines, function(discipline){
                    var obj = {title:discipline};
                    disciplines.add(discipline);
                })
            })
            disciplines.forEach(function(obj){
                tempArray.push(obj);
            })
            bubbleSort(tempArray,null);
            return tempArray;
        }
    }
})();