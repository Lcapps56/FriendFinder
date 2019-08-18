var locations = require("../data/friends")
module.exports = function(app){
   
    app.post("/api/cities", function(req, res){
        //logic for picking a city
        var array1 = []
        var array2 = []
        var array3 = []
        var difference1 = 0
        var difference2 = 0
        var difference3 = 0
        var usercity = req.body
        for (var i = 0; i<locations.length; i++){
            if (i===0){
                console.log(usercity.mountains, locations[i].mountains)
                array1.push(Math.abs(usercity.mountains - locations[i].mountains))
                array1.push(Math.abs(usercity.beach - locations[i].beach))
                array1.push(Math.abs(usercity.heat - locations[i].heat))
                array1.push(Math.abs(usercity.cold - locations[i].cold))
                array1.push(Math.abs(usercity.cheap - locations[i].cheap))
            }
            if(i===1){
                array2.push(Math.abs(usercity.mountains - locations[i].mountains))
                array2.push(Math.abs(usercity.beach - locations[i].beach))
                array2.push(Math.abs(usercity.heat - locations[i].heat))
                array2.push(Math.abs(usercity.cold - locations[i].cold))
                array2.push(Math.abs(usercity.cheap - locations[i].cheap))
            }
            if (i===2){
                array3.push(Math.abs(usercity.mountains - locations[i].mountains))
                array3.push(Math.abs(usercity.beach - locations[i].beach))
                array3.push(Math.abs(usercity.heat - locations[i].heat))
                array3.push(Math.abs(usercity.cold - locations[i].cold))
                array3.push(Math.abs(usercity.cheap - locations[i].cheap))
            }
        }
        for (var i = 0; i<array1.length; i++){
            difference1 += array1[i]
        }
        for (var i = 0; i<array2.length; i++){
            difference2 += array2[i]
        }
        for (var i = 0; i<array3.length; i++){
            difference3 += array3[i]
        }
        if (difference1 <= difference2 && difference1 <= difference3){
            usercity = locations[0]
        } else if (difference2 <= difference1 && difference2 <= difference3){
            usercity = locations[1]
        } else if(difference3 <= difference2 && difference3 <= difference1){
            usercity = locations[2]
        }
        console.log(array1)
        console.log(array2)
        console.log(array3)


        res.json(usercity)
    })
}