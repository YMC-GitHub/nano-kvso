import { kvsoify, callPreset } from "./main";

// console.log([0,true,'',null,undefined].map(value=>kindOf(value)))

const data = { a: "b", c: 1 };
test(`jvsoify {a:'b',c:1} => 'a=b;c=1'`, () => {
  expect(kvsoify(data, "=;")).toBe("a=b;c=1");
});

test(`jvsoify {a:'b',c:1} => 'a=b&c=1'`, () => {
  expect(kvsoify(data, "=&")).toBe("a=b&c=1");
});

test(`jvsoify {a:'b',c:1} => 'a:b,c:1'`, () => {
  expect(kvsoify(data, ":,")).toBe("a:b,c:1");
});

test(`jvsoify {a:'b',c:1} => 'a=b c=1'`, () => {
  expect(kvsoify(data, "= ")).toBe("a=b c=1");
});

describe(`callPreset`, () => {
  const datax = { a: "b", c: "d", wd: "d" };
  // --preset cli --func callPreset --data `{a:'b',c:'d',wd:'d'}`
  test(`cli {a:'b',c:'d',wd:'d'} => '-a=b -c=d --wd=d'`, () => {
    expect(callPreset(datax, { modeStyle: "cli" })).toBe("-a=b -c=d --wd=d");
  });

  test(`httpquery {a:'b',c:'d',wd:'d'} => 'a=b&c=d&wd=d'`, () => {
    expect(callPreset(datax, { modeStyle: "httpquery" })).toBe("a=b&c=d&wd=d");
  });

  test(`switchoption style {a:'b',c:'d',wd:'d'} => 'a=b;c=d;wd=d'`, () => {
    expect(callPreset(datax, { modeStyle: "switchoption" })).toBe(
      "a=b;c=d;wd=d"
    );
  });
});
