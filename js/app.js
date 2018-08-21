//DATA GENERAL
console.log(data);

// OBTENIENDO VALORES Y CREANDO SELECTOR PARA SEDES
var obtenerSedes = function(dataObj) {
    var select = document.getElementById("sedes");
    var dataKeys = Object.keys(dataObj); //Entrando a la data para obtener las keys de sedes

    for (var i = 0; i < dataKeys.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", dataKeys[i]);
        option.innerHTML = dataKeys[i];

        select.appendChild(option);
    }
}

// OBTENIENDO VALORES Y CREANDO SELECTOR PARA GENERACIONES
var obtenerGeneracion = function(e) {
    var selectSede = e.target.value; // referencia al click en elemento option

    var generationSede = data[selectSede];
    var generation = Object.keys(generationSede); //Entrando a la data para obtener las keys de generaciones
        
    var section = document.getElementById("generation");
    section.innerHTML = "";

    for (var j = 0; j < generation.length; j++) {
        var generationOption = document.createElement("option");
        generationOption.setAttribute("value", generation[j]);
        generationOption.innerHTML = generation[j];
    
        section.appendChild(generationOption);
 
    }
}

// OBTENIENDO VALORES Y CREANDO SELECTOR PARA ESTUDIANTES
var students = function(e) {
    var selectStudent = e.target.value; // referencia al click en elemento option
    console.log(selectStudent);
    
    var sede = document.getElementById("sedes").value;
    var section = document.getElementById("generation").value;
   
    var totalStudents = "Total de estudiantes: " +  data[sede][selectStudent].students.length; //Entrando a la data para obtener tamaño de array

    var activeStudent = data[sede][selectStudent].students;
    var activeStd = 0; 
    var desercion = 0;
 
    console.log(activeStudent);
    
    
    for (var i = 0; i < activeStudent.length; i++){
        if(activeStudent[i].active !== true){
            desercion++; 
        }else{
           activeStd++;
        }
    }

    //Pintando los datos
    var totalDesercion = (desercion)/(activeStd+desercion)*100;
    totalDesercion = totalDesercion.toFixed(2);

    var students = document.getElementById("students");
    students.innerHTML = ""; 
    var total = document.createElement("p");
    var dataStudents = document.createTextNode(totalStudents);
    var semestre = document.createElement("h4");
    semestre.innerHTML = "Generación: " +  selectStudent;

    var active = document.createElement("p");
    active.innerHTML = "Estudiantes activas: " + activeStd;
    var desercionStd = document.createElement("p");
    desercionStd.innerHTML = "Deserción: " + totalDesercion + "%";
    
   
    students.appendChild(semestre);
    students.appendChild(total); 
    total.appendChild(dataStudents);   
    students.appendChild(active);
    students.appendChild(desercionStd);
          
}

var onchangeElement = document.getElementById("sedes").addEventListener("change", obtenerGeneracion);
var onchangeGeneration = document.getElementById("generation").addEventListener("change", students);

obtenerSedes(data)
