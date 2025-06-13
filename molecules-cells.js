// DNA | RNA
//  G  -  C
//  C  -  G
//  T  -  A
//  A  -  U

function RNA(DNA){
    let rna = '';
    for (let i = 0; i < DNA.length; i++) {
        switch (DNA[i]) {
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

function DNA(RNA){
    let dna = '';
    for (let i = 0; i < RNA.length; i++) {
        switch (RNA[i]) {
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
}