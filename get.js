// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// get(src, path) // -> 'peekaboo'

// get({ a: [{ b: t }] }, 'a.0.b.toString') === t.toString

function get(src,path){
    const parts = path.split('.');
    let current = src;
    
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (current === undefined || current === null) {
            return undefined;
        }
        current = current[part];
    }
    
    return current; 
}