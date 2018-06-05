(function () {
    var data = [{
            "Id": 1,
            "Name": "Andres",
            "Apellido": "Minota",
            "Edad": "25"
        },
        {
            "Id": 2,
            "Name": "Carlos",
            "Apellido": "Lopez",
            "Edad": "36"
        },
        {
            "Id": 3,
            "Name": "Pablo",
            "Apellido": "Perez",
            "Edad": "24"
        }
    ];

    myData(data);

})();

function myData(data){
    $.each(data, function (key, params) {  
        $(".Hola").append(
            '<div class="panel panel-default">'+
            '<div class="panel-heading">'+
              '<h4 class="panel-title">'+
                '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+key+'">'+
                  '<span class="fa fa-car">'+
                  '</span> Vehículo</a>'+
              '</h4>'+
            '</div>'+
            '<div id="collapse'+key+'" class="panel-collapse collapse">'+
              '<div class="panel-body">'+
                '<dl class="dl-horizontal">'+
                  '<dt class="form-group">ID</dt>'+
                  '<dd>'+params.Id+'</dd>'+
                  '<dt class="form-group">Nombre</dt>'+
                  '<dd>'+params.Name+'</dd>'+
                  '<dt class="form-group">Apellido</dt>'+
                  '<dd>'+params.Apellido+'</dd>'+
                  '<dt class="form-group">Edad</dt>'+
                  '<dd>'+params.Edad+'</dd>'+
                '</dl>'+
              '</div>'+
            '</div>'+
          '</div>');
    });
}