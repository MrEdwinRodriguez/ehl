    function showMe (box) {
        
        var chboxs = document.getElementsByName("c1");
        var vis = "none";
        for(var i=0;i<chboxs.length;i++) { 
            if(chboxs[i].checked){
             vis = "block";
                break;
            }
        }
        document.getElementById(box).style.display = vis;
    
     
    }


console.log('test')

$(document).ready(function() {

    // $('#dashboardTable').DataTable( {
    //     "responsive": true,
    //     "pageLength": 10,
    //     "lengthMenu": [ 10, 20, 50 ]
    // } );


    $( "#addToCart" ).click(function() {
        addedTotal = $("#qty").val();
        addedTotal = parseInt(addedTotal)
        currentTotal = $("#totalItems").text();
        currentTotal = parseInt(currentTotal)
        newTotal = addedTotal + currentTotal

        
        $("#totalItems").html(newTotal);
    
    });
   
})     