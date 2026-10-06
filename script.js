const expenses = [
  [10000, 20000, 18000, 7000],
  [20000],
  [110000, 25000],
  [2000, 3000, 5000],
];
const categories = ["food", "transport", "entertainment", "other"];

const calcTotalExpense = (expenses) => {
  let totalExpense = 0;
  expenses.forEach((element) => {
    if (Array.isArray(element)) {
      element.forEach((amount) => {
        totalExpense += amount;
      });
    } else totalExpense += element;
  });
  return totalExpense;
};

const calcExpenseNumber = (expenses) => {
  let count = 0;
  expenses.forEach((element) => {
    if (Array.isArray(element)) {
      count += element.length;
    } else {
      count++;
    }
  });
  return count;
};

const calcAverageExpense = (expenses) => {
  return calcTotalExpense(expenses) / calcExpenseNumber(expenses);
};

const calcHighestExpense = (expenses) => {
  let highestExpense = 0;
  expenses.forEach((element) => {
    if (Array.isArray(element)) {
      element.forEach((subelement) => {
        if (highestExpense < subelement) {
          highestExpense = subelement;
        }
      });
    } else if (highestExpense < element) {
      highestExpense = element;
    }
  });
  return highestExpense;
};
const calcLowestExpense = (expenses) => {
  let lowestExpense = calcHighestExpense(expenses);
  expenses.forEach((element) => {
    if (Array.isArray(element)) {
      element.forEach((subelement) => {
        if (lowestExpense > subelement) {
          lowestExpense = subelement;
        }
      });
    } else if (lowestExpense > element) {
      lowestExpense = element;
    }
  });
  return lowestExpense;
};

const calcCategoryTotal = (expenses, category) => {
  let categoryTotal = 0;
  expenses[categories.indexOf(category)].forEach((amount) => {
    categoryTotal += amount;
  });
  return categoryTotal;
};

const calcCategoryCount = (expenses, category) => {
  return expenses[categories.indexOf(category)].length;
};

const rateExpenses = (expenses) => {
  let total = calcTotalExpense(expenses);
  if (total < 100000) {
    return "Low";
  } else if (total >= 100000 && total < 250000) {
    return "Moderate";
  } else if (total >= 250000) return "High";
};

console.log(
  `=== DAILY EXPENSE ANALYZER ===

Expenses: ${calcExpenseNumber}

Total: Rp ${calcTotalExpense(expenses)}
Average: Rp ${calcAverageExpense(expenses)}
Highest: Rp ${calcHighestExpense(expenses)}
Lowest: Rp ${calcAverageExpense(expenses)}

=== BY CATEGORY ===

Food:
  Transactions: ${calcCategoryCount(expenses, "food")}
  Total: Rp ${calcCategoryTotal(expenses, "food")}

Transport:
  Transactions: ${calcCategoryCount(expenses, "transport")}
  Total: Rp ${calcCategoryTotal(expenses, "transport")}

Entertainment:
  Transactions: ${calcCategoryCount(expenses, "entertainment")}
  Total: Rp ${calcCategoryTotal(expenses, "entertainment")}

Other:
  Transactions: ${calcCategoryCount(expenses, "other")}
  Total: Rp ${calcCategoryTotal(expenses, "other")}

=== SPENDING LEVEL ===

${rateExpenses(expenses)}
    `,
);
