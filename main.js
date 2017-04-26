var cur='';
var used=[];
var inserted=0;
function generateRandSel()
{
    var op=document.getElementsByName('op');
    for(var i=0;i<op.length;i=i+1)
    {
        do{
            op[i].innerHTML=Math.floor((Math.random() * 100) + 1); 
        }while(wasUsed(op[i].innerHTML));
        used.push(op[i].innerHTML);

    }
    //used=[];

}
function unselectOp()
{
    var op=document.getElementsByName('op');
    for(var i=0;i<op.length;i=i+1)
    {
        op[i].style.background="white";
        op[i].style.color="#ef6c00";

    }

}
function wasUsed(num)
{
    for(var i=0;i<used.length;i=i+1)
    {
        if(used[i]==num)
        {        
            return true;
        }

    }
    return false;
}
function getRandom()
{
    var op=document.getElementsByName('op');
    for(var i=0;i<op.length;i=i+1)
    {

        if(op[i].innerHTML==cur)
        {
            var tmp;
            console.log('new');
            do{
                tmp=Math.floor((Math.random() * 100) + 1); 
                console.log(tmp);
                console.log(wasUsedSel(tmp));
            }while(wasUsed(tmp) || wasUsedSel(tmp));
            op[i].innerHTML=tmp;
            cur=op[i].innerHTML;

        }

    }

}
function wasUsedSel(num)
{
    var op=document.getElementsByName('op');
    for(var i=0;i<op.length;i=i+1)
    {
        if(num==op[i].innerHTML)
        {

            return true;
        }

    }
    return false;



}
function updateUsed()
{
    us="Used numbers: ";
    for(var i=4;i<used.length;i=i+1)
    {
        if(i==4){
        us=us+used[i];
        }
        if(i!=4)
        {
        us=us+","+used[i];
}
    }
    document.getElementById('used').innerHTML=us;

}
function updateIns()
{

    document.getElementById('inserted').innerHTML="Inserted numbers: "+inserted;
}
document.onclick=function(event)
{
    var target= event.target || event.srcElement;
    if(target.getAttribute('name')=='op')
    {
        unselectOp()
        target.style.background=' #ef6c00';
        target.style.color='white';
        cur=target.innerHTML;

    }
    if(target.getAttribute('name')=='lo')
    {

        if(cur!='')
        {
            if(Number(cur)<Number(target.innerHTML))
            {
                inserted=inserted+1;
                updateIns();
                target.innerHTML=cur;
                used.push(cur);
                getRandom();
                updateUsed();
            }
        }
    }

    if( target.getAttribute('name')=='hi')
    {
        if(cur!='')
        {
            if(Number(cur)>Number(target.innerHTML))
            {
                inserted=inserted+1;
                updateIns();
                target.innerHTML=cur;
                used.push(cur);
                getRandom();
                updateUsed();
            }
        }



    }
}

