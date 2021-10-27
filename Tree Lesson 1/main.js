const TZAGAY = {
  name: "Oshri",
  child: {
    name: "Tzug",
    child: {
      name: "Avtamo",
      child: {
        name: "Eliyau",
        child: {
          name: "Ermi",
        },
      },
    },
  },
};

// console.log(TZAGAY);

function PrintNames(obj) {
  console.log(obj);
  if (obj.child) {
    PrintNames(obj.child);
  }
}
// PrintNames(TZAGAY);

const family = {
  name: "Oshri",
  children: [
    { name: "ermi" },
    {
      name: "avi",
      children: [
        { name: "eliyahu", children: [{ name: "belay" }, { name: "gashaoo" }] },
        {
          name: "amir",
          children: [
            {
              name: "shimon",
              children: [{ name: "jacob", children: [{ name: "marcos" }] }],
            },
          ],
        },
      ],
    },
  ],
};
// !
// !
//! ex w// object with arrays in it ! //!
// !
// !

function printFamily(fam) {
  console.log(fam.name);
  if (fam.children) {                              //!checking if there is CHILDRENS!
    for (const child of fam.children) {           //! if there are , using loops to go thru the array of children
      printFamily(child);                      // !apply the function with the CHILDS.
    }
  }
}
printFamily(family);
