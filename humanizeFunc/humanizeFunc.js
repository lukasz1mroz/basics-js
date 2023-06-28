function a(l, i) {
  function aa(x) {
    l[i] = x;
    return l;
  }
  console.log("a test :", l, i);
  return aa;
}

function b(x, y) {
  console.log("b test: ", x, y);
  return (...args) => x(y(...args));
}

function c(fn) {
  console.log("c test: ", fn);
  return (arg) =>
    (...args) =>
      fn(arg, ...args);
}

function* g(iterable, fn) {
  for (let i = 0; i < iterable.length; i++) {
    yield fn(i, iterable[i]);
  }
}

function d(num) {
  return num * 2;
}

function foo(l, f) {
  const a_ = c(a)(l);
  const g_ = c(g)(l);

  const i = 0;
  const x = [1];

  const bar = (i, x) => b(a_(i), f)(x);

  console.log("bar test: ", bar(i, x));

  for (let i of g_(bar)) {
    console.log("i: ", i);
    console.log("g_(bar) test: ", g_(bar).next());
  }
}

foo([], d);
