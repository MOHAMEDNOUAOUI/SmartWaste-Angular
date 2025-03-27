import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {matClose} from '@ng-icons/material-icons/baseline';
import { TaskStatut, TaskType } from '../../app/core/Models/enums/Enums';
import { Store } from '@ngrx/store';
import { Worker } from '../../app/core/Models/Utilisateur.modules';
import { AllWorkers } from '../../app/core/store/Utilisateur/UserSelector';
import { LoadAllWorkers } from '../../app/core/store/Utilisateur/UserActions';
import { distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { CreateTask } from '../../app/core/store/Task/TasksActions';

@Component({
  selector: 'app-create-task-component',
  imports: [NgIcon , CommonModule , FormsModule , ReactiveFormsModule],
  templateUrl: './create-task-component.component.html',
  styleUrl: './create-task-component.component.css',
  viewProviders:[provideIcons({matClose})]
})
export class CreateTaskComponentComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  @Output() close = new EventEmitter();
  createTaskForm: FormGroup;
  typeTask = TaskType;
  taskstatut = TaskStatut;

  workers:Worker[] = [];
  filteredWorkers: Worker[] = [];

  minDate: string = '';
  minTime: string = '';

  constructor(private fb: FormBuilder , private store:Store) {
    this.createTaskForm = this.fb.group({
      taskName: ['', [Validators.required, Validators.minLength(3)]],
      taskDescription: ['', [Validators.required, Validators.minLength(5)]],
      due_date: ['', Validators.required],
      due_time: ['', Validators.required],
      priority: ['', Validators.required],
      type_task: ['', Validators.required],
      taskStatus:[this.taskstatut.To_DO , Validators.required],
      workerId:[null , Validators.required],
      search:['']
    });
    this.setMinDateTime();
  }

  ngOnInit() {
    this.store.dispatch(LoadAllWorkers());
    this.store.select(AllWorkers)
      .pipe(distinctUntilChanged(), takeUntil(this.unsubscribe$))
      .subscribe(workersList => {
        this.workers = workersList || [];
      });
  }


  filterWorkers() {
    if (this.createTaskForm.get('search')?.value == '') {
      this.filteredWorkers = [];
    } else {
      const query = this.createTaskForm.get('search')?.value.toLowerCase()
      this.filteredWorkers = this.workers.filter(worker => 
        worker.username.toLowerCase().includes(query)
      );
    }
  }

  selectWorker(worker: Worker) {
    this.createTaskForm.patchValue({ workerId: worker.id });
    this.createTaskForm.patchValue({search:worker.username})
    this.filteredWorkers = [];
  }


  setMinDateTime() {
    const now = new Date();
    this.minDate = now.toISOString().split('T')[0];
    this.minTime = now.toTimeString().slice(0, 5);
  }

  updateDate() {
    const dueDate = this.createTaskForm.get('due_date')?.value;
    const dueTime = this.createTaskForm.get('due_time')?.value;
    if (dueDate && dueTime) {
      const dueDateTime = new Date(`${dueDate}T${dueTime}:00.000Z`);
      this.createTaskForm.patchValue({ due_date: dueDateTime.toISOString() });
    }
  }

  submitTask() {
    if (this.createTaskForm.valid) {
      this.store.dispatch(CreateTask({task:this.createTaskForm.value}))
      this.close.emit();
    } else {
      console.log('Form Invalid');
    }
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete()
  }
}