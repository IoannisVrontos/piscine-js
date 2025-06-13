// DNA | RNA
//  G  -  C
//  C  -  G
//  T  -  A
//  A  -  U

function RNA(str){
    let rna = '';
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'G':
                rna += 'C';
                break;
            case 'C':
                rna += 'G';
                break;
            case 'T':
                rna += 'A';
                break;
            case 'A':
                rna += 'U';
                break;
        }
    }
    return rna;
}

function DNA(str){
    let dna = '';
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'G':
                dna += 'C';
                break;
            case 'C':
                dna += 'G';
                break;
            case 'A':
                dna += 'T';
                break;
            case 'U':
                dna += 'A';
                break;
        }
    }
    return dna;
}