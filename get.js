// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// get(src, path) // -> 'peekaboo'

function get(src,path){
    const parts = path.split('.');
    let current = src;
    
    for (const part of parts) {
        if (current && typeof current === 'object' && part in current) {
        current = current[part];
        } else {
        return undefined; 
        }
    }
    
    return current; 
}