import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Expense, MonthlyExpense, DailyExpense } from "../models/expense";
import { User } from '../models/user';

@Injectable({
  providedIn: "root"
})
export class ExpenseManagerService {
  private apiUrl: String = "http://localhost:8089/ExpenseManager/expense/api";
  private emptyBody: String = "";

  userId : number ;
  balance:  number;

  constructor(private http: HttpClient) {}

  setCurrentMonthBudgetLimit(budgetLimit: Number): Observable<Boolean> {
    return this.http.post<Boolean>(
      this.apiUrl + "/setBudgetLimit/" + budgetLimit,
      this.emptyBody
    );
  }

  setBudgetLimitByMonth(
    month: String,
    budgetLimit: Number
  ): Observable<Boolean> {
    return this.http.post<Boolean>(
      this.apiUrl + "/setBudgetLimit/" + month + "/" + budgetLimit,
      this.emptyBody
    );
  }

  retrieveExpensesByYear(year: Number): Observable<Expense[]> {
    return this.http.get<Expense[]>(
      this.apiUrl + "/retrieveExpensesByYear/" + year
    );
  }

  retrieveExpensesByMonth(month: String): Observable<MonthlyExpense[]> {
    let headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    return this.http.get<MonthlyExpense[]>(
      this.apiUrl + "/retrieveExpensesByMonth/" + month,
      { headers }
    );
  }

  retrieveExpensesByDate(date: String): Observable<DailyExpense[]> {
    let headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    return this.http.get<DailyExpense[]>(
      this.apiUrl + "/retrieveExpensesByDate/" + date,
      { headers }
    );
  }

  addDailyExpense(expense: String): Observable<Object> {
    let headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    return this.http.post(this.apiUrl + "/addDailyExpense", expense, {
      headers
    });
  }

  createNewUser(user : User){
    return this.http.post(this.apiUrl + "/user/add", user);
  }

  getUserByEmailId(emailId : String){
    return this.http.get<User[]>(this.apiUrl + "/user/email/" + emailId);
  }

}
