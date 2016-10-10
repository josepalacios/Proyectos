angular
.module('app',[])
.controller('AlumnosController', function($scope){
 $scope.alumnos = [{"nombre":"Jossy", "telefono":"99735142", "curso":"tercero"},
       {"nombre":"Chemo", "telefono":"4343222", "curso":"Primero"},
       {"nombre":"nasser", "telefono":"1123323", "curso":"Segundo"}
      ];
$scope.nuevoAlumno={};     
$scope.Save=function(){
	if($scope.nuevoAlumno.nombre && $scope.nuevoAlumno.curso &&$scope.nuevoAlumno.nombre){
	$scope.alumnos.push($scope.nuevoAlumno);
	$scope.formVisibility=false;
	console.log($scope.formVisibility)
	}

}
$scope.formVisibility=false;
$scope.ShowForm=function(){
		$scope.formVisibility=true;
		console.log($scope.formVisibility)
	}	

});