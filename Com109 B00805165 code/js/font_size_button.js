
$(function(){
    $('input').click(function(){
        var myText = $('body p');
        var currentSize = myText.css('fontSize');
        var finalNum = parseFloat(currentSize);
        var stringEnding = currentSize.slice(-2);
        if(this.id == 'increaseButton'){
            finalNum *= 1.2;
        }
        else if(this.id == 'decreaseButton'){
            finalNum /= 1.2;
        }
        else if(this.id == 'resetButton'){
            finalNum = 16;
        }
        if(finalNum < 4){
            finalNum = 4;
        }
        else if(finalNum > 40){
            finalNum = 40;
        }
        else
            myText.css('fontSize', finalNum + stringEnding);
            console.log(finalNum)
    });
});