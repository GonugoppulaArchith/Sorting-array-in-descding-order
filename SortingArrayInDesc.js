let st = [2,5,4,9,10,8]
for(let i=0;i<st.length-1;i++){
    let max = i
    for(let j=i+1;j<st.length;j++){
        if(st[max]<st[j]){
            max=j;
        }
    }
    let temp = st[max];
    st[max] = st[i]
    st[i] = temp
}
console.log(st);