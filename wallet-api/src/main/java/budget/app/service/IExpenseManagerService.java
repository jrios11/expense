package budget.app.service;

import java.util.List;

import budget.app.model.DailyExpense;
import budget.app.model.Expense;
import budget.app.model.MonthlyExpense;

public interface IExpenseManagerService {
	public DailyExpense addDailyExpense(DailyExpense dailyExpense);

	public boolean setMonthlyBadgetLimit(String month, double badgetLimit);

	public List<MonthlyExpense> retrieveExpensesByMonth(String month);

	public List<Expense> retrieveExpensesByYear(int year);

	public List<Expense> retrieveExpenses();
	
	public List<DailyExpense> retrieveExpensesByDate(String date);

}
