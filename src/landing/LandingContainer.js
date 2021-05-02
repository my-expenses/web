import Landing from "./Landing";

const LandingContainer = () => {
  const transactions = [
    {
      ID: 1,
      title: "First Transaction (categorized)",
      amount: 500,
      type: true, // income
      categoryTitle: "First Category",
      date: new Date(),
    },
    {
      ID: 2,
      title: "Another Transaction (uncategorized)",
      amount: 320,
      type: false, // expense
      categoryTitle: "Uncategorized",
      date: new Date().setDate(new Date().getDate() - 7), // a date which is a week ago
    },
  ]
  const categories = [
    {
      ID: 1,
      title: "First Category"
    },
    {
      ID: 2,
      title: "Unused Category"
    }
  ]

  return (
    <div>
      <Landing
        transactions={transactions}
        categories={categories}
      />
    </div>
  );
};

export default LandingContainer;