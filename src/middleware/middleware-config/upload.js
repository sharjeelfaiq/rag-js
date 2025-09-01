const formFields = [{ name: "avatar", maxCount: 1 }];

// Add expected dynamic fields (assuming max 10 for safety)
// for (let i = 0; i < 10; i++) {
//   formFields.push({
//     name: `branches[${i}][residenceGuidelines]`,
//     maxCount: 1,
//   });
// }

export { formFields };
