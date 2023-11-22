//big o notation - how deeply nested
// one level is linear
// two level is calledgeometric
// three is cubic
// others are power of n and n factorial

counter=0
n=1234

for(a=0;a<n;a++){
    for(b=0;b<n;b++){
        for(c=0;c<n;c++){
            counter++;
        }
    }
}
console.log(counter)