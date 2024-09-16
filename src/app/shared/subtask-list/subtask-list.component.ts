import {
  Component,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-subtask-list',
  templateUrl: './subtask-list.component.html',
  styleUrls: ['./subtask-list.component.scss'],
})
export class SubtaskListComponent implements OnInit {
  subtaskForm!: FormGroup;

  // This will allow us to track all subtask input elements
  @ViewChildren('subtaskInput') subtaskInputs!: QueryList<ElementRef>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.subtaskForm = this.formBuilder.group({
      subtasks: this.formBuilder.array([]), // initialize as a FormArray
    });
  }

  get subtasks(): FormArray {
    return this.subtaskForm.get('subtasks') as FormArray;
  }

  addSubtask(): void {
    this.subtasks.push(
      this.formBuilder.group({
        name: ['', Validators.required],
        completed: [false],
      })
    );

    // Use setTimeout to wait for the view to render the new input
    setTimeout(() => {
      const inputsArray = this.subtaskInputs.toArray();
      if (inputsArray.length) {
        inputsArray[inputsArray.length - 1].nativeElement.focus(); // Focus on the last input field
      }
    }, 0);
  }

  toggleCompleted(index: number): void {
    const subtask = this.subtasks.at(index);
    if (subtask) {
      const completed = subtask.get('completed')?.value;
      subtask.get('completed')?.setValue(!completed);
    }
  }

  getCompletedCount(): number {
    return this.subtasks.controls.filter((task) => task.get('completed')?.value)
      .length;
  }

  getSubtaskCount(): number {
    return this.subtasks.length;
  }

  removeSubtask(index: number): void {
    this.subtasks.removeAt(index);
  }

  getCompletionPercentage(): number {
    const total = this.getSubtaskCount();
    const completed = this.getCompletedCount();
    return total === 0 ? 0 : (completed / total) * 100;
  }
}
