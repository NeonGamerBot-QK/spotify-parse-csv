// offline made CSV parsing until i get back online (never)
function parseCSV(str: string) {
    const arr: any = []
    let quote = false;
    for(let row = 0, col = 0, c = 0; c < str.length;c++) {
        let cc = str[c], nc = str[c+1]
        arr[row] = arr[row] || []
        arr[row][col] = arr[row][col] || '';

        if(cc == '"' && quote && nc == '"') {
            arr[row][col] += cc;
            c++
            continue;
        }
        if(cc == '"') {
            quote = !quote
            continue
        }
        if(cc == ',' && !quote) {
            ++col; 
            continue
        }
        if(cc == '\r' && nc == '\n' && !quote) {
            col++;
            continue;
        }
        if((cc == '\n' || cc == '\r') && !quote) {
            ++row;
            col = 0;
            continue
        }
        arr[row][col] += cc
    }
    return arr;
}

export default parseCSV;