function getAcceleration(obj) {

    if (typeof obj.f === 'number' && typeof obj.m == 'number') {
        return obj.f/obj.m;
    }

    if (typeof obj.Δv === 'number' && typeof obj.Δt == 'number'){
        return obj.Δv/obj.Δt
    }

    if (typeof obj.t === 'number' && typeof obj.d == 'number'){
        return (2*obj.d)/(obj.t*obj.t)
    }

    return "impossible"
}

console.log(getAcceleration({ d: 10, t: 2, Δv: 100 }))

// a = F/m
// a = Δv/Δt
// a = 2d/t^2

// {
//   f: 10,
//   m: 5,
//   Δv: 100,
//   Δt: 50,
//   t:1,
//   d: 10
// }