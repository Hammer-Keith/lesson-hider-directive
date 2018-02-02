angular.module("myapp").service("lessonService", function($http) {
    this.getSchedule = () => {
return $http.get('./schedule.json')
    
}
})