function ASMD(){
    var i= parseInt(document.getElementById("FN").value);
    var j=parseInt(document.getElementById("SN").value);
    {
    var k=i+j;
    document.getElementById("add").value=k;
    console.log(k)
    }
    {
        var l=i-j;
        document.getElementById("sub").value=l;
        console.log(l);
    }
    {
        var m=i*j;
        document.getElementById("mul").value=m;
        console.log(m);
    }
    {
        var n=i/j;
        document.getElementById("div").value=n;
        console.log(n);
    }
    
}