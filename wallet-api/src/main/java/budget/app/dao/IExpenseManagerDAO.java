package budget.app.dao;

import java.time.LocalDate;
import java.util.List;

import budget.app.model.Expense;
import budget.app.model.MonthlyExpense;
import budget.app.model.DailyExpense;

public interface IExpenseManagerDAO {

	public DailyExpense addDailyExpense(DailyExpense dailyExpense);

	public boolean setMonthlyBadgetLimit(String month, double budget);

	public List<MonthlyExpense> retrieveMonthlyExpense(String month);

	public List<Expense> retrieveYearlyExpenses(int year);

	public List<DailyExpense> retrieveDailyExpenses(LocalDate date);

	public List<Expense> retrieveExpenses();
}
