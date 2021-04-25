const PA = function(n,a1,r)
{
    console.log(a1)
    for(let i = 0;i<n-1;i++)
    {
        
        a1 = a1+r
        console.log(a1)
    }
}

const PG = function(n,a1,r)
{
    console.log(a1)
    for(let i =0;i<n-1;i++){
        a1 = a1*r
        console.log(a1)
    }
}

PG(5,2,2)