var size = 8;
var block = '#';
var space = ' ';

for (var i = 1; i<= size; i++) {
    var line ='';
    for (var y = 1; y<= size; y++) {
        if (i%2) {
            if (y%2){
                 line = line + space;
            }
        }
    }
}
