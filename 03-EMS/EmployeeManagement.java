import java.util.ArrayList;

class Employee {
    int id;
    String name;
    double salary;

    // Constructor
    Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    void displayDetails() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
        System.out.println("-----------------------");
    }
}

public class EmployeeManagement {
    public static void main(String[] args) {
        // List to store employees
        ArrayList<Employee> employees = new ArrayList<>();

        // Creating employee objects
        Employee e1 = new Employee(101, "Vishal", 50000);
        Employee e2 = new Employee(102, "Priya", 60000);
        Employee e3 = new Employee(103, "Raj", 55000);

        // Adding employees to list
        employees.add(e1);
        employees.add(e2);
        employees.add(e3);

        // Displaying employee details
        System.out.println("Employee Details:");
        System.out.println("=================");
        for (Employee e : employees) {
            e.displayDetails();
        }
    }
}
