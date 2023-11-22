//big o notation - how deeply nested

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