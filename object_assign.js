// 1
var user = {};
user.name = 'John';
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;

// 2
var fruit = {
apple: 20,
pear: 20,
peach: 10
};

var sum = 0;
for (var count in fruit) {
  sum += fruit[count];
}
console.log(sum);