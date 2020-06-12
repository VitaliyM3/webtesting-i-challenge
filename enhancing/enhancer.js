module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// function succeed(item) {
//   return { ...item };
// }

function succeed(item) {
  const enhance = item.enhancement;

  if(enhance == 20) {
    return (
      "its already maxxed"
    )
  } else {
    return { ...item, enhancement: enhance + 1 };
  }
}

// function fail(item) {
//   return { ...item };
// }

function fail(item) {
  const {enhancement, durability} = item;

  if (enhancement < 15) {
    return {...item, durability: durability - 5};
  } else if (enhancement > 14 && enhancement < 17) {
    return {...item, durability: durability - 10};
  } else if (enhancement > 16) {
    return {...item, durability: durability - 10, enhancement: enhancement -1};
  };
}

// function repair(item) {
//   return { ...item };
// }

function repair(item) {

  if(item) {
    item.durability = 100;
  }
  return { ...item };
}

function get(item) {
  return { ...item };
}


