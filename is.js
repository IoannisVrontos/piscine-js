const is = {}

is.num = (n) => typeof(n)==='number';
is.nan = (n) => typeof(n)==='NaN';
is.str = (n) => typeof(n)==='string';
is.bool = (n) => typeof(n)==='boolean';
is.undef = (n) => typeof(n)===undefined;
is.def = (n) => typeof(n)!==undefined;
is.arr = (n) => typeof(n)==='array';
is.obj = (n) => typeof(n)==='object';
is.fun = (n) => (typeof(n)==="function" ? true : false);
is.truthy = (n) => Boolean(n);
is.falsy = (n) => !n;