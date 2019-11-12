import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  item: Todo = {
    task: "mow lawn",
    completed: false
  };
  items: Todo[] = [
    {
      task: "mow lawn",
      completed: false
    },
    {
      task: "laundry",
      completed: true
    },
    {
      task: "rake",
      completed: false
    }
  ];
  newTodo: Todo = {
    task: "",
    completed: false
  };
  addTodo() {
    this.items.push(this.newTodo);
    this.newTodo = {
      task: "",
      completed: false
    };
  }
  done(index: number) {
    this.items[index].completed = true;
  }

  removeTodo(index: number) {
    this.items.splice(index, 1);
  }
  filterInput: string;

  constructor() {}

  ngOnInit() {}
}
