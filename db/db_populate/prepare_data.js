// ==================== JSON DATA =========================
const data = require("./../../class02-final-project/data.json");
// console.log(data);
// console.log(data.length);

/* ============= CATEGORY OBJECT TEMPLATE ==================
    {
        "tags": ["fruit", "sweet"],
        "category": "Apple",
        "metrics": [{
            "per": {
                "amount": 1,
                "unit": "kg"
            },
            "use": {
                "amount": 822,
                "unit": "litres water"
            }
        }]
    }
================================================================ */

/* ================== CATEGORIES TABLE MAPPING ====================
    obj.category = category_name(varchar(45))
    obj.metrics.per.amount = quantity(int)
    obj.metrics.per.unit = measurement_unit(varchar(10))
    obj.metrics.use.amount = water_consumption(int)
================================================================= */
// ================ PREPARING CATEGORIES TABLE =====================
let categoriesTable = [];

data.map(obj => {
    let categoriesTableRow = [];
    categoriesTableRow.push(obj.category);
    obj.metrics.map(innerObj => {
        categoriesTableRow.push(innerObj.per.amount);
        categoriesTableRow.push(innerObj.per.unit);
        categoriesTableRow.push(innerObj.use.amount);
    })
    categoriesTable.push(categoriesTableRow);
})
for (i = 0; i < categoriesTable.length; i++) {
    categoriesTable[i].unshift(i + 1);
}
console.log(categoriesTable);
// =================================================================


/* ====================== TAGS TABLE MAPPING =======================
    obj.tags = [tag_name(varchar(45))]
==================================================================== */
// ================ PREPARING TAGS TABLE ===========================
let tagsGrouped = [];

data.map(obj => {    
    tagsGrouped = tagsGrouped.concat(obj.tags);
})
// console.log(tagsGrouped);

let uniqueTags = new Set(tagsGrouped);
// console.log(uniqueTags);

let tagsArray = Array.from(uniqueTags);
// console.log(tagsArray);

let tagsTable = [];
for (i = 0; i < tagsArray.length; i++){
    tagsTable.push([i+1, tagsArray[i]]);
}
// console.log(tagsTable);
// ================ PREPARING CATEGORIES_TAGS TABLE=================
let tagsInEachCategory = [];

data.map(obj => {
    tagsInEachCategory.push(obj.tags);
})
// console.log(tagsInEachCategory);
let categoriesTagsTable = [];
let categoriesTagsTableWithNames = []; // just to verify the results

for (i = 0; i < tagsInEachCategory.length; i++) {
    for (j = 0; j < tagsArray.length; j++){
        if (tagsInEachCategory[i].includes(tagsArray[j])) {
            // why categoriesTagsTableWithNames isn't like this :
            // categoriesTagsTableWithNames.push([ categoriesTable[i][0], tagsArray[j]]);
            categoriesTagsTable.push([i+1, j+1]);
            // why categoriesTagsTableWithNames isn't like this :
            // categoriesTagsTableWithNames.push([ categoriesTable[i], tagsArray[j]]);
            categoriesTagsTableWithNames.push([tagsInEachCategory[i], tagsArray[j]]);
        }
    }
}
console.log(categoriesTagsTable);
console.log(categoriesTagsTable.length);
console.log(categoriesTagsTableWithNames);
console.log(categoriesTagsTableWithNames.length);

// =================================================================
module.exports = {
    categoriesTable,
    tagsTable,
    categoriesTagsTable
};