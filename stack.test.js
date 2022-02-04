import test from "ava";
import stack from "./index.js";

test("push method should add items to the stack", (t) => {
  const data = new stack();

  data.push("hello");
  data.push("world");
  t.deepEqual(data.data, { 0: "hello", 1: "world" });
  t.is(data.top, 1);
});

test("pop method should delete items from the stack", (t) => {
  const data = new stack();
  data.push("hello");
  data.push("world");
  data.pop();
  t.deepEqual(data.data, { 0: "hello" });
  t.is(data.top, 0);
  data.pop();
  t.notThrows(() => '');

  const error = t.throws(() => {
    data.pop();
    return undefined;
  });

  t.is(error.message, "there no items to delete from the stack");
});

test('Peek method should return the last item added to the stacj',(t)=>{
    const data = new stack();
    data.push('hello');
    data.push('world');
    data.push('beautiful');
    const lastItem = data.peek();
    t.is(lastItem,'beautiful');
    const lastItemAfterPop = data.peek();
    data.pop(lastItemAfterPop,'world');
})
