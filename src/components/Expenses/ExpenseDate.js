import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toDate().toLocaleString("en-US", { month: "long" });
  const day = props.date.toDate().toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.toDate().getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
}

export default ExpenseDate;