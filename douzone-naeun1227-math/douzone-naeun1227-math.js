module.exports = {
    sum: function(){
    var sum = 0;
    //유사 배열을 만들어 준다.
    //Array.prototype.forEach(arguments,) 와 같은 구문이다.
    Array.from(arguments).forEach(function(e){
        sum += e;
    });
        return sum;
    },

    max: function(){
        var max = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            max = e > max ? e : max;
        });
        
        return max

    },

    min: function(){
        var min = Number.MAX_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            min = e > min ? min : e;
        });

        return min;
    }

}
