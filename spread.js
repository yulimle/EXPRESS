const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr);
console.log(...arr);

const obj = {
  name: '이유림',
  status: '하하',
};
console.log(obj);
console.log({ ...obj });

const yuData = {
  name: '이유림',
  age: 26,
};

const yuInfo = {
  nickName: 'hah',
  status: '하하ㅏㅎ',
};

const yu = {
  ...yuData,
  ...yuInfo,
};

console.log(yu);

const arr1 = [1, 2, 3];
const arr2 = ['4', '5', '6'];

const merge = [...arr1, ...arr2];
console.log(merge);

const str = 'test';
console.log(...str);
console.log([...str]); // split 대신에 사용할 수 있음

const yu2 = {
  name: '이유림',
  gender: 'W',
  nickName: 'haha',
  email: 'yulim@naver.com',
};

const { name, ...restInfo } = yu2;
console.log(name, restInfo);

const arr3 = [1, 2, 3, 4, 5, 6, 7];
const [first, ...rest] = arr3;
console.log(first, rest);

function spread(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(...rest);
}

spread(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
